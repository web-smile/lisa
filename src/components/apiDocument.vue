<template>
    <div class="app-container">
        <div class="wrap-title margin-md-b">
            <div v-text="apiHeader.title"></div>
            <p class="wrap-title-dec">
                <span class="marign-sm-r"><i class="icon icon-time"></i>日期：<span v-text="apiHeader.date"></span></span>
                <span class="marign-sm-r"><i class="icon icon-author"></i>作者：<span v-text="apiHeader.author"></span></span>
                <span><i class="icon icon-category"></i>分类:<span v-text="apiHeader.type"></span></span>
            </p>
        </div>
        <div class="wrap-box" v-for="item in apiContent" >
             <!--描叙 -->
            <div class="wrap-text-decoration" v-if="item.describe">
                <div>描叙：</div>
                <div class="margin-xxl-l" v-html="item.describe"></div>
            </div>
            <div class="wrap-bg-title" v-text="item.title"></div>
            <!-- html代码 -->
            <div class="wrap-text-decoration bgColor" v-if="item.layout">
                <div>html代码：</div>
                <div class="margin-xxl-l" v-text="item.layout"></div>
            </div>
             <!-- code 代码 -->
            <div class="wrap-text-decoration bgColor"  v-if="item.code">
                <div>js代码：</div>
                <div class="margin-xxl-l" v-html="item.code"></div>
            </div>
            <!--链接 -->
            <div class="wrap-text-decoration" v-if="item.link">
                <div>链接：</div>
                <div class="margin-xxl-l" v-html="item.link"></div>
            </div>
            <!--链接 -->
            <div class="wrap-text-decoration" v-if="item.res">
                <div>效果：</div>
                <div class="margin-xxl-l" v-html="item.res"></div>
            </div>
        </div>



    </div>
</template>
<script>
    export default {
        name:'apiDocument',
        data() {
            return {
            }
        },
        computed: {
        },
        props:{
            apiHeader:{
               type:Object,
                default:function(){
                    return {
                        title:'文章标题',
                        date:'星期一 2018/05/07',
                        author:'lisa',
                        type:'vue'
                    }

                }
            },
            apiContent:{
               type:Array,
                default:function(){
                    return [
                        {
                            title:'文章标题',
                            layout:'',//html代码
                            code:'',//js代码
                            describe:'',//描叙
                            link:'',//链接
                            res:''//效果
                        }
                    ]

                }
            },

        },
        created(){


        },
        methods: {

        },
    }
</script>
<style>
    /* 关键字 */
    .keyCode{
        color:#ca3a32;
    }

    /* 注释 */
    .note{
        color:#75715e;
    }
    .bgColor{
        /* background-color:#272822; */
    }
</style>

