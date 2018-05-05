import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
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
