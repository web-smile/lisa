
 <!--
    des:补全路径写法
  -->
<template>
    <div class="app-container ">
        <api-document :api-header="apiHeader" :api-content="apiContent"></api-document>
        <!-- 将js函数变成vue函数不报错 -->
        <div :style="{'backgroundImage':'url('+baseUrlJs(1)+')'}" ></div>
        <!-- 使用混合不报错 -->
        <div :style="{'backgroundImage':'url('+baseUrlMixins(1)+')'}" ></div>
        <!-- 为vue拓展一个方法 -->
        <div :style="{'backgroundImage':'url('+baseUrlProtptype(1)+')'}" ></div>
        <!-- <div>错误写法：</div> -->
        <!-- <div class="testBurl" :style="{'backgroundImage':'url('+baseErrorUrl(1)+')'}" ></div> -->
    </div>
</template>
<script>
    import { applicationHelper } from '@/mixin/applicationHelper';
    import  baseErrorUrl from '@/api/skill/index';
    import apiDocument from '@/components/apiDocument';

    export default {
        mixins: [applicationHelper],
        data() {
            return {
                apiHeader: {
                    title:'补全路径写法',
                    date:'星期一 2018/07/02',
                    author:'lisa',
                    type:'vue'
                },
                apiContent:[
                    {
                        title:'将js函数变成vue函数--Yes',
                        layout:`<div class="testBurl" :style="{'backgroundImage':'url('+baseUrlJs(1)+')'}" ></div>`,
                        code:`
                            <div><span class="keyCode">import</span> { json2html } <span class="keyCode">from</span> '@/prototypefns/jsonviewer/json-viewer';</div>
                            <div><span class="keyCode">import</span> { DateToUnix, UnixToDate, NumBerToHanZi, DownTime, baseUrlJs } <span class="keyCode">from</span> '@/prototypefns/jsTime/datatime';</div>
                            <div class="keyCode">export default {</div>
                                <div class="marigin-sm-l">install (Vue,options) {</div>
                                    <div  class="margin-lg-l note">/*json转换器*/</div>
                                    <div class="margin-lg-l">Vue.prototype.json2html = json2html;</div>
                                    <div class="margin-lg-l note">/*时间转换器*/</div>
                                    <div class="margin-lg-l">Vue.prototype.dateToUnix = DateToUnix;<span class="note">//转换时间戳</span></div>
                                    <div class="margin-lg-l">Vue.prototype.unixToDate = UnixToDate;<span class="note">//转换时间</span></div>
                                    <div class="margin-lg-l">Vue.prototype.downTime = DownTime;<span class="note">//倒计时</span></div></div>
                                    <div class="margin-lg-l">Vue.prototype.numBerToHanZi = NumBerToHanZi;<span class="note">//转汉字</span></div>
                                    <div class="margin-lg-l">Vue.prototype.baseUrlJs = baseUrlJs;<span class="note">//补全路径</span></div>

                                <div class="marigin-sm-l"">}</div>
                            <div>}</div>`,
                        describe:'使用将js函数变成vue函数实现补全路径方法',
                        link:`<a href="https://www.cnblogs.com/websmile/p/9179002.html" target="_black">https://www.cnblogs.com/websmile/p/9179002.html</a>`,
                    },
                    {
                        title:'使用混入（mixin）不报错--Yes',
                        layout:`<div :style="{'backgroundImage':'url('+baseUrlMixins(1)+')'}" ></div>`,
                        code:`
                            <div class="note">// src/mixin/applicationHelper.js</div>
                            <div>export const applicationHelper = {</div>
                                <div class="marigin-sm-l">data() {</div>
                                    <div class="margin-lg-l">return {}</div>
                                <div class="marigin-sm-l">},</div>
                                <div class="marigin-sm-l">methods: {</div>
                                    <div class="margin-lg-l">baseUrlMixins(val) {</div>
                                        <div class="margin-xxl-l">return val</div>
                                    <div class="margin-lg-l">}</div>
                                <div class="marigin-sm-l">}</div>
                            <div>}</div>
                            import { applicationHelper } from '@/mixin/applicationHelper';<br/>
                            import apiDocument from '@/components/apiDocument';<br/>
                            export default {<br/>
                                <div class="marigin-sm-l">mixins: [applicationHelper],<br/>
                                    .<br/>
                                    .<br/>
                                    .<br/>
                                </div>

                            }`,
                    },
                    {
                        title:'为vue扩展一个方法--Yes',
                        layout:`<div :style="{'backgroundImage':'url('+baseUrlProtptype(1)+')'}" ></div>`,
                        code:`
                            // main.js <br/>
                            Vue.prototype.baseUrlProtptype = function (val) {
                            <div class="marigin-sm-l"> return val;</div>
                            }
                        `,
                        describe:`在main.js中，在vue的原型上扩展一个baseUrlProtptype方法`
                    },
                    {
                        title:'错误写法--No',
                        layout:`<div class="testBurl" :style="{'backgroundImage':'url('+baseErrorUrl(1)+')'}" ></div>" ></div>`,
                        code:`
                            <div class="note">
                               //  src/api/skill/index.js   补全路径
                            </div>
                            <div>
                            export function baseErrorUrl(val){ </div>
                                <div class="marigin-sm-l">return val;</div>
                            }<br/>

                            <div class="note"> // 应用</div>
                            <div>import  baseErrorUrl from '@/api/skill/index';</div>
                        `,
                        res:'<img src="static/images/warn/base_url_error.jpg" alt="图片路径出错了" width="100%"/>',
                        describe:`错误提示语：<br/>
                                <div class="marigin-sm-l">
                                    [Vue warn]: Property or method "baseErrorUrl" is not defined on the instance but referenced during render.<br/>
                                    Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property.<br/>
                                    See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.<br/>
                                </div>
                                原因：is not defined 是因为没有把这个方法放到 this对象上（vue）`

                    },
                ]

            }
        },
        components: {  'api-document': apiDocument },
        created(){
        },
        methods: {
        },
    }
</script>
<style>
    .testBurl{
        width:100px;
        height:100px;
        border:1px solid red;
    }
</style>



