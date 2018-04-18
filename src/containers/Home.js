import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Button, TouchableHighlight } from 'react-native'
import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/FontAwesome'

import Header from '../components/Header'

export default class Home extends React.Component {
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
            style={{ marginBottom: 20, marginTop: 20 }}
            source={require('../images/logo.png')}
          />
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate('CameraView')}
            underlayColor="white"
            activeOpacity={0.7}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Prendre une photo</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate('MentionsLegales')}
            underlayColor="white"
            activeOpacity={0.7}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Mentions légales</Text>
            </View>
          </TouchableHighlight>
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
  button: {
    borderRadius: 10,
    borderWidth: 10,
    borderColor: '#33AAFF',
    backgroundColor: '#33AAFF',
    padding: 5,
    marginTop: 20,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
})
