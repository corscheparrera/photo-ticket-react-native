import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import firebase from 'react-native-firebase'
import { material, iOSColors, systemWeights } from 'react-native-typography'
import { GiftedChat } from 'react-native-gifted-chat'

import Header from '../components/Header'
import ButtonPrimary from '../components/ButtonPrimary'
import BackendChat from '../utils/BackendChat'

const database = firebase.database()
export default class ChatContainer extends Component {
  constructor() {
    super()
    this.state = {
      messages: [],
    }
  }
  componentWillMount() {
    this.startChat()
  }
  startChat = async () => {
    try {
      await firebase.database().goOnline()
    } catch (e) {
      console.log(e)
    }
  }

  componentDidMount() {
    BackendChat.loadMessages(message => {
      this.setState(previousState => {
        return {
          messages: GiftedChat.append(previousState.messages, message),
        }
      })
    })
  }
  componentWillUnmount = () => {
    BackendChat.closeChat()
  }

  render() {

    return (
      <View style={styles.container}>
        <Header title="Chat" navigation={this.props.navigation} />
        <GiftedChat
          renderAvatar={null}
          messages={this.state.messages}
          onSend={message => {
            BackendChat.sendMessage(message)
          }}
          user={{
            _id: BackendChat.getUid(),
            name: 'max',
          }}
          placeholder="Écrire un message..."
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
