<template>
    <div class="w-3/4 mx-auto flex items-center">
        <div class="stars mr-2">
            <div class="class">
                <input
                       :disabled="user_id == null"
                       @click="postRate(10)" class="star star-10" id="star-10" type="radio"
                       :checked="Math.round(rate) === 10"
                       name="star"/>
                <label class="star star-10" for="star-10"></label>
                <input
                       :disabled="user_id == null"
                       @click="postRate(9)" class="star star-9" id="star-9" type="radio"
                       :checked="Math.round(rate) === 9"
                       name="star"/>
                <label class="star star-9" for="star-9"></label>
                <input
                       :disabled="user_id == null"
                       @click="postRate(8)" class="star star-8" id="star-8" type="radio"
                       :checked="Math.round(rate) === 8"
                       name="star"/>
                <label class="star star-8" for="star-8"></label>
                <input
                       :disabled="user_id == null"
                       @click="postRate(7)" class="star star-7" id="star-7" type="radio"
                       :checked="Math.round(rate) === 7"
                       name="star"/>
                <label class="star star-7" for="star-7"></label>
                <input
                       :disabled="user_id == null"
                       @click="postRate(6)" class="star star-6" id="star-6" type="radio"
                       :checked="Math.round(rate) === 6"
                       name="star"/>
                <label class="star star-6" for="star-6"></label>
                <input
                       :disabled="user_id == null"
                       @click="postRate(5)" class="star star-5" id="star-5" type="radio"
                       :checked="Math.round(rate) === 5"
                       name="star"/>
                <label class="star star-5" for="star-5"></label>
                <input
                       :disabled="user_id == null"
                       @click="postRate(4)" class="star star-4" id="star-4" type="radio"
                       :checked="Math.round(rate) === 4"
                       name="star"/>
                <label class="star star-4" for="star-4"></label>
                <input
                       :disabled="user_id == null"
                       @click="postRate(3)" class="star star-3" id="star-3" type="radio"
                       :checked="Math.round(rate) === 3"
                       name="star"/>
                <label class="star star-3" for="star-3"></label>
                <input
                       :disabled="user_id == null"
                       @click="postRate(2)" class="star star-2" id="star-2" type="radio"
                       :checked="Math.round(rate) === 2"
                       name="star"/>
                <label class="star star-2" for="star-2"></label>
                <input
                       :disabled="user_id == null"
                       @click="postRate(1)" class="star star-1" id="star-1" type="radio"
                       :checked="Math.round(rate) === 1"
                       name="star"/>
                <label class="star star-1" for="star-1"></label>
            </div>
        </div>
        <div class="flex align-baseline">
            <span class="text-2xl mx-4">Оценка:</span>
            <span id="exact-rating" class="text-3xl font-bold">{{ rate }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "Rate",

    data() {
        return {
            rate: null,
            user_id: null,
        }
    },


    mounted() {
        this.getRate()
        this.getUser()
    },

    methods: {
        getRate() {
            axios.get(`/api/films/rate/${this.$route.params.id}`)
                .then(res => {
                    this.rate = res.data
                })
        },

        postRate(value) {
            let user = localStorage.getItem('user_id')
            let film = this.$route.params.id
            axios.post(`/api/films/post-rate`, {
                user_id: user,
                film_id: film,
                points: value
            })
                .then(res => {
                    setTimeout(() => {
                        this.getRate()
                    }, 500)
                })
        },

        getUser() {
            this.user_id = localStorage.getItem('user_id')
        }
    }

}
</script>

<style scoped>

</style>
