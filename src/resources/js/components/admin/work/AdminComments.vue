<template>
    <div>
        <admin-nav></admin-nav>
        <div class="max-w-full h-full">
            <div class="grid lg:grid-cols-6 m-12" v-for="comment in items">
                <div class="border-2 p-6">
                    <p href="3" class="rounded-t-lg">ID = {{comment.id}} </p>
                </div>
                <div class="p-6 border-2">
                    <p class="text-gray-900 text-xl font-medium mb-2">{{comment.film.name}}</p>
                </div>
                <div class="p-6 border-2">
                    <p class="text-gray-700 text-base mb-4">
                        {{comment.user.name}}
                    </p>
                </div>
                <div class="p-6 border-2 col-span-2 break-words">
                    <p class="text-gray-700 text-base mb-4 ">
                        {{comment.description}}
                    </p>
                </div>
                <div class="p-6 border-2">
                    <a class="cursor-pointer inline-block mb-5 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                        Редактировать
                    </a>

                    <div>

                        <button type="submit"
                                class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                            Удалить
                        </button>
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
    </div>
</template>

<script>
import PaginationMixin from "../../../mixins/pagination.mixin";

export default {
    name: "AdminComments",
    mixins:[PaginationMixin],

    data() {
        return {
            comments: []
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
        }
    }
}
</script>

<style scoped>

</style>
