<template>
    <div class="app-container">
        <div class="wrap-title margin-md-b">
            <div>store-Action使用demo</div>
            <p class="wrap-title-dec">
                <span class="marign-sm-r"><i class="icon icon-time"></i>日期：星期一 2018/05/07</span>
                <span class="marign-sm-r"><i class="icon icon-author"></i>作者：lisa</span>
                <span><i class="icon icon-category"></i>分类:vue</span>
            </p>
        </div>
        <div class="wrap-box">
            <div class="wrap-bg-title">Action用法说明</div>
            <!-- 描叙 -->
            <div class="wrap-text-decoration">
                 Action类似于mutation，不同在于：
                <div>
                    ① Action 提交的是mutation,而不是直接变更状态；
                </div>
                <div>
                    ② Action 可以包含任意异步操作。
                </div>
                <span>③ 用法：</span>
                <div class="margin-xl-l">
                    <div>mutations: { </div>
                    <div class="marigin-sm-l"> increment (state) { </div>
                    <div class="margin-lg-l">// 变更状态  </div>
                    <div class="margin-lg-l">state.count++  </div>
                    <div class="marigin-sm-l">}</div>
                    <span>},</span>
                </div>
                <div class="margin-xl-l">
                    <div>actions: {</div>
                    <div class="marigin-sm-l">
                        //Action函数接受一个与store实例具有相同方法和属性的context对象，因此你可以调用context.commit提交一个mutation<br/>
                        //或者通过context.state和context.getters来获取state和getters。
                    </div>
                    <div class="marigin-sm-l"> increment (context) { </div>
                    <div class="margin-lg-l">context.commit('increment')  </div>
                    <div class="marigin-sm-l">}</div>
                    <span>},</span>
                </div>
                <span>或者</span>
                <div class="margin-xl-l">
                    <div>actions: {</div>
                    <div class="marigin-sm-l"> //项目中会常用es5的参数解构来简化代码
                    </div>
                    <div class="marigin-sm-l"> increment ( {commit}) { </div>
                    <div class="margin-lg-l">commit('increment')  </div>
                    <div class="marigin-sm-l">}</div>
                    <span>},</span>
                </div>
                <div class="marign-sm-b">组件中使用：this.$store.dispatch('increment')即通过store.dispatch方法触发<br/>或者使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用（需要先在根节点注入 store）</div>
                <div class="wrap-specialtext-color">
                    ps：一个 store.dispatch 在不同模块中可以触发多个 action 函数。<br/>
                    在这种情况下，只有当所有触发函数完成后，返回的 Promise 才会执行。
                </div>
            </div>
        </div>
        <div class="wrap-box">
            <div class="wrap-bg-title">Action 应用</div>
            <!-- 描叙 -->
            <div class="wrap-text-decoration">
                <div>
                    ① 同样支持载荷方式和对象方式进行分发；
                </div>
                <div class="marign-sm-b">
                    ②  使用 mapActions 辅助函数。
                </div>
                <div class="wrap-specialtext-color">
                    例如：
                    <div class="margin-md-l">
                        this.$store.dispatch('incrementPayloadtAsync',100); //actions操作，载荷方式<br/>
                        this.$store.dispatch({type:'incrementObjectAsync',amount:100}); //actions操作，对象方式<br/>
                        this.incrementPayloadtAsync(10) //actions操作辅助函数用法;
                        this.incrementPayload(10) //mutations操作<br/>

                    </div>
                </div>

            </div>
             <el-row class="marign-sm-b">
                <el-col :span="5">storeGetter_count执行结果：</el-col>
                <el-col :span="1">{{storeGetter_count}}</el-col>
            </el-row>
        </div>
        <!-- 组合Action -->
        <div class="wrap-box">
            <div class="wrap-bg-title">组合 Action</div>
            <!-- 描叙 -->
            <div class="wrap-text-decoration">
                Action什么时候结束呢？
                通过this.$store.dispatch('Action名',[载荷]).then(()=>{

                })
            </div>
            <div>

            </div>
        </div>


    </div>
</template>
<script>
    import {mapGetters} from 'vuex';
    import {mapMutations} from 'vuex';
    import {mapActions} from 'vuex';
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
            // this.$store.dispatch('incrementPayloadtAsync',100);
            // this.$store.dispatch({type:'incrementObjectAsync',amount:100});
            // this.incrementPayload(10)
            // this.incrementPayloadtAsync(10);
            //  this.$store.dispatch('actionA').then(() => {
            //     alert('action结束');
            //     return;
            // })
            this.$store.dispatch('actionB',100).then(()=>{
                alert('actionB执行结束');
            })

        },
        methods: {
            ...mapMutations([
                'increment',//将 `this.increment()` 映射为 `this.$store.commit('increment')`
                'incrementPayload',
                'incrementObject'
            ]),
            ...mapActions([
                'increment',
                'incrementPayloadtAsync',
                'incrementObjectAsync'
            ])
        },
    }
</script>

