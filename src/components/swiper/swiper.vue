<template>
    <div class="swiper">
        <h4 class="text-center">swiper</h4>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in pics">
                    <img class="img-fluid" :src="item" alt="">
                </div>
            </div>

            <!--如果需要分页器-->
            <div class="swiper-pagination"></div>

            <!--如果需要导航按钮-->
            <!--<div class="swiper-button-prev"></div>-->
            <!--<div class="swiper-button-next"></div>-->

            <!--如果需要滚动条-->
            <!--<div class="swiper-scrollbar"></div>-->
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    export default {
        name: "swiper",
        data(){
            return {
                pics: [
                    '/static/img/idcard/id_alusi.jpg',
                    '/static/img/idcard/id_beiliya.jpg',
                    '/static/img/idcard/id_dijia.jpg',
                    '/static/img/idcard/id_gaosi.jpg',
                    '/static/img/idcard/id_nuoya.jpg',
                    '/static/img/idcard/id_sailuo.jpg',
                    '/static/img/idcard/id_zuofei.jpg'
                ]
            }
        },
        mounted(){
            let mySwiper = new Swiper('.swiper-container',{
                // loop: true,
                // direction: 'vertical',

                autoplay: {

                },










                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination'
                },

                // 如果需要前进后退按钮
                // navigation: {
                //     nextEl: '.swiper-button-next',
                //     prevEl: '.swiper-button-prev',
                // },

                // 如果需要滚动条
                // scrollbar: {
                //     el: '.swiper-scrollbar',
                // },



            });

        }
    }
</script>

<style scoped>
.swiper-container{min-height:100px;}
</style>
