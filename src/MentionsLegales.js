import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { SwitchNavigator } from 'react-navigation'

export default class MentionLegales extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Les mentions légales iront ici </Text>
        <Button title="Back" onPress={() => this.props.navigation.navigate('Main')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
