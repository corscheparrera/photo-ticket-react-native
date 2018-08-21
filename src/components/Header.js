import React from "react";
import { View, Text, StyleSheet, Platform, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import polyglot from "../utils/translator";

export default class Header extends React.Component {
  render() {
    const { navigate, goBack } = this.props.navigation;
    // The Reset action wipes the whole navigation state
    // const resetAction = NavigationActions.reset({
    //   index: 0,
    //   actions: [NavigationActions.navigate({ routeName: "Home" })]
    // });

    return (
      <View style={styles.navBar}>
        <Icon
          style={styles.navBarButton}
          name={this.props.title === "Photo-Ticket" ? "phone" : "arrow-left"}
          size={24}
          onPress={() => {
            if (this.props.title === "Photo") {
              this.props.closeCam();
            }
            if (this.props.title === "Infraction") {
              this.props.reset();
            }
            if (this.props.title === "Photo-Ticket") {
              return Alert.alert(
                polyglot.t("reachAlawyer"),
                polyglot.t("composeTel"),
                [{ text: "OK", onPress: () => console.log("OK Pressed") }],
                { cancelable: false }
              );
            } else if (
              this.props.title !== "Photo-Ticket" ||
              this.props.title !== "Infraction"
            ) {
              goBack();
            }
          }}
        />
        <Text style={styles.navBarHeader}>{this.props.title}</Text>
        <Icon
          style={styles.navBarButton}
          name={this.props.title === "Settings" ? "" : "gear"}
          size={24}
          onPress={() => {
            if (this.props.title !== "Settings") {
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
