<template>
    <div>
        <nav
            class="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
            <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <div class="container-fluid">
                    <router-link class="text-xl text-black font-semibold hover:text-blue-700"
                                 :to="{name: 'films.films'}">На сайт
                    </router-link>
                </div>
                <div class="container-fluid">
                    <a @click.prevent="logout" class="cursor-pointer text-xl text-black font-semibold hover:text-blue-700">Выход</a>
                </div>
            </div>
        </nav>
        <div>
            <div class="flex items-center justify-center">
                <div class="inline-flex" role="group">
                    <router-link :to="{name: 'admin.films'}"
                                 class="cursor-pointer rounded-l px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                        Фильмы
                    </router-link>
                    <router-link :to="{name: 'admin.add'}"
                                 class="cursor-pointer px-6 py-2 border-t-2 border-b-2 border-r-0 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                        Добавить фильм
                    </router-link>
                    <router-link :to="{name: 'admin.users'}"
                                 class="cursor-pointer px-6 py-2 border-t-2 border-b-2 border-l border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                        Пользователи
                    </router-link>
                    <a class="cursor-pointer rounded-r px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                        Комментарии
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AdminNav",
    data() {
        return {
            token: []
        }
    },

    updated() {
        this.getToken()
    },

    mounted() {
        this.getToken()
    },

    methods: {
        getToken() {
            this.token = localStorage.getItem('x_xsrf_token')
        },

        logout() {
            axios.post('/logout')
                .then(res => {
                    localStorage.removeItem('x_xsrf_token')
                    this.$router.push({name: 'user.login'})
                })
        }
    }
}
</script>

<style scoped>

</style>
