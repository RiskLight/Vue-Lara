export default {
    getGenres({commit}) {
        axios.get('/api/genres/')
            .then(res => {
                commit('setGenres', res.data.data)
            })
    }

}
