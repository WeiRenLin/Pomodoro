import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import List from '@/components/list'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/list',
            name: 'list',
            component: List,
        },
    ],
})
