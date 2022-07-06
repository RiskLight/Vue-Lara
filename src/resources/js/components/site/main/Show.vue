<template>
    <div>
        <div class="text-6xl text-blue-700 text-center mt-12 font-bold">
            {{ film.name }}
        </div>
        <div class="text-3xl mt-4 text-blue-500-600 text-center">
            Дата выхода: {{ film.year }}
        </div>
        <div class="text-2xl text-blue-500-600 text-center">
            Жанры: <span class="lowercase" v-for="(genre, index) in film.genres">{{ genre.name }} </span>
        </div>
        <div class="flex justify-around mt-12 mb-12">
            <iframe :src="film.film_path" class="w-3/4" height="600"
                    frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="w-3/4 mx-auto flex">
            <div class="stars mr-2">
                <form action="" class="class">

<!--                    <input type="hidden" name="get-rate" content="">-->
<!--                    <input type="hidden" name="csrf-token" content="">-->
<!--                    <input type="hidden" class="hide" name="film_id" id="" data-set-value="">-->
                    <input class="star star-10" id="star-10" type="radio" :checked="Math.round(rate) === 10"
                           data-item-value="10" name="star"/>
                    <label class="star star-10" for="star-10"></label>
                    <input class="star star-9" id="star-9" type="radio" :checked="Math.round(rate) === 9"
                           data-item-value="9" name="star"/>
                    <label class="star star-9" for="star-9"></label>
                    <input class="star star-8" id="star-8" type="radio" :checked="Math.round(rate) === 8"
                           data-item-value="8" name="star"/>
                    <label class="star star-8" for="star-8"></label>
                    <input class="star star-7" id="star-7" type="radio" :checked="Math.round(rate) === 7"
                           data-item-value="7" name="star"/>
                    <label class="star star-7" for="star-7"></label>
                    <input class="star star-6" id="star-6" type="radio" :checked="Math.round(rate) === 6"
                           data-item-value="6" name="star"/>
                    <label class="star star-6" for="star-6"></label>
                    <input class="star star-5" id="star-5" type="radio" :checked="Math.round(rate) === 5"
                           data-item-value="5" name="star"/>
                    <label class="star star-5" for="star-5"></label>
                    <input class="star star-4" id="star-4" type="radio" :checked="Math.round(rate) === 4"
                           data-item-value="4" name="star"/>
                    <label class="star star-4" for="star-4"></label>
                    <input class="star star-3" id="star-3" type="radio" :checked="Math.round(rate) === 3"
                           data-item-value="3" name="star"/>
                    <label class="star star-3" for="star-3"></label>
                    <input class="star star-2" id="star-2" type="radio" :checked="Math.round(rate) === 2"
                           data-item-value="2" name="star"/>
                    <label class="star star-2" for="star-2"></label>
                    <input class="star star-1" id="star-1" type="radio" :checked="Math.round(rate) === 1"
                           data-item-value="1" name="star"/>
                    <label class="star star-1" for="star-1"></label>
                </form>
            </div>
            <div class="mx-8">
                Оценка:
                <span id="exact-rating" class="mt-2 text-3xl">{{ rate }}</span>
            </div>
        </div>
        <div id="message" class="hidden xl:w-96 text-xs text-center"></div>
        <div class="text-2xl w-3/4 mx-auto mt-20 flex justify-around">
            <div>{{ film.description }}</div>
        </div>
    </div>

</template>

<script>
export default {
    name: "Show",

    data() {
        return {
            film: [],
            rate: null
        }
    },

    mounted() {
        this.getFilm();
        this.getRate()
    },

    methods: {
        getFilm() {
            axios.get(`/api/films/show/${this.$route.params.id}`)
                .then(res => {
                    this.film = res.data
                })
        },

        getRate() {
            axios.get(`/api/films/rate/${this.$route.params.id}`)
                .then(res => {
                    this.rate = res.data
                    let rate = this.rate
                    // let roundRate = Math.round(rate)
                    // let element = document.querySelector('.star[data-item-value="'+roundRate+'"]');
                    // element.setAttribute('checked', true);
                })
        }
    }
}
</script>

<style scoped>

</style>
