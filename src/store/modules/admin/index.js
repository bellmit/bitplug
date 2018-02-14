import api from '@/api/walletType'
import withdrawRequestApi from '@/api/withdrawalRequests'
import adminApi from '@/api/admin'
// import fees from './fees'

// Remember to update resetState mutation
const state = {
  sub: {
    error: false,
    success: false,
    fieldErrors: {},
    platformBanks: [],
    platformWallet: [],
    fees: [],
    successMsg: 'Profile updated',
    loading: false,
    unauthorized: null,
    unverified: null,
    walletType: [],
    withdrawalRequests: [],
    selectedRequest:{},
    allBanks: [],
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
  walletType: state => state.sub.walletType,
  withdrawalRequests: state => state.sub.withdrawalRequests,
  selectedRequest: state => state.sub.selectedRequest,
  platformWallet: state => state.sub.platformWallet,
  fees: state => state.sub.fees,
  platformBanks: state => state.sub.platformBanks,
  allBanks: state => state.sub.allBanks,
}

// actions
const actions = {
  getWalletType({ dispatch, commit, state }, dargs) {
    // Loading
    if (dargs.noLoad !== true) {
      // commit('loading')
    } else if (dargs.loader) {
      const load = dargs.loader.load
      dispatch(load.namespace, load.args, { root: true }).then(() => {
      })
    }

    return api.getWalletType(dargs)
      .then((result) => {
        if (result.error === undefined) {
          // Successful
          commit('clearErrors')
          // commit('success')

          // Use response body
          const data = result.data
          commit('walletTypeRetrieved', data)
        }
      })
  },

  getWithdrawalRequests({ dispatch, commit, state }, dargs) {
    // Loading
    if (dargs.noLoad !== true) {
      // commit('loading')
    } else if (dargs.loader) {
      const load = dargs.loader.load
      dispatch(load.namespace, load.args, { root: true }).then(() => {
      })
    }

    return withdrawRequestApi.getwithDrawalRequests(dargs)
      .then((result) => {
        if (result.error === undefined) {
          // Successful
          commit('clearErrors')
          // commit('success')

          // Use response body
          const data = result.data
          commit('withdrawRequestTypeRetrieved', data)
        }
      })
  },

  confirmWithdrawalRequests({ dispatch, commit, state }, dargs) {
    // Loading
    if (dargs.noLoad !== true) {
      // commit('loading')
    } else if (dargs.loader) {
      const load = dargs.loader.load
      dispatch(load.namespace, load.args, { root: true }).then(() => {
      })
    }

    return withdrawRequestApi.confirmWithdrawalRequest(dargs)
      .then((result) => {
        if (result.error === undefined) {
          // Successful
          commit('clearErrors')
          // commit('success')

          // Use response body
          this.getWithdrawalRequests()
        }
      })
  },


  getPlatformWallet({ dispatch, commit, state }, dargs) {
    // Loading
    if (dargs.noLoad !== true) {
      // commit('loading')
    } else if (dargs.loader) {
      const load = dargs.loader.load
      dispatch(load.namespace, load.args, { root: true }).then(() => {
      })
    }
    return api.getPlatformWallet(dargs)
      .then((result) => {
        if (result.error === undefined) {
          // Successful
          commit('clearErrors')
          // commit('success')
          // Use response body
          const data = result.data
          console.log('data ddddd', data)
          commit('platformWalletRetrieved', data)
        }
      })
  },
  editWalletType({ dispatch, commit, state }, dargs) {
    // Loading
    if (dargs.noLoad !== true) {
      // commit('loading')
    } else if (dargs.loader) {
      const load = dargs.loader.load
      dispatch(load.namespace, load.args, { root: true }).then(() => {
      })
    }
    commit('loading')
    return api.editWalletType(dargs)
      .then((result) => {
        if (result.error === undefined) {
          // Successful
          commit('clearErrors')
          commit('success')
          commit('stopLoading')
          // Use response body
          // const data = result.data
        }
        else {
          commit('stopLoading')
        }
      })
  },
  getFees ({ dispatch, commit, state }, dargs) {
    // Loading
    if (dargs.noLoad !== true) {
      // commit('loading')
    } else if (dargs.loader) {
      const load = dargs.loader.load
      dispatch(load.namespace, load.args, { root: true }).then(() => {
      })
    }

    return adminApi.getFee(dargs)
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
  getPlatformBanks ({ dispatch, commit, state }, dargs) {
    // Loading
    if (dargs.noLoad !== true) {
      // commit('loading')
    } else if (dargs.loader) {
      const load = dargs.loader.load
      dispatch(load.namespace, load.args, { root: true }).then(() => {
      })
    }

    return adminApi.getPlatformBanks(dargs)
      .then((result) => {
        if (result.error === undefined) {
          // Successful
          commit('clearErrors')
          // commit('success')

          // Use response body
          const data = result.data
          commit('platformBanksRetrieved', data)
        }
      })
  },
  getAllBanks ({ dispatch, commit, state }, dargs) {
    // Loading
    if (dargs.noLoad !== true) {
      // commit('loading')
    } else if (dargs.loader) {
      const load = dargs.loader.load
      dispatch(load.namespace, load.args, { root: true }).then(() => {
      })
    }

    return adminApi.getAllBanks(dargs)
      .then((result) => {
        if (result.error === undefined) {
          // Successful
          commit('clearErrors')
          // commit('success')

          // Use response body
          const data = result.data
          commit('allbanksRetrieved', data)
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
      fees: [],
      banks: [],
      allBanks: [],
      selectedRequest:{},
      withdrawalRequests:[],
      notfound: false,
    }
  },

  clearErrors(state) {
    state.sub.fieldErrors = false
    state.sub.error = false
  },

  clearFieldErrors(state) {
    state.sub.fieldErrors = false
  },

  platformWalletRetrieved(state, val) {
    state.sub.platformWallet = val
  },

  setNotFound(state, val) {
    state.sub.notfound = val
  },

  setVerification(state, val) {
    state.sub.unverified = val
  },

  setSelectedRequest (state, request) {
    state.sub.selectedRequest = request
  },

  resetSelectedRequest (state) {
    state.sub.selectedRequest = {}
  },

  isAuthError(state) {
    state.sub.unauthorized = true
  },

  notAuthError(state) {
    state.sub.unauthorized = false
  },

  walletTypeRetrieved(state, val) {
    state.sub.walletType = val
  },

  withdrawRequestTypeRetrieved(state, val){
    state.sub.withdrawalRequests = val
  },

  feesRetrieved(state, val) {
    state.sub.fees = val
  },
  platformBanksRetrieved(state, val) {
    state.sub.platformBanks = val
  },
  allbanksRetrieved(state, val) {
    state.sub.allBanks = val
  },
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  // modules: [
  //   fees
  // ]
}
