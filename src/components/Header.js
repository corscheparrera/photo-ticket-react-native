import React from "react";
import { View, Text, StyleSheet, Platform, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import polyglot from "../utils/translator";

export default class Header extends React.Component {
  showAlertReachLawyer = () => {
    return Alert.alert(
      polyglot.t("reachAlawyer"),
      polyglot.t("composeTel"),
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  };
  render() {
    const { navigate, goBack } = this.props.navigation;
    const { title } = this.props;

    return (
      <View style={styles.navBar}>
        <Icon
          style={styles.navBarButton}
          name={title === "Photo-Ticket" ? "phone" : "arrow-left"}
          size={24}
          onPress={() => {
            if (
              title === "Infraction" ||
              title === "Instructions" ||
              title === "Photo"
            ) {
              this.props.reset();
            }
            if (title === "Photo-Ticket") {
              this.showAlertReachLawyer();
            } else if (title !== "Photo-Ticket" || title !== "Infraction") {
              goBack();
            }
          }}
        />
        <Text style={styles.navBarHeader}>{title}</Text>
        <Icon
          style={styles.navBarButton}
          name={title === "Settings" ? "" : "gear"}
          size={24}
          onPress={() => {
            if (title !== "Settings") {
              navigate("Settings");
            }
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    paddingTop: 30,
    height: 64,
    backgroundColor: "#ec2326",
    marginTop: Platform.OS === "android" ? -10 : 0
  },
  navBarButton: {
    color: "#FFFFFF",
    textAlign: "center",
    width: 64
  },
  navBarHeader: {
    flex: 1,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18
  }
});
