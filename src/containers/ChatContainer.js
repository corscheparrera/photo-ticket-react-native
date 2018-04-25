import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import firebase from 'react-native-firebase'
import { material, iOSColors, systemWeights } from 'react-native-typography'
import { GiftedChat } from 'react-native-gifted-chat'

import Header from '../components/Header'
import ButtonPrimary from '../components/ButtonPrimary'
import { getUid, loadMessages, sendMessage, closeChat } from '../utils/BackendChat'

const database = firebase.database()
export default class ChatContainer extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: null,
      uid: '',
      messages: [],
    }
  }
  componentWillMount() {
    this.startChat()
  }
  startChat = async () => {
    try {
      const { currentUser } = await firebase.auth()
      await this.setState({ currentUser })
      let uid = currentUser.email.replace(/\.|@/g, '')
      await this.setState({ uid })
      await firebase.database().goOnline()
    } catch (e) {
      console.log(e)
    }
  }

  componentDidMount() {
    loadMessages(message => {
      this.setState(previousState => {
        return {
          messages: GiftedChat.append(previousState.messages, message),
        }
      })
    })
  }
  componentWillUnmount = () => {
    closeChat()
  }

  render() {
    const { currentUser, uid } = this.state
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={message => {
          sendMessage(message)
        }}
        user={{
          _id: getUid(),
          name: 'max',
        }}
        placeholder="Écrire un message..."
      />
    )
  }
}
