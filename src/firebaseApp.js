
import firebase from 'firebase'
import {config} from './firebaseConfig'
  // Initialize Firebase



export const firebaseApp = firebase.initializeApp(config)

export const eventsRef = firebaseApp.database().ref().child('events')

export const musicsRef = firebaseApp.database().ref().child('musics')
