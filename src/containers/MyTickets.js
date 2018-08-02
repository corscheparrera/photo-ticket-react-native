import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import firebase from "react-native-firebase";
import { material, iOSColors, systemWeights } from "react-native-typography";
import moment from "moment";
import Icon from "react-native-vector-icons/FontAwesome";

import BackendChat from "../utils/BackendChat";
import Header from "../components/Header";

export default class MyTickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickets: [],
      uid: BackendChat.getUid(),
      imageShouldDisplay: false
    };
  }
  componentWillMount() {
    this.loadTickets();
  }
  // retrieve the tickets from the backend
  loadTickets = async () => {
    const data = await firebase
      .database()
      .ref(`all-tickets/ticket-${this.state.uid}`)
      .once("value");
    const elements = [];
    data.forEach(element => {
      elements.push(element.val());
    });
    const datas = data.val();
    this.setState({
      tickets: [...this.state.tickets, ...elements]
    });
  };

  customNavBar = () => {
    return (
      <View style={styles.navBar}>
        <Icon
          style={styles.navBarButton}
          name={"arrow-left"}
          size={24}
          onPress={() => {
            this.toggleImageDisplay();
          }}
        />
        <Text style={styles.navBarHeader}>{"Mes tickets"}</Text>
        <Icon style={styles.navBarButton} name={""} size={24} />
      </View>
    );
  };
  toggleImageDisplay = () => {
    if (this.state.imageShouldDisplay) {
      this.setState({ imageShouldDisplay: false });
    } else this.setState({ imageShouldDisplay: true });
  };

  renderImage = () => {
    if (this.state.imageShouldDisplay) {
      return (
        <View>
          {this.customNavBar()}
          <Image
            style={{ height: 700, width: 400 }}
            source={{
              uri:
                "https://firebasestorage.googleapis.com/v0/b/photo-ticket-app.appspot.com/o/images%2Fuser_V68h7qVsHiWsIyLcx0T0pC2qrfQ2%2F1525703435698?alt=media&token=6b297c99-88a8-4417-9cc1-3e3df7843e97"
            }}
          />
        </View>
      );
    }
  };
  renderTickets = () => {
    if (!this.state.imageShouldDisplay) {
      return this.state.tickets.map(ticket => {
        return (
          <View key={ticket.createdAt}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => this.toggleImageDisplay()}
            >
              <Image
                style={{ width: 55, height: 55 }}
                source={{
                  uri:
                    "https://firebasestorage.googleapis.com/v0/b/photo-ticket-app.appspot.com/o/images%2Fuser_V68h7qVsHiWsIyLcx0T0pC2qrfQ2%2F1525703435698?alt=media&token=6b297c99-88a8-4417-9cc1-3e3df7843e97"
                }}
              />
            </TouchableOpacity>
            <Text style={styles.text}>{ticket.data.art}</Text>
            <Text style={styles.text}>
              {"Date: "}
              {moment(ticket.createdAt).format("YYYY/MM/DD")}
            </Text>
            <Text style={styles.text}>
              {"Résumé: "}
              {ticket.data.résumé}
            </Text>
          </View>
        );
      });
    }
  };
  renderTicketsContainer = () => {
    if (!this.state.imageShouldDisplay) {
      return (
        <View>
          <Header title="Mes tickets" navigation={this.props.navigation} />
          <ScrollView>
            <View style={styles.content}>
              {/* <Text style={styles.text}>MY TICKETS</Text> */}
              {this.state.tickets.length && this.renderTickets()}
            </View>
          </ScrollView>
        </View>
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderTicketsContainer()}
        {this.renderImage()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    ...material.titleObject,
    color: iOSColors.black,
    ...systemWeights.light
  },

  navBar: {
    flexDirection: "row",
    paddingTop: 30,
    height: 64,
    backgroundColor: "#ec2326"
  },
  navBarButton: {
    color: "#FFFFFF",
    textAlign: "center",
    width: 64
  },
  navBarHeader: {
    flex: 1,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18
  }
});
