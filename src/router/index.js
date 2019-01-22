import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Fyb from '@/components/fyb/fyb'
import Copy from '@/components/copy/copy'
import Swiper from '@/components/swiper/swiper'


Vue.use(Router);
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/fyb',
            name: 'Fyb',
            component: Fyb
        },
        {
            path: '/copy',
            name: 'Copy',
            component: Copy
        },
        {
            path: '/swiper',
            name: 'Swiper',
            component: Swiper
        },









        {
            path: '/helloworld',
            name: 'HelloWorld',
            component: HelloWorld
        },
    ]
})
