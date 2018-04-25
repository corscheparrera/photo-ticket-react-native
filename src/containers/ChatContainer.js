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
      // await database
      //   .ref(`chat/messages-${this.state.uid}`)
      //   .on('child_added', x => this.updateState(x.val()))
    } catch (e) {
      console.log(e)
    }
  }
  // updateState = data => {
  //   this.setState({
  //     chat: this.state.chat.concat([data]),
  //   })
  // }
  // renderMessanges = (data, i) => {
  //   if (data) {
  //     return (
  //       <Text key={i}>
  //         {data.username}: {data.text} send at {data.time}
  //       </Text>
  //     )
  //   }
  // }
  // _handleClick = async () => {
  //   let time = Date.now()
  //   let msg = { ...this.state.msg, time }
  //   await this.setState({ msg })
  //   await database.ref(`chat/messages-${this.state.uid}`).push({
  //     username: this.state.currentUser.email,
  //     text: this.state.msg.text,
  //     time: this.state.msg.time,
  //   })
  // }
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
          name: 'Maxime',
        }}
        placeholder="Écrire un message..."
      />
      // <View style={styles.container}>
      //   <Header title="Chat" navigation={this.props.navigation} />
      //   <View style={styles.content}>
      //     <Text style={styles.text}>Uid: {uid}</Text>
      //     {this.state.chat.map(this.renderMessanges)}
      //     <TextInput
      //       style={styles.textInput}
      //       placeholder="Message"
      //       autoCapitalize="none"
      //       onChangeText={text => this.setState({ msg: { text: text } })}
      //       value={this.state.msg.text}
      //     />
      //     <ButtonPrimary onPress={() => this._handleClick()} text="Envoyer" buttonColor="#33AAFF" />
      //   </View>
      // </View>
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
