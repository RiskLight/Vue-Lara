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
                    <button @click.prevent="deleteFilm(film.id)"
                            class="cursor-pointer inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                        Удалить
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "AdminFilms",
    computed: {
        films() {
            return this.$store.getters.films
        },
    },

    mounted() {
        this.$store.dispatch('getFilms')
    },

    methods: {
        deleteFilm(id) {
            axios.delete(`api/admin/destroy/${id}`)
                .then( res => {
                    this.$store.dispatch('getFilms')
                })
        }
    }
}
</script>

<style scoped>

</style>
