import api from '@/api/wallet'

// Remember to update resetState mutation
const state = {
  sub: {
    error: false,
    loading: false,
    transactions: [],
    notfound: false,
    unverified: false,
    unauthorized: null,
  }
}

// getters
const getters = {
  error: state => state.sub.error,
  loading: state => state.sub.loading,
  transactions: state => state.sub.transactions,
  notfound: state => state.sub.notfound,
  unverified: state => state.sub.unverified,
  unauthorized: state => state.sub.unauthorized,
}

// actions
const actions = {
  getTransactions ({ dispatch, commit, state }, dargs) {
    /**
     * Retrieve transactions by user id
     */
    // Loading
    if (dargs.noLoad !== true) {
      commit('loading')
    } else if (dargs.loader) {
      const load = dargs.loader.load
      dispatch(load.namespace, load.args, { root: true }).then(() => {
      });
    }

    return api.getTransactions(dargs)
    .then((result) => {
      if (result.error === undefined) {
        commit('clearErrors');
        // Use response data
        const data = result.data
        commit('setTransactions', data);

        // Not Loading
        if (dargs.noLoad !== true) {
          commit('notLoading')
        } else if (dargs.loader) {
          const load = dargs.loader.stopLoading
          dispatch(load.namespace, load.args, { root: true }).then(() => {
          });
        }

        // Return Transactions
        return data
      } else {
        if (result.unauthorized) {
          commit('isAuthError');
        }
        if (result.verified) {
          commit('isVerificationError');
        }
        commit('setError', result.error);
        commit('setNotFound', result.notfound);

        // Not Loading
        if (dargs.noLoad !== true) {
          commit('notLoading')
        } else if (dargs.loader) {
          const load = dargs.loader.stopLoading
          dispatch(load.namespace, load.args, { root: true }).then(() => {
          });
        }
        return false
      }
    })
  },
  resetState ({ commit, state }) {
    commit('resetState');
  },
  load ({ commit, state }, id) {
    commit('loading', id);
  },
  stopLoading ({ commit, state }, id) {
    commit('notLoading', id);
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

  clearErrors (state) {
    state.sub.error = false
    state.sub.unverified = false
    state.sub.notfound = false
    state.sub.unauthorized = false
  },

  resetState (state) {
    state.sub = {
      error: false,
      loading: false,
      transactions: [],
      notfound: false,
      unverified: false,
      unauthorized: null,
    };
  },

  setTransactions (state, transactions) {
    state.sub.transactions = transactions || []
  },

  setNotFound (state, val) {
    state.sub.notfound = val;
  },

  isVerificationError (state) {
    state.sub.unverified = true;
  },

  notVerificationError (state) {
    state.sub.unverified = false;
  },

  isAuthError (state) {
    state.sub.unauthorized = true;
  },

  notAuthError (state) {
    state.sub.unauthorized = false;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
