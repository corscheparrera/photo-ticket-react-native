import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import firebase from "react-native-firebase";
import { GiftedChat } from "react-native-gifted-chat";
import polylgot from "../utils/translator";
import Header from "../components/Header";

import BackendChat from "../utils/BackendChat";

export default class ChatContainer extends Component {
  constructor() {
    super();
    this.state = {
      messages: []
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
          placeholder={polylgot.t("write")}
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
