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
            <Text style={styles.title}>
              Identifiez-vous afin de joindre Me Harvey
            </Text>
            {this.state.errorMessage && (
              <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
            )}
            <TextInput
              style={styles.textInput}
              placeholder="Prénom"
              autoCapitalize="none"
              onChangeText={name => this.setState({ name })}
              value={this.state.name}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Nom"
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
              text="Joindre"
              buttonColor="#BE1551"
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
    color: "#BE1551",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  textInput: {
    height: 40,
    width: "90%",
    borderColor: "#BE1551",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 8,
    textAlign: "center"
  }
});
