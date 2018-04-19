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
                meta: { _menuName: '移动前端-index',activeItem: '/web/index' }
            },
        ],
        meta: {
            _menuName: '移动前端',
            group: '1',
            alpha: true,
        },


    },
];

export default {
    routers
}



