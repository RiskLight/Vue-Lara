import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',

    routes: [
        {
            path: '/', component: () => import('./components/site/main/Main'),
            name: 'films.films'
        },

        {
            path: '/genres', component: () => import('./components/site/main/Genre'),
            name: 'genre.genre'
        },

        {
            path: '/serials', component: () => import('./components/site/main/Serials'),
            name: 'serials.serials'
        },

        {
            path: '/films', component: () => import('./components/site/main/Films'),
            name: 'only.films'
        },

        {
            path: '/genre-films', component: () => import('./components/site/main/FilmsGenres'),
            name: 'genre.films'
        },

        {
            path: '/show/:id', component: () => import('./components/site/main/Show'),
            name: 'film.show'
        },

    ]
})
