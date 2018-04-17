import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { SwitchNavigator } from 'react-navigation'

export default class MentionsLegales extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.navBarButton} onPress={() => this.props.navigation.navigate('Main')}>
            Retour
          </Text>
          <Text style={styles.navBarHeader}>Photo Ticket</Text>
          <Text style={styles.navBarButton}>More</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>Les mentions légaales iront ici !</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    flexDirection: 'row',
    paddingTop: 30,
    height: 64,
    backgroundColor: '#05E085',
  },
  navBarButton: {
    color: '#FFFFFF',
    textAlign: 'center',
    width: 64,
  },
  navBarHeader: {
    flex: 1,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#374046',
  },
  text: {
    // color: '#EEEEEE',
  },
})
