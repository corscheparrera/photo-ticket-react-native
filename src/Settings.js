import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/FontAwesome'

import Header from './Header'

export default class Settings extends Component {
  state = { currentUser: null }

  componentDidMount() {
    const { currentUser } = firebase.auth()

    this.setState({ currentUser })
  }
  signOutUser = async () => {
    try {
      await firebase.auth().signOut()
      navigate('Auth')
    } catch (e) {
      console.log(e)
    }
  }
  render() {
    const { currentUser } = this.state
    return (
      <View style={styles.container}>
        <Header title="Settings" navigation={this.props.navigation} />
        <View style={styles.content}>
          <Text>Email: {currentUser && currentUser.email}</Text>
          <Button title="Déconnexion" onPress={this.signOutUser} />
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
})