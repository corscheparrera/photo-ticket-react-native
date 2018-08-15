import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

import BadFocus from "./BadFocus";
import CamView from "./CamView";
import ConfirmPicView from "./ConfirmPicView";
import InfractionView from "./InfractionView";

import MainMenu from "./MainMenu";
import RNFetchBlob from "react-native-fetch-blob";
import React from "react";
import axios from "../utils/axios";
import firebase from "react-native-firebase";
import { parseData } from "../utils/OcrResponseProcessing";
import polyglot from "../utils/translator";
const storage = firebase.storage();

const initialState = {
  currentUser: null,
  imagePath: "",
  isLoading: false,
  formattedText: "",
  badFocus: false,
  cameraIsOpen: false
};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  reset = () => this.setState(initialState);

  componentDidMount() {
    const { currentUser } = firebase.auth();

    this.setState({ currentUser });
  }

  openCam = () => {
    this.setState({
      cameraIsOpen: true
    });
  };
  closeCam = () => {
    this.setState({
      cameraIsOpen: false
    });
  };
  getUrl = data => {
    this.setState({ imagePath: data.path });
  };

  confirmedImage = () => {
    this.setState({ isLoading: true });
    this.uploadImage(this.state.imagePath);
  };
  discardPicture = () => {
    this.setState({ imagePath: "" });
  };
  retryPicture = () => {
    this.setState({
      imagePath: "",
      badFocus: false
    });
  };

  uploadImage = async uri => {
    // Prepare Blob support
    const Blob = RNFetchBlob.polyfill.Blob;
    const fs = RNFetchBlob.fs;

    GLOBAL.XMLHttpRequest =
      GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest; // Working
    // window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest; // Can't see network logs
    window.Blob = Blob;

    try {
      console.log(uri);

      const sessionId = new Date().getTime();
      const imageRef = storage.ref("GoogleVisionImages").child(`${sessionId}`);

      await imageRef.put(uri, { contentType: "image/jpg" });
      const imageURL = await imageRef.getDownloadURL();
      console.log(imageURL);
      // console.log(base64image);
      // let base64image = await fs.readFile(uri, "base64");
      console.log("FETCHING OCR");

      let response = await axios.post("/google-ocr", {
        linkToImg: imageURL
      });

      console.log(response);

      let textIsOk = parseData(response);
      console.log(textIsOk);

      if (textIsOk) {
        this.setState({
          formattedText: {
            ...textIsOk
          },
          isLoading: false
        });
      } else {
        // Si OCR reconnait le titre mais qu'il contient trop de fautes
        this.setState({
          badFocus: true,
          isLoading: false
        });
      }
    } catch (err) {
      // Si OCR ne reconnait pas de texte OU autre
      console.log("erreur :", err);
      console.log(err);
      this.setState({
        badFocus: true,
        isLoading: false
      });
    }
  };

  displayView = () => {
    if (!this.state.cameraIsOpen) {
      return "Main Menu";
    } else if (!this.state.imagePath) {
      return "Cam View";
    } else if (!this.state.cameraIsOpen) {
      return "Legal";
    } else if (
      !this.state.isLoading &&
      !this.state.badFocus &&
      !this.state.formattedText
    ) {
      return "Confirm Pic View";
    } else if (this.state.isLoading) {
      return "Loading";
    } else if (this.state.badFocus) {
      return "Bad Focus";
    } else return "InfractionView";
  };

  render() {
    switch (this.displayView()) {
      case "Main Menu":
        return (
          <MainMenu
            navigation={this.props.navigation}
            currentUser={this.state.currentUser}
            openCam={this.openCam}
          />
        );

      case "Cam View":
        return (
          <CamView
            getUrl={this.getUrl}
            navigation={this.props.navigation}
            closeCam={this.closeCam}
          />
        );
      case "Confirm Pic View":
        return (
          <ConfirmPicView
            uri={this.state.imagePath}
            confirmedImage={this.confirmedImage}
            discardPicture={this.discardPicture}
          />
        );
      case "Loading":
        return (
          <View style={styles.loader}>
            <Text>{polyglot.t("inProgress")}</Text>
            <ActivityIndicator size="large" />
          </View>
        );
      case "Bad Focus":
        return (
          <BadFocus
            retryPicture={this.retryPicture}
            navigation={this.props.navigation}
            reset={this.reset}
          />
        );
      default:
        return (
          <InfractionView
            data={this.state.formattedText}
            navigation={this.props.navigation}
            imagePath={this.state.imagePath}
            reset={this.reset}
          />
        );
    }
  }
}
const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
