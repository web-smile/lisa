<!--
    des:制作证书-背景
    date:2018.8.20
    auther:huoyuanyuan
-->
<template>
    <div class="fodder">
        <ul>
            <li class="content-list">
                <div class="title">证书背景</div>
                <img src="" />
            </li>
            <li class="content-list">
                <div class="title">自定义背景</div>
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
    export default {
        name:'makeBg',
        data() {
            return {
                imageUrl: '',
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
    .radio-grop-canvas {
        width:608px;
        background-color:#f5f5f5;
        padding:50px;
    }
    .radio-grop-canvas .radio-grop-canvas-out {
        padding:30px;
        background-color:#fff;
    }
</style>
