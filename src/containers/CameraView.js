import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Camera from 'react-native-camera'
import RNFetchBlob from 'react-native-fetch-blob'
import axios from 'axios'

import Header from '../components/Header'
import BadFocus from './BadFocus'
import InfractionView from './InfractionView'
import ConfirmPicView from './ConfirmPicView'
import CamView from './CamView'
import { useGoogleVision, parseData } from '../utils/helpers'

export default class CameraView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imagePath: '',
      isLoading: false,
      formattedText: '',
      badFocus: false,
    }
  }

  getUrl = data => {
    this.setState({ imagePath: data.path })
  }

  confirmedImage = () => {
    this.setState({ isLoading: true })
    this.uploadImage(this.state.imagePath)
  }
  discardPicture = () => {
    this.setState({ imagePath: '' })
  }
  retryPicture = () => {
    this.setState({
      imagePath: '',
      badFocus: false,
    })
  }
  uploadImage = async uri => {
    // Prepare Blob support
    const Blob = RNFetchBlob.polyfill.Blob
    const fs = RNFetchBlob.fs
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
    window.Blob = Blob

    try {
      let base64image = await fs.readFile(uri, 'base64')
      let response = await useGoogleVision(base64image)
      let textIsOk = parseData(response)
      if (textIsOk) {
        this.setState({
          formattedText: {
            article: textIsOk.art,
            résumé: textIsOk.résumé,
            règlement: textIsOk.règlement,
            type: textIsOk.type,
            conditions: textIsOk.conditions,
            point: textIsOk.point,
          },
          isLoading: false,
        })
      } else {
        // Si OCR reconnait le titre mais qu'il contient trop de fautes
        this.setState({
          badFocus: true,
          isLoading: false,
        })
      }
    } catch (err) {
      // Si OCR ne reconnait pas de texte OU autre
      console.log('erreur :', err)
      this.setState({
        badFocus: true,
        isLoading: false,
      })
    }
  }

  render() {
    if (!this.state.imagePath) {
      return (
        // Part 1:  Take a photo
        <CamView getUrl={this.getUrl} navigation={this.props.navigation} />
      )
    } else if (!this.state.isLoading && !this.state.badFocus && !this.state.formattedText) {
      return (
        // Part 2: Confirm that photo quality is sufficient
        <ConfirmPicView
          uri={this.state.imagePath}
          confirmedImage={this.confirmedImage}
          discardPicture={this.discardPicture}
        />
      )
    } else if (this.state.isLoading) {
      // Part 3:  Loading while fetching Google vision response
      return (
        <View style={styles.loader}>
          <Text>Analyse en cours</Text>
          <ActivityIndicator size="large" />
        </View>
      )
      // Part 4:  Show if pic is out of focus
    } else if (this.state.badFocus) {
      return <BadFocus retryPicture={this.retryPicture} navigation={this.props.navigation} />
      // Part 5:  Show if Google visison as returned data
    } else {
      return <InfractionView data={this.state.formattedText} navigation={this.props.navigation} />
    }
  }
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
