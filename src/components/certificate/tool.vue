<!--
    des:制作证书-素材
    date:2018.8.20
    auther:huoyuanyuan
-->
<template>
    <div class="tool">
        <!-- 字体 -->
        <el-select v-model="cerFontFamily"
            placeholder="字体"
            slot="prepend"
            @change="">
            <el-option label="微软雅黑"
                value="1"
                default></el-option>
            <el-option label="宋体"
                value="2"></el-option>
            <el-option label="楷体"
                value="3"></el-option>
        </el-select>

         <!-- 字符 -->
        <el-select v-model="cerFontSize"
            placeholder="字符"
            slot="prepend"
            @change="">
            <el-option label="12"
                value="1"
                default></el-option>
            <el-option label="14"
                value="2"></el-option>
            <el-option label="16"
                value="3"></el-option>
        </el-select>

        <ul class="text-style clearfix">
            <li class="bold" title="加粗"></li>
            <li class="italic" title="斜体"></li>
            <li class="underline" title="下划线"></li>
            <li class="text-color" title="文本颜色"></li>
            <li class="transfer" title="旋转"></li>
            <li class="layer" title="图层"></li>
        </ul>

        <!-- 行间距 -->
        <el-select v-model="cerSpace"
            placeholder="行间距"
            slot="prepend"
            @change="">
            <el-option label="12"
                value="1"
                default></el-option>
            <el-option label="14"
                value="2"></el-option>
            <el-option label="16"
                value="3"></el-option>
        </el-select>

        <!-- 预览 -->
        <span class="preview"></span>
    </div>
</template>
<script>
    export default {
        name:'tool',
        data() {
            return {
                cerFontFamily:'',//字体
                cerFontSize:'',//字号。
                cerSpace:'',//行间距
            }
        },
        created(){

        },
        methods:{
        }

    }
</script>
<style lang="scss" rel="stylesheet/scss">
    .tool .el-select{
        width:110px;
        margin-left:20px;
    }
    .tool .text-style{
        display:inline-block;
        vertical-align: middle;
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
