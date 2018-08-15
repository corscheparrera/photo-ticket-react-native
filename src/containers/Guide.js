import React, { Component } from "React";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import polyglot from "../utils/translator";
const Color = props => (
  <Text style={{ color: "#0074D9" }}>{props.children}</Text>
);
const Italic = props => (
  <Text style={{ fontStyle: "italic" }}>{props.children}</Text>
);
const Bold = props => (
  <Text style={{ fontWeight: "bold" }}>{props.children}</Text>
);

const Bullet = props => {
  return (
    <View style={{ flexDirection: "row", paddingLeft: 20 }}>
      <Text>{"\u2022"}</Text>
      <Text style={{ flex: 1, paddingLeft: 5 }}>{props.children}</Text>
    </View>
  );
};

const H1 = props => {
  return (
    <Text
      style={{
        fontSize: 18,
        fontWeight: "bold",
        margin: 10
      }}
    >
      {props.children}
    </Text>
  );
};
const P = props => {
  return (
    <Text
      style={{
        marginTop: 12,
        padding: 10
      }}
    >
      {props.children}
    </Text>
  );
};

import { material, iOSColors, systemWeights } from "react-native-typography";
import Header from "../components/Header";

export default class Guide extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Guide" navigation={this.props.navigation} />
        <ScrollView>
          <View style={styles.content}>{polyglot.t("descriptiveGuide")}</View>
        </ScrollView>
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
    paddingBottom: 30
    // alignItems: "center"
  }
});
