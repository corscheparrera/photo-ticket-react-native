// The recommended way to use consistent fonts and sizes across your application
// is to create a component MyAppText that includes them and use this component across your app.
// Source: https://facebook.github.io/react-native/docs/text.html

import React from 'react'
import { Text } from 'react-native'

export default class AppText extends React.Component {
  render() {
    let { size, color, weight, fam } = this.props
    return (
      <Text
        style={{
          color: color,
          fontSize: size,
          fontWeight: weight,
          fontFamily: fam,
        }}
      >
        {this.props.children}
      </Text>
    )
  }
}
AppText.defaultProps = {
  color: '#000000',
  size: 18,
  weight: 'normal',
  fam: 'System',
}
