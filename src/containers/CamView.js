import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import Camera from 'react-native-camera'
import Header from '../components/Header'

export default class CamView extends React.Component {
  takePicture = () => {
    const options = {}
    this.camera.capture({ metadata: options }).then(data => {
      this.props.getUrl(data)
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Header title="Photo" navigation={this.props.navigation} closeCam={this.props.closeCam} />

        <Camera
          ref={cam => {
            this.camera = cam
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          captureTarget={Camera.constants.CaptureTarget.disk}
        >
          <Text
            style={{
              fontWeight: 'bold',
            }}
          >
            Frame your ticket
          </Text>
          <Icon color="#05E085" name="dot-circle-o" size={96} onPress={() => this.takePicture()} />
        </Camera>
      </View>
    )
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
})
