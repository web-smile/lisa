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
                meta: { _menuName: 'web前端-index',activeItem: '/web/index' }
            },
            //es6
            {
                path: 'es6',
                component: resolve => require(['@/views/web/es6.vue'], resolve),//懒加载,
                name: 'web/es6',
                meta: { _menuName: 'es6', activeItem: '/web/index' }
            },
        ],
        meta: {
            _menuName: 'web前端',
            group: '1',
            alpha: true,
        },


    },
];

export default {
    routers
}



