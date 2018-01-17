import model from '@/api/projects'
// import { asyncLoader } from '@/store/generic'

// Remember to update resetState mutation
const state = {
  sub: {
    status: null,
    error: false,
    notfound: false,
    loading: false,
    project: {},
    modules: [],
  }
}

// getters
const getters = {
  status: state => state.sub.status,
  error: state => state.sub.error,
  notfound: state => state.sub.notfound,
  loading: state => state.sub.loading,
  project: state => state.sub.project,
  modules: state => state.sub.modules,
}

// actions
const actions = {
  getProjectById ({ dispatch, commit, state }, dargs) {
    // Loading
    if (dargs.noLoad !== true) {
      commit('loading')
    } else if (dargs.loader) {
      const load = dargs.loader.load
      dispatch(load.namespace, load.args, { root: true }).then(() => {
      });
    }

    model.getById(dargs)
    .then((result) => {
      if (result.error === undefined) {
        commit('clearErrors');
        // Use response data
        const data = result.data[0];
        commit('setProject', data);
        commit('setModules', data.modules);
      } else {
        commit('setError', result.error)
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

  setNotFound (state, val) {
    state.sub.notfound = val;
  },

  setModules (state, val) {
    state.sub.modules = val || [];
  },

  resetState (state) {
    state.sub = {
      status: null,
      error: false,
      notfound: false,
      loading: false,
      project: {},
      modules: [],
    };
  },

  clearErrors (state) {
    state.sub.error = false;
  },

  setProject (state, project) {
    state.sub.project = project || {}
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
