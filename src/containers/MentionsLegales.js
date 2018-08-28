import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import CheckBox from "react-native-check-box";
import ButtonPrimary from "../components/ButtonPrimary";
import Header from "../components/Header";
import polyglot from "../utils/translator";
const checkboxes = [
  {
    name: "check-box-1",
    key: "checkBox1",
    label: polyglot.t("checkbox1")
  },
  {
    name: "check-box-2",
    key: "checkBox2",
    label: polyglot.t("checkbox2")
  },
  {
    name: "check-box-3",
    key: "checkBox3",
    label: polyglot.t("checkbox3")
  },
  {
    name: "check-box-4",
    key: "checkBox4",
    label: polyglot.t("checkbox4")
  },
  {
    name: "check-box-5",
    key: "checkBox5",
    label: polyglot.t("checkbox5")
  },
  {
    name: "check-box-6",
    key: "checkBox6",
    label: polyglot.t("checkbox6")
  }
];

export default class MentionsLegales extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkBox1: false,
      checkBox2: false,
      checkBox3: false,
      checkBox4: false,
      checkBox5: false,
      checkBox6: false
    };
  }
  showTerms = () => {
    if (
      this.state.checkBox1 &&
      this.state.checkBox2 &&
      this.state.checkBox3 &&
      this.state.checkBox4 &&
      this.state.checkBox5 &&
      this.state.checkBox6
    ) {
      return (
        <View style={styles.content}>
          <Text style={{ fontSize: 20 }}>{polyglot.t("thanks")}</Text>
          <ButtonPrimary
            onPress={() => this.props.navigation.goBack()}
            text={polyglot.t("start")}
          />
        </View>
      );
    } else {
      return (
        <ScrollView>
          {polyglot.t("terms")}

          {checkboxes.map(item => (
            <CheckBox
              name={item.name}
              key={item.key}
              style={{ padding: 10 }}
              onClick={() => {
                this.state[item.key]
                  ? this.setState({ [item.key]: false })
                  : this.setState({ [item.key]: true });

                console.log(item.key);
              }}
              isChecked={this.state[item.key]}
              rightText={item.label}
            />
          ))}
        </ScrollView>
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          title={polyglot.t("titleLegal")}
          navigation={this.props.navigation}
        />
        {this.showTerms()}
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
  h1: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 10
  },
  h2: {
    fontSize: 14,
    fontWeight: "bold",
    margin: 10
  },
  p: {
    marginTop: 12,
    padding: 10
  }
});
