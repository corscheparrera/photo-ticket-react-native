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
        <Image style={{ marginBottom: 60 }} source={require('./images/logo.png')} />
        <Text>Bonjour {currentUser && currentUser.email}!</Text>
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
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
