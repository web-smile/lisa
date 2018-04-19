import Layout from '@/views/layout/Layout';

const routers = [
    {
        path: '/about',
        component: Layout,
        name: 'about',
        redirect: '/about/index',
        children: [
            {
                path: 'index',
                component: resolve => require(['@/views/about/index.vue'], resolve),//懒加载,
                name: 'about/index',
                meta: { _menuName: '关于我们-index',activeItem:'/about/index'}
            },
        ],
        meta: {
            _menuName: '关于我们',
            group: '1',
            alpha: true,
        },
    },
];

export default {
    routers
}



