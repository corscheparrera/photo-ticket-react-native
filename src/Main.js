import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native'
import firebase from 'react-native-firebase'

export default class Main extends React.Component {
  state = { currentUser: null }
  signOutUser = async () => {
    try {
      await firebase.auth().signOut()
      navigate('Auth')
    } catch (e) {
      console.log(e)
    }
  }
  componentDidMount() {
    const { currentUser } = firebase.auth()

    this.setState({ currentUser })
  }

  render() {
    const { currentUser } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.navBarHeader}>Photo Ticket</Text>
        </View>
        <View style={styles.content}>
          <Text>Bonjour {currentUser && currentUser.email}!</Text>
          <Image
            style={{ marginBottom: 40, marginTop: 40 }}
            source={require('./images/logo.png')}
          />
          <Button
            title="Prendre une photo"
            onPress={() => this.props.navigation.navigate('InfoPage')}
          />
          <Button title="Informations" onPress={() => this.props.navigation.navigate('InfoPage')} />
          <Button
            title="Mentions légales"
            onPress={() => this.props.navigation.navigate('MentionsLegales')}
          />

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
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#374046',
  },
  text: {
    // color: '#EEEEEE',
  },
})
