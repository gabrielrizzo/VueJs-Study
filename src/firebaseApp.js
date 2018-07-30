
import firebase from 'firebase'
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyAjP9DVjiCYdmxxJJ1aCl-ZXW5xWDy5VAc",
    authDomain: "turnup-61f78.firebaseapp.com",
    databaseURL: "https://turnup-61f78.firebaseio.com",
    projectId: "turnup-61f78",
    storageBucket: "turnup-61f78.appspot.com",
    messagingSenderId: "1081971011846"
  };


export const firebaseApp = firebase.initializeApp(config)

export const eventsRef = firebaseApp.database().ref().child('events')
