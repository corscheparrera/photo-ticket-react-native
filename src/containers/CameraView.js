import React from 'react'
import {
  StyleSheet,
  Platform,
  Image,
  Text,
  View,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native'
import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/FontAwesome'
import Camera from 'react-native-camera'
import RNFetchBlob from 'react-native-fetch-blob'
import axios from 'axios'

import Header from '../components/Header'
import RetryView from './RetryView'
import InfractionView from './InfractionView'
import ConfirmPicView from './ConfirmPicView'
import ButtonPrimary from '../components/ButtonPrimary'
import { useGoogleVision, parseData } from '../utils/helpers'

// Prepare Blob support
const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

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

  retryPicture = () => {
    this.setState({
      imagePath: '',
      badFocus: false,
    })
  }
  takePicture = () => {
    const options = {}
    this.camera.capture({ metadata: options }).then(data => {
      this.setState({ imagePath: data.path })
    })
  }
  confirmedImage = () => {
    this.setState({ isLoading: true })
    this.uploadImage(this.state.imagePath)
  }

  uploadImage = async uri => {
    try {
      let base64image = await fs.readFile(uri, 'base64')
      let response = await useGoogleVision(base64image)
      let textIsOk = parseData(response)
      if (textIsOk) {
        this.setState({
          formattedText: {
            descriptionPar: textIsOk.descriptionPar,
            articleEnfreint: textIsOk.articleEnfreint,
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

  discardPicture = () => {
    this.setState({ imagePath: '' })
  }

  render() {
    if (!this.state.imagePath) {
      return (
        // Part 1:  Take a photo
        <View style={styles.container}>
          <Header title="Photo Ticket" navigation={this.props.navigation} />
          <Camera
            ref={cam => {
              this.camera = cam
            }}
            style={styles.preview}
            aspect={Camera.constants.Aspect.fill}
            captureTarget={Camera.constants.CaptureTarget.disk}
          >
            <Icon color="#05E085" name="dot-circle-o" size={96} onPress={this.takePicture} />
          </Camera>
        </View>
      )
    } else if (this.state.isLoading) {
      return (
        <View style={styles.loader}>
          <Text>Analyse en cours</Text>
          <ActivityIndicator size="large" />
        </View>
      )
    } else if (
      this.state.imagePath &&
      !this.state.isLoading &&
      !this.state.formattedText &&
      !this.state.badFocus
    ) {
      return (
        // Part 2: Confirm that photo quality is sufficient
        <ConfirmPicView
          uri={this.state.imagePath}
          confirmedImage={this.confirmedImage}
          discardPicture={this.discardPicture}
        />
      )
    } else if (this.state.badFocus) {
      return <RetryView retryPicture={this.retryPicture} navigation={this.props.navigation} />
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
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
    alignItems: 'center',
  },
})
