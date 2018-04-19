import Layout from '@/views/layout/Layout';

const routers = [
    {
        path: '/code',
        component: Layout,
        name: 'code',
        redirect: '/code/index',
        children: [
            {
                path: 'index',
                component: resolve => require(['@/views/code/index.vue'], resolve),//懒加载,
                name: 'code/index',
                meta: { activeItem: '/code/index' }
            },
        ],

    },
];

export default {
    routers
}



