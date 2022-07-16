export default {
    user: state => state.userData,
    x_xsrf_token: state => state.token,
    loginErrors: state => state.loginErrors,
}
