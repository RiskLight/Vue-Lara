<template>
    <div>
        <navbar></navbar>
        <div class="md:container md:mx-auto mb-20 pb-32 h-screen">
            <div class="flex justify-center">
                <div class="lg:w-1/2">
                    <div class="mt-20">
                        <div
                            class="border-blue-200 border-2 bg-blue-100 h-10 uppercase font-bold flex items-center justify-center">
                            Регистрация
                        </div>

                        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-full">
                            <div class="form-group mb-6">
                                <label for="name"
                                       class="form-label inline-block mb-2 text-gray-700">Имя</label>

                                <input id="name" type="text"
                                       class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                       v-model="name" name="name" value="" autocomplete="name" autofocus>
                            </div>

                            <div class="form-group mb-6">
                                <label for="email"
                                       class="form-label inline-block mb-2 text-gray-700">Email</label>

                                <input id="email" type="email"
                                       class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                       v-model="email" name="email" value="" autocomplete="email">
                            </div>

                            <div class="form-group mb-6">
                                <label for="password"
                                       class="form-label inline-block mb-2 text-gray-700">Пароль</label>

                                <input id="password" type="password"
                                       class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                       v-model="password" name="password" autocomplete="new-password">
                            </div>

                            <div class="form-group mb-6">
                                <label for="password-confirm"
                                       class="form-label inline-block mb-2 text-gray-700">Подтверждение пароля</label>

                                <div class="form-group mb-6">
                                    <input id="password-confirm" type="password"
                                           class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                           v-model="password_confirmation" name="password_confirmation" autocomplete="new-password">
                                </div>
                            </div>

                            <div class="form-group mb-6">
                                <button type="submit"
                                        @click="registration" class="mb-12 w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                    Регистрация
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Register",
    data() {
        return {
            name: [],
            email: [],
            password: [],
            password_confirmation: [],
        }
    },

    methods: {
        registration() {
            axios.get('/sanctum/csrf-cookie')
                .then(res => {
                    axios.post('/register',
                        {
                            email: this.email,
                            password: this.password,
                            name: this.name,
                            password_confirmation: this.password_confirmation,
                        })
                        .then(res => {
                            localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN'])
                            this.$router.push({ name: 'films.films' })
                        })
                })
        }
    }
}
</script>

<style scoped>

</style>
