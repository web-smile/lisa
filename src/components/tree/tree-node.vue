<template>
    <div>
        <!-- [
            {
            "title": "开发测试专用",
            "id": "0",
            "parentId": "0",
            "group": "department",
            "visible": true,
            "open": true,
            "disabled": false,
            "children": [],
            "tooltip": ""
            }
        ] -->
        <!-- item -->
        <!-- {
            "title": "开发测试专用",
            "id": "0",
            "parentId": "0",
            "group": "department",
            "visible": true,
            "open": true,
            "disabled": false,
            "children": [],
            "tooltip": "",
            "key":""
        } -->

        <ul>
            <li v-for='(item, index) of nodeData'
                v-show="!item.hasOwnProperty('visible') || item.visible"
                :key="item.key"
                :class="['item-' + item.group, 'item-parentid-' + item.parentId, {onLyLi:item.parentId === null && treeData.length===1, 'selected': hasSelected(item.id), 'disabled': item.disabled}]">
                <div class="item-handle-area"
                    @click="handleNode(item)">
                    <!-- 箭头 -->
                    <i v-if=" isLeaf(item) "
                        @click.stop='handleNodeExpand(item, index)'
                        class="icon iconfont  handle-icon"
                        :class="[ item.open ? options.iconClass.open : options.iconClass.close ]"
                        :style="options.iconStyle">
                    </i>
                    <i v-else
                        class="icon iconfont icon-square"
                        :class="leafIcon(item)"
                        :style="options.iconStyle"></i>

                    <!-- 加载图标 -->
                    <span class="halo-tree-icon_loading halo-tree-iconEle"
                        v-show="item.loading"
                        :style="options.iconStyle">
                    </span>

                    <!-- 文件夹图标 -->
                    <icon-svg icon-style="icon-style"
                        v-if="options.showIcon && item.group == 'label' && (item.parentId == '0' && item.islable == '1')"
                        key="item-group"
                        class="icon-group"
                        :icon-class="['el-icon-ifcn-department']"></icon-svg>
                    <icon-svg icon-style="icon-style"
                        v-else-if="options.showIcon"
                        class="icon-group"
                        :icon-class="['el-icon-ifcn-' + item.group]"></icon-svg>

                    <span class="label">{{ item[options.labelKey] }}</span>
                    <span v-if="options.remarkKey && item[options.remarkKey]"
                        class="label remark"> ({{ item[options.remarkKey] }})</span>

                    <!-- 选中状态 -->
                    <i v-if="hasSelected(item.id)"
                        class="el-icon-check"></i>
                </div>
                <tree-node ref="treenode"
                    v-if="item.children && item.children.length > 0"
                    :options="options"
                    :selectedKeys="selectedKeys"
                    :selectedData="selectedData"
                    v-show="item.open"
                    :tree-data="item.children">
                </tree-node>
            </li>
        </ul>
    </div>
</template>
<script>
    import Vue from 'vue'

    Vue.directive('focus', {
        update: function (el) {
            el.focus()
        }
    })

    export default {
        name: 'treeNode',
        props: {
            treeData: Array,
            selectedKeys: {
                type: Array,
                default: function () {
                    return []
                }
            },
            selectedData: {
                type: Array,
                default: function () {
                    return []
                }
            },
            options: Object
        },
        data() {
            return {
                nodeData: [],
            }
        },
        created() {
            const parent = this.$parent
            if (parent.isTree) {
                this.tree = parent
            } else {
                this.tree = parent.tree
            }

            const tree = this.tree
            if (!tree) {
                console.warn('找不到树节点')
            }
            this.nodeData = (this.treeData || []).slice(0);

        },
        watch: {
            treeData: function (data) {
                this.nodeData = (data || []).slice(0)
            }
        },
        methods: {
            //是否已选中
            hasSelected: function (id) {
                return this.selectedKeys.indexOf(id) >= 0;
            },
            checkFirfox() {
                let u = navigator.userAgent
                if (u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1) {
                    return true
                }
                return false
            },
            // 点击箭头操作
            handleNodeExpand(node, index) {
                // node

                if (node.open) {
                    Vue.set(node, 'open', false)
                    return false
                }
                if (node.hasOwnProperty('children') && node.children && node.children.length > 0) {//二级数据
                    Vue.set(node, 'open', true)
                    return
                }

                if (!node.open && this.options.lazy && this.options.load) {
                    try {
                        Vue.set(node, 'loading', true)

                        this.options.load(node, index).then((d) => {
                            Vue.set(node, 'open', true)
                            Vue.set(node, 'loaded', true)
                            Vue.set(node, 'loading', false)
                        })
                    } catch (e) {
                        console.log('Get Child Error')
                    }
                }
            },
            // 点击节点操作
            handleNode(node) {
                this.tree.$emit('node-click', node)
                console.log(node);
                if (node.disabled != true) {
                    Vue.set(node, 'selected', !node.selected);
                }
            },
            /**
             * 叶子节点的 icon
             * @param item
             */
            leafIcon(node) {
                return this.options.leafIcon(node)
            },
            isLeaf(item) {
                if (item.hasOwnProperty('leaf') && item.leaf) {
                    return false
                }
                return item.children && item.children.length > 0 || this.options.hasOwnProperty('lazy') && this.options.lazy && !item.hasOwnProperty('loaded')
            }
        }
    }
</script>
<style>
</style>
<style scoped>
    .halo-tree {
        font-size: 14px;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
    }

    .halo-tree>ul {
        margin: 0;
    }

    .halo-tree li:hover {
        /*cursor: pointer;*/
    }

    .halo-tree li {
        line-height: 28px;
        margin: 0;
        padding: 0px 0px 0px 2px;
        position: relative;
        list-style: none;
        user-select: none;

    }

    .halo-tree li.disabled>.item-handle-area,
    .halo-tree li.disabled>.item-handle-area span {
        cursor: not-allowed;
        color: #bbb;
    }


    .halo-tree .icon-group {
        font-size: 16px;
        color: #1296db;
    }

    .halo-tree li.disabled>.item-handle-area .icon-group {
        color: #bbb;
    }

    .halo-tree li>span,
    .halo-tree li>i,
    .halo-tree li>a {

        vertical-align: middle;
    }

    .halo-tree ul ul li:hover {
        /*background: rgba(0, 0, 0, .035)*/
    }

    .halo-tree>ul:first-child>li:first-child:before {
        border-left: 1px dashed #999;
        bottom: 50%;
        height: 100%;
        top: 12px;
        width: 1px;
    }

    .halo-tree>ul:first-child>li.onlyLi:first-child:before {
        height: 0;
    }

    .halo-tree>ul:first-child>li.onlyLi:first-child:before {
        height: 0;
    }

    .halo-tree li:after,
    .halo-tree li:before {
        content: '';
        left: -11px;
        position: absolute;
        right: auto;
        border-width: 1px;
    }

    .halo-tree li:before {
        border-left: 1px dashed #999;
        bottom: 50px;
        height: 100%;
        top: -16px;
        width: 1px;

    }

    .halo-tree li:after {
        border-top: 1px dashed #999;
        top: 12px;
        width: 11px
    }

    .halo-tree .item-handle-area {
        height: 28px;
        overflow: hidden;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        -webkit-text-overflow: ellipsis;
        -moz-text-overflow: ellipsis;
        white-space: nowrap;
    }

    .halo-tree li .add-input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #bfcbd9;
        box-sizing: border-box;
        color: #1f2d3d;
        display: inline-block;
        font-size: inherit;
        height: 28px;
        outline: none;
        padding: 3px 10px;
        transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
        width: 100%;
    }

    /* loading */

    .halo-tree li span.halo-tree-iconEle {
        margin: 0;
        width: 24px;
        height: 28px;
        line-height: 20px;
        display: inline-block;
        vertical-align: middle;
        border: 0 none;
        cursor: pointer;
        outline: none;
        text-align: center;
    }

    .halo-tree li span.halo-tree-icon_loading::after {
        display: inline-block;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        content: "\21BB";
        -webkit-animation: loadingCircle 1s infinite linear;
        animation: loadingCircle 1s infinite linear;
        width: 13px;
        height: 13px;
        line-height: 13px;
        position: relative;
        top: -1px;
    }

    @keyframes loadingCircle {
        0% {
            transform-origin: 50% 50%;
            transform: rotate(0deg);
        }
        100% {
            transform-origin: 50% 50%;
            transform: rotate(360deg);
        }
    }

    .halo-tree li span {

        text-decoration: none;
        border-radius: 3px;
    }

    .halo-tree li:last-child::before {
        height: 28px
    }

    .halo-tree>ul {
        padding-left: 0
    }

    .halo-tree ul ul {
        padding-left: 19px;
        padding-top: 2px;
    }



    .halo-tree .handle-icon {
        margin-right: 0;
    }

    .halo-tree .add-icon {
        position: absolute;
        top: 8px;
        right: 0;
    }

    .halo-tree .search {
        width: 14px;
        height: 14px;
    }


    .halo-tree .label {
        padding: 2px 0px 2px 0px;
        border: 1px solid transparent;
        cursor: pointer;
        height: 20px;
        overflow: hidden;
    }

    .halo-tree .remark {
        color: #999;
    }

    .halo-tree .node-selected .label {
        background-color: #F2F5FA;
        border: 1px solid #DAE3EC;
        opacity: 1;
    }

    .halo-tree .handle-icon,
    .halo-tree .add-icon {
        cursor: pointer;
    }

    .halo-tree .iconfont {
        display: inline-block;
        width: 18px;
        height: 18px;
        position: relative;
    }

    .halo-tree .icon-xiajiantou,
    .halo-tree .icon-jian-fangkuang {
        top: -1%;
    }

    .halo-tree .icon-youjiantou,
    .halo-tree .icon-jia-fangkuang {
        left: 0px;
        top: 2px;
        width: 10px;
        overflow: hidden;
    }

    .halo-tree .icon-youjiantou:before,
    .halo-tree .icon-jia-fangkuang:before {
        left: -5px;
        top: 4px;
    }

    .halo-tree .icon-xiajiantou,
    .halo-tree .icon-jian-fangkuang {
        left: 0px;
        top: 2px;
        height: 10px;
        overflow: hidden;
    }

    .halo-tree .icon-xiajiantou:before,
    .halo-tree .icon-jian-fangkuang:before {
        left: 3px;
        bottom: 3px;
    }

    .halo-tree .icon-youjiantou:before,
    .halo-tree .icon-jia-fangkuang:before,
    .halo-tree .icon-xiajiantou:before,
    .halo-tree .icon-jian-fangkuang:before {
        content: "";
        position: absolute;
        overflow: hidden;
        width: 11px;
        height: 11px;
        background: #777;
        border-bottom: 1px solid #C9E9C0;
        border-right: 1px solid #C9E9C0;
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
        -ms-filter: "progid:DXImageTransform.Microsoft.Matrix( M11=0.7071067811865475, M12=-0.7071067811865477,
 M21=0.7071067811865477,
        M22=0.7071067811865475,
        SizingMethod='auto expand') "; filter: progid: DXImageTransform . Microsoft . Matrix(M11 = 0.7071067811865475, M12 = - 0.7071067811865477,
 M21=0.7071067811865477,
        M22=0.7071067811865475,
        SizingMethod='auto expand');
    }

    .halo-tree .icon-youjiantou:after,
    .halo-tree .icon-jia-fangkuang:after {
        content: "";
    }

    .halo-tree .icon-xiajiantou:after,
    .halo-tree .icon-jian-fangkuang:after {
        content: "";
    }

    .halo-tree .icon-square {
        width: 11px;
        height: 11px;
        /*border-top: 1px dashed #999;*/
        /*top: 5px;*/
    }

    .halo-tree .item-post .icon-square {
        width: 0px;
    }


    .halo-tree .icon-square:after {}

    .halo-tree .notAllNodes {
        width: 13px;
        height: 13px;
        display: inline-block;
        position: relative;
        background-color: #108ee9;
        border-radius: 3px;
        margin-left: 3px;
        margin-right: -3px;
        top: 2px;
        line-height: 15px;
    }

    .halo-tree .notAllNodes:before {
        content: "" !important;
    }

    .halo-tree .notAllNodes:after {
        content: "\2714";
        position: absolute;
        left: 11%;
        z-index: 4;
        font-size: 14px;
        width: 75%;
        height: 2px;
        color: #ffffff;
    }

    .halo-tree .icon-add {
        width: 15px;
        height: 15px;
        display: inline-block;
        position: relative;
        /*background-color: #108ee9;*/
        border-radius: 3px;
        margin-left: 3px;
        margin-right: -3px;
        top: 2px;
    }

    .halo-tree .icon-add:before {
        position: absolute;
        content: "" !important;
    }

    .halo-tree .icon-add:after {
        content: "+";
        font-size: 18px;
        position: absolute;
        left: 1px;
        top: -3px;
        color: #108ee9;
    }



    .el-icon-check:before {
        color: #ccc;
        margin-left: 0px;
        font-size: 16px;
    }
</style>
