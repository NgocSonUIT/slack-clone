import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhkzScE5tGJTipd3x-EIEqMIPO_5eXk2Q",
  authDomain: "slack-clone-db7fe.firebaseapp.com",
  projectId: "slack-clone-db7fe",
  storageBucket: "slack-clone-db7fe.appspot.com",
  messagingSenderId: "1031210380123",
  appId: "1:1031210380123:web:e00b7ea426099526b0c87e",
  measurementId: "G-LHG4VH5GD9"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
