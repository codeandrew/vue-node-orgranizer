import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


export const store = new Vuex.Store({
  state : {
    loggedTask : [],
  },
  actions : {
    addNewTask : ({ commit }, payload) => {
      commit('setNewTask', payload )
    }
  },
  mutations : {
    setNewTask : ( state, list ) => {
      state.loggedTask = list
    }

  },
  getters : {

  }

});
