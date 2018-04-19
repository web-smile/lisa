<template>
    <div class="app-container skill-store">
        <div class="wrap-title margin-md-b">
            <div>store-Getter使用demo</div>
            <p class="wrap-title-dec">
                <span class="marign-sm-r"><i class="icon icon-time"></i>日期：星期五 2018/05/04</span>
                <span class="marign-sm-r"><i class="icon icon-author"></i>作者：lisa</span>
                <span><i class="icon icon-category"></i>分类:vue</span>
            </p>
        </div>
        <div class="wrap-box">
            <div class="wrap-bg-title">store-getter用法</div>
            <!-- 第一种用法 -->
            <el-row class="marign-sm-b">
                <el-col :span="6">
                    <span>storeGetter_count值:</span>
                    <span> {{storeGetter_count}} </span>
                </el-col>
                <el-col :span="12">
                    <span class="padding-xxl-l"> 用法： <strong class="wrap-specialtext-color padding-xs-r">利用mapGetters 辅助函数</strong>直接使用storeGetter_count</span>
                </el-col>
            </el-row>
            <!-- 第二种用法 -->
            <el-row class="marign-sm-b">
                <el-col :span="6">
                    <span>storeGetter_count值第二种表示法：</span>
                    <span> {{$store.getters.storeGetter_count}}</span>
                </el-col>
                <el-col :span="12">
                    <span class="padding-xxl-l"> 用法：$store.getters.storeGetter_count</span>
                </el-col>
            </el-row>
             <!-- 第三种用法 -->
            <el-row class="marign-sm-b">
                <el-col :span="6">
                    <span>storeGetter_count值第三种表示法</span>
                    <span>{{$store.state.storeGetter.count}}</span>
                </el-col>
                <el-col :span="12">
                    <span class="padding-xxl-l">用法：$store.state.practice.count,即$store.state['模块名'].count,</span>
                </el-col>
            </el-row>
        </div>
        <div class="wrap-box">
            <div class="wrap-bg-title">通过属性访问</div>
            <div class="wrap-text-decoration">
                <div>
                    ① Getter 会暴露为 store.getters 对象，你可以以属性的形式访问（$store.getters.doneTodos）这些值；
                </div>
                <div>
                    ② 注意：getter 在通过属性访问时是作为 Vue 的响应式系统的一部分缓存其中的。
                </div>
            </div>
            <el-row class="marign-sm-b">
                <el-col :span="12">
                    <span>doneTodos属性值：</span>
                    <span>{{$store.getters.doneTodos}}</span>
                </el-col>
                <el-col :span="12">
                    <span class="padding-xxl-l">用法：$store.getters.doneTodos</span>
                </el-col>
            </el-row>
            <el-row class="marign-sm-b">
                <el-col :span="12">
                    <span>doneTodos属性值第二种表示法：</span>
                    <span>{{doneTodos}}</span>
                </el-col>
                <el-col :span="12">
                    <span class="padding-xxl-l"> 用法： <strong class="wrap-specialtext-color padding-xs-r">利用mapGetters 辅助函数</strong>直接使用doneTodos</span>
                </el-col>
            </el-row>
        </div>
        <div class="wrap-box">
            <div class="wrap-bg-title">通过方法访问</div>
            <div class="wrap-text-decoration">
                <div>
                    ① 可以通过让 getter 返回一个函数，来实现给 getter 传参。在你对 store 里的数组进行查询时非常有用。；
                </div>
                <div>
                    ② 注意：getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果。
                </div>
            </div>
            <el-row class="marign-sm-b">
                <el-col :span="12">
                    <span>getTodoById方法执行结果：</span>
                    <span>{{$store.getters.getTodoById(1)}}</span>
                </el-col>
                <el-col :span="12">
                    <span>用法：$store.getters.getTodoById(1)</span>
                </el-col>
            </el-row>
            <el-row class="marign-sm-b">
                <el-col :span="12">
                    <span>getTodoById方法执行结果第二种表示法：</span>
                    <span>{{getTodoById(1)}}</span>
                </el-col>
                <el-col :span="12">
                    <span> 用法： <strong class="wrap-specialtext-color padding-xs-r">利用mapGetters 辅助函数</strong>直接使用getTodoById(1)</span>
                </el-col>
            </el-row>
        </div>




    </div>
</template>
<script>
    import {mapGetters, mapMutations} from 'vuex';
    import { mapState } from 'vuex';
    import  "@/styles/skill/storeGetter.css"
    export default {
        name:'vueStoreDemo',
        data() {
            return {
            }
        },
        computed: {
            //当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。
            ...mapState([
                'count'// 映射 this.count 为 store.state.count,没有生效
            ]),
            // ...mapState({
            //     count: state => state.count,//没有生效
            // }),
            //mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：
            // 使用对象展开运算符将 getter 混入 computed 对象中
            ...mapGetters([
                'storeGetter_count',
                'doneTodos',
                'doneTodosCount',
                'getTodoById'
            ]),
        },
        created(){
            this.$store.commit('increment');
            console.log(this.$store);
            console.log(this.$store.getters.doneTodos);
        },
        methods: {

        },
    }
</script>

