import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  KeyboardAvoidingView
} from "react-native";
import firebase from "react-native-firebase";
import polyglot from "../utils/translator";
import ButtonPrimary from "../components/ButtonPrimary";

export default class SignUp extends React.Component {
  state = { email: "", password: "", errorMessage: null };

  handleSignUp = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => this.props.navigation.navigate("Main"))
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Image
          style={{ marginBottom: 60 }}
          source={require("../images/logo_photo_ticekt_9.png")}
        />
        <Text style={styles.title}>{polyglot.t("createAccount")}</Text>
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
          placeholder={polyglot.t("password")}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />

        <ButtonPrimary onPress={this.handleSignUp} text="Enregistrer" />
        <ButtonPrimary
          onPress={() => this.props.navigation.navigate("Login")}
          text={polyglot.t("alreadySign")}
          buttonColor="transparent"
          largeur={300}
          weight="normal"
          txtColor="#000000"
        />
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
