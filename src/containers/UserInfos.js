import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView
} from "react-native";
import firebase from "react-native-firebase";
import ChatContainer from "./ChatContainer";
import Header from "../components/Header";
import ButtonPrimary from "../components/ButtonPrimary";
import polyglot from "../utils/translator";

const DissmissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
export default class UserInfos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastName: "",
      phoneNumber: "",
      showUserInfosView: true,
      showChatView: false
    };
    this.getUserInfos();
  }
  getUserInfos = async () => {
    let user = firebase.auth().currentUser;
    if (user != null) {
      let usersRef = firebase.database().ref(`allUsers/${user.uid}`);
      let snapshot = await usersRef.once("value");
      const userInfos = snapshot.val();

      this.setState({
        name: userInfos.name,
        lastName: userInfos.lastName,
        phoneNumber: userInfos.phoneNumber
      });
    }
  };
  storeUserInfos = async () => {
    let user = firebase.auth().currentUser;
    if (user != null) {
      let usersRef = firebase.database().ref(`allUsers/${user.uid}`);
      let snapshot = await usersRef.once("value");
      const userInfos = snapshot.val();

      await usersRef.update({
        name: this.state.name,
        lastName: this.state.lastName,
        phoneNumber: this.state.phoneNumber
      });
      this.setState({ showUserInfosView: false, showChatView: true });
    }
  };

  userInfosView = () => {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Header title="Chat" navigation={this.props.navigation} />
        <DissmissKeyboard>
          <View style={styles.content}>
            <Text style={styles.title}>{polyglot.t("identify")}</Text>
            {this.state.errorMessage && (
              <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
            )}
            <TextInput
              style={styles.textInput}
              placeholder={polyglot.t("firstName")}
              autoCapitalize="none"
              onChangeText={name => this.setState({ name })}
              value={this.state.name}
            />
            <TextInput
              style={styles.textInput}
              placeholder={polyglot.t("name")}
              autoCapitalize="none"
              onChangeText={lastName => this.setState({ lastName })}
              value={this.state.lastName}
            />

            <TextInput
              style={styles.textInput}
              placeholder="8194450400"
              keyboardType="numeric"
              onChangeText={phoneNumber => this.setState({ phoneNumber })}
              value={this.state.phoneNumber}
            />
            <ButtonPrimary
              onPress={this.storeUserInfos}
              text={polyglot.t("join")}
              buttonColor="#ec2326"
            />
          </View>
        </DissmissKeyboard>
      </KeyboardAvoidingView>
    );
  };

  displayView = () => {
    if (this.state.showChatView) {
      return <ChatContainer navigation={this.props.navigation} />;
    }
    if (this.state.showUserInfosView) {
      return this.userInfosView();
    }
  };
  render() {
    return this.displayView();
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
  title: {
    color: "#ec2326",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  textInput: {
    height: 40,
    width: "90%",
    borderColor: "#ec2326",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 8,
    textAlign: "center"
  }
});
