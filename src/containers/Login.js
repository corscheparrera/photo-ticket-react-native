import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  KeyboardAvoidingView
} from "react-native";
import firebase from "react-native-firebase";

import ButtonPrimary from "../components/ButtonPrimary";

export default class Login extends React.Component {
  state = { email: "", password: "", errorMessage: null };

  handleLogin = async () => {
    const { email, password } = this.state;
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate("Home"))
      .catch(error => this.setState({ errorMessage: error.message }));
    this.storeUserInfos();
  };
  storeUserInfos = async () => {
    let user = firebase.auth().currentUser;
    if (user != null) {
      let usersRef = firebase.database().ref(`allUsers/${user.uid}`);
      let snapshot = await usersRef.once("value");
      const userInfos = snapshot.val();
      if (userInfos) {
        console.log("user exists");
      } else usersRef.update({ ...user._user });
    }
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Image
          style={{ marginBottom: 60 }}
          source={require("../images/logo_photo_ticekt_9.png")}
        />
        <Text style={styles.title}>Connectez-vous</Text>
        {this.state.errorMessage && (
          <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
        )}
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

        <ButtonPrimary
          onPress={this.handleLogin}
          text="Connexion"
          buttonColor="#BE1551"
        />

        <Text
          onPress={() => this.props.navigation.goBack()}
          style={{
            paddingTop: 24,
            fontWeight: "normal",
            fontSize: 18,
            color: "#000000"
          }}
        >
          C'est votre première utilisation?
        </Text>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "#BE1551",
    fontSize: 18,
    fontWeight: "bold"
  },
  textInput: {
    height: 40,
    width: "90%",
    borderColor: "#BE1551",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 8,
    textAlign: "center"
  }
});
