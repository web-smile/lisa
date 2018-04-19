import Layout from '@/views/layout/Layout';

const routers = [
    {
        path: '/home',
        component: Layout,
        name: 'home',
        redirect:'/home/index',
        children: [
            {
                path: 'index',
                component: resolve => require(['@/views/home/index.vue'], resolve),//懒加载,
                name: 'home/index',
                meta: { _menuName: '首页-index',activeItem:'/home/index'}
            },
        ],
        meta: {
            _menuName: '首页',
            group: '1',
            alpha: true,
        },

    },
];

export default {
    routers
}



