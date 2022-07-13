<template>
    <div>
        <admin-nav></admin-nav>
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-full h-screen">
            <div>
                <div class="form-group mb-6">
                    <input v-model="name"
                        type="text" name="name"
                           class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                           id="name" placeholder="Имя пользователя">
                </div>

                <div class="form-group mb-6">
                    <input type="text" name="email"
                           v-model="email"
                           class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                           id="film_path" placeholder="Введите email">

                </div>
                <div class="form-group mb-6">
                    <input v-model="password"
                        type="password" name="password"
                           class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                           placeholder="Введите пароль">

                </div>
                <div class="form-group mb-6">
                    <select v-model="role_id"
                        name="role_id"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="role">
                        <option v-for="item in roles" :value="item.id">{{item.role}}</option>
                    </select>
                </div>
                <button @click.prevent="addUser"
                        class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                    Добавить юзера
                </button>
            </div>
        </div>
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
            role_id: null
        }
    },

    mounted() {
        this.getRoles()

    },

    methods: {
        getRoles() {
            axios.get(`/api/admin/roles`)
                .then(res => {
                    this.roles = res.data
                })
        },

        addUser() {
            axios.post(`/api/admin/add/`, {
                name: this.name,
                email: this.email,
                password: this.password,
                role_id: this.role_id
            })
                .then(res => {
                    console.log(res);
                })
        }
    }
}
</script>

<style scoped>

</style>
