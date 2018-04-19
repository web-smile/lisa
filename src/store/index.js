
import Vue from "vue";
import Vuex from "vuex";
// import app from './modules/app';
// import user from './modules/user';
import permission from './modules/permission';
import {storeGetter} from './modules/practice';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        // app,
        // user,
        permission,//路由
        storeGetter
    },
    getters,

});
export default store
