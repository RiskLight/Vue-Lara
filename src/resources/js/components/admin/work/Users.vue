<template>
    <div>
        <admin-nav></admin-nav>
        <div class="max-w-full h-full">
            <div class="grid lg:grid-cols-6 m-12" v-for="user in users">
                <div class="border-2 p-6">
                    <p  class="rounded-t-lg">ID = {{user.id}} </p>
                </div>
                <div class="p-6 border-2">
                    <h5 class="text-gray-900 text-xl font-medium mb-2"> {{user.name}}</h5>
                </div>
                <div class="p-6 border-2">
                    <p class="text-gray-700 text-base mb-4">
                        {{user.email}}
                    </p>
                </div>
                <div class="p-6 border-2">
                    <p class="text-gray-700 text-base mb-4">
                        {{ user.role.role }}
                    </p>
                </div>
                <div class="p-6 border-2">
                    <router-link :to="{name: 'user.edit', params: {id: user.id}}"
                        class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                        Редактировать
                    </router-link>
                </div>
                <div class="p-6 border-2">

                    <button @click.prevent="deleteUser(user.id)"
                            class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                        Удалить
                    </button>

                </div>
            </div>
            <div class="text-center text-green-800 text-6xl m-12">
                <router-link :to="{name: 'user.add'}"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                    Добавить пользователя
                </router-link>
            </div>

        </div>
    </div>

</template>

<script>
export default {
    name: "Users",

    data() {
        return {
            users: [],
        }
    },

    mounted() {
        this.getUsers()

    },

    methods: {
        getUsers() {
            axios.get('/api/users/')
                .then(res => {
                    this.users = res.data
                    console.log(res.data)
                })
        },

        deleteUser(id) {
            axios.delete(`api/admin/delete-user/${id}`)
                .then( res => {
                    this.getUsers()
                })
        }
    }
}
</script>

<style scoped>

</style>
