
 <!--
    des:1.利用mockjs来实现tree的demo 2.实时输入问题
  -->
<template>
    <div class="app-container tree-demo">
        <!-- 复合型输入框 -->
        <el-input placeholder="请输入内容"  class="input-with-select marign-sm-b" clearable v-model="searchKey"  @keyup.native="onkeyup($event)" @keyup.enter.native="onenter">
            <el-select v-model="selectKey" slot="prepend" placeholder="请选择">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search" @click.native="onenter"></el-button>
        </el-input>
        <!-- 默认展开第一级，点击三角展开下级列表 -->
        <el-tree
            node-key="id"
            :default-expanded-keys="['0']"
            :auto-expand-parent="true"
            :props="defaultProps"
            :render-content="renderContent"
            :highlight-current="true"
            :expand-on-click-node="false"
            lazy
            :load="loadChildData"
            @node-click="handleNodeClick">
        </el-tree>
        <hr>
        <!-- 直接加载tree列表 -->
        <el-tree
            node-key="id"
            :props="defaultProps"
            :render-content="renderContent"
            :highlight-current="true"
            :expand-on-click-node="false"
            :data="postData"
            @node-click="handleNodeClick">
        </el-tree>
    </div>
</template>
<script>
    import { departmentList, labeltList} from '@/api/skill/index';
    export default {
        data() {
            return {
                searchKey: '',//搜索关键字
                lastTimeStamp: 0,//全局的一个变量，当的事件函数触发时重新修改赋值
                selectKey: '',
                defaultProps: {//true 配置项
                    label: 'title',
                    children: 'children',
                },
                postData:[],
            }
        },
        created(){
            this.loadData();
            this.getQuoteType();
        },
        methods: {
            /**
             * des:搜索的回车事件
             */
            onenter(){
                if(!this.searchKey){
                    this.warning('请输入关键字');
                    return;
                }
                console.log('发送请求!!!');

            },

            /**
             * des:用户在输入状态下不发送请求，等停止输入后发送请求
             */
            onkeyup(event){
                if(event.keyCode != 13){//除回车键外
                    //标记当前事件函数的时间戳
                    this.lastTimeStamp = event.timeStamp;
                    setTimeout(() => {
                        //1s后比较二者是否还相同（因为只要还有事件触发，lastTimeStamp就会被改写，不再是当前事件函数的时间戳）
                        if(this.lastTimeStamp == event.timeStamp){
                            console.log('发送请求');
                        }
                    }, 1000);
                }

            },
            /**
             * des:标签数据
             * @param
             *
             */

            loadData() {
                let data = {
                    'scene[]': 'label'
                }
                labeltList(data).then(response => {//接口调用
                    this.postData = response.data;
                });
            },
            /**
             * des:部门数据
             * @param
             *
             */

            loadChildData(node, resolve) {
                this.treeLoading = true;
                let pid,data;
                node.data  ? pid = node.data.id : '';
                data = {
                    pid: pid,
                    'scene[]': 'departments'
                }
                departmentList(data).then(response => {//接口调用
                    resolve(response.data);
                    if(node.level == 0){
                          this.$nextTick(function () {
                            let one = document.getElementsByClassName('el-tree-node__content')[0];
                            one.click();
                            this.treeLoading = false;
                        })
                    }


                });
            },
            handleNodeClick(data) {
            },
            /*树节点的内容区的渲染 Function*/
            renderContent(h, { node, data, store }) {
                let icon;
                node.isLeaf = data.leaf;//同步接口数据，用于判断节点是否为单节点， 若为单节点则会增添一个.is-leaf的class
                if(data.group == 'department') {
                    icon = <icon-svg icon-style="icon-style" icon-class="el-icon-ifcn-dingding2"></icon-svg>
                }else if(data.group == 'label'){
                    icon = <icon-svg icon-style="icon-style" icon-class="el-icon-ifcn-department"></icon-svg>
                }
                return (
                    <span style="font-size: 14px; padding-right: 8px" class="node-disabled">
                       {icon}
                        <span class="normalText">
                            <span class="label" title={node.label}> {node.label} </span>
                        </span>
                        <span class="pos-a">
                            <span style="font-size: 12px;line-height: 30px;"
                                on-click={(event) => this.operation(node, data, event)}>
                                <icon-svg icon-style="icon-style" icon-class="el-icon-ifcn-gengduo" style="color:red;"></icon-svg>
                            </span>
                        </span>
                    </span>
                );
            },
            // 与tree无关 Object.entries 用法
            getStuEntries(){
                // 按顺序
                const obj = { foo: 'bar', baz: 42 };
                console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

                // 随机
                const anObj = { 100: 'a', 102: 'b', 7: 'c' };
                console.log(Object.entries(anObj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

                var arr = ["a", "b", "c"];
                var iterator = arr.entries();//Array Iterator {}
                for(let[index,item] of iterator){
                    console.log(item,index);
                    console.log(`Key: ${index} and Value: ${item}`);
                }
                for(let[key,value] of Object.entries(obj)){
                    console.log(`Key: ${key} and Value: ${value}`);
                }
                // for(let value of obj){
                //     console.log(value);
                // }

            },
            // Object.assign()用法
            getStuAssign(){
                //针对深拷贝，需要使用其他方法，因为 Object.assign()拷贝的是属性值。
                //假如源对象的属性值是一个指向对象的引用，它也只拷贝那个引用值。
                let obj1 = { a: 0 , b: { c: 0}};
                let obj2 = Object.assign({}, obj1);
                // console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}}

                obj1.a = 1;
                console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 0}}
                console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}}

            },
            //引用类型
            getQuoteType(){
                var a = {n:1};//a指向{n:1}
                var b = a;//b指向{n:1}
                a = {n:2};//a指向{n:2}
                a.x = a ;//.优先级高于=  故为a添加x属性，此时a={n:2,x:undefined},x的值为故此时a={n:2,x:a}
                console.log(a.x);
                console.log(b.x);//{n:2}

                var a = {n:1};//a指向{n:1}
                var b = a;//b指向{n:1}
                a.x = a = {n:2};//为a添加x属性此时a={n:1,x:undefined},x的值为a故a={n:1,x:{n:a}},a指向n:2

                console.log(a.x);//undefined
                console.log(b.x);//{n:2}



                var arr = [1,2,3];
                var arr2 = arr;
                arr = [4,5,6,7]
                console.log(arr,arr2);
            }





        },
    }
</script>
<style>

/*select框 css*/
.tree-demo .el-input-group__prepend .el-select{
    width:150px;
}

/*树节点*/
.tree-demo .el-tree{
    width:200px;
}

.tree-demo .el-tree-node__content{
    position:relative;
     width:200px;
    height:30px;
    cursor: pointer;
}

/*操作项*/

.tree-demo .el-tree-node__content  span.pos-a {
    position:absolute;
    top:0;
    right:20px;
    display: none;
}

.tree-demo .el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content span.pos-a{
    display: inline-block;
}
.el-tree-node__content:hover span.pos-a {
    display: inline-block;
}
/*有子节点的三角css*/
.tree-demo .el-tree-node__content>.el-tree-node__expand-icon {
    padding: 3px 6px;
    margin-left: 10px;
    font-size: 15px;
    color: #8a8989;
    cursor: pointer;
}

/*没有子节点的三角css*/
.tree-demo .el-tree-node__expand-icon.is-leaf {
    color: transparent;
}

/*节点选中的css*/
.tree-demo .el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content{
    background-color:#f0f7ff
}
.testBurl{
    width:100px;
    height:100px;
    border:1px solid red;
}
</style>


