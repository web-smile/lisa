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
                meta: { _menuName: '程序人生-index',activeItem: '/code/index' }
            },
        ],
        meta: {
            _menuName: '程序人生',
            group: '1',
            alpha: true,
        },

    },
];

export default {
    routers
}



