<template>
    <div>
        <admin-nav></admin-nav>
        <div class="max-w-full h-full">
            <div class="grid lg:grid-cols-6 m-12" v-for="comment in items">
                <div class="border-2 p-6">
                    <p href="3" class="rounded-t-lg">ID = {{ comment.id }} </p>
                </div>
                <div class="p-6 border-2">
                    <p class="text-gray-900 text-xl font-medium mb-2">{{ comment.film.name }}</p>
                </div>
                <div class="p-6 border-2">
                    <p class="text-gray-700 text-base mb-4">
                        {{ comment.user.name }}
                    </p>
                </div>
                <div class="p-6 border-2 col-span-2 break-words">
                    <p class="text-gray-700 text-base mb-4 ">
                        {{ comment.description }}
                    </p>
                    <div :class="isEdit(comment.id) ? '' : 'hidden'">
                                <textarea v-model="commentDescription" v-validate="'required|min:10|max:150'"
                                          class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                                          name="description" placeholder="Бредовый текст" required></textarea>
                        <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
                             v-show="errors.has('description')">{{ errors.first('description') }}
                        </div>

                    </div>
                </div>
                <div class="p-6 border-2">
                    <div :class="isEdit(comment.id) ? 'hidden' : ''">
                        <button @click="changeEditCommentId(comment.id, comment.description)"
                                class="cursor-pointer inline-block mb-5 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                            Редактировать
                        </button>
                    </div>
                    <div :class="isEdit(comment.id) ? '' : 'hidden'">
                        <button @click="closeEditComment(comment.id, comment.description)"
                                class="cursor-pointer inline-block mb-5 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                            Закрыть
                        </button>
                    </div>

                    <div>
                        <div :class="isEdit(comment.id) ? 'hidden' : ''">
                            <button @click="deleteComment(comment.id)"
                                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                Удалить
                            </button>
                        </div>
                        <div :class="isEdit(comment.id) ? '' : 'hidden'">
                            <button @click="updateComment(comment.id)"
                                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                Обновить
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
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
        <admin-foo></admin-foo>
    </div>
</template>

<script>
import PaginationMixin from "../../../mixins/pagination.mixin";

export default {
    name: "AdminComments",
    mixins: [PaginationMixin],

    data() {
        return {
            comments: [],
            editCommentId: null,
            commentDescription: ''
        }
    },

    mounted() {
        this.getComments()
    },

    methods: {
        getComments() {
            axios.get(`/api/admin/comments`)
                .then(res => {
                    this.comments = res.data
                    this.setupPagination(this.comments)
                })
        },

        deleteComment(id) {
            axios.delete(`api/admin/delete-comment/${id}`)
                .then(res => {
                    this.getComments()
                })
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
            this.$validator.validateAll().then((result) => {
                if (result) {
                    axios.patch(`/api/films/update-comment/${id}`, {
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
