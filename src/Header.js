import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { SwitchNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.navBar}>
        <Icon
          style={styles.navBarButton}
          name="arrow-left"
          size={20}
          onPress={() => this.props.navigation.navigate('Main')}
        />

        <Text style={styles.navBarHeader}>{this.props.title}</Text>
        <Icon
          style={styles.navBarButton}
          name="gear"
          size={20}
          onPress={() => this.props.navigation.navigate('Settings')}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
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
})
