import model from '@/api/projects'
import { errorToObj } from '@/helpers'
import store from '@/store'

// Remember to update resetState mutation
const state = {
  sub: {
    status: null,
    error: false,
    fieldErrors: {},
    successMsg: 'Project was edited successfully.',
    loading: false,
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
  loading: state => state.sub.loading,
}

// actions
const actions = {
  editProject ({ dispatch, commit, state }, dargs) {
    // Loading
    if (dargs.noLoad !== true) {
      commit('loading')
    } else if (dargs.loader) {
      const load = dargs.loader.load
      dispatch(load.namespace, load.args, { root: true }).then(() => {
      });
    }

    return model.edit(dargs)
    .then((result) => {
      if (result.error === undefined) {
        commit('success');
        // dispatch('projects/getCelebProjects', store.state.auth.sub.token, {root: true}).then(function () {
        // });
        commit('clearErrors');

        // Use response body
        const data = result.data

        // Not Loading
        if (dargs.noLoad !== true) {
          commit('notLoading')
        } else if (dargs.loader) {
          const load = dargs.loader.stopLoading
          dispatch(load.namespace, load.args, { root: true }).then(() => {
          });
        }
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
      const fieldErrors = result.data;

      commit('setFieldErrors', fieldErrors);

      commit('setError', result.error);

      // Not Loading
      if (dargs.noLoad !== true) {
        commit('notLoading')
      } else if (dargs.loader) {
        const load = dargs.loader.stopLoading
        dispatch(load.namespace, load.args, { root: true }).then(() => {
        });
      }
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
  loading (state) {
    state.sub.loading = true;
  },

  notLoading (state) {
    state.sub.loading = false;
  },

  setError (state, error) {
    state.sub.error = error;
  },

  setFieldErrors (state, error) {
      state.sub.fieldErrors = error || {}
  },

  resetState (state) {
    state.sub = {
      status: null,
      error: false,
      fieldErrors: {},
      successMsg: 'Project was edited successfully.',
      loading: false,
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

  setVerification (state, val) {
    state.sub.unverified = val;
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
