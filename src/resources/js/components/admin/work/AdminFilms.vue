<template>
    <div>
        <admin-nav></admin-nav>
        <div class="max-w-full">
            <div class="grid lg:grid-cols-6 m-12" v-for="film in films">
                <div class="border-2 p-6">
                    <p class="rounded-t-lg">ID = {{film.id}} </p>
                </div>
                <div class="border-2 max-w-xs flex items-center justify-center">
                    <img class="rounded-t-lg" :src="`../../../storage/${film.img_path}`" alt=""/>
                </div>
                <div class="p-6 border-2">
                    <p class="text-gray-900 text-xl font-medium mb-2">{{film.name}}</p>
                </div>
                <div class="p-6 border-2 text-sm">
                    {{film.description}}
                </div>
                <div class="p-6 border-2">
                    <router-link :to="{name: 'films.edit', params: {id: film.id}}"
                        class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                        Редактировать
                    </router-link>
                </div>
                <div class="p-6 border-2">
<!--                    <button @click.prevent="deleteFilm(film.id)"-->
<!--                            class="cursor-pointer inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">-->
<!--                        Удалить-->
<!--                    </button>-->
                    <button class="cursor-pointer inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    @click="showMyModal(film.id)">Удалить</button>
                </div>
            </div>
        </div>
        <modal v-if="showModal" @close="showModal = false">
            <template v-slot:header>
                <p class="text-red-900 text-center font-bold">Подтверждение удаления</p>
            </template>
            <template v-slot:body>
                <p class="text-center text-3xl text-red-700">Действительно хотите удалить?</p>
            </template>
            <template v-slot:footer>
                <div class="flex justify-evenly">
                    <button class="bg-purple-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" @click="deleteFilm(film_id)">Удалить</button>
                    <button class="bg-green-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" @click="showModal = false">Отмена</button>
                </div>
            </template>
        </modal>
    </div>

</template>

<script>
import Modal from "./Modal";
export default {
    name: "AdminFilms",
    components: {Modal},
    computed: {
        films() {
            return this.$store.getters.films
        },
    },

    data() {
        return {
            film_id: 0,
            showModal: false,
        }
    },

    mounted() {
        this.$store.dispatch('getFilms')
    },

    methods: {
        deleteFilm(id) {
            axios.delete(`api/admin/destroy/${id}`)
                .then( res => {
                    this.$store.dispatch('getFilms')
                    this.showModal = false
                })
        },

        showMyModal(id) {
            this.film_id = id
            this.showModal = true
        },
    }
}
</script>

<style scoped>

</style>
