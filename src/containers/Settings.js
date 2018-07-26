import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import firebase from "react-native-firebase";
import { material, iOSColors, systemWeights } from "react-native-typography";
import polyglot from "../utils/translator";
import Header from "../components/Header";
import ButtonPrimary from "../components/ButtonPrimary";

export default class Settings extends Component {
  state = { currentUser: null };

  componentDidMount() {
    const { currentUser } = firebase.auth();

    this.setState({ currentUser });
  }
  signOutUser = async () => {
    try {
      await firebase.auth().signOut();
      navigate("Auth");
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    const { currentUser } = this.state;
    return (
      <View style={styles.container}>
        <Header title="Settings" navigation={this.props.navigation} />
        <View style={styles.content}>
          <Text style={styles.text}>
            Email: {currentUser && currentUser.email}
          </Text>
          <ButtonPrimary
            text={polyglot.t("disconnect")}
            onPress={this.signOutUser}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    ...material.titleObject,
    color: iOSColors.black,
    ...systemWeights.light
  }
});
