<template>
    <div class="lang text-center">
        <h4 class="">多语言切换</h4>
        <h3>{{$t('message.hello')}}</h3>
        <h4>{{welcomeMessage}}</h4>
        <div>
            <router-link to="/lang1">Test</router-link>
        </div>
        <br>
        <button type="button" @click="changelang('en')">英文</button>
        <button type="button" @click="changelang('cn')">中文</button>
        <button type="button" @click="changelang('hk')">繁体中文</button>
    </div>
</template>

<script>

    export default {
        name: "Lang",
        data: function () {
            return {
                uname: '雷锋'
            }
        },
        methods: {
            changelang(type){
                this.$i18n.locale= type;
                localStorage.selectLang = type;
            }
        },
        computed: {
            welcomeMessage(){
                return this.$t('message.welcome') + ', ' + this.uname;
            }
        }
    }
</script>

<style scoped>

</style>
