import Vue from 'vue';
import App from "./components/App.vue";
import router from './router';
require('./bootstrap');

Vue.component('navbar', require('./components/site/layouts/Navbar.vue').default);
Vue.component('foot', require('./components/site/layouts/Footer.vue').default);

const app = new Vue({
    el: '#App',
    components: {
        App
    },
    router
});
