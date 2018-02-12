import api from '@/api/admin'

// Remember to update resetState mutation
const state = {
  sub: {
    error: false,
    success: false,
    fieldErrors: {},
    successMsg: 'Profile updated',
    loading: false,
    unauthorized: null,
    unverified: null,
    fees: [],
    notfound: false,
  },
}

// getters
const getters = {
  error: state => state.sub.error,
  success: state => state.sub.success,
  fieldErrors: state => state.sub.fieldErrors,
  notfound: state => state.sub.notfound,
  unauthorized: state => state.sub.unauthorized,
  unverified: state => state.sub.unverified,
  successMsg: state => state.sub.successMsg,
  loading: state => state.sub.loading,
  fees: state => state.sub.fees,
}

// actions
const actions = {
  getFees ({ dispatch, commit, state }, dargs) {
    // Loading
    if (dargs.noLoad !== true) {
      // commit('loading')
    } else if (dargs.loader) {
      const load = dargs.loader.load
      dispatch(load.namespace, load.args, { root: true }).then(() => {
      })
    }

    return api.getFee(dargs)
      .then((result) => {
        if (result.error === undefined) {
          // Successful
          commit('clearErrors')
          // commit('success')

          // Use response body
          const data = result.data
          commit('feesRetrieved', data)
        }
      })
  },
  clearErrors({ commit, state }) {
    commit('clearErrors')
  },
  clearFieldErrors({ commit, state }) {
    commit('clearErrors')
  },
  resetState({ commit, state }) {
    commit('resetState')
  },
  load({ commit, state }, id) {
    commit('loading', id)
  },
  stopLoading({ commit, state }, id) {
    commit('stopLoading', id)
  },
}

// mutations
const mutations = {
  loading(state) {
    state.sub.loading = true
  },

  stopLoading(state) {
    state.sub.loading = false
  },

  setError(state, error) {
    state.sub.error = error
  },

  success(state) {
    state.sub.success = true
  },

  setFieldErrors(state, error) {
    state.sub.fieldErrors = error || {}
  },

  resetState(state) {
    state.sub = {
      error: false,
      success: false,
      fieldErrors: {},
      successMsg: 'Profile updated',
      loading: false,
      unauthorized: null,
      unverified: null,
      notfound: false,
      fees: [],
    }
  },

  clearErrors(state) {
    state.sub.fieldErrors = false
    state.sub.error = false
  },

  clearFieldErrors(state) {
    state.sub.fieldErrors = false
  },

  setNotFound(state, val) {
    state.sub.notfound = val
  },

  setVerification(state, val) {
    state.sub.unverified = val
  },

  isAuthError(state) {
    state.sub.unauthorized = true
  },

  notAuthError(state) {
    state.sub.unauthorized = false
  },

  feesRetrieved(state, val) {
    state.sub.fees = val
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
