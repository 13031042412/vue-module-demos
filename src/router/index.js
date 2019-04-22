import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Fyb from '@/components/fyb/fyb'
import Copy from '@/components/copy/copy'
import Swiper from '@/components/swiper/swiper'
import Moment from '@/components/moment/Moment'
import Lang from '@/components/language/Lang'
import Lang1 from '@/components/language/Lang1'


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
            path: '/moment',
            name: 'Moment',
            component: Moment
        },
        {
            path: '/lang',
            name: 'Lang',
            component: Lang
        },
        {
            path: '/lang1',
            name: 'Lang1',
            component: Lang1
        },









        {
            path: '/helloworld',
            name: 'HelloWorld',
            component: HelloWorld
        },
    ]
})
