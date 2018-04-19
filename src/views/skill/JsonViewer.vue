
 <!--
    des:将js函数变成vue的函数
    http://www.jq22.com/jquery-info19307(时间转换)
    http://www.jq22.com/jquery-info13551(json格式数据转换)
  -->
<template>
    <div class="app-container ">
        <!-- json格式数据转换器 -->
        <div class="json-viewer" v-html="requestJson"></div>
        <div class="input">
            <input type="text " value="2018-06-15 11:23:39">
            <span class="input-btn" @click="toUnix">转换时间戳</span>
            <span v-text="unixTime"></span>
        </div>
        <div class="input">
            <input type="text "  value="1529033019000">
            <span class="input-btn" @click="toDate">转换时间</span>
            <span v-text="dateTime"></span>
        </div>
        <div class="input">
            <input type="text "  value="2018/12/12 23:59:59">
            <span class="input-btn" @click="toDownTime">倒计时</span>
            <span v-text="downTimeRes"></span>
        </div>
        <div class="input">
            <input type="text "  value="123456789">
            <span class="input-btn" @click="toHanZi">转汉字</span>
            <span v-text="hanZi"></span>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                 requestData: [{
                    "id": "2",
                    "name": "JAVA",
                    "parentid": "0",
                    "order": "2",
                }],
                requestJson:'',
                unixTime:'',
                dateTime:'',
                downTimeRes:'',
                hanZi:''


            }
        },
        created(){
            this.requestJson = this.json2html(this.requestData);
        },
        methods: {
            toUnix(){
                this.unixTime = this.dateToUnix('2018-06-15 11:23:39');
            },
            toDate(){
                this.dateTime = this.unixToDate(Number('1529033019000'));
            },
            toDownTime(){
                this.downTimeRes = this.downTime('2018/12/12 23:59:59');
            },
            toHanZi(){
                this.hanZi = this.numBerToHanZi('123456789');
            }
        },
    }
</script>
<style>
    .json-viewer{
        padding:10px;
        margin-bottom: 20px;
        background-color: #ccc;

    }
    .input{
        display: flex;
    }
    .input-btn{
        display: block;
        background: red;
        color: #fff;
        font-size: 12px;
        height: 20px;
        line-height: 20px;
        width: 100px;
        text-align: center;
        cursor: pointer;
        margin: 0 50px;
    }
</style>



