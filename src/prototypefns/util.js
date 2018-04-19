import { json2html } from '@/prototypefns/jsonviewer/json-viewer';
import { DateToUnix, UnixToDate, NumBerToHanZi, DownTime, baseUrlJs } from '@/prototypefns/jsTime/datatime';

export default{
    install (Vue,options) {
        /*json转换器*/
        Vue.prototype.json2html = json2html;

        /*时间转换器*/
        Vue.prototype.dateToUnix = DateToUnix;//转换时间戳
        Vue.prototype.unixToDate = UnixToDate;//转换时间
        Vue.prototype.downTime = DownTime;//倒计时
        Vue.prototype.numBerToHanZi = NumBerToHanZi;//转汉字
        Vue.prototype.baseUrlJs = baseUrlJs;//补全路径

    }
}
