import Vue from 'vue';
import Vuex from 'vuex';
import Films from './modules/film/films';
import Genres from "./modules/genres/genres";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Films,
        Genres
    }
})
