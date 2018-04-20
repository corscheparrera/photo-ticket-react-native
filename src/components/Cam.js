import React from 'react'
import { View, StyleSheet } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import Camera from 'react-native-camera'
import Header from '../components/Header'
export default class Cam extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Header title="Photo Ticket" navigation={this.props.navigation} /> */}
        <Camera
          ref={cam => {
            this.camera = cam
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          captureTarget={Camera.constants.CaptureTarget.disk}
        >
          <Icon color="#05E085" name="dot-circle-o" size={96} onPress={this.props.takePicture} />
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
