<template>
    <div>
        <navbar></navbar>
        <div class="grid grid-cols-3 gap-12 m-12">
            <div class="flex justify-center" v-for="genre in genres">
                <div class="rounded-lg shadow-lg bg-white max-w-sm">
<!--                    <router-link :to="{name: 'genre.films', params: {id: genre.id}}">-->
<!--                        <img class="rounded-t-lg" :src="genre.img_path" :alt="genre.name"/>-->
<!--                    </router-link>-->
                    <router-link :to="{name: 'genre.films', params: {id: genre.id}}">
                        <img class="rounded-t-lg" :src="genre.img_path" :alt="genre.name"/>
                    </router-link>
                    <div class="p-6">
                        <p class="text-gray-900 text-xl font-medium mb-2">{{genre.name}}</p>
                    </div>
                </div>
            </div>
        </div>
        <foot></foot>
    </div>
</template>

<script>
export default {
    name: "Genre",
    computed: {
        genres() {
            return this.$store.getters.genres

        },
    },

    mounted() {
        this.$store.dispatch('getGenres')
    },

}
</script>

<style scoped>

</style>
