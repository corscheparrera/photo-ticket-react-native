import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { SwitchNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import Header from './Header'

export default class InfoPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Informations" navigation={this.props.navigation} />
        <View style={styles.content}>
          <Text style={styles.text}>Les informations iront ici!</Text>
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
})
