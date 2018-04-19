<template>
    <el-menu mode="vertical" theme="default" :unique-opened="uniqueOpened" :default-active="$route.path">
        <siderbar-item :routes='permission_routers'></siderbar-item>
    </el-menu>
</template>

<script>
    import {mapGetters} from 'vuex';
    import SiderbarItem from './SiderbarItem';
    export default {
        data() {
            return {
                uniqueOpened: true,
            }
        },
        components: {SiderbarItem},
        computed: {
            ...mapGetters([
                'permission_routers'
            ])
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .el-menu {
        min-height: 100%;
        border:none;
    }

</style>
