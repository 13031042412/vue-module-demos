<template>
    <div id="app">
        <ul class="nav justify-content-center border-bottom">
            <li class="nav-item">
                <router-link exact-active-class="active" class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link exact-active-class="active" class="nav-link" to="/fyb">Fyb</router-link>
            </li>
            <li class="nav-item">
                <router-link exact-active-class="active" class="nav-link" to="/copy">Copy</router-link>
            </li>



            <li class="nav-item">
                <router-link exact-active-class="active" class="nav-link" to="/helloworld">Hello</router-link>
            </li>
        </ul>
        <router-view/>
    </div>
</template>

<script>
    $(function () {
        console.log('jquery 引入成功.')
    });
    export default {
        name: 'App'
    }
</script>

<style scoped>
.nav .nav-item .active{color: red;}
</style>
