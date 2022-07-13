<template>
    <div>
        <admin-nav></admin-nav>
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-full h-full">
            <form method="POST" enctype="multipart/form-data">
                <div class="form-group mb-6">
                    <input v-model="name"
                        type="text" name="name" list="film"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="name" placeholder="Название фильма">
                    <datalist id="film">
                    </datalist>
                </div>
                <div class="form-group mb-6">
                    <input v-model="film_path"
                        type="text" name="film_path"
                           class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                           id="film_path" placeholder="Ссылка на фильм">

                </div>
                <div class="form-group mb-6">
                    <input
                           @change="addFile"
                        type="file" name="img_path"
                           class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                           id="img_path" placeholder="Путь к картинке">

                </div>
                <div class="form-group mb-6">
                    <input v-model="year"
                        type="text" name="year"
                           class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                           id="year" placeholder="Год выхода">

                </div>
                <div class="form-group mb-6">
                <textarea v-model="description"
                    name="description"
                          class="form-control block w-full px-3 py-1.5 ext-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="description" rows="3" placeholder="Описание фильма"></textarea>

                </div>
                <div class="form-group mb-6" >
                    <select v-model="standart_id"
                        name="standart_id"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="standart_id" >
                        <option selected disabled value="0">Выберите формат</option>
                        <option  v-for="standard in standards" :value="standard.id">{{ standard.name }}</option>
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
                    id="exampleModalXl" tabindex="-1" aria-labelledby="exampleModalXlLabel" aria-modal="true" role="dialog">
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
                            <div class="modal-body relative p-4">
                                <div class="grid grid-cols-3">
                                    <div class="form-check" v-for="item in genres">
                                        <input v-model="genre"
                                            class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            type="checkbox" :value="item.id" :id="item.name">
                                        <label class="form-check-label inline-block text-gray-800"
                                               :for="item.name">
                                            {{item.name}}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button @click.prevent="addFilm"
                        class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                    Добавить фильм
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Add",

    data() {
        return {
            // genres: [],
            standards: [],
            name: null,
            year:null,
            film_path: null,
            standart_id: 0,
            description:null,
            img_path: null,
            genre: [],


        }
    },

    computed: {
        genres() {
            return this.$store.getters.genres
        }
    },

    mounted() {
        // this.getGenres()
        this.$store.dispatch('getGenres')
        this.getStandards()
    },

    methods: {
        // getGenres() {
        //     axios.get('/api/genres/')
        //         .then(res => {
        //             this.genres = res.data.data
        //             console.log(res.data.data)
        //         })
        // },

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

            axios.post('/api/admin/films', formData)
                .then(res => {
                    console.log(res.data.message)
                })
                .catch(error => console.log(error))
        },
    }
}
</script>

<style scoped>

</style>
