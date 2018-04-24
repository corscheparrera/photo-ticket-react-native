import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Header extends React.Component {
  render() {
    const { navigate, goBack, state, dispatch } = this.props.navigation
    // The Reset action wipes the whole navigation state
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })],
    })

    return (
      <View style={styles.navBar}>
        <Icon
          style={styles.navBarButton}
          name={this.props.title === 'Photo Ticket' ? 'camera' : 'arrow-left'}
          size={24}
          onPress={() => {
            if (this.props.title === 'Photo') {
              this.props.closeCam()
            } else if (this.props.title !== 'Photo Ticket') {
              goBack()
            }
          }}
        />
        <Text style={styles.navBarHeader}>{this.props.title}</Text>
        <Icon
          style={styles.navBarButton}
          name={this.props.title === 'Settings' ? '' : 'gear'}
          size={24}
          onPress={() => {
            if (this.props.title !== 'Settings') {
              navigate('Settings')
            }
          }}
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
    fontSize: 18,
  },
})
