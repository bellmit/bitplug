import api from '@/api/wallet'

import addCard from './addCard'
import deleteCard from './deleteCard'
import fund from './fund'
import getCards from './getCards'
import getTransactions from './getTransactions'

// Remember to update resetState mutation
const state = {
  sub: {
    fundModal:false,
    withdrawModal:false,
    receiveModal:false,
    status: null,
    error: false,
    loading: false,
    wallet: {},
    notfound: false,
    unverified: false,
    unauthorized: null,
  }
}

// getters
const getters = {
  fundModal: state => state.sub.fundModal,
  withdrawModal: state => state.sub.withdrawModal,
  receiveModal: state => state.sub.receiveModal,
  status: state => state.sub.status,
  error: state => state.sub.error,
  loading: state => state.sub.loading,
  wallet: state => state.sub.wallet,
  notfound: state => state.sub.notfound,
  unverified: state => state.sub.unverified,
  unauthorized: state => state.sub.unauthorized,
}

// actions
const actions = {
  getWallet ({ dispatch, commit, state }, dargs) {
    // Loading
    if (dargs.noLoad !== true) {
      commit('loading')
    } else if (dargs.loader) {
      const load = dargs.loader.load
      dispatch(load.namespace, load.args, { root: true }).then(() => {
      });
    }

    api.getWallet(dargs)
    .then((result) => {
      if (result.error === undefined) {
        commit('clearErrors');
        // Use response data
        const data = result.data
        commit('setWallet', data);
      } else {
        if (result.unauthorized) {
          commit('isAuthError');
        }
        if (result.verified) {
          commit('isVerificationError');
        }
        commit('setError', result.error);
        commit('setNotFound', result.notfound);
      }

      // Not Loading
      if (dargs.noLoad !== true) {
        commit('notLoading')
      } else if (dargs.loader) {
        const load = dargs.loader.stopLoading
        dispatch(load.namespace, load.args, { root: true }).then(() => {
        });
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
  setfundModal ({ commit, state }) {
    commit('setfundModal');
  },
  setreceiveModal ({ commit, state }) {
    commit('setreceiveModal');
  },
  setwithdrawModal ({ commit, state }) {
    commit('setwithdrawModal');
  },
  clearModals ({ commit, state }) {
    commit('clearModals');
  }
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

  clearModals(state) {
    state.sub.fundModal = false
    state.sub.withdrawModal = false
    state.sub.receiveModal = false
  },

  resetState (state) {
    state.sub = {
      fundModal: false,
      withdrawModal: false,
      receiveModal: false,
      status: null,
      error: false,
      loading: false,
      wallet: {},
      notfound: false,
      unverified: false,
      unauthorized: null,
    };
  },

  setWallet (state, wallet) {
    state.sub.wallet = wallet || {}
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

  setfundModal(state) {
    state.sub.fundModal = true;
  },

  setreceiveModal(state) {
    state.sub.receiveModal = true;
  },

  setwithdrawModal(state) {
    state.sub.withdrawModal = true;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  modules: {
    addCard,
    fund,
    getCards,
    deleteCard,
    getTransactions,
  }
}
