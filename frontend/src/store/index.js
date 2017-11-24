import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex);


export const store = new Vuex.Store({
  state : {
    loggedTask : [],
    isAuthenticated : false,
  },
  actions : {
    addNewTask : ({ commit }, payload) => {
      commit('setNewTask', payload )
    },
    verifyAuthentication : ({ commit }) => {
      let token = {
        token: localStorage.getItem('token')
      };
      let headers = { "Content-Type": "application/json" };
      axios.post('http://localhost:9000/auth/verify', token, {headers: headers})
        .then(response => {
          return (response.data.code) ? true : false
        })
        .catch(error => {
          console.error(error);
        });
    },
    login : ({ commit }, payload) => {
      let user = JSON.stringify(payload);
      let headers = { "Content-Type": "application/json"};
      console.log(user);
      axios.post('http://localhost:9000/auth', user, {headers: headers})
        .then(response => {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('u', JSON.stringify(response.data.user));
          router.push('/project');
        })
        .catch(error => {
          console.log(error);
        });
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
