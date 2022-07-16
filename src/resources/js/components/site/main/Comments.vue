<template>
    <div class="mt-12">
        <div class="flex mx-auto w-full items-center justify-center shadow-lg mb-4">
            <div class="w-full bg-white rounded-lg px-4 pt-2">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg">Добавьте свой бред</h2>
                    <div class="w-full md:w-full px-3 mb-2 mt-2">
                <textarea
                    v-model="description"
                    class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                    name="description" placeholder="Бредовый текст" required></textarea>
                    </div>
                    <div class="w-full md:w-full flex items-start md:w-full px-3">
                        <div class="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                            <svg fill="none" class="w-5 h-5 text-gray-600 mr-1" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </div>
                        <div class="-mr-1">
                            <button @click="addComment"
                                    class="bg-white text-gray-700 font-normal text-sm py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100">
                                Добавьте комментарий
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full mx-auto">
            <template v-for="comment in items">
                <div class="flex-col mt-6 mx-auto items-center justify-start shadow-lg mt-56 mb-1 w-full">
                    <div class="p-6 flex flex-col justify-start">
                        <span class="text-gray-900 text-xl font-medium mb-2">{{comment.user.name}}</span>
                        <div class="break-words">
                            <p class="text-gray-700 text-base text-lg max-w-full mb-4">
                                {{comment.description}}
                            </p>
                        </div>
                        <p class="text-gray-600 text-sm"></p>
                    </div>
                    <div></div>

                    <div class="justify-end">
                        <!--                <a class="cursor-pointer inline-block px-6 py-2.5 bg-transparent text-gray-600 underline hover:no-underline text-sm leading-tight rounded focus:shadow-lg focus:outline-none focus:ring-0  transition duration-150 ease-in-out outline-none">-->
                        <!--                    Редактировать-->
                        <!--                </a>-->
                    </div>
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
        </div>
    </div>
</template>

<script>
import PaginationMixin from "../../../mixins/pagination.mixin";
export default {
    name: "CommentForm",
    mixins:[PaginationMixin],
    data() {
        return {
            description: null,
            comments: null
        }
    },

    mounted() {
        this.getComments()
    },

    methods: {
        addComment() {
            let user_id = localStorage.getItem('user_id')
            let film_id = this.$route.params.id
            axios.post(`/api/films/add-comment`, {
                description: this.description,
                film_id: film_id,
                user_id: user_id,
            })
                .then(res => {
                    this.description = ''
                    this.getComments()
            })

        },

        getComments() {
            axios.get(`/api/films/get-comments/${this.$route.params.id}`)
                .then(res => {
                    this.comments = res.data
                    this.setupPagination(this.comments)
                })
        }
    }
}
</script>

<style scoped>

</style>
