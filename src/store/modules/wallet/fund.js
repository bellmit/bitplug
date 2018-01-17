import api from '@/api/wallet'

// Remember to update resetState mutation
const state = {
    sub: {
        error: false,
        fieldErrors: {},
        successMsg: 'Wallet was funded successfully.',
        loading: false,
        unauthorized: null,
        unverified: null,
        notfound: false,
    },
};

// getters
const getters = {
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
    fundWallet ({ dispatch, commit, state }, dargs) {
        // Loading
        if (dargs.noLoad !== true) {
            commit('loading')
        } else if (dargs.loader) {
            const load = dargs.loader.load
            dispatch(load.namespace, load.args, { root: true }).then(() => {
            });
        }

        return api.fundWallet(dargs)
            .then((result) => {
                if (result.error === undefined) {
                    // Successful
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
                    return true
                }
                // else
                // Failed
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
        state.sub.loading = true;
    },

    notLoading (state) {
        state.sub.loading = false;
    },

    setError (state, error) {
        state.sub.error = error;
    },

    setFieldErrors (state, error) {
        state.sub.fieldErrors = error || {};
    },

    resetState (state) {
        state.sub = {
            error: false,
            fieldErrors: {},
            successMsg: 'Wallet was funded successfully.',
            loading: false,
            unauthorized: null,
            unverified: null,
            notfound: false,
        };
    },

    clearErrors (state) {
        state.sub.fieldErrors = false;
        state.sub.error = false;
    },

    clearFieldErrors (state) {
        state.sub.fieldErrors = false;
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
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
