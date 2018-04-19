
 <!--
    des:制作证书
  -->
<template>

    <div class="app-container certificate-demo">
         <div class="clearfix">
            <tool class="fr"></tool>
        </div>
        <div class="clearfix margin-xs-t">
            <div class="fl radio-grop-box">
                <el-radio-group v-model="activeRadio" class="radio-grop">
                    <el-radio :label="1">背景</el-radio>
                    <el-radio :label="2">素材</el-radio>
                </el-radio-group>
            </div>
            <div class="fl radio-grop-content">
                <make-bg v-if="activeRadio == 1"></make-bg>
                <fodder v-if="activeRadio == 2"></fodder>
            </div>
            <div class="fl radio-grop-canvas">
                <div class="radio-grop-canvas-out">
                    <div class="radio-grop-canvas-set"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {fodder,makeBg,tool} from '@/components/certificate';
    export default {
        components: {  'fodder': fodder ,'make-bg': makeBg, 'tool':tool },
        data(){
            return{
                activeRadio:1,


            }
        },
        created() {

        },
        methods: {

            //初始化
            init(){


            },
        },
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    // 左侧 选项卡
    .radio-grop-box{
        width:54px;
        background-color:#fafafa;
        .radio-grop {
            width:100%;
        }
        .radio-grop .el-radio{
            width:100%;
            margin:0;
        }
    }
    .radio-grop-content {
        width:137px;
        background-color:#f2f2f2;
        margin-right:20px;
        padding:10px;
        padding-top:0;
        line-height:1.1;
        border-left:1px solid #ccc;
        font-size:14px;
    }

</style>


