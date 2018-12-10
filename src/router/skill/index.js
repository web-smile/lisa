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
                meta: { _menuName: 'index',activeItem: '/skill/index' }
            },
            //props
            {
                path: 'props',
                component: resolve => require(['@/views/skill/props.vue'], resolve),//懒加载,
                name: 'skill/props',
                meta: { _menuName: 'props', activeItem: '/skill/index' }
            },
            // getters学习
            {
                path: 'storeGetter',
                component: resolve => require(['@/views/skill/store/StoreGetter.vue'], resolve),//懒加载,
                name: 'skill/storeGetter',
                meta: { _menuName: 'Getter', activeItem: '/skill/index' }
            },
            /*mutations学习*/
            {
                path: 'storeMutation',
                component: resolve => require(['@/views/skill/store/StoreMutation.vue'], resolve),//懒加载,
                name: 'skill/storeMutation',
                meta: { _menuName: 'Mutation', activeItem: '/skill/index' }
            },
            /*action学习*/
            {
                path: 'storeAction',
                component: resolve => require(['@/views/skill/store/StoreAction.vue'], resolve),//懒加载,
                name: 'skill/storeAction',
                meta: { _menuName: 'Action', activeItem: '/skill/index' }
            },
            /*tree学习*/
            {
                path: 'tree',
                component: resolve => require(['@/views/skill/tree.vue'], resolve),//懒加载,
                name: 'skillTree',
                meta: { _menuName: 'tree', activeItem: '/skill/index' }
            },
            
            /*将js函数变成vue的函数*/
            {
                path: 'jsonViewer',
                component: resolve => require(['@/views/skill/JsonViewer.vue'], resolve),//懒加载,
                name: 'jsonViewer',
                meta: { _menuName: 'jsonViewer', activeItem: '/skill/index' }
            },
            /*错误提示*/
            {
                path: 'errorDemo',
                component: resolve => require(['@/views/skill/errorDemo.vue'], resolve),//懒加载,
                name: 'errorDemo',
                meta: { _menuName: 'errorDemo', activeItem: '/skill/index' }
            },
            /*错误提示*/
            {
                path: 'elementDemo',
                component: resolve => require(['@/views/skill/elementDemo.vue'], resolve),//懒加载,
                name: 'elementDemo',
                meta: { _menuName: 'elementDemo', activeItem: '/skill/index' }
            },
         


        ],
        meta: {
            _menuName: '授人以鱼',
            group: '1',
            alpha: true,
        },

    },
];

export default {
    routers
}



