
import Vue from "vue";
import Vuex from "vuex";

// import app from './modules/app';
// import user from './modules/user';
import permission from './modules/permission';
import {storeGetter} from './modules/practice';
import getters from './modules/getters';
import editor from './vuex/index'
Vue.use(Vuex);

// const store = new Vuex.Store({
//     modules: {
//         // app,
//         // user,
//         permission,//路由
//         storeGetter
//     },
//     getters,

// });
const store = new Vuex.Store({
    modules:{
        editor,
        storeGetter,
        permission,
    },
    getters,


});
// const store = new Vuex.Store(editor);
export default store
