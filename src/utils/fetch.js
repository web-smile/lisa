import Qs from 'qs';
import axios from 'axios';
import { MessageBox } from 'element-ui';
import store from '@/store';

// 创建axios实例
const service = axios.create({
    baseURL: process.env.BASE_API, // api的base_url
    timeout: 5000,                  // 请求超时时间
    withCredentials: true,   //加了这段就可以跨域了
    transformRequest: [function (data) {
        data = Qs.stringify(data);
        return data
    }],
});

// request拦截器
service.interceptors.request.use(config => {
    // Do something before request is sent
    // if (store.getters.token) {
    //config.headers['X-Token'] = getToken(); // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
    // }
    config.headers['Accept'] = 'text/plain';
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';

    const defaultParams = {
        version: process.env.VERSION,
        platform: 'pcweb',
    };
    if (config.method == 'post') {
        config.data = {
            ...defaultParams,
            ...config.data
        }
    } else if (config.method == 'get') {
        config.params = {
            ...defaultParams,
            ...config.params
        }
    }
    return config;
}, error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
})

// respone拦截器
service.interceptors.response.use(
    response => {
        //console.log(response);
        const res = response.data;
        return response;
        if (res.code !== 200) {
            if (res.code == 401 || res.code == 403) {
                MessageBox({
                    message: '没有操作权限,请联系管理员',
                    type: 'error',
                    duration: 5 * 1000
                });
            }
            // 登录过期了;
            else if (res.code === 403) {
                MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
                    confirmButtonText: '重新登录',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    // store.dispatch('LogOut').then(() => {
                    //     window.location.href =  "/Login/Logout?from=backend";

                    // location.reload();// 为了重新实例化vue-router对象 避免bug
                    // });
                })
            } else {
                MessageBox({
                    message: res.msg,
                    type: 'error',
                    duration: 5 * 1000
                });
            }

        } else {
            return response;
        }
    },
    error => {

        console.log('err' + error);// for debug
        if (error.response.status == 401) {
            MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
                confirmButtonText: '重新登录',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                // store.dispatch('LogOut').then(() => {
                //     window.location.href =  "/Login/Logout?from=backend";

                // location.reload();// 为了重新实例化vue-router对象 避免bug
                // });
            })
        } else {
            MessageBox({
                message: error.response.status == 403 ? '抱歉,您没有操作该功能的权限!' : error.message,
                type: 'error',
                duration: 5 * 1000
            });
        }

        return Promise.reject(error);
    });

export default service;
