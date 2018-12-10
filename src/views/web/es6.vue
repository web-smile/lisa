<template>
    <div class="app-container">
        <span>es6</span>
    </div>
</template>
<script>
    let [x,y,...z]=['a'];
    console.log('模式匹配：',x,y,z);
    let [m,n,q] = new Set(['a','b',1]);//let不允许在相同作用域内，重复声明同一个变量。
    function* fibs() {
        let a = 0;
        let b = 1;
        while (true) {
            yield a;
            [a, b] = [b, a + b];
        }
    }

    let [first, second, third, fourth, fifth, sixth] = fibs();
    console.log(sixth);// 5

    export default {
        name:'es6',
        data() {
            return {

            }
        },
        created() {
            this.getModeMethod();
            this.getStringMehtod();
        },
        methods:{
            getModeMethod(){

                /***********数组排重*******************/
                let set = new Set([1,9,9,9,9,9,9,9,9,2,3,4,4,4,4,4]);
                console.log( Array.from(set) ); //输出：[ 1, 2, 3, 4 ]

                /************如果默认值是表达式，表达式是惰性求值的******************/
                function f() {
                    console.log('aaa');
                }

                // let [x = f()] = [1];
                // console.log('x:',x);
                // let [y = f()] = [undefined];
                // console.log('y:',y);
                let z;
                console.log([1][0] === undefined);
                if ([1][0] === undefined) {
                    z = f();
                } else {
                    z = [1][0];
                }
                console.log('z',z,[1,2,4][3],[1,2] + [3,4]);

            },
            /**
             * 字符串扩展
             * @constructor
             * @param {string} title - 书本的标题.
             * @param {string} author - 书本的作者.
             */
            getStringMehtod(){
                /*****************************1、字符串repeat()方法****************************/
                let str = 'na';
                console.log(str.repeat('3'));//nanana
                console.log(str.startsWith('n'));//true
                console.log(str.endsWith('n'));//false
                console.log(str.includes('b'));//false
                console.log(str.padEnd('3','0'));//na0
                console.log(str.padStart('3','0'));//0na
                console.log(str.toString());//na
                console.log(str.replace('n','333'));//333a
                console.log(str.search('b'));//-1
                console.log(str.indexOf('n'));//0
                console.log(str.lastIndexOf('n'));//0
                console.log(str.match('a') == 'a');//["a", index: 1, input: "na", groups: undefined] true
                console.log(str.slice(1),str);//a na
                console.log(str.split(''));//['n','a']
                console.log(str.substring(1));//a
                console.log(str.toLowerCase());//na
                console.log(str.toUpperCase());//NA
                console.log(str.toLocaleLowerCase());//na
                console.log(str.toLocaleUpperCase());//NA
                console.log(str.fixed());//<tt>na</tt>
                console.log(str.big());//<big>na</big>
                console.log(str.anchor('小明'));//<a name="小明">na</a>
                console.log(String.raw`Hi\\n`);
                console.log(str.concat('yu'));//nayu





                /****************************2、模板字符串****************************/
                let con = `<ul>
                    <li>${z}</li>
                    <li>${str}</li>
                    </ul>`;
                console.log('con:',con);
                let x = 1; y = 2;
                console.log(`${x}+${y}`);
               /*****************************3、标签模板****************************/

            }

        }

    }
</script>
