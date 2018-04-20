import React from 'react'
import { StyleSheet, Text, TextInput, View, Image, KeyboardAvoidingView } from 'react-native'
import firebase from 'react-native-firebase'

import ButtonPrimary from '../components/ButtonPrimary'

export default class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null }

  handleLogin = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Home'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Image style={{ marginBottom: 60 }} source={require('../images/logo.png')} />
        <Text style={styles.title}>Connectez-vous</Text>
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

        <ButtonPrimary onPress={this.handleLogin} text="Connexion" buttonColor="#33AAFF" />

        <Text
          onPress={() => this.props.navigation.goBack()}
          style={{
            paddingTop: 24,
            fontWeight: 'normal',
            fontSize: 18,
            color: '#000000',
          }}
        >
          C'est votre première utilisation?
        </Text>
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
