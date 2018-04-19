<template>
    <div class="app-container">
        <span>home</span>
    </div>
</template>
<script>
    export default {
        name:'home',
        created(){
            console.log(this);
            this.$store.commit('increment')
            console.log('????',this.$store.state.count);
        },
    }
</script>
