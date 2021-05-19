import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB9VvsCMEBhraiovsWXISPg-a4GFsJ5mYA",
    authDomain: "crud-slopez.firebaseapp.com",
    projectId: "crud-slopez",
    storageBucket: "crud-slopez.appspot.com",
    messagingSenderId: "992933079341",
    appId: "1:992933079341:web:32ad9d507be0e3c6dacba4"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)