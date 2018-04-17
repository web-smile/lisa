<template>
    <div class="app-wrapper">
        <!--头部导航 -->
        <header class="header-fixed">
            <el-row>
                <el-col :span="24">
                    <el-menu  :default-active="$route.meta.activeItem" mode="horizontal" class="el-menu-demo">
                        <el-menu-item :index="item.path" v-for="item in navMenu" :key="item.index">
                            <router-link :to="item.path" >{{item.name}}</router-link>
                        </el-menu-item>
                    </el-menu>
                </el-col>
            </el-row>
        </header>
        <div style="position: relative;height: 60px;width: 100%;"></div>
        <main>
            <!-- 左侧导航 -->
            <div class="main-left">
                <siderbar></siderbar>
            </div>
            <!-- 右侧主内容区 -->
            <div class="main-right">
                <app-main></app-main>
            </div>
        </main>
    </div>
</template>
<script>
    //导航菜单
    const navMenu = [
        {
            name: "首页",
            path: '/home/index',
            index: "0"
        },
        {
            name: "移动前端",
            redirectAdmin: true,
            "path": '/wechat/index',
            index: "1"
        },
        {
            name: "Web前端",
            path: "/web/index",
            redirectAdmin: false,
            index: "2"
        },
        {
            name: "授人以渔",
            path: '/skill/index',
            index: "3"
        },
        {
            name: "程序人生",
            "path":'/code/index',
            index: "4"
        },
        {
            name: "关于&留言",
            "path": '/about/index',
            index: "5"
        }
    ];
    import { Siderbar, AppMain } from '@/views/layout/components'
	export default {
		name: "layout",
		data() {
			return {
                navMenu: navMenu,
				active: true,
				headerFixed: true
			};
        },
        created(){
            console.log( this.$route,this.$route.meta.activeItem);

        },
		components: {
            Siderbar,
            AppMain
        },
		methods: {},
		watch: {
		}
	};
</script>
<style>
	.app-wrapper {
		position: relative;
		height: 100%;
		width: 100%;
	}

    /* 头部导航 */
	header {
		z-index: 1000;
		min-width: 1200px;
		transition: all 0.5s ease;
		border-top: solid 4px #3091f2;
		background-color: #fff;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
	}

	header.header-fixed {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
	}

	header .el-menu-demo {
	    padding-left: 300px !important;
	}

    .el-menu-demo.el-menu--horizontal .el-menu-item{
        padding:0;
    }

    .el-menu-demo.el-menu--horizontal .el-menu-item a{
        text-decoration: none;
        display:block;
        height:100%;
        padding:0 20px;
    }
	/* 主内容区 */
	main {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		min-height: 800px;
		border: solid 40px #e9ecf1;
		background-color: #fcfcfc;
	}

	main .main-left {
        text-align: center;
        width: 200px;
        float: left;
	}

	main .main-right {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        background-color: #fff;
        padding: 50px 70px;
	}

	main .el-menu {
	    background-color: transparent !important;
	}
</style>

