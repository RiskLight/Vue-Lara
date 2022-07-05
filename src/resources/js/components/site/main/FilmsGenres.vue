<template>
    <div class="grid xl:grid-cols-6 gap-12 m-12">
        <div class="flex justify-center" v-for="film in films">
            <div class="rounded-lg shadow-lg bg-white max-w-sm mb-2">
                <!--                <a href="">-->
                <!--                    <img class="rounded-t-lg" :src="`storage/${film.img_path}`" alt=""/>-->
                <!--                </a>-->
                <router-link :to="{name: 'film.show', params:{id: film.id}}">
                    <img class="rounded-t-lg" :src="`storage/${film.img_path}`" :alt="film.name"/>
                </router-link>
                <div class="p-6">
                    <p class="text-gray-900 text-lg md:text-sm font-medium mb-2">{{film.name}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FilmsGenres",

    data() {
        return {
            films: []
        }
    },

    mounted() {
        this.getSerials()
    },

    methods: {
        getSerials() {
            axios.get(`/api/films/content/all/${this.$route.params.genreId}`)
                .then(res => {
                    this.films = res.data
                })
        },
    }
}
</script>

<style scoped>

</style>
