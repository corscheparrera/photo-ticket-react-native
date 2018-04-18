import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Button, TouchableHighlight } from 'react-native'
import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/FontAwesome'
import RNFetchBlob from 'react-native-fetch-blob'
import Camera from 'react-native-camera'
import axios from 'axios'

import Header from './Header'
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
    }
  }
  takePicture = () => {
    const options = {}
    this.camera.capture({ metadata: options }).then(data => {
      console.log(data.path)
      this.setState({ imagePath: data.path })
    })
    // .catch(error => {
    //   console.log(error)
    // })
  }
  confirmImage = () => {
    console.log(this.state.imagePath)
    this.uploadImage(this.state.imagePath)
  }

  uploadImage(uri) {
    return new Promise((resolve, reject) => {
      // const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri

      const uploadUri = uri
      let uploadBlob = null

      fs
        .readFile(uploadUri, 'base64')
        .then(data => {
          console.log(data)
          let base64image = data
          this._useGoogleVision(base64image)
        })
        .catch(error => {
          console.error(error)
        })
    })
  }
  _useGoogleVision(base64image) {
    axios
      .post(
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
      .then(data => {
        console.log(data)
        this._analyseData(data)
      })
      .catch(error => {
        console.log(error)
      })
  }
  _analyseData(raw) {
    var resultArray = raw.data.responses['0']
    console.log(resultArray)

    // var isBanana = resultArray.some(pop => {
    //   return pop.description === 'banana' || pop.description === 'banana family'
    // })

    // if (isBanana) {
    //   return this.setState({ imageTitle: true })
    // } else {
    //   return this.setState({ imageTitle: false })
    // }
  }
  retryPicture = () => {
    this.setState({ imagePath: '' })
  }

  // handleUpload = () => {
  //   file_path = this.state.imagePath
  //   var new_base64
  //   RNFetchBlob.fs.readFile(file_path, 'base64').then(data => {
  //     new_base64 = data
  //     console.log(new_base64)
  //     var body = {
  //       requests: {
  //         image: {
  //           content: new_base64,
  //         },
  //         features: {
  //           type: 'TEXT_DETECTION',
  //         },
  //       },
  //     }
  //     body = JSON.stringify(body)
  //     //console.log(body);
  //     var vision_url =
  //       'https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCAzY_-ph4ukwBkvEbEcmKmTDXMZUIjw5k'
  //     RNFetchBlob.config({
  //       fileCache: false,
  //     })
  //       .fetch(
  //         'POST',
  //         vision_url,
  //         {
  //           'Content-Type': 'application/json',
  //         },
  //         body
  //       )
  //       .then(res => {
  //         const responseText = res.body.responses[0].fullTextAnnotation.text.split('\n')
  //         console.log(responseText)
  //       })
  //   })
  // }

  render() {
    if (!this.state.imagePath) {
      return (
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
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.navBar}>
            <Icon style={styles.navBarButton} name="check" size={20} onPress={this.confirmImage} />
            <Text style={styles.navBarHeader}>Photo Ticket</Text>
            <Icon style={styles.navBarButton} name="remove" size={20} onPress={this.retryPicture} />
          </View>
          <Image source={{ uri: this.state.imagePath }} style={styles.preview} />
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
})
