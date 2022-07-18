<template>
    <div>
        <admin-nav></admin-nav>
        <div class="block p-6 rounded-lg shadow-lg bg-white h-full mb-20 w-3/4 mx-auto">
            <form action="" method="POST" enctype="multipart/form-data">
                <div class="form-group mb-6">
                    <input v-model="newName" v-validate="'required'"
                           type="text" name="name"
                           class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                           id="name">
                    <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
                         v-show="errors.has('name')">{{ errors.first('name') }}
                    </div>

                </div>
                <div class="form-group mb-6">
                    <input v-model="film_path"  v-validate="'required'"
                           type="text" name="film_path"
                           class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                           id="film_path">
                    <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
                         v-show="errors.has('film_path')">{{ errors.first('film_path') }}
                    </div>

                </div>
                <div class="form-group mb-6">
                    <input @change="addFile"
                           v-validate="'image|dimensions:782,1200'"
                           ref="fileUpload"
                           type="file" name="image"
                           class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                           id="image" placeholder="Путь к картинке">
                    <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
                         v-show="errors.has('image')">{{ errors.first('image') }}
                    </div>

                </div>
                <div class="form-group mb-6">
                    <input
                        v-model="year" v-validate="'required|date_format:yyyy-MM-dd'"
                        type="text" name="year"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="year">
                    <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
                         v-show="errors.has('year')">{{ errors.first('year') }}
                    </div>

                </div>
                <div class="form-group mb-6">
                <textarea v-model="description" v-validate="'required|min:80|max:250'"
                          name="description"
                          class="form-control block w-full px-3 py-1.5 ext-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="description" rows="3"></textarea>
                    <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
                         v-show="errors.has('description')">{{ errors.first('description') }}
                    </div>
                </div>
                <div class="form-group mb-6">
                    <select v-model="standard_id"
                            name="standart"
                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="standart">
                        <option
                            v-for="standard in standards"
                            :value="standard.id">
                            {{ standard.name }}
                        </option>
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
                                <p class="text-xl font-medium leading-normal text-gray-800" id="exampleModalXlLabel">
                                    Жанры
                                </p>
                                <button type="button"
                                        class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                        data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body relative p-4">
                                <div class="grid grid-cols-3">
                                    <div class="form-check" v-for="genre in genres">
                                        <input :checked="isSelected(genre.id)"
                                               v-model="filmGenres"
                                               v-validate="'required:true'"
                                               class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                               type="checkbox" :value="genre.id" name="genre" :id="genre.name">
                                        <label class="form-check-label inline-block text-gray-800"
                                               :for="genre.name">
                                            {{ genre.name }}
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
                <button @click.prevent="updateFilm"
                        class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                    Добавить фильм
                </button>
            </form>
        </div>
        <admin-foo></admin-foo>
    </div>
</template>

<script>

export default {
    name: "Edit",
    data() {
        return {
            newName: null,
            film_path: null,
            film: {},
            year: null,
            description: null,
            standard_id: null,
            standards: [],
            filmGenres: [],
            image: null
        }
    },
    //
    computed: {

        genres() {
            return this.$store.getters.genres
        }
    },

    mounted() {

        this.getFilm(this.$route.params.id)
        this.$store.dispatch('getGenres')
        this.getStandards()
        this.isSelected()
    },

    methods: {

        getGenres() {
            axios.get('/api/genres/')
                .then(res => {
                    this.genres = res.data.data
                })
        },

        getFilm(id) {
            axios.get(`/api/films/show/${id}`)
                .then(res => {
                    this.film = res.data
                    this.film_path = res.data.film_path
                    this.year = res.data.year
                    this.year = res.data.year
                    this.newName = res.data.name
                    this.description = res.data.description
                    this.standard_id = res.data.standart_id
                    for (let genre of this.film.genres) {
                        this.filmGenres.push(genre.id)
                    }
                })
        },

        getStandards() {
            axios.get('/api/standard/')
                .then(res => {
                    this.standards = res.data
                })
        },

        isSelected(genreId) {
            this.filmGenres.map(genre => {
                if (genre.id === genreId) {
                    return true
                }
            })

            return false
        },

        addFile(event) {
            this.image = event.target.files[0]
        },

        updateFilm() {

            let newFormDate = new FormData();

            newFormDate.append('_method', 'PATCH');
            newFormDate.append('name', this.newName);
            newFormDate.append('film_path', this.film_path);
            if (this.image) {
                newFormDate.append('img_path', this.image);
            }
            newFormDate.append('year', this.year);
            newFormDate.append('description', this.description);
            newFormDate.append('standart_id', this.standard_id);

            let filmGenre = this.filmGenres;
            for (let item of filmGenre) {
                newFormDate.append('genre[]', item)
            }
            this.$validator.validateAll().then((result) => {
                if (result) {
                    axios.post(`/api/admin/update-film/${this.$route.params.id}`,  newFormDate,
                        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
                        .then(res => {
                            this.$router.push({name: 'admin.films'})
                        })
                }
            });


        }

    },
}
</script>

<style scoped>

</style>
