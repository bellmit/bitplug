import api from '@/api/register'

// Remember to update resetState mutation

const state = {
  sub: {
    status: null,
    error: false,
    fieldErrors: {},
    successMsg: 'Registered successfully.',
    loading: false,
  },
}

// getters
const getters = {
  status: state => state.sub.status,
  error: state => state.sub.error,
  fieldErrors: state => state.sub.fieldErrors,
  successMsg: state => state.sub.successMsg,
  loading: state => state.sub.loading,
}

// actions
const actions = {
  register ({ dispatch, commit, state }, args) {
    commit('loading')
    return api.register(args)
    .then((result) => {
      if (result.error === undefined) {
        commit('clearErrors')

        return {
          state: true
        }
      } else {
        commit('failure')

        // Turn field errors to obj instead of array
        let fieldErrors
        try {
          fieldErrors = errorToObj(result.data)
        } catch (TypeError) {
          // Do Nada
        }
        commit('setFieldErrors', fieldErrors)

        commit('setError', result.error)
        commit('notLoading')
        return {
          state: false
        }
      }
    })
  },
  clearErrors ({ commit, state }) {
    commit('clearErrors')
  },
  clearFieldErrors ({ commit, state }) {
    commit('clearErrors')
  },
  resetState ({ commit, state }) {
    commit('resetState')
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

  setError (state, error) {
    state.sub.error = error
  },

  setFieldErrors (state, error) {
    state.sub.fieldErrors = error || {}
  },

  clearErrors (state) {
    state.sub.fieldErrors = false
    state.sub.error = false
    state.sub.status = null
  },

  resetState (state) {
    state.sub = {
      status: null,
      error: false,
      fieldErrors: {},
      successMsg: 'Registered successfully.',
      loading: false,
    }
  },

  clearFieldErrors (state) {
    state.sub.fieldErrors = false
  },

  success (state) {
    state.sub.status = true
  },

  failure (state) {
    state.sub.status = false
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
