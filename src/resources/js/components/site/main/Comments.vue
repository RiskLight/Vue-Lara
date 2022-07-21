<template>
    <div class="mt-12">
        <div class="flex mx-auto w-full items-center justify-center shadow-lg mb-4">
            <template v-if="user">
                <div class="w-full bg-white rounded-lg px-4 pt-2">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <h2 class="px-4 pt-3 pb-2 text-gray-800 text-lg">Добавьте свой бред</h2>
                        <div class="w-full md:w-full px-3 mb-2 mt-2">
                <textarea
                          v-model="comDescription" v-validate="'required|min:10|max:150'"
                          class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                          name="Комментарий" placeholder="Комментарий"></textarea>
                            <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
                                 v-show="errors.has('Комментарий')">{{ errors.first('Комментарий') }}
                            </div>
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
            </template>
            <template v-if="!user">
                <div>
                    Оставлять комментарии могут только зарегистрированные пользователи
                </div>
            </template>
        </div>
        <div class="w-full mx-auto">
            <template v-for="comment in items">
                <div class="flex-col mt-6 mx-auto items-center justify-start shadow-lg mb-1 w-full">
                    <div class="p-6 flex flex-col justify-start">
                        <span class="text-gray-900 text-2xl font-medium mb-2">{{ comment.user.name }}</span>
                        <div class="break-words">
                            <p class="text-gray-900 text-base font-semibold text-lg max-w-full mb-4">
                                {{ comment.description }}
                            </p>
                            <span class="text-gray-700 text-base text-sm max-w-full mb-4">{{comment.created_at | moment("from", "now")}}</span>
                            <div :class="isEdit(comment.id) ? '' : 'hidden'">
                                <textarea v-model="commentDescription" v-validate="'required|min:10|max:150'"
                                          class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                                          name="Изменение комментария" required></textarea>
                                <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
                                     v-show="errors.has('Изменение комментария')">{{ errors.first('Изменение комментария') }}
                                </div>
                                <button @click="updateComment(comment.id)"
                                        class="cursor-pointer inline-block px-6 py-2.5 bg-transparent text-gray-600 underline hover:no-underline text-sm leading-tight rounded focus:shadow-lg focus:outline-none focus:ring-0  transition duration-150 ease-in-out outline-none">
                                    Обновить
                                </button>
                                <button @click="closeEditComment"
                                        class="cursor-pointer inline-block px-6 py-2.5 bg-transparent text-gray-600 underline hover:no-underline text-sm leading-tight rounded focus:shadow-lg focus:outline-none focus:ring-0  transition duration-150 ease-in-out outline-none">
                                    Закрыть
                                </button>
                            </div>
                        </div>
                        <p class="text-gray-600 text-sm"></p>
                    </div>
                    <div></div>
                    <template v-if="+user === comment.user.id">
                        <div :class="isEdit(comment.id) ? 'hidden' : ''"
                             class="justify-end">
                            <button @click="changeEditCommentId(comment.id, comment.description)"
                                    class="cursor-pointer inline-block px-6 py-2.5 bg-transparent text-gray-600 underline hover:no-underline text-sm leading-tight rounded focus:shadow-lg focus:outline-none focus:ring-0  transition duration-150 ease-in-out outline-none">
                                Редактировать
                            </button>
                        </div>
                    </template>

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

        </div>
    </div>
</template>

<script>
import PaginationMixin from "../../../mixins/pagination.mixin";
import {axiosInstance} from "../../../service/api";

export default {
    name: "Comments",
    mixins: [PaginationMixin],
    data() {
        return {
            comDescription: '',
            comments: null,
            user: null,
            editCommentId: null,
            commentDescription: ''
        }
    },

    mounted() {
        this.getComments()
        this.getUser()
    },

    methods: {
        addComment() {
            let user_id = localStorage.getItem('user_id')
            let film_id = this.$route.params.id
            this.$validator.validate('Комментарий').then((res) => {
                if (res) {
                    axiosInstance.post(`films/add-comment`, {
                        description: this.comDescription,
                        film_id: film_id,
                        user_id: user_id,
                    })
                        .then(res => {
                            this.getComments();
                            this.$validator.reset();
                            this.comDescription = '';
                        })
                }
            });

        },

        getComments() {
            axios.get(`/api/films/get-comments/${this.$route.params.id}`)
                .then(res => {
                    this.comments = res.data
                    this.comments.sort((a, b) => a.created_at > b.created_at ? -1 : 1)
                    this.setupPagination(this.comments)
                })
        },
        getUser() {
            this.user = localStorage.getItem('user_id')

        },

        changeEditCommentId(id, comment) {
            this.editCommentId = id
            this.commentDescription = comment
        },

        isEdit(id) {
            return this.editCommentId === id

        },

        closeEditComment() {
            this.editCommentId = null
        },

        updateComment(id) {
            this.$validator.validate('Изменение комментария').then((result) => {
                if (result) {
                    axiosInstance.patch(`films/update-comment/${id}`, {
                        description: this.commentDescription,
                        film_id: this.$route.params.id
                    })
                        .then(res => {
                            this.closeEditComment()
                            this.getComments()
                        })
                }
            });

        }
    }
}
</script>

<style scoped>

</style>
