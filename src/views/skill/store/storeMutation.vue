<template>
    <div class="app-container">
        <div class="wrap-title margin-md-b">
            <div>store-Mutation使用demo</div>
            <p class="wrap-title-dec">
                <span class="marign-sm-r"><i class="icon icon-time"></i>日期：星期一 2018/05/07</span>
                <span class="marign-sm-r"><i class="icon icon-author"></i>作者：lisa</span>
                <span><i class="icon icon-category"></i>分类:vue</span>
            </p>
        </div>
        <div class="wrap-box">
            <div class="wrap-bg-title">Mutation用法说明</div>
            <!-- 描叙 -->
             <div class="wrap-text-decoration">
                <div>
                    ① 更改store的状态唯一的方法是提交mutation，<strong class="wrap-specialtext-color">即 this.$store.commit('事件类型type')</strong>
                </div>
                <span>② 用法：</span>
                <div class="margin-xl-l">
                        mutations: { <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;    increment (state) {  <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;     // 变更状态<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;     state.count++ <br/>
                        }
                    }
                </div>
                <div>③ <strong class="wrap-specialtext-color">Mutation 必须是同步函数</strong></div>
                <div class="wrap-specialtext-color">ps：mutation都有一个事件类型type,和回调函数，在本例中,事件类型type:increment </div>
            </div>
        </div>
        <div class="wrap-box">
            <div class="wrap-bg-title">提交载荷（Payload）等</div>
            <!-- 描叙 -->
            <div class="wrap-text-decoration">
                <div>
                    ① 以下为载荷的几种用法  （没有载荷，载荷方式，对象对象）；
                </div>
                <div>
                    ② 在页面中直接使用mapMutations辅助函数映射的字符串，控制台会弹出[vue warn],并且执行结果不对，例如incrementPayload(10)；
                </div>
                <div class="marign-sm-b">
                    ③ 在页面中直接使用$store.commit('事件对象',[载荷]),控制台会弹出[vue warn]，并且执行结果不对，例如$store.commit('例如incrementPayload',10)。
                </div>
                <p>②③的警告信息说明不能直接调用Mutation的回调函数</p>
                <img src="static/images/warn/mutation-warn.jpg"/>
            </div>
            <!-- 没有使用辅助函数的用法-->
            <div>
                <el-row class="marign-sm-b">
                    <el-col :span="7">（没）有载荷，没有使用mapMutations辅助函数：</el-col>
                    <el-col :span="1">{{storeGetter_count}}</el-col>
                        <el-col :span="15">用法：页面中绑定的变量为store中的state(状态)storeGetter_count，Mutation更新状态的操作同其他方法用法一样</el-col>
                </el-row>
                <el-row class="marign-sm-b">
                    <el-col :span="8">无载荷的用法：</el-col>
                    <el-col :span="15">用法：this.$store.commit('increment')</el-col>
                </el-row>
                <el-row class="marign-sm-b">
                    <el-col :span="8">载荷方式的用法：</el-col>
                    <el-col :span="15">用法：this.$store.commit('incrementPayload',10)</el-col>
                </el-row>
                <el-row class="marign-sm-b">
                    <el-col :span="8">对象方式的用法：</el-col>
                    <el-col :span="15">用法：this.$store.commit('incrementObject',{amount:10})</el-col>
                </el-row>
                 <el-row class="marign-sm-b">
                    <el-col :span="8">对象方式的用法2：</el-col>
                    <el-col :span="15">用法2：this.$store.commit({type:'incrementObject',amount:10})</el-col>
                </el-row>
            </div>
            <!-- 使用辅助函数的用法-->
            <hr>
            <div>
                <el-row class="marign-sm-b">
                    <el-col :span="7">（没）有载荷，使用mapMutations辅助函数：</el-col>
                    <el-col :span="1">{{storeGetter_count}}</el-col>
                        <el-col :span="15">用法：页面中绑定的变量为store中的state(状态)storeGetter_count，Mutation更新状态的操作同其他方法用法一样</el-col>
                </el-row>
                <el-row class="marign-sm-b">
                    <el-col :span="8">无载荷的用法：</el-col>
                    <el-col :span="15">用法：this.increment</el-col>
                </el-row>
                <el-row class="marign-sm-b">
                    <el-col :span="8">载荷方式用法：</el-col>
                    <el-col :span="15">用法：this.incrementPayload(10)</el-col>
                </el-row>
                <el-row class="marign-sm-b">
                    <el-col :span="8">对象方式的用法：</el-col>
                    <el-col :span="15">用法：this.incrementObject{amount:10})</el-col>
                </el-row>
            </div>
        </div>



    </div>
</template>
<script>
    import {mapGetters} from 'vuex';
    import {mapMutations} from 'vuex';
    export default {
        name:'vueStoreDemo',
        data() {
            return {
            }
        },
        computed: {
            ...mapGetters([
                'storeGetter_count',
            ]),
        },
        created(){
            //this.$store.commit('increment');
            //this.$store.commit('incrementPayload',10);
            //this.$store.commit('incrementObject',{amount:10});
            // this.$store.commit({
            //     type:'incrementObject',
            //     amount:10
            // });
            //mapMutations后用法：
            //this.increment();
            //this.incrementPayload(10);
            //this.incrementObject({amount:10});

        },
        methods: {
            ...mapMutations([
                'increment',//将 `this.increment()` 映射为 `this.$store.commit('increment')`
                'incrementPayload',
                'incrementObject'
            ]),
        },
    }
</script>

