import { userTypes } from '@/constants';

// Remember to update resetState mutation
const state = {
  sub: {
    user: {},
    isAuth: false,
    isClientAuth: false,
    isDeveloperAuth: false,
    isProjectManagerAuth: false,
    token: null,
    loading: false,
  }
}

// getters
const getters = {
  user: state => state.sub.user,
  // userid: state => state.sub.userid,
  isAuth: state => state.sub.isAuth,
  isClientAuth: state => state.sub.isClientAuth,
  isDeveloperAuth: state => state.sub.isDeveloperAuth,
  isProjectManagerAuth: state => state.sub.isProjectManagerAuth,
  token: state => state.sub.token,
  loading: state => state.sub.loading,
}

// actions
const actions = {
  logout ({ dispatch, commit, state }, args) {
    /**
     * Log a user out by clearing credentials from state and cookies
     */
    commit('loading');

    commit('logout');

    commit('notLoading');
    return true;
  },

  setToken ({ dispatch, commit, state }, token) {
    /**
     * Save the user's token in state
     */
    commit('setToken', token);
    return true;
  },

  setUser ({ dispatch, commit, state }, user) {
    /**
     * Save the user's details in state
     */
    commit('setUser', user);
    return true;
  },

  setAuthenticated ({ dispatch, commit, state }, type) {
    /**
     * Register that a user has been authenticated and set the type of user that was authenticated
     */
    commit('isAuthenticated');

    commit('setAuthenticatedType', type);
    return true;
  },

  callWithToken ({ dispatch, commit, state }, dargs) {
    /**
     * Add token to the parameters of store call and return the promise
     * 
     * @param Object {
     *    parameters: {}, 
     *    action: function
     * }
     * @returns Promise
     */

    const params = dargs.parameters;
    const storeAction = dargs.action;
    const token = state.sub.token;

    // Add token to args
    params.token = token;
    // Call action and return promise
    return storeAction(params);
  },
}

// mutations
const mutations = {
  loading (state) {
    state.sub.loading = true
  },

  notLoading (state) {
    state.sub.loading = false
  },

  setToken (state, val) {
    state.sub.token = val || null;
  },

  setUser (state, val) {
    state.sub.user = val || {};
  },

  isAuthenticated (state) {
    state.sub.isAuth = true;
  },

  setAuthenticatedType (state, type) {
    if (type === userTypes.client.id) {
      state.sub.isClientAuth = true;
      state.sub.isDeveloperAuth = false;
      state.sub.isProjectManagerAuth = false;
    } else if (type === userTypes.developer.id) {
      state.sub.isDeveloperAuth = true;
      state.sub.isClientAuth = false;
      state.sub.isProjectManagerAuth = false;
    } else if (type === userTypes.projectManager.id) {
      state.sub.isProjectManagerAuth = true;
      state.sub.isDeveloperAuth = false;
      state.sub.isClientAuth = false;
    }
  },

  logout (state) {
    state.sub.token = null;
    state.sub.user = {};
    state.sub.isAuth = false;
    state.sub.isDeveloperAuth = false;
    state.sub.isClientAuth = false;
    state.sub.isProjectManagerAuth = false;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
