<template>
    <div>
        <admin-nav></admin-nav>
        <div class="w-3/4 mx-auto">
            <input v-model="search"
                   type="search"
                   class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                        rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                   id="exampleSearch" name="search" placeholder="Искать фильмы или сериалы"/>
        </div>
        <div class="max-w-full">
            <div class="grid lg:grid-cols-6 m-12" v-for="film in items">
                <div class="border-2 p-6">
                    <p class="rounded-t-lg">ID = {{ film.id }} </p>
                </div>
                <div class="border-2 max-w-xs flex items-center justify-center">
                    <img class="rounded-t-lg" :src="`../../../storage/${film.img_path}`" alt=""/>
                </div>
                <div class="p-6 border-2">
                    <p class="text-gray-900 text-xl font-medium mb-2">{{ film.name }}</p>
                </div>
                <div class="p-6 border-2 text-sm">
                    {{ film.description }}
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
                    <button
                        class="cursor-pointer inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        @click="showMyModal(film.id)">Удалить
                    </button>
                </div>
            </div>
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
        <modal v-if="showModal" @close="showModal = false">
            <template v-slot:header>
                <p class="text-red-900 text-center font-bold">Подтверждение удаления</p>
            </template>
            <template v-slot:body>
                <p class="text-center text-3xl text-red-700">Действительно хотите удалить?</p>
            </template>
            <template v-slot:footer>
                <div class="flex justify-evenly">
                    <button class="bg-purple-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                            @click="deleteFilm(film_id)">Удалить
                    </button>
                    <button class="bg-green-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                            @click="showModal = false">Отмена
                    </button>
                </div>
            </template>
        </modal>
        <admin-foo></admin-foo>
    </div>

</template>

<script>
import Modal from "./Modal";
import PaginationMixin from "../../../mixins/pagination.mixin.js";
import {axiosInstance} from "../../../service/api";

export default {
    name: "AdminFilms",
    components: {Modal},
    mixins: [PaginationMixin],

    data() {
        return {
            film_id: 0,
            showModal: false,
            films: [],
            search: '',


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
        deleteFilm(id) {
            axiosInstance.delete(`admin/destroy/${id}`)
                .then(res => {
                    this.getFilms()
                    this.showModal = false
                })
        },

        getFilms() {
            axiosInstance.get('films/content/')
                .then(res => {
                    this.films = res.data
                    this.setupPagination(this.films)
                    console.log(res.data)
                })

        },

        showMyModal(id) {
            this.film_id = id
            this.showModal = true
        },

        getResults() {
            axiosInstance.get(`films/search?q=${this.search}`)
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
