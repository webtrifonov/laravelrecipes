import Vue from 'vue';
import store from './store/store';
import router from './router';
import Layout from './Layout'
import Paginate from 'vuejs-paginate';

Vue.component('paginate', Paginate)
new Vue({
    store,
    router,
    render: h => h(Layout),
}).$mount('#app');
