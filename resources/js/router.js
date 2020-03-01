import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './pages/Index';
import NotFound404 from './pages/NotFound404';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history', // fix localhost/#/ in uri path
    routes: [
        {
            'path': '/',
            'component': Index,
        },{
            path: '*',
            component: NotFound404,
        }
    ]
});
