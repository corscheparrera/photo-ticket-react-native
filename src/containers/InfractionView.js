import React from 'react'
import { View, StyleSheet, Text, ScrollView, Button } from 'react-native'
import { material, iOSColors, systemWeights } from 'react-native-typography'
// import Icon from 'react-native-vector-icons/FontAwesome'

import Header from '../components/Header'
import ButtonPrimary from '../components/ButtonPrimary'
export default class Cam extends React.Component {
  render() {
    let { navigation, data } = this.props
    return (
      <View style={styles.container}>
        <Header title="Infraction" navigation={navigation} />
        <ScrollView>
          <View style={styles.content}>
            <View style={styles.paragraph}>
              <Text style={styles.title}>{data.art}</Text>
              <Text style={styles.title}>{data.règlement}</Text>
            </View>

            <View style={styles.paragraph}>
              <Text style={styles.title}>Résumé: </Text>
              <Text style={styles.text}>{data.résumé}</Text>
            </View>
            <View style={styles.paragraph}>
              <Text style={styles.title}>Conditions:</Text>
              <Text style={styles.text}>{data.conditions}</Text>
            </View>
            <Button title="Consulter un avocat gratuitement" />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  paragraph: {
    paddingBottom: 25,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
    // alignItems: 'center',
  },
  text: {
    ...material.titleObject,
    color: iOSColors.black,
    ...systemWeights.light,
    fontSize: 14,
  },
  title: {
    ...material.titleObject,
    color: iOSColors.black,
    ...systemWeights.semibold,
    fontSize: 16,
  },
})
