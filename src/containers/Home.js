import React from 'react'
import firebase from 'react-native-firebase'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Camera from 'react-native-camera'
import RNFetchBlob from 'react-native-fetch-blob'
import axios from 'axios'
import MainMenu from './MainMenu'
import BadFocus from './BadFocus'
import InfractionView from './InfractionView'
import ConfirmPicView from './ConfirmPicView'
import CamView from './CamView'
import { useGoogleVision, parseData } from '../utils/helpers'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
      imagePath: '',
      isLoading: false,
      formattedText: '',
      badFocus: false,
      cameraIsOpen: false,
    }
  }
  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
  }
  openCam = () => {
    this.setState({
      cameraIsOpen: true,
    })
  }
  closeCam = () => {
    this.setState({
      cameraIsOpen: false,
    })
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
            ...textIsOk,
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

  displayView = () => {
    if (!this.state.cameraIsOpen) {
      return 'Main Menu'
    } else if (!this.state.imagePath) {
      return 'Cam View'
    } else if (!this.state.isLoading && !this.state.badFocus && !this.state.formattedText) {
      return 'Confirm Pic View'
    } else if (this.state.isLoading) {
      return 'Loading'
    } else if (this.state.badFocus) {
      return 'Bad Focus'
    } else return 'InfractionView'
  }

  render() {
    const { currentUser } = this.state

    switch (this.displayView()) {
      case 'Main Menu':
        return (
          <MainMenu
            navigation={this.props.navigation}
            currentUser={this.state.currentUser}
            openCam={this.openCam}
          />
        )
        break
      case 'Cam View':
        return (
          <CamView
            getUrl={this.getUrl}
            navigation={this.props.navigation}
            closeCam={this.closeCam}
          />
        )
        break
      case 'Confirm Pic View':
        return (
          <ConfirmPicView
            uri={this.state.imagePath}
            confirmedImage={this.confirmedImage}
            discardPicture={this.discardPicture}
          />
        )
        break
      case 'Loading':
        return (
          <View style={styles.loader}>
            <Text>Analyse en cours</Text>
            <ActivityIndicator size="large" />
          </View>
        )
        break
      case 'Bad Focus':
        return <BadFocus retryPicture={this.retryPicture} navigation={this.props.navigation} />
        break
      default:
        return <InfractionView data={this.state.formattedText} navigation={this.props.navigation} imagePath={this.state.imagePath} />
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
