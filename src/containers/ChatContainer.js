import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import firebase from "react-native-firebase";
import { GiftedChat } from "react-native-gifted-chat";

import Header from "../components/Header";
import ButtonPrimary from "../components/ButtonPrimary";
import BackendChat from "../utils/BackendChat";

const database = firebase.database();

const DissmissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
export default class ChatContainer extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      name: "",
      lastName: "",
      phoneNumber: ""
    };
  }
  componentWillMount() {
    this.startChat();
  }
  startChat = async () => {
    try {
      await firebase.database().goOnline();
    } catch (e) {
      console.log(e);
    }
  };
  componentDidMount() {
    BackendChat.loadMessages(message => {
      this.setState(previousState => {
        return {
          messages: GiftedChat.append(previousState.messages, message)
        };
      });
    });
  }
  componentWillUnmount = () => {
    BackendChat.closeChat();
  };
  onChanged = text => {
    let newText = "";
    let numbers = "0123456789";

    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i]) > -1) {
        newText = newText + text[i];
      } else {
        // your call back function
        alert("please enter numbers only");
      }
    }
    this.setState({ phoneNumber: newText });
  };
  storeUserInfos = async () => {
    let user = firebase.auth().currentUser;
    if (user != null) {
      let usersRef = firebase.database().ref(`allUsers/${user.uid}`);
      let snapshot = await usersRef.once("value");
      const userInfos = snapshot.val();
      // if (userInfos) {
      //   console.log("user exists");
      // } else
      usersRef.update({
        name: this.state.name,
        lastName: this.state.lastName,
        phoneNumber: this.state.phoneNumber
      });
    }
  };

  userInfosView = () => {
    return (
      <DissmissKeyboard>
        <View style={styles.container}>
          <Header title="Chat" navigation={this.props.navigation} />
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
              placeholder="1(819)445-0400"
              keyboardType="numeric"
              // onChangeText={text => this.onChanged(text)}
              onChangeText={phoneNumber => this.setState({ phoneNumber })}
              value={this.state.phoneNumber}
              maxLength={10} //setting limit of input
            />
            <ButtonPrimary
              onPress={this.storeUserInfos}
              text="Joindre"
              buttonColor="#33AAFF"
            />
          </View>
        </View>
      </DissmissKeyboard>
    );
  };

  chatView = () => {
    return (
      <View style={styles.container}>
        <Header title="Chat" navigation={this.props.navigation} />
        <GiftedChat
          renderAvatar={null}
          messages={this.state.messages}
          onSend={message => {
            BackendChat.sendMessage(message);
          }}
          user={{
            _id: BackendChat.getUid(),
            email: BackendChat.getEmail()
          }}
          placeholder="Écrire un message..."
        />
      </View>
    );
  };

  render() {
    return this.userInfosView();
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
    color: "#33AAFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  textInput: {
    height: 40,
    width: "90%",
    borderColor: "#33AAFF",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 8,
    textAlign: "center"
  }
});
