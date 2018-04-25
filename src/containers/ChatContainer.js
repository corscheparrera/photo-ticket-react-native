import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Screen } from 'react-native'
import firebase from 'react-native-firebase'
import { material, iOSColors, systemWeights } from 'react-native-typography'
import { GiftedChat } from 'react-native-gifted-chat'

import Header from '../components/Header'
import ButtonPrimary from '../components/ButtonPrimary'
import { getUid, loadMessages, sendMessage, closeChat } from '../utils/BackendChat'
import Icon from 'react-native-vector-icons/FontAwesome'
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
      let uid = currentUser.ui
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
      <View style={styles.container}>
        <Header title="Chat" navigation={this.props.navigation} />
        <GiftedChat
          renderAvatar={null}
          messages={this.state.messages}
          onSend={message => {
            sendMessage(message)
          }}
          user={{
            _id: this.state.uid,
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
  navBar: {
    flexDirection: 'row',
    paddingTop: 30,
    height: 64,
    backgroundColor: '#05E085',
  },
  navBarButton: {
    color: '#FFFFFF',
    textAlign: 'center',
    width: 64,
  },
  navBarHeader: {
    flex: 1,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
})
