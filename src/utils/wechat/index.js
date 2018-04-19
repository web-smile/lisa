import Layout from '@/views/layout/Layout';

const routers = [
    {
        path: '/wechat',
        component: Layout,
        name: 'wechat',
        redirect:'/wechat/index',
        children: [
            {
                path: 'index',
                component: resolve => require(['@/views/wechat/index.vue'], resolve),//懒加载,
                name: 'wechat/index',
                meta: { activeItem: '/wechat/index' }
            },
        ],

    },
];

export default {
    routers
}



