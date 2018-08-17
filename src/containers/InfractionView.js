import React from "react";

import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Button,
  Image,
  ActivityIndicator
} from "react-native";
import { material, iOSColors, systemWeights } from "react-native-typography";
import Icon from "react-native-vector-icons/FontAwesome";
import firebase from "react-native-firebase";
import Header from "../components/Header";
import BackendChat from "../utils/BackendChat";
import polyglot from "../utils/translator";
// import Accordion from "react-native-collapsible/Accordion";
import Accordion from "../components/Accordion";
import AutoHeightImage from "react-native-auto-height-image";

const storage = firebase.storage();

export default class InfractionView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      uid: BackendChat.getUid(),
      imageURL: "",
      sketchURL: ""
    };
    this.sketchDownloadURL();
  }
  sketchDownloadURL = () => {
    storage
      .ref()
      .child(`sketchs/${this.props.data.image}`)
      .getDownloadURL()
      .then(url => this.setState({ sketchURL: url }));
  };
  saveData = async uri => {
    await this.uploadTicketToStorage(uri);
    await this.uploadTicketToDB();
  };
  uploadTicketToStorage = async (uri, mime = "image/jpg") => {
    this.setState({ isLoading: true });
    const sessionId = new Date().getTime();
    const imageRef = storage
      .ref(`images/user_${this.state.uid}`)
      .child(`${sessionId}`);
    await imageRef.put(uri, { contentType: mime });
    const imageURL = await imageRef.getDownloadURL();
    this.setState({ imageURL: imageURL, isLoading: false });
  };
  uploadTicketToDB = async () => {
    let ticketRef = firebase
      .database()
      .ref(`all-tickets/ticket-${this.state.uid}`);
    await ticketRef.push({
      imageURL: this.state.imageURL,
      user: this.state.uid,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
      data: this.props.data
    });
  };
  ifNoText = text => (text ? text : polyglot.t("noText"));
  renderLoadingView = () => {
    if (this.state.isLoading) {
      return (
        <View style={styles.loader}>
          <Text>Sauvegarde en cours</Text>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  };

  loopThroughData = data => {
    for (var property in data) {
      if (data.hasOwnProperty(property)) {
        return (
          <Accordion title={polyglot.t("offence")} expand={false}>
            <Text style={styles.text}>{data[property]}</Text>
          </Accordion>
        );
      }
    }
  };
  renderInfraction = () => {
    let { navigation, data } = this.props;

    if (!this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Header
            title="Infraction"
            // title={polyglot.t("offence")}
            navigation={navigation}
            reset={this.props.reset}
          />
          <ScrollView>
            <Text style={styles.headerText}>
              {data.art + polyglot.t("of") + data.source}
            </Text>
            {/* <View>{this.loopThroughData(this.props.data)}</View> */}
            <View style={data.infraction ? styles.show : styles.hide}>
              <Accordion title={polyglot.t("offence")} expand={false}>
                <Text style={styles.text}>{data.infraction}</Text>
              </Accordion>
            </View>
            <View style={data.conditions ? styles.show : styles.hide}>
              <Accordion title={polyglot.t("elements")} expand={true}>
                <Text style={styles.text}>{data.conditions}</Text>
              </Accordion>
            </View>
            <View style={data.exceptions ? styles.show : styles.hide}>
              <Accordion title="Exceptions" expand={false}>
                <Text style={styles.text}>{data.exceptions}</Text>
              </Accordion>
            </View>
            <View style={data.point ? styles.show : styles.hide}>
              <Accordion title="Points" expand={false}>
                <Text style={styles.text}>{data.point}</Text>
              </Accordion>
            </View>
            <Accordion title="Image" expand={true}>
              <AutoHeightImage
                width={100}
                source={{
                  uri: this.state.sketchURL
                    ? this.state.sketchURL
                    : "https://firebasestorage.googleapis.com/v0/b/photo-ticket-app.appspot.com/o/sketchs%2FNo_image_available.png?alt=media&token=e97ddded-68a3-47ab-9961-0f0d76caf516"
                }}
              />
            </Accordion>
            <Accordion title={polyglot.t("law")} expand={false}>
              <Text style={styles.text}>{data.loi}</Text>
            </Accordion>

            {/* <View style={styles.saveOrDiscard}>
              <Icon
                style={styles.icon}
                name="save"
                size={34}
                onPress={() => this.saveData(this.props.imagePath)}
              />
              <Icon
                style={styles.icon}
                name="trash-o"
                size={34}
                onPress={() => {}}
              />
            </View> */}
            <Button
              title={polyglot.t("freeConsultation")}
              onPress={() => navigation.navigate("UserInfos")}
            />
          </ScrollView>
        </View>
      );
    }
  };
  render() {
    return (
      <View style={styles.container}>
        {this.renderLoadingView()}
        {this.renderInfraction()}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  paragraph: {
    paddingBottom: 25,
    marginBottom: 35
  },
  content: {
    flex: 1,
    justifyContent: "center",
    padding: 15
    // alignItems: 'center',
  },
  show: {
    display: "flex"
  },
  hide: {
    display: "none"
  },
  text: {
    // ...material.titleObject,
    color: iOSColors.black,
    // ...systemWeights.light,
    fontSize: 14
  },
  headerText: {
    ...material.titleObject,
    color: iOSColors.black,
    ...systemWeights.semibold,
    fontSize: 16,
    textAlign: "center"
  },
  icon: {
    color: "#ec2326"
  },
  saveOrDiscard: {
    marginTop: 30,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  header: {
    backgroundColor: "#ec2326",
    padding: 10
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
