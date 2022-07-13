import getters from './getters'
import actions from './actions'
import mutations from './mutations'

export default ({
    state: {
        film: [],
        films: []
    },
    getters,
    actions,
    mutations
})


// export default {
//     state, mutations, getters, actions
// }

// const state = {
//     film: [],
//     genres: []
// }
//
// const getters = {
//     film: () => state.film,
//     genres: () => state.genre,
// }
//
// const actions = {
//     getFilm({state, commit, dispatch}, id) {
//         axios.get(`/api/films/show/${id}`)
//             .then(res => {
//                 commit('setFilm', res.data)
//             })
//     },
//
// }
//
// const mutations = {
//     setFilm(state, film) {
//         state.film = film
//     },
//
// }
