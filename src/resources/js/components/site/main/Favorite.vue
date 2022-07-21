<template>
    <div>
        <navbar></navbar>
        <div class="h-full">
            <div class="grid xl:grid-cols-6 gap-12 m-12">
                <div class="flex flex-col justify-around" v-for="film in items">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm mb-2">
                        <router-link :to="{name: 'film.show', params:{id: film.id}}" class="flex justify-around">
                            <img class="rounded-t-lg"
                                 :src="`../../../storage/${film.img_path}`" :alt="film.name"/>
                        </router-link>
                        <div class="p-6">
                            <p class="text-gray-900 text-sm  font-medium mb-2">{{ film.name }}</p>
                        </div>
                        <div class="flex justify-center mb-2">
                            <button @click="deleteFavoriteFilm(film.id)"
                                    class="px-6 text-sm py-2.5 bg-blue-600 text-white leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                Удалить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <template v-if="!items">
            <div class="w-3/4 text-center mx-auto h-screen text-6xl text-red-700">
                У Вас еще нет избранных фильмов
            </div>
        </template>
        <template v-if="items ">
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
        </template>
        <foot></foot>
    </div>
</template>

<script>
import PaginationMixin from "../../../mixins/pagination.mixin";
import {axiosInstance} from "../../../service/api";

export default {
    name: "Favorite",
    mixins: [PaginationMixin],
    data() {
        return {
            films: [],
            user: null
        }
    },

    mounted() {
        this.getUser()
        this.getFilmsUser()
    },

    methods: {
        getFilmsUser() {
            axiosInstance.get(`films/favorite/${this.user}`)
                .then(res => {
                    this.films = res.data
                    this.setupPagination(this.films)
                })
        },

        getUser() {
            this.user = localStorage.getItem('user_id')

        },

        deleteFavoriteFilm(id) {
            axiosInstance.delete(`films/delete-favorite/${id}`)
                .then(res => {
                    this.getFilmsUser()
                })
        }
    }

}
</script>

<style scoped>

</style>
