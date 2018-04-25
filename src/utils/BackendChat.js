import firebase from 'react-native-firebase'
const database = firebase.database()
// class BackendChat {

//   constructor() {
//     firebase.auth().onAuthStateChanged(user => {
//       if (user) {
//         this.setUid(user.uid)
//       } else {
//         firebase
//           .auth()
//           .signInAnonymously()
//           .catch(error => {
//             alert(error.message)
//           })
//       }
//     })
//   }
//   setUid(value) {
//     this.uid = value
//   }
//   getUid() {
//     return this.uid
//   }

// get user infos

export async function getUid() {
  const { currentUser } = await firebase.auth()
  let uid = currentUser.email.replace(/\.|@/g, '')
  return uid
}

// retrieve the messages from the backend
export function loadMessages(callback) {
  let uid = getUid()
  let messagesRef = firebase.database().ref('chat')
  //   messagesRef.off()
  const onReceive = data => {
    const message = data.val()
    callback({
      _id: data.key,
      text: message.text,
      createdAt: new Date(message.createdAt),
      user: {
        _id: message.user._id,
        name: message.user.name,
      },
    })
  }
  messagesRef.limitToLast(20).on('child_added', onReceive)
}

// send the message to the Backend
export function sendMessage(message) {
  let messagesRef = firebase.database().ref('chat')
  for (let i = 0; i < message.length; i++) {
    messagesRef.push({
      text: message[i].text,
      user: message[i].user,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
    })
  }
}

// close the connection to the backend
export function closeChat() {
  let messagesRef = firebase.database().ref('chat')
  if (this.messagesRef) {
    this.messagesRef.off()
  }
}
