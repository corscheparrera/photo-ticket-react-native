import React from "react";
import { View, StyleSheet, Text } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import Camera from "react-native-camera/";
import Header from "../components/Header";
import polyglot from "../utils/translator";
export default class CamView extends React.Component {
  takePicture = async () => {
    const options = {};
    this.camera.capture({ metadata: options }).then(data => {
      this.props.getImageUrl(data);
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          title="Photo"
          navigation={this.props.navigation}
          // closeCam={this.props.closeCam}
          reset={this.props.reset}
        />
        <Camera
          ref={cam => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          captureTarget={Camera.constants.CaptureTarget.disk}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "#ec2326"
            }}
          >
            {polyglot.t("frame")}
          </Text>

          <Icon
            color="#ec2326"
            name="dot-circle-o"
            size={96}
            onPress={() => this.takePicture()}
          />
        </Camera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  }
});
