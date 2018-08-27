import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from "react-native";

import BadFocus from "./BadFocus";
import CamView from "./CamView";
import ShowPhotoInstructions from "./ShowPhotoInstructions";
import ConfirmPicView from "./ConfirmPicView";
import InfractionView from "./InfractionView";
import ArticleConfirmation from "./ArticleConfirmation";
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
  matchedArticle: "",
  cameraIsOpen: false,
  showInstructions: false,
  showMainMenu: true,
  showCam: false,
  showPhotoConfirmation: false,
  showArticleConfirmation: false,
  showLoading: false,
  showBadFocus: false,
  showInfractions: false
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

  showInstructions = () => {
    this.setState({
      showMainMenu: false,
      showInstructions: true
    });
  };

  showCam = () => {
    this.setState({
      showInstructions: false,
      showCam: true
    });
  };

  closeCam = () => {
    this.setState({
      cameraIsOpen: false
    });
  };

  showPhotoConfirmation = () => {
    this.setState({
      showCam: false,
      showPhotoConfirmation: true
    });
  };

  closePhotoConfirmation = () => {
    this.setState({
      showPhotoConfirmation: false
    });
  };

  showLoading = () => {
    this.setState({
      showPhotoConfirmation: false,
      showLoading: true
    });
  };

  showInfractions = () => {
    this.setState({
      showArticleConfirmation: false,
      showInfractions: true
    });
  };

  showBadFocus = () => {
    this.setState({
      showLoading: false,
      showBadFocus: true
    });
  };

  closeBadFocus = () => {
    this.setState({
      showBadFocus: false
    });
  };

  getImageUrl = data => {
    this.setState({ imagePath: data.path });
    this.showPhotoConfirmation();
  };

  confirmedImage = () => {
    this.showLoading();
    this.useImage(this.state.imagePath);
  };

  discardPicture = () => {
    this.closePhotoConfirmation();
    this.showCam();
  };

  retryPicture = () => {
    this.closeBadFocus();
    this.showCam();
  };

  uploadImageToFirebase = async uri => {
    // Prepare Blob support
    const Blob = RNFetchBlob.polyfill.Blob;
    const fs = RNFetchBlob.fs;
    GLOBAL.XMLHttpRequest =
      GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest; // Working
    // window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest; // Can't see network logs
    window.Blob = Blob;
    console.log(uri);
    const sessionId = new Date().getTime();
    const imageRef = storage.ref("GoogleVisionImages").child(`${sessionId}`);
    await imageRef.put(uri, { contentType: "image/jpg" });
    const imageURL = await imageRef.getDownloadURL();
    console.log(imageURL);
    return imageURL;
  };

  sendURItoServer = async imageURI => {
    console.log("FETCHING OCR");
    let response = await axios.post("/google-ocr", {
      linkToImg: imageURI
    });
    console.log("this is the response", response);
    return response;
  };

  processResFromGoogleVision = async response => {
    console.log("processing response", response);
    try {
      let articleDetails = parseData(response);
      console.log("articleDetails", articleDetails);
      if (articleDetails) {
        this.setState(
          {
            matchedArticle: {
              ...articleDetails
            }
          },
          this.showArticleConfirmation()
        );
      } else {
        // Si OCR reconnait le titre mais qu'il contient trop de fautes
        this.showBadFocus();
      }
    } catch (err) {
      // Si OCR ne reconnait pas de texte OU autre
      console.log("erreur :", err);
      console.log(err);
      this.showBadFocus();
    }
  };

  useImage = async uri => {
    let imageURI = await this.uploadImageToFirebase(uri);
    let response = await this.sendURItoServer(imageURI);
    await this.processResFromGoogleVision(response);
  };

  showArticleConfirmation = () => {
    this.setState({
      showLoading: false,
      showArticleConfirmation: true
    });
  };

  articleWasConfirmed = () => {
    this.showInfractions();
  };

  render() {
    const {
      showBadFocus,
      showInstructions,
      showMainMenu,
      showCam,
      showPhotoConfirmation,
      showLoading,
      showInfractions,
      currentUser,
      imagePath,
      matchedArticle,
      showArticleConfirmation
    } = this.state;

    return showMainMenu ? (
      <MainMenu
        navigation={this.props.navigation}
        currentUser={currentUser}
        showInstructions={this.showInstructions}
      />
    ) : showInstructions ? (
      <ShowPhotoInstructions
        navigation={this.props.navigation}
        showCam={this.showCam}
        reset={this.reset}
      />
    ) : showCam ? (
      <CamView
        getImageUrl={this.getImageUrl}
        navigation={this.props.navigation}
        closeCam={this.closeCam}
        reset={this.reset}
      />
    ) : showPhotoConfirmation ? (
      <ConfirmPicView
        uri={imagePath}
        confirmedImage={this.confirmedImage}
        discardPicture={this.discardPicture}
      />
    ) : showLoading ? (
      // <ProgressBar />
      <View style={styles.loader}>
        <Text>{polyglot.t("inProgress")}</Text>
        <ActivityIndicator size="large" />
      </View>
    ) : showArticleConfirmation ? (
      <ArticleConfirmation
        art={matchedArticle.art}
        source={matchedArticle.source}
        navigation={this.props.navigation}
        articleWasConfirmed={this.articleWasConfirmed}
      />
    ) : showBadFocus ? (
      <BadFocus
        retryPicture={this.retryPicture}
        navigation={this.props.navigation}
        reset={this.reset}
      />
    ) : showInfractions ? (
      <InfractionView
        data={matchedArticle}
        navigation={this.props.navigation}
        imagePath={imagePath}
        reset={this.reset}
      />
    ) : (
      console.log("rien à afficher")
    );
  }
}
const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
