import {login, logout, getInfo} from '@/api/login';
import {getToken, setToken, removeToken, getLang, getTheme, setLang, setTheme, updateUserInfo} from '@/utils/auth';

const user = {
    state: {
        token: getToken(),
        name: '',
        avatar: '',
        lang: getLang(),
        theme: getTheme(),
        roles: null,
        rolesMenu: null,
        alpha: [],
        enterprise: null,
    },

    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_NAME: (state, name) => {
            state.name = name;
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar;
        },
        SET_ENTERPRISE: (state, enterprise) => {
            state.enterprise = enterprise;
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles;
        },
        SET_ROLESMENU: (state, rolesMenu) => {
            state.rolesMenu = rolesMenu;
        },
        SET_ALPHA: (state, alpha) => {
            state.alpha = alpha;
        },
        SET_LANG: (state, lang) => {
            state.lang = lang;
        },
        SET_THEME: (state, theme) => {
            state.theme = theme;
        },

    },

    actions: {
        // 登录
        Login({commit}, userInfo) {

            const email = userInfo.email.trim();
            return new Promise((resolve, reject) => {
                login(email, userInfo.password).then(response => {

                    const data = response.data.data;
                    setToken(data.token);
                    commit('SET_TOKEN', data.token);
                    resolve();
                }).catch(error => {
                    reject(error);
                });
            });
        },


        // 获取用户信息
        GetInfo({commit, state}) {
            return new Promise((resolve, reject) => {
                getInfo(state.token).then(response => {
                    const data = response.data.data;
                    commit('SET_ROLES', data.roles);
                    commit('SET_ROLESMENU', data.rolesMenu);
                    commit('SET_ALPHA', data.alpha);
                    commit('SET_NAME', data.name);
                    commit('SET_AVATAR', data.avatar);
                    commit('SET_ENTERPRISE', data.enterprise);
                    resolve(response);
                }).catch(error => {
                    reject(error);
                });
            });
        },

        // 登出
        LogOut({commit, state}) {
            return new Promise((resolve, reject) => {
                logout().then(() => {
                    commit('SET_TOKEN', '');
                    // commit('SET_ROLES', []);//注释它是因为退出时左侧菜单会闪
                    removeToken();
                    resolve();
                }).catch(error => {
                    reject(error);
                });
            });
        },

        // 前端 登出
        FedLogOut({commit}) {
            return new Promise(resolve => {
                commit('SET_TOKEN', '');
                removeToken();
                resolve();
            });
        },

        //切换语言
        ChangeLang({commit}, lang) {
            return new Promise((resolve, reject) => {
                commit('SET_LANG', lang);
                setLang(lang);
                resolve();

            });
        },
        //切换主题
        ChangeTheme({commit}, theme) {
            return new Promise((resolve, reject) => {
                commit('SET_THEME', theme);
                setTheme(theme);
                resolve();

            });
        },
    }
};

export default user;
