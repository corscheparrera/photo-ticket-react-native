import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import firebase from "react-native-firebase";
import { GiftedChat } from "react-native-gifted-chat";

import Header from "../components/Header";

import BackendChat from "../utils/BackendChat";

const database = firebase.database();
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

  chatView = () => {
    return (
      <View style={styles.container}>
        {/* <Header title="Chat" navigation={this.props.navigation} /> */}
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
    return this.chatView();
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
