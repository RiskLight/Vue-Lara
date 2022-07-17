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
        <div class="flex flex-wrap w-3/4 mx-auto justify-between">
            <div>
                <Rate></Rate>
            </div>
            <div>
                <template v-if="user">
                    <div class="w-full bg-white rounded-lg px-4 pt-2">
                        <div class="">
                            <input type="hidden" name="film_id" value="">
                            <button @click="addFilmToFavorite"
                                    class="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100">
                                Добавить в избранное
                            </button>
                        </div>
                    </div>
                </template>
            </div>
        </div>


        <div id="message" class="hidden xl:w-96 text-xs text-center"></div>
        <div class="text-2xl w-3/4 mx-auto mt-20 flex flex-col justify-around">
            <div>{{ film.description }}</div>
            <Comments></Comments>
        </div>
        <foot></foot>
    </div>

</template>

<script>
import Rate from "./Rate";
import Comments from "./Comments";
import router from "../../../router";

export default {
    name: "Show",
    components: {Comments, Rate},
    data() {
        return {
            user: null
        }
    },

    computed: {
        film() {
            return this.$store.getters.film
        }
    },

    mounted() {
        this.$store.dispatch('getFilm', this.$route.params.id)
        this.getUser()
    },

    methods: {
        addFilmToFavorite() {
            axios.post(`/api/films/add-favorite`, {
                film_id: this.$route.params.id,
                user_id: this.user
            })
                .then(res => {
                    this.$router.push({name: 'films.favorite'})

                })
        },

        getUser() {
            this.user = localStorage.getItem('user_id')
        }
    },


}
</script>

<style scoped>

</style>
