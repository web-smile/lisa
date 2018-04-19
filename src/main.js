// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import 'static/iconfont/iconfont.css'
import 'static/iconfont/iconfont.js'
import '@/mock/index.js';  // 该项目所有请求使用mockjs模拟

import IconSvg from '@/components/Icon-svg/index'
import util from '@/prototypefns/util'
Vue.use(util);

Vue.config.productionTip = false

Vue.use(ElementUI);
/* eslint-disable no-new */

Vue.component('icon-svg', IconSvg)

new Vue({
    router,
    store,
    template: '<App/>',
    components: { App }, //vue1.0的写法
    render: h => h(App)    //vue2.0的写法render函数，用来渲染根组件
}).$mount('#app')
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })



/**
 * 检测分配权限
 * @param {*} routerName 当前访问的路由
 * @param {*} rolesMenu 当前管理员所有可见模块
 */
Vue.prototype.checkAuth = function (routerName, rolesMenu) {
    let bool = false;
    if (routerName == 'news/newstip' || routerName == 'news/newsdetails') {
        bool = true;
    } else {
        for (var i = 0; i < rolesMenu.length; i++) {
            if (routerName.search(rolesMenu[i]) >= 0) {
                bool = true;
                break;
            }
        }
    }

    return bool;
}

/**
 * 检测内测模块
 * @param {*} routerAlpha 路由是否是内测
 * @param {*} routerName 当前访问的路由
 * @param {*} alpha 内测模块数组
 */
Vue.prototype.checkAlpha = function (routerAlpha, routerName, alpha) {
    if (routerAlpha == true) {//内测模块
        let match = false;
        for (var i = 0; i < alpha.length; i++) {
            let value = alpha[i];
            let reg = new RegExp(value);
            if (routerName == value) {
                match = true;
                break;
            } else if ((routerName.substr(0, 1) != '_' && routerName.substr(-1, 1) != '_') && routerName.match(reg)) {
                match = true;
                break;
            }
        }
        return match;
    } else {
        return true;
    }
}
Vue.prototype.checkAccess = function (router, isAlpha = false) {
    const routerName = typeof router == 'object' ? router.name : router;
    const routerAlpha = typeof router == 'object' ? router.meta.alpha : isAlpha;//内测
    const adminRoles = ['admin', 'creator', 'super'];
    const roles = store.getters.roles || [];
    const rolesMenu = this.$store.getters.rolesMenu || [];
    const alpha = this.$store.getters.alpha || [];
    if (roles.some(role => adminRoles.indexOf(role) >= 0)) {
        let bool = this.checkAlpha(routerAlpha, routerName, alpha);
        return bool;
    } else {
        let result = this.checkAuth(routerName, rolesMenu);
        if (result) {
            let bool = this.checkAlpha(routerAlpha, routerName, alpha);
            return bool;
        } else {
            return false;
        }
    }
}
Vue.prototype.baseUrlProtptype = function (val) {
    return val;
}

