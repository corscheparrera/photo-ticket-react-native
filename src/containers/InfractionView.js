import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

// import Icon from 'react-native-vector-icons/FontAwesome'

import Header from '../components/Header'
export default class Cam extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Infraction" navigation={this.props.navigation} />
        <View style={styles.content}>
          <Text>{this.props.data.articleEnfreint}</Text>
          <Text>Description de l'infraction:</Text>
          <Text>{this.props.data.descriptionPar}</Text>
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
