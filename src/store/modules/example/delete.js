import model from '@/api/projects'
import { errorToObj } from '@/helpers'
import store from '@/store'

// Remember to update resetState mutation
const state = {
  sub: {
    status: null,
    error: false,
    fieldErrors: {},
    successMsg: 'Project was deleted successfully.',
    loading: false,
    loadingId: null,
    unauthorized: null,
    unverified: null,
    notfound: false,
  }
}

// getters
const getters = {
  status: state => state.sub.status,
  error: state => state.sub.error,
  fieldErrors: state => state.sub.fieldErrors,
  notfound: state => state.sub.notfound,
  unauthorized: state => state.sub.unauthorized,
  unverified: state => state.sub.unverified,
  successMsg: state => state.sub.successMsg,
  loading (state) {
    return function (id) {
      if (id === state.sub.loadingId) {
        return state.sub.loading
      }
      return false
    }
  },
  loadingId: state => state.sub.loadingId,
}

// actions
const actions = {
  deleteProject ({ dispatch, commit, state }, args) {
    commit('loading', args.id);

    return model.deleteIt(args)
    .then((result) => {
      if (result.error === undefined) {
        commit('success');
        // dispatch('projects/getCelebProjects', store.state.auth.sub.token, {root: true}).then(function () {
        // });
        commit('clearErrors');

        // Use response body
        const data = result.data

        commit('notLoading', args.id);
        return true;
      }
      // else
      commit('failure');
      if (result.unauthorized) {
        commit('isAuthError');
      }
      commit('setVerification', result.unverified);
      commit('setNotFound', result.notfound);

      // Turn field errors to obj instead of array
      let dat;
      try {
        dat = errorToObj(result.data)
      } catch (TypeError) {
        // Do Nada
      }

      commit('setFieldErrors', dat);

      commit('setError', result.error);
      commit('notLoading', args.id);
      return false;
    })
  },
  clearErrors ({ commit, state }) {
    commit('clearErrors');
  },
  clearFieldErrors ({ commit, state }) {
    commit('clearErrors');
  },
  resetState ({ commit, state }) {
    commit('resetState');
  },
}

// mutations
const mutations = {
  loading (state, id) {
    state.sub.loading = true
    state.sub.loadingId = id
  },

  notLoading (state, id) {
    state.sub.loading = false
    state.sub.loadingId = id
  },

  setError (state, error) {
    state.sub.error = error;
  },

  setFieldErrors (state, error) {
      state.sub.fieldErrors = error || {}
  },

  setVerification (state, val) {
    state.sub.unverified = val;
  },

  resetState (state) {
    state.sub = {
      status: null,
      error: false,
      fieldErrors: {},
      successMsg: 'Project was deleted successfully.',
      loading: false,
      loadingId: null,
      unauthorized: null,
      unverified: null,
      notfound: false,
    };
  },

  clearErrors (state) {
    state.sub.fieldErrors = false;
    state.sub.error = false;
    state.sub.status = null;
  },

  clearFieldErrors (state) {
    state.sub.fieldErrors = false;
  },

  success (state) {
    state.sub.status = true;
  },

  setNotFound (state, val) {
    state.sub.notfound = val;
  },

  isAuthError (state) {
    state.sub.unauthorized = true;
  },

  notAuthError (state) {
    state.sub.unauthorized = false;
  },

  failure (state) {
    state.sub.status = false;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
