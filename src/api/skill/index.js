import fetch from '@/utils/fetch';

/*部门列表*/
export function departmentList(params) {
    return fetch({
        url: '/assign-select/department',
        method: 'get',
        params: params || {}
    });
}

/*标签列表*/
export function labeltList(params) {
    return fetch({
        url: '/assign-select/label',
        method: 'get',
        params: params || {}
    });
}
//补全路径
export function baseErrorUrl(val){
    return val;
}

