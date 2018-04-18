import React from 'react'
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native'

export default class ButtonPrimary extends React.Component {
  render() {
    let { onPress, text, txtColor, buttonColor, largeur, weight } = this.props
    return (
      <View>
        <TouchableHighlight onPress={onPress} underlayColor="white" activeOpacity={0.7}>
          <View
            style={{
              borderRadius: 10,
              borderWidth: 10,
              borderColor: buttonColor,
              backgroundColor: buttonColor,
              padding: 5,
              marginTop: 20,
              width: largeur,
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontWeight: weight,
                fontSize: 18,
                color: txtColor,
              }}
            >
              {text}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}
ButtonPrimary.defaultProps = {
  txtColor: '#FFF',
  buttonColor: '#33AAFF',
  largeur: 200,
  weight: 'bold',
}
