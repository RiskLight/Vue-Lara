import Vue from 'vue';
import App from "./components/App.vue";
import router from './router';
import store from "./components/store/index.js";
import Paginate from 'vuejs-paginate'
import ru from 'vee-validate/dist/locale/ru.js';

const moment = require('moment')
require('moment/locale/ru')

import VeeValidate, { Validator } from 'vee-validate';

require('./bootstrap');

Vue.use(VeeValidate);
Validator.localize('ru', ru);
Vue.use(require('vue-moment'), {
    moment
});
Vue.component('navbar', require('./components/site/layouts/Navbar.vue').default);
Vue.component('foot', require('./components/site/layouts/Footer.vue').default);
Vue.component('admin-nav', require('./components/admin/layouts/AdminNav').default);
Vue.component('admin-foo', require('./components/admin/layouts/AdminFooter').default);
Vue.component('Paginate', Paginate)



const app = new Vue({
    el: '#App',
    components: {
        App
    },
    store,
    router,

});
