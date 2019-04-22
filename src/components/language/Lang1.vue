<template>
    <div class="text-center">
        <h4 class="title">TEST</h4>
        <h3>{{$t('message.about')}}</h3>
        <ul class="userInfo" style="list-style: none;width: 200px;margin: 20px auto;text-align: left;">
            <li>name: {{$t('userInfo.name')}}</li>
            <li>age: {{$t('userInfo.age')}}</li>
            <li>likes: {{$t('userInfo.likes')}}</li>
            <li>sign: <span v-html="$t('userInfo.sign')"></span><!--语言中有html标签时，用v-html绑定内容--></li>
        </ul>
        <button type="button" @click="$router.back()">back</button>
    </div>
</template>

<script>
    export default {
        name: "Lang1"
    }
</script>

<style scoped>

</style>
