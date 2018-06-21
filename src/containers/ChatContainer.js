import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import firebase from "react-native-firebase";
import { material, iOSColors, systemWeights } from "react-native-typography";
import { GiftedChat } from "react-native-gifted-chat";

import Header from "../components/Header";
import ButtonPrimary from "../components/ButtonPrimary";
import BackendChat from "../utils/BackendChat";

const database = firebase.database();
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

  nameView = () => {
    return (
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
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Nom"
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />

          <ButtonPrimary
            onPress={this.handleLogin}
            text="Joindre"
            buttonColor="#33AAFF"
          />
        </View>
      </View>
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
            name: "max"
          }}
          placeholder="Écrire un message..."
        />
      </View>
    );
  };

  render() {
    return this.nameView();
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
