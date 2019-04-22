<template>
    <div class="home pt-2">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="list-group">
                        <router-link to="/swiper" class="list-group-item list-group-item-action">
                            Swiper
                            <i class="iconfont icon-arrow-right float-right"></i>
                        </router-link>
                        <router-link to="/copy" class="list-group-item list-group-item-action">
                            Copy
                            <i class="iconfont icon-arrow-right float-right"></i>
                        </router-link>
                        <router-link to="/fyb" class="list-group-item list-group-item-action">
                            Fyb
                            <i class="iconfont icon-arrow-right float-right"></i>
                        </router-link>
                        <router-link to="/moment" class="list-group-item list-group-item-action">
                            Moment
                            <i class="iconfont icon-arrow-right float-right"></i>
                        </router-link>
                        <router-link to="/lang" class="list-group-item list-group-item-action">
                            多语言
                            <i class="iconfont icon-arrow-right float-right"></i>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>
