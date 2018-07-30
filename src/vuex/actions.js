import * as types from './mutation-types.js'
import {firebaseApp} from '../firebaseApp'

export const signIn = ({commit}, user_payload) => {
  commit(types.SIGN_IN, user_payload)
}

export const signOut = ({commit}) => {
  commit(types.SIGN_OUT)
}

export const setEvent = ({commit}, events_payload) => {
  commit(types.SET_EVENTS, events_payload)
}

export const changeTitle = ({commit},payload) => {
  commit(types.SET_TITLE, payload)
}

export const deleteEvent = ({commit},{index,id}) => {
  firebaseApp.database().ref().child('events').child(id).remove()
  console.log(id)
  commit(types.DELETE_EVENT, index)
}
