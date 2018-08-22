import React from "React";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import polyglot from "../utils/translator";
import { material, iOSColors, systemWeights } from "react-native-typography";
import Header from "../components/Header";
import AutoHeightImage from "react-native-auto-height-image";

const ShowPhotoInstructions = props => {
  return (
    <View style={styles.container}>
      <Header
        title="Instructions"
        navigation={props.navigation}
        reset={props.reset}
      />
      <View style={styles.content}>
        <Text style={styles.text}>{polyglot.t("aimArticle")}</Text>
        <View style={{ paddingBottom: 40 }}>
          <AutoHeightImage
            width={320}
            source={require("../images/ticket_instructions.png")}
          />
        </View>

        <Button
          onPress={() => {
            props.showCam();
          }}
          title={polyglot.t("next")}
        />
      </View>
    </View>
  );
};

export default ShowPhotoInstructions;
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 0
  },
  text: {
    margin: 30,
    fontSize: 10,
    ...material.titleObject,
    color: iOSColors.black,
    ...systemWeights.light
  }
});
