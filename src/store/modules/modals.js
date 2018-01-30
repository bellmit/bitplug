
// Remember to update resetState mutation
const state = {
  sub: {
    fundModal: false,
    sendModal: false,
    withdrawModal: false,
    receiveModal: false,
    uploadPicsModal: false
  }
}

// getters
const getters = {
  fundModal: state => state.sub.fundModal,
  sendModal: state => state.sub.sendModal,
  uploadPicsModal: state => state.sub.uploadPicsModal,
  withdrawModal: state => state.sub.withdrawModal,
  receiveModal: state => state.sub.receiveModal
}

// actions
const actions = {
  resetState ({ commit, state }) {
    commit('resetState')
  },
  setsendModal ({ commit, state }) {
    commit('setsendModal')
  },
  setfundModal ({ commit, state }) {
    commit('setfundModal')
  },
  setreceiveModal ({ commit, state }) {
    commit('setreceiveModal')
  },
  setuploadPicsModal ({ commit, state }) {
    commit('setuploadPicsModal')
  },
  setwithdrawModal ({ commit, state }) {
    commit('setwithdrawModal')
  },
  clearModals ({ commit, state }) {
    commit('clearModals')
  }
}

// mutations
const mutations = {
  clearModals (state) {
    state.sub.fundModal = false
    state.sub.sendModal = false
    state.sub.uploadPicsModal = false
    state.sub.withdrawModal = false
    state.sub.receiveModal = false
  },

  resetState (state) {
    state.sub = {
      sendModal: false,
      fundModal: false,
      withdrawModal: false,
      receiveModal: false,
      uploadPicsModal: false
    }
  },

  setsendModal (state) {
    state.sub.sendModal = true
  },

  setfundModal (state) {
    state.sub.fundModal = true
  },

  setreceiveModal (state) {
    state.sub.receiveModal = true
  },

  setuploadPicsModal () {
    state.sub.uploadPicsModal = true
  },

  setwithdrawModal (state) {
    state.sub.withdrawModal = true
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
