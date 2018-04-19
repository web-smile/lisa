<template>
    <div class="app-container">
        <!-- <p v-text="userName"></p>
        <p v-text="sex"></p>
        <p v-text="age"></p> -->
        <div class="title">props验证</div>
        <el-form  class="wrap-form" label-width="180px" >
            <el-form-item label="null类型props：">
                <span v-text="msgNull"></span>
            </el-form-item>
            <el-form-item label="string类型props：">
                <span v-html="msgString"></span>
            </el-form-item>
            <el-form-item label="number类型props：">
                <span v-text="msgNumber"></span>
            </el-form-item>
            <el-form-item label="obj类型props：">
                <span v-text="msgObj.name"></span>
                <span v-text="msgObj.age"></span>
            </el-form-item>
            <el-form-item label="自定义验证props：">
                <span v-text="msgValidate"></span>
            </el-form-item>
            <el-form-item label="多种类型props：">
                <span v-text="msgProp"></span>
            </el-form-item>
            <el-form-item label="子组件props：">
                <input v-model="temp">
                {{temp}}
            </el-form-item>
        </el-form>
        <!-- <el-button type="text" @click="open4">点击打开 Message Box</el-button> -->
    </div>
</template>
<script>
    // import * as math from '@/utils/circleplus';
    // import exp from '@/utils/circleplus';

    import('@/utils/circleplus')
    .then(({e}) => {
        console.log('?????',e);
    });


    export default {
        name:'vuePropsDemo',
        /*************props用法1**************/

        //props:['userName','sex','age'],//props定义

        /*************props用法2**************/
        props:{
            msgNull:null,//基础类型检测（'null'）意思是任何类型都可以
            msgProp: [String, Number], // 多种类型
            msgString:{//String类型，必须是定义过的，可以是空字符串""
                type:String,
                required:true,
            },
            msgNumber:{//Number类型，默认值100
                type:Number,
                default:100
            },
            msgObj:{//Object对象，返回值必须是js对象
                type:Object,
                default:function(){
                    return {
                        name:'lisa',
                        age:18
                    }

                }
            },
            msgValidate:{//自定义验证，必须是Number类型，验证规则：大于10,如果不满足条件，控制台会抛出警告
                type:Number,
                validator: function(val){
                    return val > 10;
                }
            },
            childMsg:null,//用法三

        },
        data() {
            return {
                temp:this.childMsg,

            }
        },
        created(){

        },
        methods: {
            open4() {
                const h = this.$createElement;
                const aTemp = 'https://www.baidu.com/?tn=98010089_dg&ch=8';
                this.$msgbox({
                    title: '消息',
                    message: h('p',  [
                        h('span',  '内容可以是 '),
                        h('a', {
                            //普通html特性
                            attrs: {
                                href:aTemp
                            },
                            //相当于`v-bind:style`
                            style: {
                                color: 'red',
                                fontSize: '14px'},
                            },
                            '百度'
                        )
                    ]),
                    showCancelButton: true,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    beforeClose: (action, instance, done) => {
                        if (action === 'confirm') {
                            instance.confirmButtonLoading = true;
                            instance.confirmButtonText = '执行中...';
                            setTimeout(() => {
                                done();
                                setTimeout(() => {
                                instance.confirmButtonLoading = false;
                                }, 300);
                            }, 3000);
                        } else {
                            done();
                        }
                    }
                }).then(action => {
                    alert('>>>>>');
                    this.$message({
                        type: 'info',
                        message: 'action: ' + action
                    });
                });
            }
        },

        watch:{
            childMsg(){
                this.temp = this.childMsg
            }
        }
    }
</script>
<style>
    .title{
        font-size: 14px;
        padding-left: 20px;
        color: #333;
        line-height: 34px;
        background-color: #F5F5F5;
    }
</style>

