import Vue from 'vue'
import Vuex from 'vuex'
import {mutations} from './mutations.js'
import * as actions from './actions.js'
import getters from './getters.js'

Vue.use(Vuex)

const state = {
  user: {

  },
  events: [],
  title:'Test',
  musics: []
}




export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
