import React from "react";
import {
  View,
  StyleSheet,
  Image,
  PermissionsAndroid,
  Platform
} from "react-native";
import { material, iOSColors, systemWeights } from "react-native-typography";
import polyglot from "../utils/translator";
import Header from "../components/Header";
import ButtonPrimary from "../components/ButtonPrimary";

export default class Menus extends React.Component {
  componentDidMount() {
    this.requestPermissions();
  }
  requestPermissions = async () => {
    try {
      if (Platform.OS === "android") {
        const grantedStorage = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: "Access storage",
            message:
              "Photo Ticket App needs access to your storage " +
              "so you we can analyse the ticket."
          }
        );
        const grantedWriteStorage = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: "Write to storage",
            message:
              "Photo Ticket App needs access to write files to storage " +
              "so you we can analyse the ticket."
          }
        );
        const grantedCamera = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: "Access storage",
            message:
              "Photo Ticket App needs access to your camera " +
              "so you we can analyse the ticket."
          }
        );
        if (
          grantedStorage === PermissionsAndroid.RESULTS.GRANTED &&
          grantedWriteStorage === PermissionsAndroid.RESULTS.GRANTED &&
          grantedCamera === PermissionsAndroid.RESULTS.GRANTED
        ) {
          console.log("You can use the storage and the camera");
        } else {
          console.log("Storage and camera permission denied");
        }
      }
    } catch (err) {
      console.warn(err);
    }
  };
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
            text={polyglot.t("takePhoto")}
          />
          {/* <ButtonPrimary
            onPress={() => this.props.navigation.navigate("MyTickets")}
            text={polyglot.t("myTickets")}
          /> */}
          <ButtonPrimary
            onPress={() => this.props.navigation.navigate("MentionsLegales")}
            text={polyglot.t("legalDisclaimer")}
          />
          <ButtonPrimary
            onPress={() => this.props.navigation.navigate("Guide")}
            text={"Guide"}
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
