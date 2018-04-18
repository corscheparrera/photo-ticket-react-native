import React from 'react'
import {
  StyleSheet,
  Platform,
  Image,
  Text,
  View,
  Button,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native'
import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/FontAwesome'
import Camera from 'react-native-camera'
import RNFetchBlob from 'react-native-fetch-blob'
import axios from 'axios'

import Header from '../components/Header'
// import { uploadImage } from '../utils/helpers'
// import uploadImage from './uploadImage'

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
      rawText: '',
      formattedText: '',
    }
  }
  takePicture = () => {
    const options = {}
    this.camera.capture({ metadata: options }).then(data => {
      console.log(data.path)
      this.setState({ imagePath: data.path })
    })
  }
  confirmedImage = () => {
    console.log(this.state.imagePath)
    this.setState({ isLoading: true })
    this.uploadImage(this.state.imagePath)
  }

  uploadImage = uri => {
    return new Promise((resolve, reject) => {
      fs
        .readFile(uri, 'base64')
        .then(base64image => this.useGoogleVision(base64image))
        .then(response => {
          this.parseData(response)
        })
        .then(() => this.extractInfraction())
    })
  }

  useGoogleVision = base64image => {
    return axios.post(
      `https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCAzY_-ph4ukwBkvEbEcmKmTDXMZUIjw5k`,
      {
        requests: [
          {
            image: {
              content: base64image,
            },
            features: [
              {
                type: 'TEXT_DETECTION',
              },
            ],
          },
        ],
      }
    )
  }
  parseData = res => {
    const resultArray = res.data.responses['0'].fullTextAnnotation.text.split('\n')
    console.log(resultArray)
    this.setState({
      isLoading: false,
      rawText: resultArray,
    })
  }

  retryPicture = () => {
    this.setState({ imagePath: '' })
  }

  extractInfraction = () => {
    const rawText = this.state.rawText
    console.log(rawText)

    // Index # of "Description de l'infraction"
    const indexDescription = rawText.findIndex(x => x == "Description de l'infraction")

    // Index # of "Art." Title
    const indexArticle = rawText.findIndex(x => x.includes('Art: '))

    // Description de l'infraction (titre)
    const descriptionTitre = rawText[indexDescription].toString()

    // Description de l'infraction (paragraphe)
    const descriptionPar = rawText.slice(indexDescription + 1, indexArticle).toString()

    // Article enfreint
    const articleEnfreint = rawText[indexArticle]

    // Infraction
    const infraction = descriptionTitre + ': ' + descriptionPar + ' ' + articleEnfreint

    this.setState({ formattedText: infraction })
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
            <Text style={styles.capture} onPress={this.takePicture}>
              [CAPTURE]
            </Text>
          </Camera>
        </View>
      )
    } else if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Text>Loading</Text>
          <ActivityIndicator size="large" />
        </View>
      )
    } else if (this.state.imagePath && !this.state.isLoading && !this.state.rawText) {
      return (
        // Part 2: Confirm that photo quality is sufficient
        <View style={styles.container}>
          <View style={styles.navBar}>
            <Icon
              style={styles.navBarButton}
              name="check"
              size={20}
              onPress={this.confirmedImage}
            />
            <Text style={styles.navBarHeader}>Photo Ticket</Text>
            <Icon style={styles.navBarButton} name="remove" size={20} onPress={this.retryPicture} />
          </View>
          <Image source={{ uri: this.state.imagePath }} style={styles.preview} />
        </View>
      )
    } else {
      return (
        <View style={styles.content}>
          <Text>{this.state.formattedText}</Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
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
  navBar: {
    flexDirection: 'row',
    paddingTop: 30,
    height: 64,
    backgroundColor: '#05E085',
  },
  navBarButton: {
    color: '#FFFFFF',
    textAlign: 'center',
    width: 64,
  },
  navBarHeader: {
    flex: 1,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
