import Layout from '@/views/layout/Layout';

const routers = [
    {
        path: '/my',
        component: Layout,
        name: 'my',
        redirect:'my/index',
        children: [
            {
                path: 'index',
                component: resolve => require(['@/views/my/index.vue'], resolve),//懒加载,
                name: 'my/index',
                meta: { activeItem: '/my/index' }
            },
        ],

    },
];

export default {
    routers
}



