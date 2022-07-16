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
            path: '/favorite', component: () => import('./components/site/main/Favorite'),
            name: 'films.favorite'
        },


        {
            path: '/genre-films/:id', component: () => import('./components/site/main/GenreFilms'),
            name: 'genre.films'
        },


        {
            path: '/show/:id', component: () => import('./components/site/main/Show'),
            name: 'film.show'
        },

        {
            path: '/user-login', component: () => import('./components/auth/Login'),
            name: 'user.login',
        },

        {
            path: '/user-register', component: () => import('./components/auth/Register'),
            name: 'user.register',
        },


        {
            path: '/admin', component: () => import('./components/admin/work/Admin'),
            name: 'admin.panel',
            // beforeEnter: (to, from, next) => {
            //     enterAdmin(to, from, next)
            // }

        },

        {
            path: '/admin-films', component: () => import('./components/admin/work/AdminFilms'),
            name: 'admin.films'
        },

        {
            path: '/admin-add', component: () => import('./components/admin/work/Add'),
            name: 'admin.add'
        },

        {
            path: '/admin-users', component: () => import('./components/admin/work/Users'),
            name: 'admin.users'
        },

        {
            path: '/films-edit/:id', component: () => import('./components/admin/work/Edit'),
            name: 'films.edit'
        },

        {
            path: '/add-user', component: () => import('./components/admin/work/AddUser'),
            name: 'user.add'
        },

        {
            path: '/user-edit/:id', component: () => import('./components/admin/work/EditUser'),
            name: 'user.edit'
        },

        {
            path: '/admin-comments/', component: () => import('./components/admin/work/AdminComments'),
            name: 'admin.comments'
        },

        // {
        //     path: '/edit-comment/:id', component: () => import('./components/admin/work/EditUser'),
        //     name: 'comment.edit'
        // },
    ]
})

// function enterAdmin(to, from, next) {
//     let role = localStorage.getItem('role_id');
//     if (+role === 1) {
//         next()
//     } else {
//         next('/')
//     }
// }
