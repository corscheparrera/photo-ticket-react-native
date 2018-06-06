import axios from "axios";
import firebase from "react-native-firebase";

const database = firebase.database();

class BackendChat {
  constructor() {
    firebase.auth().onAuthStateChanged(user => {
      this.setUid(user.uid);
    });
  }
  setUid(value) {
    this.uid = value;
  }
  getUid() {
    return this.uid;
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
        createdAt: new Date(message.createdAt),
        user: {
          _id: message.user._id,
          name: message.user.name
        }
      });
    };
    messagesRef.limitToLast(20).on("child_added", onReceive);
  }

  async notifyLawyer() {
    try {
      const chatID = this.getUid();
      await axios.post("http://192.168.0.126:5000/send-email", { id: chatID });
      // await axios.post('http://192.168.2.11:5000/send-email', {id:chatID})
    } catch (error) {
      console.log(error);
    }
  }
  // send the message to the Backend
  async sendMessage(message) {
    const uid = await this.getUid();
    await this.notifyLawyer(uid);
    let messagesRef = firebase.database().ref(`allChat/chat${this.uid}`);
    for (let i = 0; i < message.length; i++) {
      messagesRef.push({
        text: message[i].text,
        user: message[i].user,
        createdAt: firebase.database.ServerValue.TIMESTAMP
      });
    }
  }

  // close the connection to the backend
  closeChat() {
    let messagesRef = firebase.database().ref("chat");
    if (this.messagesRef) {
      this.messagesRef.off();
    }
  }
}

export default new BackendChat();
