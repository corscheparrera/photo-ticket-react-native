import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import firebase from "react-native-firebase";
import { material, iOSColors, systemWeights } from "react-native-typography";
import polylgot from "../utils/translator";
import Header from "../components/Header";
import ButtonPrimary from "../components/ButtonPrimary";

export default class ArticleConfirmation extends Component {
  state = { currentUser: null };

  render() {
    const { currentUser } = this.state;
    return (
      <View style={styles.container}>
        <Header title="Confirmation" navigation={this.props.navigation} />
        <View style={styles.content}>
          <Text style={styles.text}>{polylgot.t("detected")}</Text>
          <View style={{ paddingBottom: 30 }}>
            <Text style={styles.text}>
              {this.props.art + " " + this.props.source}
            </Text>
          </View>

          <Text style={styles.text}>{polylgot.t("isItRightPt1")}</Text>
          <Text style={styles.text}>{polylgot.t("isItRightPt2")}</Text>

          <ButtonPrimary
            hauteur={70}
            text={polylgot.t("yesContinue")}
            onPress={() => this.props.articleWasConfirmed()}
          />

          <ButtonPrimary
            hauteur={70}
            onPress={() => this.props.navigation.navigate("ManualInput")}
            text={polylgot.t("noManualInput")}
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
    // width: 250,
    ...material.titleObject,
    color: iOSColors.black,
    ...systemWeights.bold
  }
});
