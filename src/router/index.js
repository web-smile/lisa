import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
/* layout */
import Layout from '@/views/layout/Layout';
Vue.use(Router)

export const constantRouterMap = [
    {
        path: '/',
        component: Layout,
        name: 'home',
        redirect: '/home',
        meta: { _menuName: '错误页面' }
    },
    {
        path: '*',
        component: HelloWorld,
        name: '错误页面',
        meta: { _menuName: '错误页面'}
    },
];



//主页
import homeRouter from './home/_import';

// 移动前端
import wechatRouter from './wechat/_import';

// web前端
import webRouter from './web/_import';

// 授人以渔
import skillRouter from './skill/_import';

// 授人以渔
import codeRouter from './code/_import';

//关于
import aboutRouter from './about/_import';

//我的
import myRouter from './my/_import';





export const asyncRouterMap = [
    ...homeRouter.layoutlist,
    ...wechatRouter.layoutlist,
    ...webRouter.layoutlist,
    ...skillRouter.layoutlist,
    ...codeRouter.layoutlist,
    ...aboutRouter.layoutlist,
    ...myRouter.layoutlist,


    ...constantRouterMap
];

// console.log(asyncRouterMap);
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })


export default new Router({
    //mode: 'history', //后端支持可开
    scrollBehavior: () => ({ y: 0 }),//当转到一个新的页面时，定位到最顶端
    routes: asyncRouterMap
});
