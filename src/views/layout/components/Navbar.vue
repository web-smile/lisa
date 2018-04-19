<template>
    <el-menu class="navbar"
        mode="horizontal">
        <hamburger v-if="showHamburger"
            class="hamburger-container"
            :toggleClick="toggleSideBar"
            :isActive="sidebar.opened"></hamburger>
        <levelbar></levelbar>
        <tabs-view></tabs-view>
        <error-log v-if="log.length>0"
            class="errLog-container"
            :logsList="log"></error-log>
        <!-- <screenfull class='screenfull'></screenfull> -->
        <div class="avatar-container">
        </div>
    </el-menu>
</template>

<script>

    export default {
        data() {
            return {

            }
        },
        components: {

        },
        created() {

        },
        computed: {

        },
        methods: {

        }
    }
</script>

<style rel="stylesheet/scss"
    lang="scss"
    scoped>
    .navbar {
        height: 50px;
        line-height: 50px;
        border-radius: 0px !important;
        .hamburger-container {
            line-height: 58px;
            height: 50px;
            float: left;
            padding: 0 10px;
        }
        .errLog-container {
            display: inline-block;
            position: absolute;
            right: 150px;
        }
        .screenfull {
            position: absolute;
            right: 0px;
            top: 16px;
            color: red;
        }
        .avatar-container {
            height: 50px;
            display: inline-block;
            position: absolute;
            right: 35px;
            .avatar-wrapper {
                cursor: pointer;
                margin-top: 5px;
                position: relative;
                .user-avatar {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                }
                .el-icon-caret-bottom {
                    position: absolute;
                    right: -20px;
                    top: 25px;
                    font-size: 12px;
                }
            }
        }
    }

    .navbar {
        border-bottom: 1px solid #e1e1e1;

    }

    .navbar .app-levelbar.el-breadcrumb {
        margin-left: 0px;
    }

    .navbar .nav-lang {
        line-height: 50px;
    }

    .navbar .nav-lang span.active {
        font-weight: 700;
        opacity: 1;
    }
</style>
