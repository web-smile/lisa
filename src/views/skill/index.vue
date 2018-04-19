<template>
    <div class="app-container">
        <div class="category-article">
            <div class="category-article-inner">
                <h2 class="category-article-title">
                    <router-link :to="{path:'props'}">Node inspect debugger调试工具</router-link>
                </h2>
                <router-link :to="{path:'props'}">
                    <img class="lazyload autoheight" width="570" height="200" data-original="https://www.xuanfengge.com/wp-content/uploads/2017/09/ChromeDev.jpg" src="https://www.xuanfengge.com/wp-content/uploads/2017/09/ChromeDev.jpg" alt="" srcset="https://www.xuanfengge.com/wp-content/uploads/2017/09/ChromeDev.jpg 570w, https://www.xuanfengge.com/wp-content/uploads/2017/09/ChromeDev-200x70.jpg 200w, https://www.xuanfengge.com/wp-content/uploads/2017/09/ChromeDev-300x105.jpg 300w" sizes="(max-width: 570px) 100vw, 570px">
                </router-link>
                <section class="category-article-content">
                    <h2>特性</h2>
                    <p>Node V8.0开始支持使用Chrome Devtools调试工具来调试Node，非常的有用。</p>
                    <h2>Debugger</h2>
                    <p>稳定性：2 稳定</p>
                    <p><code>Debugger</code>是基于TCP协议和内置调试客户端可访问的进程外<code>Node.js</code>调试实用程序。</p>
                    <p>可以在启动Node.js的时候，加上inspect参数，后跟脚本路径，进行调试。
                        <router-link :to="{path:'props'}"  class="more-link" >查看全文</router-link>
                    </p>
                </section>
                <!-- 定位 -->
                <div class="category-article-time">
                    <span>2017/09</span>
                    <span>07&nbsp;&nbsp;周四</span>
                </div>
            </div>
        </div>
        <div class="category-article">
            <div class="category-article-inner">
                <h2 class="category-article-title">
                    <a href="https://www.xuanfengge.com/node-inspect-debugger.html" >vue组件 props传递数据</a>
                </h2>
                <a class="category-article-thumb" href="https://www.xuanfengge.com/node-inspect-debugger.html" title="Node inspect debugger调试工具" target="_blank">
                    <img class="lazyload autoheight" width="570" height="200" data-original="https://www.xuanfengge.com/wp-content/uploads/2017/09/ChromeDev.jpg" src="https://www.xuanfengge.com/wp-content/uploads/2017/09/ChromeDev.jpg" alt="" srcset="https://www.xuanfengge.com/wp-content/uploads/2017/09/ChromeDev.jpg 570w, https://www.xuanfengge.com/wp-content/uploads/2017/09/ChromeDev-200x70.jpg 200w, https://www.xuanfengge.com/wp-content/uploads/2017/09/ChromeDev-300x105.jpg 300w" sizes="(max-width: 570px) 100vw, 570px">
                </a>
                <section class="category-article-content">
                    <h2>特性</h2>
                    <p>Node V8.0开始支持使用Chrome Devtools调试工具来调试Node，非常的有用。</p>
                    <h2>Debugger</h2>
                    <p>稳定性：2 稳定</p>
                    <p><code>Debugger</code>是基于TCP协议和内置调试客户端可访问的进程外<code>Node.js</code>调试实用程序。</p>
                    <p>可以在启动Node.js的时候，加上inspect参数，后跟脚本路径，进行调试。
                        <a href="https://www.xuanfengge.com/node-inspect-debugger.html#more-6992" class="more-link" target="_blank">查看全文</a>
                    </p>
                </section>
                <!-- 定位 -->
                <div class="category-article-time">
                    <span>2017/09</span>
                    <span>07&nbsp;&nbsp;周四</span>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        name:'index',
        data() {
            return {

            }

        },
        methods:{

        }
    }
</script>
<style>
    .category-article{
        position: relative;
        margin: 20px 0 20px 50px;
        border: 1px solid #e8e8e8;
        border-bottom: 2px solid #fff;
        background: #fff;
        box-shadow: 0 0 2px rgba(0,0,0,.1);
        -webkit-transition: all .3s ease-in-out;
        transition: all .3s ease-in-out;
    }
    .category-article:hover {
        box-shadow: 0 0 10px rgba(0,0,0,.2);
        border-bottom: 2px solid #3c9dff;
    }

    .category-article-inner{
        position: relative;
        margin: 10px 20px 10px 40px;
    }



    /* 标题 */
    .category-article-title{
        width: 100%;
        height: 45px;
        overflow: hidden;
        line-height: 34px;
        font-size: 18px;
        font-weight: 400;
        -webkit-box-reflect: below -40px -webkit-gradient(linear,left top,left bottom,from(transparent),color-stop(10%,transparent),to(hsla(0,0%,100%,.2)));
    }
    .category-article .category-article-title a {
        color: #333;
        text-decoration: none;
    }
    a:hover {
        color: #39c;
    }

    /* 图片 */
    .category-article-thumb{
        position: relative;
    }

    /* 内容 */
    .category-article-content{
        display: block;
    }
    .category-article-content h2 {
        margin: 20px -19px 10px;
        padding: 10px 15px;
        border-left: 4px solid #39c;
        font-size: 16px;
        color: #222;
        font-family: Microsoft Yahei;
        background: #fbfbfb;
    }
    .category-article-content h2:nth-child(5n+3) {
        border-left: 4px solid #c0ebf7;
    }
    .category-article-content p {
        margin: 5px 0;
        word-wrap: break-word;
        text-indent: 2em;
        line-height: 20px;
        font-size: 14px;
        font-family: Microsoft Yahei,Tahoma,Arial,SimSun,Hiragino Sans GB,PMingLiu,Verdana,sans-serif;
    }
    .category-article-content p a {
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .category-article-content a {
        color: #39c;
        text-decoration: none;
    }

    /* 定位 */
    .category-article-time{
        position: absolute;
        top: 20px;
        left: -90px;
        width: 70px;
        height: 45px;
        background: #e5e5e5;
        filter: alpha(opacity=80);
        background: hsla(0,0%,80%,.4);
    }
    .category-article-time:after {
        content: "";
        position: absolute;
        top: 45px;
        left: 0;
        border-color: transparent #bbb transparent transparent;
        border-style: solid;
        border-width: 0 50px 20px 0;
        height: 0;
        width: 0;
    }
</style>

