import login from "../../../auth/Login";

export default {
    getUserData({commit}) {
        axios.get('/sanctum/csrf-cookie')
            .then(res => {
                commit('setUserData', res.data)
                localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN'])

             })

    },

    sendLoginRequest({ commit }, data) {
        // commit("setErrors", {}, { root: true });
        return axios.post('login', data)
            .then(res => {
                commit("setUserData", res.data);
                commit("x_xsrf_token", res.data.token);
                localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN'])
                localStorage.setItem('role_id', JSON.stringify(res.data.role_id))
                router.push({name: 'films.films'})
            }).catch(err => {
                console.log(err)
            });
    }

}

import router from "../../../../router";
