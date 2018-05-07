import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import firebase from 'react-native-firebase'
import { material, iOSColors, systemWeights } from 'react-native-typography'

import BackendChat from '../utils/BackendChat'
import Header from '../components/Header'
import ButtonPrimary from '../components/ButtonPrimary'

const database = firebase.database()

export default class MyTickets extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tickets: [],
      uid: BackendChat.getUid()
    }
  }
  componentWillMount() {
    this.loadTickets()
  }

  // retrieve the tickets from the backend
  loadTickets = async () => {
    const data = await firebase.database().ref(`all-tickets/ticket-${this.state.uid}`).once("value")

    const elements = []

    data.forEach(element => {
      elements.push(element.val())
    });

    const datas = data.val()
    this.setState({
      tickets: [...this.state.tickets, ...elements]
    });
  };


  renderTickets = () => {
    return this.state.tickets.map(ticket => {
      console.log(ticket.data.art)
      return (
        <View key={ticket.createdAt}>
          <Text style={styles.text}>{ticket.data.art}</Text>
        </View>
      );
    });
  }
  render() {
    const { currentUser } = this.state
    return (
      <View style={styles.container}>
        <Header title="Mes tickets" navigation={this.props.navigation} />
        <View style={styles.content}>
          <Text style={styles.text}>MY TICKETS</Text>
          <Image style={{ width: 55, height: 55 }} source={{ uri: "https://firebasestorage.googleapis.com/v0/b/photo-ticket-app.appspot.com/o/images%2Fuser_V68h7qVsHiWsIyLcx0T0pC2qrfQ2%2F1525703435698?alt=media&token=6b297c99-88a8-4417-9cc1-3e3df7843e97" }} />
          {this.state.tickets.length && this.renderTickets()}
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
})
