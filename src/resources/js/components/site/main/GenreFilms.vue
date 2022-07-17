<template>
        <div>
            <div>
                <navbar></navbar>
                <div class="w-3/4 mx-auto">
                    <input v-model="search"
                           type="search"
                           class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                        rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                           id="exampleSearch" name="search" placeholder="Искать фильмы или сериалы"/>
                </div>
                <div class="grid xl:grid-cols-6 gap-12 m-12">
                    <div class="flex justify-center" v-for="film in items">
                        <div class="rounded-lg shadow-lg bg-white max-w-sm mb-2">
                            <router-link :to="{name: 'film.show', params:{id: film.id}}" class="flex justify-around">
                                <img class="rounded-t-lg" :src="`../../../storage/${film.img_path}`" :alt="film.name"/>
                            </router-link>
                            <div class="p-6">
                                <p class="text-gray-900 text-lg md:text-sm font-medium mb-2">{{film.name}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <template v-if="!items">
                <div class="w-3/4 text-center mx-auto h-screen text-6xl text-red-700">
                    Ничего не найдено, попробуйте поискать еще
                </div>
            </template>
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
            <foot></foot>
        </div>
</template>

<script>
import PaginationMixin from "../../../mixins/pagination.mixin";

export default {
    name: "Test",
    mixins: [PaginationMixin],

    data() {
        return {
            films: [],
            search: ''

        }
    },

    mounted() {
        this.getFilms()
    },

    watch: {
        search(val, old) {
            if (val.length >= 4 || old.length >= 4) {
                this.getResults()
            }
            if (+val.length === 0 || +old.length === 0) {
                this.getFilms()
            }
        }
    },

    methods: {
        getFilms() {
            axios.get(`/api/films/content/all/${this.$route.params.id}`)
                .then(res => {
                    this.films = res.data
                    this.setupPagination(this.films)
                })
        },

        getResults() {
            axios.get(`/api/films/search?q=${this.search}`)
                .then(res => {
                    this.films = res.data
                    this.setupPagination(this.films)
                })
        },
    }
}
</script>

<style scoped>

</style>
