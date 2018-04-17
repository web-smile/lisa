import Layout from '@/views/layout/Layout';

const routers = [
    {
        path: '/skill',
        component: Layout,
        name: 'skill',
        redirect:'skill/index',
        children: [
            {
                path: 'index',
                component: resolve => require(['@/views/skill/index.vue'], resolve),//懒加载,
                name: 'skill/index',
                meta: { activeItem: '/skill/index' }
            },
        ],

    },
];

export default {
    routers
}



