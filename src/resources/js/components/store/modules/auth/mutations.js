export default {
    setUserData: (state, user) => state.userData = user,
    x_xsrf_token: (state, token) => state.x_xsrf_token = token,
    loginErrors: (state, loginErrors) => state.loginErrors = loginErrors
}
