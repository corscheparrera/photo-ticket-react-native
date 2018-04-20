import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import Header from '../components/Header'
import ButtonPrimary from '../components/ButtonPrimary'
export default class ConfirmPicView extends React.Component {
  render() {
    let { confirmedImage, discardPicture, uri } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Icon
            style={styles.navBarButton}
            name="check"
            size={24}
            onPress={() => confirmedImage()}
          />
          <Text style={styles.navBarHeader}>Photo Ticket</Text>
          <Icon
            style={styles.navBarButton}
            name="remove"
            size={24}
            onPress={() => discardPicture()}
          />
        </View>
        <Image source={{ uri: uri }} style={styles.preview} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
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
    fontSize: 18,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
})
