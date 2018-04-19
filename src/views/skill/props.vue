<template>
  <div class="app-container">
        <!-- 用法1 -->
        <!-- <vue-props-demo :user-name="name" v-bind:age="age+1" :sex="sex"></vue-props-demo> -->
        <!-- 用法2 -->
        <vue-props-demo
            :msg-null="1+1"
            :msg-string="msgString"
            :msg-obj="msgObj"
            :msg-validate="msgValidate"
            :msg-prop= "msgProp"
            :child-msg="msg">
        </vue-props-demo>
        <!-- 用法3 -->
        <!-- <vue-props-demo :child-msg="msg"></vue-props-demo> -->

       父组件 <input v-model="msg">{{msg}}
  </div>
</template>
<script>
    import vuePropsDemo from '@/views/skill/PropsDemo'
    import { Base64 } from 'js-base64';
    export default {
        name:'skill',
        data() {
            return {
                name:'姓名：东东',
                age:10,
                sex:'性别：男',
                msgString:'String类型，必须是定义过的，可以是空字符串"",</br>如果非String类型，控制台会警告，例定义：msgString:10',
                msgObj:{
                    name:'小红 ',
                    age:20
                },
                msgProp:12,
                msgValidate:90,
                msg:'123',
            }

        },
        components:{
            'vue-props-demo': vuePropsDemo,
        },
        created(){
            this.getEncode();
            this.getDecode();
        },
        methods:{
            getEncode(){
                console.log('加密',Base64.encode('12'));
            },
            getDecode(){
                let temp = Base64.encode('12');
                console.log('解密：',Base64.decode(temp));
            }

        }
    }
</script>

