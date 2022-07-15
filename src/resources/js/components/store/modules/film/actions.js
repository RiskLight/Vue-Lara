export default {
    getFilm({state, commit, dispatch}, id) {
        axios.get(`/api/films/show/${id}`)
            .then(res => {
                commit('setFilm', res.data)
            })
    },

     getFilms({commit}) {
         axios.get('/api/films/content/')
            .then(res => {
                commit('setFilms', res.data)
            })
    },

}

import router from "../../../../router";
