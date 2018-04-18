import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Button, TouchableHighlight } from 'react-native'
import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/FontAwesome'

import Header from './Header'

export default class Main extends React.Component {
  state = { currentUser: null }

  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
  }

  render() {
    const { currentUser } = this.state

    return (
      <View style={styles.container}>
        <Header title="Photo Ticket" navigation={this.props.navigation} />
        <View style={styles.content}>
          <Text>Bonjour {currentUser && currentUser.email}!</Text>
          <Image
            style={{ marginBottom: 40, marginTop: 40 }}
            source={require('./images/logo.png')}
          />

          <Button
            title="Prendre une photo"
            onPress={() => this.props.navigation.navigate('CameraView')}
          />
          <Button title="Informations" onPress={() => this.props.navigation.navigate('InfoPage')} />
          <Button
            title="Mentions légales"
            onPress={() => this.props.navigation.navigate('MentionsLegales')}
          />
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
  view: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: 'steelblue',
    borderRadius: 10,
    color: 'red',
    padding: 15,
    margin: 45,
  },
})
