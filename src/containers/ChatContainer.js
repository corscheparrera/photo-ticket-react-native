import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import firebase from 'react-native-firebase'
import { material, iOSColors, systemWeights } from 'react-native-typography'

import Header from '../components/Header'
import ButtonPrimary from '../components/ButtonPrimary'
const database = firebase.database()
export default class ChatContainer extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: null,
      uid: '',
      chat: [],
      text: '',
    }
  }

  startChat = async () => {
    try {
      const { currentUser } = await firebase.auth()
      await this.setState({ currentUser })
      let uid = currentUser.email.replace(/\.|@/g, '')
      await this.setState({ uid })
      await firebase.database().goOnline()
      await this.pushUsernameFirebase()
    } catch (e) {
      console.log(e)
    }
  }
  componentDidMount() {
    this.startChat()
  }

  pushUsernameFirebase = () => {
    let ref = database.ref(`/users-${this.state.uid}`)
    let pushId = ref.push({ username: this.state.user, status: 'online' }).key
    database
      .ref(`/messages-${this.state.uid}`)
      .push({ username: this.state.currentUser.email, text: "I'm online" })

    let disconnectTask = {}
    disconnectTask[pushId] = {
      username: this.state.currentUser.email,
      status: 'offline',
    }
    ref.onDisconnect().update(disconnectTask)
    this.alertUserStatus()
  }

  alertUserStatus = () => {
    database.ref(`/users-${this.state.uid}`).on('child_changed', x => this.displayStatus(x.val()))
  }

  displayStatus = data => {
    database
      .ref(`/messages-${this.state.uid}`)
      .push({ username: data.username, text: `I'm ${data.status}` })
  }

  _handleClick = () => {
    database
      .ref(`/messages-${this.state.uid}`)
      .push({ username: this.state.currentUser.email, text: this.state.text })
  }

  render() {
    const { currentUser, uid } = this.state
    return (
      <View style={styles.container}>
        <Header title="Chat" navigation={this.props.navigation} />
        <View style={styles.content}>
          <Text style={styles.text}>Uid: {uid}</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Message"
            autoCapitalize="none"
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
          <ButtonPrimary onPress={() => this._handleClick()} text="Envoyer" buttonColor="#33AAFF" />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...material.titleObject,
    color: iOSColors.black,
    ...systemWeights.light,
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: '#33AAFF',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 8,
    // textAlign: 'center',
  },
})
