<template>
    <div>
        <admin-nav></admin-nav>
        <div class="mb-20 block mx-auto p-6 rounded-lg shadow-lg bg-white w-3/4 h-full">
            <div v-if="savingSuccessful" class="flex p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                <svg aria-hidden="true" class="inline flex-shrink-0 mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Info</span>
                <div>
                    <span class="font-medium">{{ this.savingSuccessful }}</span> Заполните поля заново.
                </div>
            </div>
            <form method="POST" enctype="multipart/form-data">
                <div class="form-group mb-6">
                    <input v-model="name" v-validate="'required'"
                           type="text" name="name" list="film"
                           class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                           id="name" placeholder="Название фильма">
                    <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
                         v-show="errors.has('name')">{{ errors.first('name') }}
                    </div>
                    <p>{{ answer }}</p>
                    <datalist id="film">
                        <option v-for="film in films">{{ film.title }}</option>

                    </datalist>
                </div>
                <div class="form-group mb-6">
                    <input v-model="film_path" :disabled="true" v-validate="'required'"
                           type="text" name="film_path"
                           class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                           id="film_path" placeholder="Ссылка на фильм">
                    <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
                         v-show="errors.has('film_path')">{{ errors.first('film_path') }}
                    </div>

                </div>
                <div class="form-group mb-6">
                    <input @change="addFile"
                           v-validate="'required|image|dimensions:782,1200'"
                           ref="fileUpload"
                           type="file" name="img_path"
                           class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                           id="img_path" placeholder="Путь к картинке">
                    <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
                         v-show="errors.has('img_path')">{{ errors.first('img_path') }}
                    </div>

                </div>
                <div class="form-group mb-6">
                    <input v-model="year" v-validate="'required|date_format:yyyy-MM-dd'"
                           type="text" name="year"
                           class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                           id="year" placeholder="Год выхода">

                    <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
                         v-show="errors.has('year')">{{ errors.first('year') }}
                    </div>

                </div>
                <div class="form-group mb-6">
                <textarea v-model="description" v-validate="'required|min:80|max:250'"
                          name="description"
                          class="form-control block w-full px-3 py-1.5 ext-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="description" rows="3" placeholder="Описание фильма"></textarea>
                    <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
                         v-show="errors.has('description')">{{ errors.first('description') }}
                    </div>


                </div>
                <div class="form-group mb-6">
                    <select v-model="standart_id"
                            name="standart_id"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="standart_id">
                        <option selected disabled value="0">Выберите формат</option>
                        <option v-for="standard in standards" :value="standard.id">{{ standard.name }}</option>
                    </select>
                </div>
                <div class="">
                    <button type="button"
                            class="mt-8 mb-8 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                            data-bs-toggle="modal" data-bs-target="#exampleModalXl">Жанры
                    </button>
                </div>
                <div
                    class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                    id="exampleModalXl" tabindex="-1" aria-labelledby="exampleModalXlLabel" aria-modal="true"
                    role="dialog">
                    <div class="modal-dialog modal-xl relative w-auto pointer-events-none">
                        <div
                            class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                            <div
                                class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                                <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalXlLabel">
                                    Жанры
                                </h5>
                                <button type="button"
                                        class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                        data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body  relative p-4">
                                <div class="grid grid-cols-3 ">
                                    <div class="form-check" v-for="item in genres">
                                        <input v-model="genre" v-validate="'required:true'" name="genre"
                                               class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                               type="checkbox" :value="item.id" :id="item.name">
                                        <label class="form-check-label inline-block text-gray-800"
                                               :for="item.name">
                                            {{ item.name }}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
                     v-show="errors.has('genre')">{{ errors.first('genre') }}
                </div>
                <button :disabled="!isDisabled" @click.prevent="addFilm"
                        class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                    Добавить фильм
                </button>
            </form>
        </div>
        <admin-foo></admin-foo>
    </div>
</template>

<script>
import _ from 'lodash'

export default {
    name: "Add",

    data() {
        return {
            standards: [],
            name: null,
            year: null,
            film_path: null,
            standart_id: 0,
            description: null,
            img_path: null,
            genre: [],
            answer: '',
            films: [],
            film: '',
            savingSuccessful: null

        }
    },

    computed: {
        genres() {
            return this.$store.getters.genres
        },
        isDisabled() {
            return this.name && this.standart_id && this.description && this.img_path && this.genre && this.name
        }
    },

    watch: {
        name: function (oldName, newName) {
            this.answer = 'Завершите ввод'
            this.debouncedGetFilms()
        }
    },

    created: function () {
        this.debouncedGetFilms = _.debounce(this.getFilms, 1000)
    },


    mounted() {
        // this.getGenres()
        this.$store.dispatch('getGenres')
        this.getStandards()
    },

    methods: {

        getFilms() {
            if (this.name.length <= 3) {
                this.answer = 'Слишком мало символов'
                return
            }
            this.answer = 'Ищу...'
            let vm = this
            axios.get(`https://videocdn.tv/api/short?api_token=O0NZvxemcwkiq30bsgQoFKEQX6EqiVl7&title=${this.name}`)
                .then(function (response) {
                    vm.answer = 'Нашел'
                    vm.films = response.data.data
                    vm.films.forEach(film => {
                        vm.film_path = film.iframe_src
                        vm.year = film.year
                        console.log(film)
                        if (film.type === 'movie') {
                            vm.standart_id = '2'
                        }
                        if (film.type === 'serial') {
                            vm.standart_id = '1'
                        }
                    })
                })
                .catch(function (error) {
                    vm.answer = 'Что-то пошло не так, повторите ввод'
                })

        },

        getStandards() {
            axios.get('/api/standard/')
                .then(res => {
                    this.standards = res.data
                    console.log(res.data)
                })
        },

        addFile(event) {
            this.img_path = event.target.files[0]
        },

        addFilm() {

            let formData = new FormData()
            let genre = this.genre
            for (let item of genre) {
                formData.append('genre[]', item)
            }
            formData.append('name', this.name)
            formData.append('film_path', this.film_path)
            formData.append('img_path', this.img_path)
            formData.append('year', this.year)
            formData.append('description', this.description)
            formData.append('standart_id', this.standart_id)
            this.$validator.validateAll().then((result) => {
                if (result) {
                    axios.post('/api/admin/films', formData)
                        .then(res => {
                            this.name = null
                            this.year = null
                            this.film_path = null
                            this.standart_id = 0
                            this.description = null
                            this.genre = null
                            this.$refs.fileUpload.value = null;
                            this.savingSuccessful = 'Фильм успешно добавлен в базу.'
                        })
                        .catch(error => console.log(error))
                }
            });


        },
    }
}

</script>

<style scoped>

</style>
