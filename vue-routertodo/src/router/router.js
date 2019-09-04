import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import welcome from '../components/welcome'
import index from '../components/index'


const router = new VueRouter({
    routes: [
        { path: '/', component: app },
        { path: '/welcome', component: welcome },
        { path: '/index', component: index },
    ]
})

export default router;