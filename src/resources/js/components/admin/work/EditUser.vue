<template>
<div>
    <admin-nav></admin-nav>
    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-full h-screen">
        <div>
            <div class="form-group mb-6">
                <input type="text" name="name"
                       class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                       id="name" :value="user.name">
            </div>
            <div class="form-group mb-6">
                <input type="text" name="email"
                       class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                       id="film_path" :value="user.email">
            </div>

            <div class="form-group mb-6">
                <select name="role_id"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                    <option v-for="role in roles">{{role.role}}</option>
                </select>
            </div>
            <button type="submit"
                    class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                Сохранить
            </button>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "EditUser",
    data() {
        return {
            user: [],
            roles: []
        }
    },

    mounted() {
        this.getUser()
        this.getRoles()

    },

    methods: {
        getUser() {
            axios.get(`/api/admin/user/${this.$route.params.id}`)
                .then(res => {
                    this.user = res.data
                    console.log(res.data)
                })
        },

        getRoles() {
            axios.get(`/api/admin/roles`)
                .then(res => {
                    this.roles = res.data
                })
        },

        updateUser() {

        }
    }
}
</script>

<style scoped>

</style>
