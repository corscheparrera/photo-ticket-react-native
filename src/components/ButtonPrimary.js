import React from "react";
import { Text, View, TouchableHighlight } from "react-native";

export default class ButtonPrimary extends React.Component {
  render() {
    let { onPress, text, txtColor, buttonColor, largeur, weight } = this.props;
    return (
      <View>
        <TouchableHighlight
          style={{
            marginTop: 20,
            borderRadius: 5,
            borderWidth: 2,
            borderColor: buttonColor
          }}
          onPress={onPress}
          underlayColor="white"
          activeOpacity={0.7}
        >
          <View
            style={{
              backgroundColor: buttonColor,
              padding: 12,
              width: largeur,
              alignItems: "center"
            }}
          >
            <Text
              style={{
                fontWeight: weight,
                fontSize: 18,
                color: txtColor
              }}
            >
              {text}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
ButtonPrimary.defaultProps = {
  buttonColor: "#33AAFF",
  txtColor: "#FFFFFF",
  largeur: 200,
  weight: "bold"
};
