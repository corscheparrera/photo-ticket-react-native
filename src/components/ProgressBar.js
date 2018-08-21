import React, { Component } from "react";

import {
  Platform,
  StyleSheet,
  View,
  Text,
  ProgressBarAndroid,
  ProgressViewIOS
} from "react-native";

export default class ProgressBar extends Component {
  constructor() {
    super();

    this.state = {
      Progress_Value: 0.0
    };
    this.Start_Progress();
  }

  Start_Progress = () => {
    this.value = setInterval(() => {
      if (this.state.Progress_Value <= 1) {
        this.setState({ Progress_Value: this.state.Progress_Value + 0.01 });
      }
    }, 100);
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 20, color: "#000" }}>
          {" "}
          Loading: {parseFloat((this.state.Progress_Value * 100).toFixed(3))} %
        </Text>

        {Platform.OS === "android" ? (
          <ProgressBarAndroid
            styleAttr="Horizontal"
            progress={this.state.Progress_Value}
            indeterminate={false}
          />
        ) : (
          <ProgressViewIOS progress={this.state.Progress_Value} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    margin: 20
  },

  TextStyle: {
    color: "#fff",
    textAlign: "center"
  }
});
