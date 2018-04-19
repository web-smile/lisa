<template>
    <div class="sidebar-wrapper">
        <div v-for="item in routesOderBy"  >
            <div  v-if="item.children" >
                <router-link :to="item.path+'/'+item.children[0].path" v-if=" item.children.length>0 && checkAccess(item)">
                    <el-menu-item  :index="item.path+'/'+item.children[0].path"> <span v-text="item.meta._menuName"></span> </el-menu-item>
                </router-link>
                <el-submenu :index="item.path" >
                    <template slot="title">{{ item.meta._menuName}}</template>
                    <div v-for="child in item.children" >
                        <router-link  class="menu-indent" :to="item.path+'/'+child.path">
                            <el-menu-item :index="item.path+'/'+child.path">
                                <span>{{child.meta._menuName}}</span>
                            </el-menu-item>
                        </router-link>
                    </div>
                </el-submenu>
            </div>
        </div>
    </div>

</template>

<script>

    export default {
        name: 'SiderbarItem',
        data: function () {
            return {
                routerGroup: ''
            }
        },
        props: {
            routes: {
                type: Array
            }
        },
        created() {
            this.routerGroup = 1;
        },
        methods: {},
        computed: {
            routesOderBy: function () {
                return  this.$router.options.routes
            }
        }
    }
</script>
<style>
    .icon-style {
        width: 16px;
        height: 16px;
        vertical-align: -0.2em;
        color: #666;
        overflow: hidden;
    }


    /* 一级箭头 */
    .sidebar-wrapper  .el-submenu__icon-arrow{
        right: 30px;
        color: #999;
        font-weight: bold;
        -webkit-transform: rotateZ(-90deg);
        transform: rotateZ(-90deg);
    }

    /* 一级hover */
    .sidebar-wrapper .el-submenu__title:hover{
        background-color: transparent;
    }

    /* 一级css */
    .sidebar-wrapper .el-submenu .el-submenu__title{
        font-weight: 700;
        font-size: 14px;
        height:44px;
        line-height:44px;
        padding: 0 30px;
        color: #333;
    }

    /* 去掉二级a的下划线 */
    .sidebar-wrapper a{
        text-decoration: none;
    }

    /* 二级效果 */
    .sidebar-wrapper .el-menu .el-menu-item{
          font-size: 12px;
        color: #666;
        height:40px;
        line-height:40px;
    }

    /* 二级选中效果 */
    .sidebar-wrapper .el-menu .el-menu-item.is-active{
        background-color:#e64c65;
        color:#fff;
    }

    /* 二级hover */
    .sidebar-wrapper .el-submenu .el-menu-item:hover {
        background-color: #e64c65;
        color:#fff;
    }




</style>
<style rel="stylesheet/scss" lang="scss" scoped>
    .svg-icon {
        margin-right: 5px;
    }

    .hideSidebar .menu-indent {
        display: block;
        text-indent: 10px;
    }

    .sidebar-wrapper .el-menu .el-submenu .el-menu {
        background-color: transparent !important;
    }




    /**/
    .sidebar-wrapper .el-menu .el-submenu .el-menu-item {
        height: 40px;
        line-height: 40px;
        background-color: #FAFAFA;
    }

    .sidebar-wrapper .el-menu .el-submenu{

    }



    .sidebar-wrapper .el-menu .el-submenu .el-menu-item span {
        font-size: 12px;
        margin-left: 16px;
    }

    .sidebar-wrapper [class^="el-icon-ifcn"], .sidebar-wrapper [class*=" el-icon-ifcn"] {
        font-size: 20px;
    }


</style>

