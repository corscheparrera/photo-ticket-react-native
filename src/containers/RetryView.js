import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import Header from '../components/Header'
import ButtonPrimary from '../components/ButtonPrimary'
export default class Cam extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Infraction" navigation={this.props.navigation} />
        <View style={styles.content}>
          <Icon color="#000000" name="eye-slash" size={96} onPress={this.confirmedImage} />
          <Text>Mauvais focus</Text>
          <ButtonPrimary onPress={() => this.props.retryPicture()} text="Réessayer" />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
