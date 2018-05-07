import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import firebase from 'react-native-firebase'
import { material, iOSColors, systemWeights } from 'react-native-typography'

import Header from '../components/Header'
import ButtonPrimary from '../components/ButtonPrimary'

export default class MyTickets extends Component {
  state = { currentUser: null }

  componentDidMount() {
    const { currentUser } = firebase.auth()

    this.setState({ currentUser })
  }

  render() {
    const { currentUser } = this.state
    return (
      <View style={styles.container}>
        <Header title="Mes tickets" navigation={this.props.navigation} />
        <View style={styles.content}>
          <Text style={styles.text}>MY TICKETS</Text>
          <Image style={{ width: 55, height: 55 }} source={{ uri: "https://firebasestorage.googleapis.com/v0/b/photo-ticket-app.appspot.com/o/images%2Fuser_V68h7qVsHiWsIyLcx0T0pC2qrfQ2%2F1525703435698?alt=media&token=6b297c99-88a8-4417-9cc1-3e3df7843e97" }} />

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
