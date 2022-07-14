import getters from './getters'
import actions from './actions'
import mutations from './mutations'

export default {
    namespaced: true,
    state: () => ({
        userData: null,
        x_xsrf_token: '',
    }),
    getters,
    mutations,
    actions,
}

