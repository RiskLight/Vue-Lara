<template>
    <div>
        <nav
            class="relative w-full flex flex-wrap items-center justify-evenly py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
            <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <button
                    class="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
                    type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="w-6" role="img"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor"
                              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                    </svg>
                </button>
                <div class="collapse navbar-collapse flex-grow justify-between items-center"
                     id="navbarSupportedContent1">
                    <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                        <li class="nav-item p-2">
                            <router-link :to="{name: 'films.films'}"
                                         class="nav-link text-white hover:text-blue-700 focus:text-gray-600 p-0">Все
                                фильмы
                            </router-link>
                        </li>
                        <li class="nav-item p-2">
                            <router-link :to="{name: 'only.films', params: {standartId: 2}}"
                                         class="nav-link text-white hover:text-blue-700 focus:text-gray-600 p-0">
                                Фильмы
                            </router-link>
                        </li>
                        <li class="nav-item p-2">
                            <router-link :to="{name: 'serials.serials', params: {standartId: 1}}"
                                         class="nav-link text-white hover:text-blue-700 focus:text-gray-600 p-0">
                                Сериалы
                            </router-link>
                        </li>
                        <li class="nav-item p-2">
                            <router-link :to="{name: 'genre.genre' }"
                                         class="nav-link text-white hover:text-blue-700 focus:text-gray-600 p-0">
                                Жанры
                            </router-link>
                        </li>
                    </ul>
                    <div class="collapse navbar-collapse items-center" id="navbarSupportedContent1">
                        <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
                            <li class="nav-item p-2">
                                <router-link
                                    class="dropdown-toggle flex items-center hidden-arrow hover:text-blue-700 cursor-pointer"
                                    :to="{ name: 'user.login' }" v-if="!token">Вход
                                </router-link>
                            </li>
                            <li class="nav-item p-2">
                                <router-link
                                    class="dropdown-toggle flex items-center hidden-arrow hover:text-blue-700 cursor-pointer"
                                    :to="{ name: 'user.register' }" v-if="!token">
                                    Регистрация
                                </router-link>

                            </li>
                            <li class="nav-item p-2">
                                <router-link :to="{name: 'films.favorite'}"
                                   class="dropdown-toggle flex items-center hidden-arrow hover:text-blue-700 cursor-pointer"
                                   v-if="token">Избранное</router-link>
                            </li>
                            <li class="nav-item p-2">
                                <a @click.prevent="logout"
                                   class="dropdown-toggle flex items-center hidden-arrow hover:text-blue-700 cursor-pointer"
                                   v-if="token">Выход</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    data() {
        return {
            token: [],
            // user: [],
            role_id: null
        }
    },

    updated() {
        this.getToken()
        this.getUser()
    },

    mounted() {
        this.getToken()
        this.getUser()
    },

    methods: {
        getToken() {
            this.token = localStorage.getItem('x_xsrf_token')
        },

        getUser() {
            // this.user = localStorage.getItem('setUserData')
            // this.user = JSON.parse(localStorage.getItem('setUserData'))
            // let userRole = JSON.parse(localStorage.getItem('setUserData'))
            // this.user = userRole
            // let roles = userRole.map(x => x.role_id)
            // this.role_id = roles[0]
            this.role_id = JSON.parse(localStorage.getItem('role_id'))

        },

        logout() {
            axios.post('/logout')
                .then(res => {
                    localStorage.removeItem('x_xsrf_token')
                    localStorage.removeItem('role_id')
                    this.$router.push({name: 'user.login'})
                })
        }
    }
}
</script>

<style scoped>

</style>
