import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  KeyboardAvoidingView,
} from 'react-native'
import firebase from 'react-native-firebase'

import ButtonPrimary from '../components/ButtonPrimary'

export default class SignUp extends React.Component {
  state = { email: '', password: '', errorMessage: null }

  handleSignUp = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Image style={{ marginBottom: 60 }} source={require('../images/logo.png')} />
        <Text style={styles.title}>Créez votre compte</Text>
        {this.state.errorMessage && <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>}
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          style={styles.textInput}
          secureTextEntry
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />

        <ButtonPrimary onPress={this.handleSignUp} text="Enregistrer" />
        <ButtonPrimary
          onPress={() => this.props.navigation.navigate('Login')}
          text="Vous avez déjà un compte?"
          buttonColor="transparent"
          largeur={300}
          weight="normal"
          txtColor="#000000"
        />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#33AAFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: '#33AAFF',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 8,
    textAlign: 'center',
  },
})
