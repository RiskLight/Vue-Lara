export default {
    getUserData({commit}) {
        axios.get('/sanctum/csrf-cookie')
            .then(res => {
                commit('setUserData', res.data)
                localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN'])
                console.log(res.data)
            }).catch(error => {
                commit("loginErrors", error.response.data.errors)
            console.log(error.response.data.errors)
            });

    },

    sendLoginRequest({commit}, data) {
        // commit("setErrors", {}, { root: true });
        return axios.post('login', data)
            .then(res => {
                commit("setUserData", res.data);
                commit("x_xsrf_token", res.data.token);
                localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN'])
                localStorage.setItem('role_id', JSON.stringify(res.data.role_id))
                localStorage.setItem('user_id', JSON.stringify(res.data.id))
                router.push({name: 'films.films'})
            }).catch(error => {
                commit("loginErrors", error.response.data.errors)
                console.log(error.response.data.errors)
            });
    }

}

import router from "../../../../router";
