import * as types from './mutation-types'

export const mutations = {
  [types.SIGN_IN] (state,user_payload) {
    state.user = user_payload
  },
  [types.SIGN_OUT] (state) {
    state.user = {}
  },
  [types.SET_EVENTS] (state, events_payload) {
    state.events = events_payload
  },
  [types.SET_TITLE] (state,payload) {
    state.title = payload
  },
  [types.DELETE_EVENT] (state, index) {
    state.events.splice(index,1)
  },
  [types.SET_MUSIC] (state,music_payload) {
    state.musics.push(music_payload)
  },
  [types.SET_ALL_MUSIC] (state, music_payload) {
      state.musics=music_payload
  }

}
