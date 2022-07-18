<template>
    <div>
        <admin-nav></admin-nav>
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-full h-screen">
            <div>
                <div class="form-group mb-6">
                    <input v-model="name" v-validate="'required|min:2|max:15'"
                        type="text" name="name"
                           class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                           id="name" placeholder="Имя пользователя">
                    <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700" v-show="errors.has('name')">{{ errors.first('name') }}</div>

                </div>

                <div class="form-group mb-6">
                    <input type="text" name="email" v-validate="'required|email'"
                           v-model="email"
                           class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                           id="film_path" placeholder="Введите email">
                    <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700" v-show="errors.has('email')">{{ errors.first('email') }}</div>


                </div>
                <div class="form-group mb-6">
                    <input v-model="password" v-validate="'required|min:8|max:16'"
                        type="password" name="password"
                           class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                           placeholder="Введите пароль">
                    <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
                         v-show="errors.has('password')">{{ errors.first('password') }}</div>

                </div>
                <div class="form-group mb-6">
                    <select v-model="role_id"
                        name="role_id"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="role">
                        <option selected disabled value="0">Выберите роль</option>
                        <option v-for="item in roles" :value="item.id">{{item.role}}</option>
                    </select>

                </div>
                <button :disabled="!isDisabled" @click.prevent="addUser"
                        class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                    Добавить юзера
                </button>
            </div>
        </div>
        <admin-foo></admin-foo>
    </div>
</template>

<script>
export default {
    name: "AddUser",

    data() {
        return {
            user: [],
            roles: [],
            name: null,
            email: null,
            password: null,
            role_id: 0
        }
    },

    mounted() {
        this.getRoles()

    },
    computed: {
        isDisabled() {
            return this.role_id
        }
    },

    methods: {
        getRoles() {
            axios.get(`/api/admin/roles`)
                .then(res => {
                    this.roles = res.data
                })
        },

        addUser() {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    axios.post(`/api/admin/add/`, {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        role_id: this.role_id
                    })
                        .then(res => {
                            this.$router.push({name: 'admin.users'})
                        })
                }
            });

        }
    }
}
</script>

<style scoped>

</style>
