import Mock from 'mockjs';
import Qs from 'qs';
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const produceNewsData = function () {
    let articles = [];
    for (let i = 0; i < 100; i++) {
        let newArticleObject = {
            title: Random.csentence(5, 30), //  Random.csentence( min, max )
            thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        articles.push(newArticleObject)
    }

    return {
        articles: articles
    }
}
//mock 部门数据
const departmentData = [{
    children:[],
    disabled:false,
    group:"department",
    id:"0",
    open:true,
    parentId:"0",
    title:"霹雳部",
    tooltip:"",
    visible:true,
}];
const data = [
    {
        title: '灯光部门',
        group:"department",
        id:"1",//当前节点id
        open:false,//是否展开子节点 true 展开，false 不展开
        leaf:false,//是否为单节点（无子节点的节点）， true  是， false 否
        parentId:"0",//父级id
        visible:true,// true  可见，false 不可见

    },
    {
        title: '动画部门',
        group:"department",
        id:"34839",
        open:false,
        leaf:false,
        parentId:"0",
        visible:true
    },
    {
        title: '道具部门',
        group:"department",
        id:"34840",
        open:false,
        leaf:true,
        parentId:"0",
        visible:true
    }
];
const  dataId1 = [
    {
        title: '事业部',
        group: "department",
        id: "1366",//当前节点id
        open: false,//是否展开子节点 true 展开，false 不展开
        leaf: true,//是否为单节点（无子节点的节点）， true  是， false 否
        parentId: "1",//父级id
        visible: true,// true  可见，false 不可见

    },
    {
        title: '人事部',
        group: "department",
        id: "1367",//当前节点id
        open: false,//是否展开子节点 true 展开，false 不展开
        leaf: true,//是否为单节点（无子节点的节点）， true  是， false 否
        parentId: "1",//父级id
        visible: true,// true  可见，false 不可见

    },
]
const dataId34839 = [
    {
        title: '事业部',
        group: "department",
        id: "1388",//当前节点id
        open: false,//是否展开子节点 true 展开，false 不展开
        leaf: true,//是否为单节点（无子节点的节点）， true  是， false 否
        parentId: "34839",//父级id
        visible: true,// true  可见，false 不可见

    },
    {
        title: '人事部',
        group: "department",
        id: "1389",//当前节点id
        open: false,//是否展开子节点 true 展开，false 不展开
        leaf: true,//是否为单节点（无子节点的节点）， true  是， false 否
        parentId: "34839",//父级id
        visible: true,// true  可见，false 不可见

    },
];
export function getDepartmentData(params) {
    if (!params.pid) {
        return departmentData
    }
    if (params.pid == 0) {
        return data;
    }
    if (params.pid == 1) {
        return dataId1;
    }
    if (params.pid == 34839) {
        return dataId34839;
    }


}
//模拟标签数据
const getLabelData = [
    {
        "id": "#260",
        "title": "新员工",
        "parentId": "0",
        "group": "label",
        "open": "true",
        "islable": "0",
        "isjob": "2",
        "sort": "0",
        "platform": "",
        "children": [],
        "leaf": true
    },
    {
        "id": "#303",
        "title": "标签分类",
        "parentId": "0",
        "group": "label",
        "open": "true",
        "islable": "1",
        "isjob": "0",
        "sort": "0",
        "platform": "",
        "expanded": true,
        "children": [
            {
                "id": "#268",
                "title": "测试",
                "parentId": "303",
                "group": "label",
                "open": "true",
                "islable": "0",
                "isjob": "0",
                "sort": "0",
                "platform": "",
                "children": [],
                "leaf": true
            }
        ],
        "leaf": false
    },
    {
        "id": "#304",
        "title": "小小的标签",
        "parentId": "0",
        "group": "label",
        "open": "true",
        "islable": "1",
        "isjob": "0",
        "sort": "0",
        "platform": "",
        "expanded": true,
        "children": [
            {
                "id": "#264",
                "title": "岗位啊",
                "parentId": "304",
                "group": "label",
                "open": "true",
                "islable": "0",
                "isjob": "0",
                "sort": "0",
                "platform": "",
                "children": [],
                "leaf": true
            }
        ],
        "leaf": false
    },
]









export default {
    // getexamUploder: () => produceNewsData(),
    getDepartmentList: (a) => {
        /**
         * des: a介绍
         * @param a
         * 值{url: "/@appapi/assign-select/department?version=3.8.1.5&platform=pcweb&scene[]=departments", type: "GET", body: ""}
         * 类型：object
         * --------------------------------------------------------
         * Qs.parse(a.url)
         * 类型：object
         * 值：{/@appapi/assign-select/department?version: "3.8.1.5", platform: "pcweb", pid: "0", scene: Array(1)}
         */

        const params = Qs.parse(a.url);
        return getDepartmentData(params);
    },
    getLabelList: (a) => {
        const params = Qs.parse(a.url);
        return getLabelData;
    },

};
