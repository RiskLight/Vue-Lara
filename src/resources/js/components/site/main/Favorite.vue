<template>
    <div>
        <navbar></navbar>
        <div class="h-full">
            <div class="grid xl:grid-cols-6 gap-12 m-12">
                <div class="flex justify-center">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                        <a href="">
                            <img class="rounded-t-md"
                                 src="" alt=""/>
                        </a>
                        <div class="p-6">
                            <p class="text-gray-900 text-sm  font-medium mb-2"></p>
                        </div>
                        <form action="" method="POST" class="flex justify-center mb-2">
                            <input type="hidden" name="film_id" value="">
                            <button type="submit"
                                    class="px-6 text-sm py-2.5 bg-blue-600 text-white leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                Удалить
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Favorite"
}
</script>

<style scoped>

</style>
