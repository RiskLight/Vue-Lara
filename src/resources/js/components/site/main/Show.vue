<template>
    <div>
        <navbar></navbar>
        <div class="text-6xl text-blue-700 text-center mt-12 font-bold">
            {{ film.name }}
        </div>
        <div class="text-3xl mt-4 text-blue-500-600 text-center">
            Дата выхода: {{ film.year }}
        </div>
        <div class="text-2xl text-blue-500-600 text-center">
            Жанры: <span class="lowercase" v-for="(genre, index) in film.genres">{{ genre.name }} </span>
        </div>
        <div class="flex justify-around mt-12 mb-12">
            <iframe :src="film.film_path" class="w-3/4" height="600"
                    frameborder="0" allowfullscreen></iframe>
        </div>
        <Rate></Rate>
        <div id="message" class="hidden xl:w-96 text-xs text-center"></div>
        <div class="text-2xl w-3/4 mx-auto mt-20 flex justify-around">
            <div>{{ film.description }}</div>
        </div>
    </div>

</template>

<script>
import Rate from "./Rate";
export default {
    name: "Show",
    components: {Rate},
    // data() {
    //     return {
    //         rate: null
    //     }
    // },

    computed: {
        film() {
            return this.$store.getters.film
        }
    },

    mounted() {
        this.$store.dispatch('getFilm', this.$route.params.id)
        // this.getRate()
    },

    // methods: {
    //     getRate() {
    //         axios.get(`/api/films/rate/${this.$route.params.id}`)
    //             .then(res => {
    //                 this.rate = res.data
    //             })
    // //     },
    // },


}
</script>

<style scoped>

</style>
