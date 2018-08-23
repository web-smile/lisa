<!--
    des:制作证书-素材
    date:2018.8.20
    auther:huoyuanyuan
-->
<template>
    <div class="fodder">
        <ul>
            <li class="content-list">
                <div class="title">系统填充文字</div>
                <div class="tip">文本框的内容由系统填充，仅需设定文字样式</div>
                <ul class="list">
                    <li class="list-text" v-for="item in sysText">{{item.name}}</li>
                </ul>
            </li>
            <li class="content-list">
                <div class="title">自定义文字</div>
                <div class="tip">文本框的内容及样式均支持自定义</div>
                <ul class="list">
                    <li class="list-text"  :class="{'active':drag.permitDrag}" v-for="item in definitText" @mousedown="mousedown($event)">{{item.name}}</li>
                </ul>
            </li>
            <li class="content-list">
                <div class="title">学员头像</div>
                <div class="tip">学员头像默认为登录头像，<br/>学员获得后可自行上传</div>
                <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </li>
            <li class="content-list">
                <div class="title">电子印章</div>
                <div class="tip">学员头像默认为登录头像，学员获得后可自行上传</div>
            </li>
        </ul>
    </div>
</template>
<script>
       const sysText = [
        {
            name:'证书获得者姓名'
        },
        {
            name:'培训活动名称'
        },
        {
            name:'考试名称'
        },
        {
            name:'获得日期'
        },
        {
            name:'证书编号1258555555555'
        },
    ];
    const definitText = [
        {
            name:'荣誉证书'
        },
        {
            name:'荣誉证书'
        },
        {
            name:'自定义文字'
        },
    ];
    export default {
        name:'fodder',
        data() {
            return {
                sysText:sysText,
                definitText:definitText,
                imageUrl: '',
                drag:{
                    class_name: null,  //允许放置的容器
                    permitDrag: false,	//是否允许移动标识

                    _x: 0,             //节点x坐标
                    _y: 0,			    //节点y坐标
                    _left: 0,          //光标与节点坐标的距离
                    _top: 0,           //光标与节点坐标的距离

                    old_elm: null,     //拖拽原节点
                    tmp_elm: null,     //跟随光标移动的临时节点
                    new_elm: null,     //拖拽完成后添加的新节点
                }
            }
        },
        created(){

        },
        methods:{
             handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
             mousedown(event){
                this.drag.permitDrag = true;
            }
        }

    }
</script>
<style lang="scss" rel="stylesheet/scss">
    //左侧 内容
    .fodder {
        ul{
            padding:0;
            margin:0;
        }
        .content-list{
            padding-bottom:10px;
            border-bottom: 1px solid #ccc;
            .title{
                color:#4c4c4c;
                padding:20px 0 10px 0;
            }
            .tip{
                font-size: 12px;
                color:#666;
                margin-bottom:10px;
            }
        }
        .content-list:last-child{
            border-bottom:none;
        }

        .list{
            li{
                margin-bottom:10px;
            }
            .list-text{
                padding:10px;
                border:1px dotted #ccc;
                text-align: center;
            }
            li.active{
                cursor:move;
            }
        }
        // 上传
        .avatar-uploader{
            width: 94px;
            height: 136px;
            margin:0 auto;
        }
        .avatar-uploader .el-upload {
            border: 1px dashed #ccc;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            background-color:#fff;
        }
        .avatar-uploader .el-upload:hover {
            border-color: #409EFF;
        }
        .avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: 94px;
            height: 136px;
            line-height: 136px;
            text-align: center;
        }
        .avatar {
            width: 94px;
            height: 136px;
            display: block;
        }
    }
</style>
