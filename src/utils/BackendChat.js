import axios from "../utils/axios";
import firebase from "react-native-firebase";
import polyglot from "../utils/translator";
class BackendChat {
  constructor() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setUid(user.uid);
        this.setEmail(user.email);
      }
    });
  }
  greeting = async () => {
    let ref = firebase.database().ref(`allChat/chat${this.uid}`);
    let snapshot = await ref.once("value");
    const infos = snapshot.val();
    if (infos == null) {
      let messagesRef = firebase.database().ref(`allChat/chat${this.uid}`);
      await messagesRef.push({
        text: polyglot.t("greetings"),
        image:
          "https://firebasestorage.googleapis.com/v0/b/photo-ticket-app.appspot.com/o/Divers%2Fmarc_avatar.png?alt=media&token=4c16fd37-f4b7-4cc7-96e8-897649d43fcf",
        user: { email: "Maître Harvey" },
        createdAt: firebase.database.ServerValue.TIMESTAMP
      });
    }
  };

  setUid(value) {
    this.uid = value;
  }
  setEmail(value) {
    this.email = value;
  }
  getUid() {
    return this.uid;
  }
  getEmail() {
    return this.email;
  }

  // retrieve the messages from the backend
  loadMessages(callback) {
    let messagesRef = firebase.database().ref(`allChat/chat${this.uid}`);
    //   messagesRef.off()
    const onReceive = data => {
      const message = data.val();
      callback({
        _id: data.key,
        text: message.text,
        image: message.image,
        createdAt: new Date(message.createdAt),
        user: {
          _id: message.user._id,
          email: message.user.email
        }
      });
    };
    messagesRef.limitToLast(20).on("child_added", onReceive);
  }

  async notifyLawyer() {
    try {
      const chatID = this.uid;
      await axios.post("/send-email", {
        id: chatID
      });
    } catch (error) {
      console.log(error);
    }
  }

  // send the message to the Backend
  async sendMessage(message) {
    console.log("sendMessage1");
    let messagesRef = firebase.database().ref(`allChat/chat${this.uid}`);
    console.log("sendMessage2");
    let usersRef = firebase.database().ref(`allUsers/${this.uid}`);
    console.log("sendMessage3");
    for (let i = 0; i < message.length; i++) {
      await messagesRef.push({
        text: message[i].text,
        user: message[i].user,
        createdAt: firebase.database.ServerValue.TIMESTAMP
      });
      console.log("sendMessage4");
      await usersRef.update({
        lastOnline: firebase.database.ServerValue.TIMESTAMP
      });
    }
    this.notifyLawyer(this.uid);
  }

  // close the connection to the backend
  closeChat() {
    let messagesRef = firebase.database().ref("chat");
    if (messagesRef) {
      messagesRef.off();
    }
  }
}

export default new BackendChat();
