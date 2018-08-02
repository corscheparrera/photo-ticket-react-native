import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Animated,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class Accordion extends Component {
  constructor(props) {
    super(props);

    this.icons = {
      up: "ios-arrow-up",
      down: "ios-arrow-down"
    };

    this.state = {
      title: props.title,
      expanded: props.expand
    };
  }

  toggle = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  render() {
    let icon = this.icons["down"];

    if (this.state.expanded == true) {
      icon = this.icons["up"];
    }

    return (
      <View style={{ marginBottom: 15 }}>
        <TouchableHighlight onPress={this.toggle} underlayColor="#f1f1f1">
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{this.state.title}</Text>
            <View style={styles.button}>
              <Icon name={icon} size={28} />
            </View>
          </View>
        </TouchableHighlight>
        <View style={{ display: this.state.expanded ? "flex" : "none" }}>
          <ScrollView styles={{ flex: 0 }}>
            <View style={styles.content}>{this.props.children}</View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 10,
    overflow: "hidden"
  },
  titleContainer: {
    backgroundColor: "#ec2326",
    flexDirection: "row"
  },
  content: {
    padding: 15
  },
  title: {
    flex: 1,
    padding: 10,
    color: "#FFFFFF",
    fontWeight: "bold"
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 30
  },
  body: {
    padding: 10,
    paddingTop: 0
  }
});

export default Accordion;
