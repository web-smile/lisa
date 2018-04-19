import { asyncRouterMap, constantRouterMap } from '@/router/index';


/**
 * 通过name 判断是否与当前用户角色权限匹配
 * @param menus
 * @param route
 */
function hasRolesMenu(menus, route) {
    if (route._id || route.name) {
        let id = route._id || route.name;
        const alpha = route.meta.alpha || false;
        return menus.indexOf(id) >= 0
    } else {
        return true
    }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles 角色
 * @param rolesMenus 可见菜单项
 */
function filterAsyncRouter(asyncRouterMap, roles, rolesMenus) {
    const accessedRouters = asyncRouterMap.filter(route => {
        // if (route.hidden == true || (hasPermission(roles, route) && hasRolesMenu(rolesMenus, route))) {
        if (route.hidden == true || hasRolesMenu(rolesMenus, route)) {
            if (route.children && route.children.length) {
                route.children = filterAsyncRouter(route.children, roles, rolesMenus)
            }
            return true
        }
        return false
    })
    return accessedRouters
}

const permission = {
    state: {
        routers: constantRouterMap,
        addRouters: []
    },
    mutations: {
        SET_ROUTERS: (state, routers) => {
            state.addRouters = routers;
            state.routers = constantRouterMap.concat(routers);
        }
    },
    actions: {
        GenerateRoutes({ commit }, data) {
            return new Promise(resolve => {
                const roles = data.data.roles;
                const rolesMenu = data.data.rolesMenu;
                let accessedRouters;
                if (roles.indexOf('admin') !== -1 || roles.indexOf('creator') !== -1) {
                    accessedRouters = asyncRouterMap
                } else {
                    accessedRouters = filterAsyncRouter(asyncRouterMap, roles, rolesMenu)
                }
                commit('SET_ROUTERS', accessedRouters);
                resolve();
            })
        }
    }
};

export default permission;
