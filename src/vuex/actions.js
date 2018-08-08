import * as types from './mutation-types.js'
import {firebaseApp, musicsRef} from '../firebaseApp'

export const signIn = ({commit}, user_payload) => {
  commit(types.SIGN_IN, user_payload)
}

export const signOut = ({commit}) => {
  commit(types.SIGN_OUT)
  firebaseApp.auth().signOut()
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

export const setMusic = ({commit}, music_payload) => {
  musicsRef.push(music_payload)
  //commit(types.SET_MUSIC, music_payload) Não é usado aqui pq o firebase manda sempre os objs denovo qnd algo é alterado
  // Se não tivesse essa questão ativa, precisaria usar isso para mostrar em tempo real ao usuário oq foi inserido
}

export const setAllMusic = ({commit}, music_payload) => {
  musicsRef.on('value', snap =>{
    let musics =[]
    snap.forEach(music => {
      let music_temp = music.val()
      music_temp.id = music.key
      musics.push(music_temp)
    })
    commit(types.SET_ALL_MUSIC,musics)
  })

}
