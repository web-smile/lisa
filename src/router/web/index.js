import Layout from '@/views/layout/Layout';

const routers = [
    {
        path: '/web',
        component: Layout,
        name: 'web',
        redirect:'web/index',
        children: [
            {
                path: 'index',
                component: resolve => require(['@/views/web/index.vue'], resolve),//懒加载,
                name: 'web/index',
                meta: { activeItem: '/web/index' }
            },
        ],

    },
];

export default {
    routers
}



