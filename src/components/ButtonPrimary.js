import React from 'react'
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native'
import { human } from 'react-native-typography'

export default class ButtonPrimary extends React.Component {
  render() {
    let { onPress, text, buttonColor, largeur, weight } = this.props
    return (
      <View>
        <TouchableHighlight
          style={{
            marginTop: 20,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: buttonColor,
          }}
          onPress={onPress}
          underlayColor="white"
          activeOpacity={0.7}
        >
          <View
            style={{
              // backgroundColor: buttonColor,
              padding: 12,
              width: largeur,
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontWeight: weight,
                fontSize: 18,
                color: buttonColor,
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
  // buttonColor: '#33AAFF',
  buttonColor: '#000000',
  largeur: 200,
  weight: 'bold',
}
