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
        <Text>Connectez-vous</Text>
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
        <Button style={styles.button} title="Connexion" onPress={this.handleLogin} />
        <Button
          style={styles.button}
          title="C'est votre première utilisation?"
          onPress={() => this.props.navigation.navigate('SignUp')}
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
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
  },
  button: {
    height: 40,
    marginTop: 20,
  },
})