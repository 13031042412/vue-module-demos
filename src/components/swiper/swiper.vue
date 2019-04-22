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
            <!--<div class="swiper-pagination"></div>-->

            <!--如果需要导航按钮-->
            <!--<div class="swiper-button-prev"></div>-->
            <!--<div class="swiper-button-next"></div>-->

            <!--如果需要滚动条-->
            <div class="swiper-scrollbar"></div>
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
                    '/static/img/pic1/pic001.jpg',
                    '/static/img/pic1/pic002.jpg',
                    '/static/img/pic1/pic003.jpg',
                    '/static/img/pic1/pic004.jpg',
                    '/static/img/pic1/pic005.jpg'
                ]
            }
        },
        mounted(){
            let mySwiper = new Swiper('.swiper-container',{
                loop: true,
                // direction: 'vertical',

                autoplay: {

                },





                // 如果需要分页器
                // pagination: {
                //     el: '.swiper-pagination'
                // },

                // 如果需要前进后退按钮
                // navigation: {
                //     nextEl: '.swiper-button-next',
                //     prevEl: '.swiper-button-prev',
                // },

                // 如果需要滚动条
                scrollbar: {
                    el: '.swiper-scrollbar'
                },



            });
            mySwiper.scrollbar.$el.css({'width': '50px','left': '50%','marginLeft': '-25px', 'bottom': '20px'});
            mySwiper.scrollbar.$dragEl.css({'background': '#fff'});
            mySwiper.scrollbar.updateSize();

        }
    }
</script>

<style scoped>
.swiper-container{min-height:100px;}
.swiper-slide{
    width: 90%!important;
    margin: 0 5%;
}
.swiper-slide-prev{
    right:-8%;
}
.swiper-slide-next {
    left: -8%;
}
</style>
