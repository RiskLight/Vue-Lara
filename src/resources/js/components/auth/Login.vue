<template>
    <div>
        <navbar></navbar>
        <div class="md:container md:mx-auto mb-20 pb-32 h-screen">
            <div class="flex justify-center">
                <form @submit.prevent="sendCredentials" class="lg:w-1/2 border-blue-200 border-2 mt-20">
                    <div
                        class="border-blue-200 border-2 bg-blue-100 h-10 uppercase font-bold flex items-center justify-center">
                        Вход
                    </div>
                    <div>
                    </div>
                    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-full">
                        <div class="form-group mb-6">
                            <label for="email"
                                   class="form-label inline-block mb-2 text-gray-700">Email</label>
                            <input v-validate="'required|email'"
                                id="email" type="email" placeholder="Введите email"
                                   class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                   v-model="details.email" name="email" value="" autocomplete="email" autofocus>
                            <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700" v-show="errors.has('email')">{{ errors.first('email') }}</div>
                        </div>

                        <div class="form-group mb-6">
                            <label for="password"
                                   class="form-label inline-block mb-2 text-gray-700">Пароль</label>
                            <input v-validate="'required|min:8'"
                                   id="password" type="password" placeholder="Введите пароль"
                                   class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                   v-model="details.password" name="password" autocomplete="current-password">
                            <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
                                v-show="errors.has('password')">{{ errors.first('password') }}</div>

                        </div>
                        <div class="form-group mb-6">
                            <div class="form-group form-check">
                                <button  type="submit"
                                        class="mb-12 w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                    Вход
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from 'vuex';

export default {
    name: "Login",
    data() {
        return {
            details: {
                email: null,
                password: null
            },
        }
    },

    computed: {
        ...mapGetters("Auth", ["user", "apiToken"]),
    },

    methods: {
        ...mapActions("Auth", ["sendLogin", "getUserData"]),

        async sendCredentials() {
            await this.$validator.validateAll().then((result) => {
                if (result) {
                     this.sendLogin(this.details);
                }
            });
        },

    }
}
</script>

<style scoped>

</style>
