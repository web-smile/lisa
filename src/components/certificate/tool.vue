<!--
    des:制作证书-素材
    date:2018.8.20
    auther:huoyuanyuan
-->
<template>
    <div class="tool">
        <!-- 字体 -->
        <el-dropdown trigger="click">
            <span class="el-dropdown-link">
                字体<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>微软雅黑</el-dropdown-item>
                <el-dropdown-item>宋体</el-dropdown-item>
                <el-dropdown-item>楷体</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>

         <!-- 字符 -->
        <el-dropdown trigger="click">
            <span class="el-dropdown-link">
                字符<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>12</el-dropdown-item>
                <el-dropdown-item>14</el-dropdown-item>
                <el-dropdown-item>16</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>

        <ul class="text-style clearfix">
            <li class="bold" title="加粗"></li>
            <li class="italic" title="斜体"></li>
            <li class="underline" title="下划线"></li>
            <li class="text-color" title="文本颜色"></li>
            <li class="transfer" title="旋转"></li>
            <li class="layer" title="图层"></li>
        </ul>

        <!-- 行间距 -->
        <el-dropdown trigger="click">
            <span class="el-dropdown-link">
                行间距<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>12</el-dropdown-item>
                <el-dropdown-item>14</el-dropdown-item>
                <el-dropdown-item>16</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <span class="preview"></span>
    </div>
</template>
<script>
    export default {
        name:'tool',
        data() {
            return {

            }
        },
        created(){

        },
        methods:{
        }

    }
</script>
<style lang="scss" rel="stylesheet/scss">
    .tool .el-dropdown{
        cursor: pointer;
        margin-right:20px;
    }
    .tool .text-style{
        display:inline-block;
    }
    .tool .text-style li{
        float:left;
        margin-right:20px;
    }
    // 加粗
    .tool .text-style .bold{
        width:9px;
        height:14px;
        background:url(../../../static/images/certificate/b_bold_icon.png) no-repeat;
        background-size:cover;
        cursor:pointer;
    }
    .tool .text-style .bold:hover{
        background:url(../../../static/images/certificate/b_bold_icon_pressed.png) no-repeat;
    }
    // italic
    .tool .text-style .italic{
        width:7px;
        height:15px;
        background:url(../../../static/images/certificate/i_tilt_icon.png) no-repeat;
        background-size:cover;
        cursor:pointer;
    }
    .tool .text-style .italic:hover{
        background:url(../../../static/images/certificate/i_tilt_icon_pressed.png) no-repeat;
    }

    //下划线
    .tool .text-style .underline{
        width:12px;
        height:17px;
        background:url(../../../static/images/certificate/u_underline_icon.png) no-repeat;
        background-size:cover;
        cursor:pointer;
    }
    .tool .text-style .underline:hover{
        background:url(../../../static/images/certificate/u_underline_icon_pressed.png) no-repeat;
    }

    //字体颜色
    .tool .text-style .text-color{
        width:12px;
        height:17px;
        background:url(../../../static/images/certificate/a_fontcolor_icon.png) no-repeat;
        background-size:cover;
        cursor:pointer;
    }
    .tool .text-style .text-color:hover{
        background:url(../../../static/images/certificate/a_fontcolor_icon_pressed.png) no-repeat;
    }

    //旋转
    .tool .text-style .transfer{
        width:17px;
        height:16px;
        background:url(../../../static/images/certificate/refresh_icon.png) no-repeat;
        background-size:cover;
        cursor:pointer;
    }
    .tool .text-style .transfer:hover{
        background:url(../../../static/images/certificate/refresh_icon_pressed.png) no-repeat;
    }

    //图层
    .tool .text-style .layer{
        width:18px;
        height:19px;
        background:url(../../../static/images/certificate/layer_icon.png) no-repeat;
        background-size:cover;
        cursor:pointer;
    }
    .tool .text-style .layer:hover{
        background:url(../../../static/images/certificate/layer_icon_pressed.png) no-repeat;
    }

    //预览？？？？？
    .tool .preview{
        width:18px;
        height:19px;
        background:url(../../../static/images/certificate/layer_icon.png) no-repeat;
        background-size:cover;
        cursor:pointer;
    }
    .tool .preview:hover{
        background:url(../../../static/images/certificate/layer_icon_pressed.png) no-repeat;
    }
</style>
