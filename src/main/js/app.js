import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import App from './components/App.vue';
import routes from './routes';
import store from './store';

Vue.config.devtools = true;
Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    base: '/',
    linkActiveClass: 'is-active',
    routes,
});

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        router,
        store,
        render: (h) => h(App),
    }).$mount('#app');
});