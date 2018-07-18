import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { material, iOSColors, systemWeights } from "react-native-typography";

import Header from "../components/Header";
import ButtonPrimary from "../components/ButtonPrimary";

export default class Menus extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Photo Ticket" navigation={this.props.navigation} />
        <View style={styles.content}>
          <Image
            style={{
              marginBottom: 40,
              marginTop: 40
            }}
            source={require("../images/logo_photo_ticekt_9.png")}
          />
          <ButtonPrimary
            onPress={() => this.props.openCam()}
            text="Prendre une photo"
          />
          <ButtonPrimary
            onPress={() => this.props.navigation.navigate("MyTickets")}
            text="Mes tickets"
          />
          <ButtonPrimary
            onPress={() => this.props.navigation.navigate("MentionsLegales")}
            text="Mentions légales"
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
