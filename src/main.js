// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import axios from 'axios'

// bootstrap
import $ from 'jquery'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap'

// VueScroller
import VueScroller from 'vue-scroller'




// swiper
import 'swiper/dist/css/swiper.min.css'

// 多语言切换
Vue.use(VueI18n);
// 引入语言
import en from '../static/lang/en'
import cn from '../static/lang/cn'
import hk from '../static/lang/hk'
let i18n = new VueI18n({
    //定义默认语言
    locale: localStorage.selectLang || 'en',
    messages: {
        'en': en,
        'cn': cn,
        'hk': hk
    }
});



Vue.config.productionTip = false;
Vue.use(VueScroller);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    i18n,
    components: { App },
    template: '<App/>'
});
