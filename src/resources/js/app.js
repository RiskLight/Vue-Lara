import Vue from 'vue';
import App from "./components/App.vue";
import router from './router';
import store from "./components/store/index.js";
import Paginate from 'vuejs-paginate'


require('./bootstrap');

Vue.component('navbar', require('./components/site/layouts/Navbar.vue').default);
Vue.component('foot', require('./components/site/layouts/Footer.vue').default);
Vue.component('admin-nav', require('./components/admin/layouts/AdminNav').default);
Vue.component('Paginate', Paginate)



const app = new Vue({
    el: '#App',
    components: {
        App
    },
    store,
    router,

});
