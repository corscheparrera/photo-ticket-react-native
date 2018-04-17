import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Button, TouchableHighlight } from 'react-native'
import firebase from 'react-native-firebase'

import Camera from 'react-native-camera'

export default class CameraView extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      imagePath: '',
    }
  }
  takePicture = () => {
    const options = {}
    this.camera
      .capture({ metadata: options })
      .then(data => {
        console.log(data)
        this.setState({ imagePath: data.path })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    if (!this.state.imagePath) {
      return (
        <View style={styles.container}>
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
          <Image source={{ uri: this.state.imagePath }} style={styles.preview} />
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
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
})
