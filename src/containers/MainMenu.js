import React from "react";
import {
  View,
  StyleSheet,
  Image,
  PermissionsAndroid,
  Platform,
  Text
} from "react-native";
import { material, iOSColors, systemWeights } from "react-native-typography";
import polyglot from "../utils/translator";
import Header from "../components/Header";
import ButtonPrimary from "../components/ButtonPrimary";
import AutoHeightImage from "react-native-auto-height-image";

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
              "Photo-Ticket App needs access to your storage " +
              "so you we can analyse the ticket."
          }
        );
        const grantedWriteStorage = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: "Write to storage",
            message:
              "Photo-Ticket App needs access to write files to storage " +
              "so you we can analyse the ticket."
          }
        );
        const grantedCamera = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: "Access storage",
            message:
              "Photo-Ticket App needs access to your camera " +
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
        <Header title="Photo-Ticket" navigation={this.props.navigation} />
        <View style={styles.content}>
          <Text style={styles.text}>{polyglot.t("welcome")}</Text>
          <AutoHeightImage
            width={200}
            source={require("../images/logo_photo_ticekt_9.png")}
          />

          <ButtonPrimary
            grandeurPolice={12}
            onPress={() => this.props.showInstructions()}
            text={polyglot.t("takePhoto")}
            largeur={200}
          />

          {/* <ButtonPrimary
            onPress={() => this.props.navigation.navigate("MyTickets")}
            text={polyglot.t("myTickets")}
          /> */}

          <View style={styles.buttonView}>
            <View>
              <ButtonPrimary
                grandeurPolice={12}
                largeur={95}
                onPress={() => this.props.navigation.navigate("Guide")}
                text="Guide"
              />
            </View>

            <View>
              <ButtonPrimary
                grandeurPolice={12}
                largeur={95}
                onPress={() => this.props.navigation.navigate("UserInfos")}
                text={polyglot.t("chat")}
              />
              {/* <Button
                onPress={() => this.props.navigation.navigate("ManualInput")}
                title="Guide"
              /> */}
            </View>
          </View>
          <View style={{ padding: 10 }}>
            <Text style={styles.text}>{polyglot.t("version")}</Text>
          </View>
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
  },
  buttonView: {
    width: 200,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
