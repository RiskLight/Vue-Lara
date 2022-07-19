<template>
    <div>
        <navbar></navbar>
        <div class="w-3/4 mx-auto">
            <input v-model="search"
                   type="search"
                   class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                        rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                   id="exampleSearch" name="search" placeholder="Искать фильмы или сериалы"/>
        </div>
        <div class="w-3/4 mx-auto flex flex-wrap justify-around mt-12">
            <div class="w-72">
                <select :disabled="this.genre !== 0"
                    @change="filterFilms(genre)"
                        v-model="genre"
                        name="genre"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="genre">
                    <option selected disabled value="0">Выберите жанр</option>
                    <option v-for="genre in genres" :value="genre.id">{{ genre.name }}</option>
                </select>
            </div>
            <div class="w-72">
                <select :disabled="this.year !== 0"
                    @change="filterYears(year)"
                        v-model="year"
                        name="genre"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="genre">
                    <option selected disabled value="0">Выберите год</option>
                    <option v-for="year in years" :value="year">{{ year }}</option>
                </select>
            </div>
            <div class="w-72">
                <select @change="filterDate(date)"
                        v-model="date"
                        name="genre"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="genre">
                    <option disabled :value="0">По дате добавления</option>
                    <option :value="1">Самые новые</option>
                    <option :value="2">Самые старые</option>
                </select>
            </div>
            <div class="w-20">
                <button @click.prevent="clearSort"
                    class="cursor-pointer inline-block mb-5 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                    Сбросить
                </button>
            </div>
        </div>
        <div class="grid xl:grid-cols-6 gap-12 m-12">
            <template v-if="items">
                <div class="flex justify-center" v-for="film in items">
                    <div class="rounded-lg  shadow-lg bg-white  max-w-sm mb-2">

                        <router-link :to="{name: 'film.show', params:{id: film.id}}" class="flex justify-around">
                            <img class="rounded-t-lg" :src="`storage/${film.img_path}`" :alt="film.name"/>
                        </router-link>
                        <div class="p-6">
                            <p class="text-gray-900 text-lg md:text-sm font-medium mb-2">{{ film.name }}</p>
                        </div>
                    </div>
                </div>
            </template>
        </div>
        <template v-if="!items">
            <div class="w-3/4 mx-auto text-center h-screen text-6xl text-red-700">
                Ничего не найдено, попробуйте снова
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
import PaginationMixin from "../../../mixins/pagination.mixin.js";

export default {
    name: "Main",
    mixins: [PaginationMixin],
    data() {
        return {
            films: [],
            search: '',
            genre: 0,
            sorted: [],
            years: [],
            year: 0,
            date: 0
        }
    },
    computed: {
        genres() {
            return this.$store.getters.genres

        },
    },

    mounted() {
        this.getFilms();
        this.$store.dispatch('getGenres')
        this.getYears()
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
        async getFilms() {
            await axios.get('/api/films/content/')
                .then(res => {
                    this.films = res.data
                    this.setupPagination(this.films)
                    console.log(res.data)
                })

        },

        getYears() {
            axios.get(`/api/films/years`)
                .then(res => {
                    this.years = res.data
                })
        },

        getResults() {
            axios.get(`/api/films/search?q=${this.search}`)
                .then(res => {
                    this.films = res.data
                    this.setupPagination(this.films)
                })
        },

        async filterFilms(genre) {
            if (this.year !== 0) {
                this.sorted = []
                this.date = 0
                this.items.map(film => {
                    if (film.genres.some(elem => elem.id === genre)) {
                        this.sorted.push(film)
                    }
                })

            } else {
                await this.getFilms()
                this.sorted = []
                this.date = 0
                this.year = 0
                this.films.map(film => {
                    if (film.genres.some(elem => elem.id === genre)) {
                        this.sorted.push(film)
                    }
                })
            }


            await this.setupPagination(this.sorted)
        },

        async filterYears(year) {
            if (this.genre !== 0) {
                this.sorted = []
                this.date = 0
                let vm = this
                this.items.map(film => {
                    if (film.year.substring(0, 4) === year) {
                        vm.sorted.push(film)
                    }
                })
                await this.setupPagination(this.sorted)
            } else {
                this.sorted = []
                this.date = 0
                let vm = this
                this.films.map(film => {
                    if (film.year.substring(0, 4) === year) {
                        vm.sorted.push(film)
                    }
                })
            }

            await this.setupPagination(this.sorted)
        },

        async filterDate(date) {
            if (this.genre !== 0 || this.year !== 0) {
                let newItems = this.items
                if (date === 1) {
                    newItems.sort((a, b) => a.created_at > b.created_at ? -1 : 1)
                    await this.setupPagination(newItems)
                }
                if (date === 2) {
                    newItems.sort((a, b) => a.created_at > b.created_at ? 1 : -1)
                    await this.setupPagination(newItems)
                }
                // await this.setupPagination(this.allItems)

            } else {
                let newItems = this.films
                if (date === 1) {
                    newItems.sort((a, b) => a.created_at > b.created_at ? -1 : 1)
                }
                if (date === 2) {
                    newItems.sort((a, b) => a.created_at > b.created_at ? 1 : -1)

                }
                await this.setupPagination(newItems)
            }


        },

        clearSort() {
            this.sorted = []
            this.year = 0
            this.genre = 0
            this.date = 0
            this.getFilms()
        }
    }
}
</script>

<style scoped>

</style>
