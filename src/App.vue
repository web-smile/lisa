<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    // import "@/styles/common.scss";
    export default {
        name: 'App',
        created(){
            require('./styles/common.scss');
        }
    }
</script>
