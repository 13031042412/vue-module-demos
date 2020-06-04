<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">单容器</router-link>|
            <router-link to="/two">多容器</router-link>|
            <router-link to="/clone">克隆</router-link>|
            <router-link to="/add">增加</router-link>|
            <router-link to="/about">About</router-link>|
            <router-link to="/test">Test</router-link>
        </div>
        <router-view />
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
