<template>
<div>
    <admin-nav></admin-nav>
    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-full h-screen">
        <div>
            <div class="form-group mb-6">
                <input v-model="name"
                        type="text" name="name"
                       class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                       id="name">
            </div>
            <div class="form-group mb-6">
                <input
                    v-model="email"
                    type="text" name="email"
                       class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                       id="film_path">
            </div>

            <div class="form-group mb-6">
                <select v-model="role_id"
                    name="role_id"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                    <option v-for="item in rolesUser" :value="item.id">{{item.role}}</option>
                </select>
            </div>
            <button @click.prevent="updateUser"
                    class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                Сохранить
            </button>
        </div>

    </div>
    <admin-foo></admin-foo>
</div>
</template>

<script>
import {axiosInstance} from "../../../service/api";

export default {
    name: "EditUser",
    data() {
        return {
            user: [],
            rolesUser: [],
            name: null,
            role_id: null,
            email: null
        }
    },

    mounted() {
        this.getUser()
        this.getRoles()

    },

    methods: {
        getUser() {
            axiosInstance.get(`admin/user/${this.$route.params.id}`)
                .then(res => {
                    this.user = res.data
                    this.name = res.data.name
                    this.email = res.data.email
                    this.role_id = res.data.role_id
                })
        },

        getRoles() {
            axiosInstance.get(`admin/roles`)
                .then(res => {
                    this.rolesUser = res.data
                })
        },

        updateUser() {
            axiosInstance.patch(`admin/update-user/${this.$route.params.id}`, {
                    name: this.name,
                    email: this.email,
                    role_id: this.role_id
                })
                    .then(res =>{
                        this.$router.push({name: 'admin.users'})

                    })
        }
    }
}
</script>

<style scoped>

</style>
