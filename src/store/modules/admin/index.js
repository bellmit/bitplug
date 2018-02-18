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
    walletById: {},
    successMsg: 'Profile updated',
    loading: false,
    unauthorized: null,
    unverified: null,
    walletType: [],
    withdrawalRequests: [],
    selectedRequest: {},
    allBanks: [],
    notfound: false
  }
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
  walletById: state => state.sub.walletById
}

// actions
const actions = {
  getWalletType ({ dispatch, commit, state }, dargs) {
    commit('loading')
    return api.getWalletType(dargs)
      .then((result) => {
        if (result.error === undefined) {
          // Successful
          commit('clearErrors')
          // commit('success')

          // Use response body
          const data = result.data
          commit('stopLoading')
          commit('walletTypeRetrieved', data)
        } else {
          commit('setError', result.error)
          commit('stopLoading')
        }
      })
  },

  getWithdrawalRequests ({ dispatch, commit, state }, dargs) {
    // Loading
    commit('loading')
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

  confirmWithdrawalRequests ({ dispatch, commit, state }, dargs) {
    // Loading
    commit('loading')
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

  rejectWithdrawalRequests ({ dispatch, commit, state }, dargs) {
    // Loading
    commit('loading')
    return withdrawRequestApi.rejectWithdrawalRequest(dargs)
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

  holdWithdrawalRequests ({ dispatch, commit, state }, dargs) {
    commit('loading')
    return withdrawRequestApi.holdWithdrawalRequest(dargs)
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

  getPlatformWallet ({ dispatch, commit, state }, dargs) {
    commit('loading')
    return api.getPlatformWallet(dargs)
      .then((result) => {
        if (result.error === undefined) {
          // Successful
          commit('clearErrors')
          // commit('success')
          // Use response body
          const data = result.data
          commit('platformWalletRetrieved', data)
        } else {
          commit('setError', result.error)
          commit('stopLoading')
        }
      })
  },

  getWalletById ({ dispatch, commit, state }, dargs) {
    return api.getWalletById(dargs)
      .then((result) => {
        if (result.error === undefined) {
          // Successful
          commit('clearErrors')
          // commit('success')
          // Use response body
          const data = result.data
          // console.log('api response', data)
          commit('WalletByIdRetrieved', data)
        } else {
          commit('setError', result.error)
          commit('stopLoading')
        }
      })
  },

  editWalletType ({ dispatch, commit, state }, dargs) {
    // Loading
    commit('loading')
    return api.editWalletType(dargs)
      .then((result) => {
        if (result.error === undefined) {
          // Successful
          commit('clearErrors')
          commit('success')
          commit('stopLoading')
        } else {
          commit('stopLoading')
          commit('clearErrors')
          commit('setError', result.error)
        }
      })
  },

  getFees ({ dispatch, commit, state }, dargs) {
    commit('loading')
    return adminApi.getFee(dargs)
      .then((result) => {
        if (result.error === undefined) {
          // Successful
          commit('clearErrors')

          // Use response body
          const data = result.data
          commit('stopLoading')
          commit('feesRetrieved', data)
        } else {
          commit('stopLoading')
          commit('clearErrors')
          commit('setError', result.error)
        }
      })
  },

  getPlatformBanks ({ dispatch, commit, state }, dargs) {
    commit('loading')
    return adminApi.getPlatformBanks(dargs)
      .then((result) => {
        if (result.error === undefined) {
          // Successful
          commit('clearErrors')
          // commit('success')

          // Use response body
          const data = result.data
          commit('stopLoading')
          commit('platformBanksRetrieved', data)
        } else {
          commit('stopLoading')
          commit('clearErrors')
          commit('setError', result.error)
        }
      })
  },

  getAllBanks ({ dispatch, commit, state }, dargs) {
    commit('loading')
    return adminApi.getAllBanks(dargs)
      .then((result) => {
        if (result.error === undefined) {
          // Successful
          commit('clearErrors')
          // commit('success')

          // Use response body
          const data = result.data
          commit('stopLoading')
          commit('allbanksRetrieved', data)
        } else {
          commit('stopLoading')
          commit('clearErrors')
          commit('setError', result.error)
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
  load ({ commit, state }, id) {
    commit('loading', id)
  },
  stopLoading ({ commit, state }, id) {
    commit('stopLoading', id)
  },
  setSelectedRequest ({ commit, state }, request) {
    commit('setSelectedRequest', request)
  },
  resetsetSelectedRequest ({ commit, state }) {
    commit('resetSelectedRequest')
  }
}

// mutations
const mutations = {
  loading (state) {
    state.sub.loading = true
  },

  stopLoading (state) {
    state.sub.loading = false
  },

  setError (state, error) {
    state.sub.error = error
  },

  success (state) {
    state.sub.success = true
  },

  setFieldErrors (state, error) {
    state.sub.fieldErrors = error || {}
  },

  resetState (state) {
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
      selectedRequest: {},
      walletById: {},
      withdrawalRequests: [],
      notfound: false
    }
  },

  clearErrors (state) {
    state.sub.fieldErrors = false
    state.sub.error = false
  },

  clearFieldErrors (state) {
    state.sub.fieldErrors = false
  },

  platformWalletRetrieved (state, val) {
    state.sub.platformWallet = val
  },

  WalletByIdRetrieved (state, val) {
    state.sub.walletById = val
  },

  setNotFound (state, val) {
    state.sub.notfound = val
  },

  setVerification (state, val) {
    state.sub.unverified = val
  },

  setSelectedRequest (state, request) {
    state.sub.selectedRequest = request
  },

  resetSelectedRequest (state) {
    state.sub.selectedRequest = {}
  },

  isAuthError (state) {
    state.sub.unauthorized = true
  },

  notAuthError (state) {
    state.sub.unauthorized = false
  },

  walletTypeRetrieved (state, val) {
    state.sub.walletType = val
  },

  withdrawRequestTypeRetrieved (state, val) {
    state.sub.withdrawalRequests = val
  },

  feesRetrieved (state, val) {
    state.sub.fees = val
  },
  platformBanksRetrieved (state, val) {
    state.sub.platformBanks = val
  },
  allbanksRetrieved (state, val) {
    state.sub.allBanks = val
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
