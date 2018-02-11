import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import * as actions from './actions'
import * as getters from './getters'

// Store modules
import auth from './modules/auth'
import register from './modules/register'
import users from './modules/users'
import wallet from './modules/wallet'
import modals from './modules/modals'
import admin from './modules/admin'

// Modules with persistent states
import userCredentials from './modules/userCredentials'
import persistentState from './modules/persistentState'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      key: 'pluggystate',
      getState: key => Cookies.getJSON(key),
      setState: (key, state) => Cookies.set(key, state, { expires: 14 }),
      paths: ['userCredentials', 'persistentState']
    })
  ],
  actions,
  getters,
  modules: {
    auth,
    admin,
    register,
    userCredentials,
    persistentState,
    users,
    wallet,
    modals
  }
})
