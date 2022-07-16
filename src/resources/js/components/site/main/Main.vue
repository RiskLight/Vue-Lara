<template>
    <div>
        <navbar></navbar>
        <div class="grid xl:grid-cols-6 gap-12 m-12">
            <template v-if="items">
                <div class="flex justify-center" v-for="film in items">
                    <div class="rounded-lg  shadow-lg bg-white  max-w-sm mb-2">

                        <router-link :to="{name: 'film.show', params:{id: film.id}}">
                            <img class="rounded-t-lg" :src="`storage/${film.img_path}`" :alt="film.name"/>
                        </router-link>
                        <div class="p-6">
                            <p class="text-gray-900 text-lg md:text-sm font-medium mb-2">{{film.name}}</p>
                        </div>
                    </div>
                </div>
            </template>


        </div>
        <Paginate
            v-model="page"
            :page-count="pageCount"
            :click-handler="pageChangeHandler"
            :prev-text="'Назад'"
            :next-text="'Вперед'"
            :container-class="'flex justify-center'"
            :page-class="'page-item'"
            :page-link-class="'page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none'"
            :prev-class="'page-item'"
            :prev-link-class="'page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none'"
            :next-class="'page-item'"
            :next-link-class="'page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none'"
            :active-class="'bg-purple-600'"
        />
    </div>

</template>

<script>
import PaginationMixin from "../../../mixins/pagination.mixin.js";

export default {
    name: "Main",
    mixins:[PaginationMixin],
    data() {
        return {
            films: []
        }
    },
    // computed: {
    //      films() {
    //        return this.setupPagination(this.$store.getters.films)
    //        //  let films = await this.setupPagination(this.$store.getters.films)
    //        //  return this.$store.getters.films
    //         // return films;
    //
    //     },
    // },

        mounted() {
         this.getFilms();
         // this.$store.dispatch('getFilms');
           // this.setupPagination(this.$store.getters.films)

    },

    methods: {
        async getFilms() {
            axios.get('/api/films/content/')
                .then(res => {
                    this.films = res.data
                    this.setupPagination(this.films)
                    console.log(res.data)
                })
            // await this.$store.dispatch('getFilms');

        },

    }
}
</script>

<style scoped>

</style>
