
 <!--
    des:1.利用mockjs来实现tree的demo 2.实时输入问题
  -->
<template>
    <div class="app-container element-demo">
        <el-form ref="form" :model="form" label-width="130">
            <el-form-item label="多选框:">
                <el-checkbox-group v-model="checkList">
                    <el-checkbox  v-for=" item in data" :key="item" :label="item"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit('form')">提交</el-button>
            </el-form-item>
        </el-form>
        
    </div>
</template>
<script>
    const data = ['复选框 A','复选框 A1','复选框 A2','复选框 A3','复选框 A4',];
    export default {
        data() {
            return {
                checkList: ['复选框 A1','复选框 A'],
                data:data,
                form:{
                    
                }
            }
        },
        created(){
        },
        methods: {
            onSubmit(formName){
                console.log(this.checkList);
                this.$refs[formName].validate((valid) => {
                    if(valid){

                    }

                })
            }




        },
    }
</script>
<style>


</style>


