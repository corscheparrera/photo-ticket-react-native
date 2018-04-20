import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { material, iOSColors, systemWeights } from 'react-native-typography'

import Header from '../components/Header'
import ButtonPrimary from '../components/ButtonPrimary'

export default class BadFocus extends React.Component {
  render() {
    let { navigation, retryPicture } = this.props
    return (
      <View style={styles.container}>
        <Header title="Infraction" navigation={navigation} />
        <View style={styles.content}>
          <Icon color="#000000" name="eye-slash" size={96} />
          <Text style={styles.text}>
            Désolé, votre ticket n'a pas pu être lu. Assurez-vous de bien viser le texte.
          </Text>
          <ButtonPrimary onPress={() => retryPicture()} text="Réessayer" />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    ...material.titleObject,
    color: iOSColors.black,
    ...systemWeights.light,
    padding: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
    alignItems: 'center',
  },
})
