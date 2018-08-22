import React from "react";
import { Text, View, TouchableHighlight } from "react-native";

export default class ButtonPrimary extends React.Component {
  render() {
    let {
      onPress,
      text,
      txtColor,
      buttonColor,
      largeur,
      weight,
      hauteur,
      grandeuPolice
    } = this.props;
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
              alignItems: "center",
              justifyContent: "center",
              height: hauteur
            }}
          >
            <Text
              style={{
                fontWeight: weight,
                fontSize: grandeuPolice,
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
  hauteur: 50,
  weight: "bold",
  grandeurPolice: 18
};
