<template>
    <div>
        <div class="grid grid-cols-3 gap-12 m-12">
            <div class="flex justify-center" v-for="genre in genres">
                <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <router-link :to="{name: 'genre.films', params: {genreId: genre.id}}">
                        <img class="rounded-t-lg" :src="genre.img_path" :alt="genre.name"/>
                    </router-link>
                    <div class="p-6">
                        <p class="text-gray-900 text-xl font-medium mb-2">{{genre.name}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Genre",
    data() {
        return {
            genres: [],
        }
    },

    mounted() {
        this.getGenres()
    },

    methods: {
        getGenres() {
            axios.get('/api/genres/')
                .then(res => {
                    this.genres = res.data.data
                    console.log(res.data.data)
                })
        }
    }
}
</script>

<style scoped>

</style>
