// import getters from './getters'
// import actions from './actions'
// import mutations from './mutations'
//
// export default {
//     namespaced: true,
//     state: () => ({
//         userData: null,
//         x_xsrf_token: '',
//         loginErrors: ''
//     }),
//     getters,
//     mutations,
//     actions,
// }
//
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";


export default {
    namespaced: true,
    state: () => ({
        userData: null,
        apiToken: '',
    }),
    getters,
    mutations,
    actions,
}
