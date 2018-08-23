
/**
 * 将时间转换成时间戳
 * @param DateTime 为时间格式下的时间 2018/06/14 13:00:00或2018-06-14 13:00:00
 * @returns {number}
 * @constructor
 */
let DateToUnix = function (DateTime) {
    var oDate = new Date(Date.parse(DateTime.replace(/-/g, "/")));
    var Unix = oDate.getTime();
    return Unix;
}
let DeCa = function (Natural) {
    var NaturalNum;
    if (Natural < 10) {
        NaturalNum = "0" + Natural;
    } else {
        NaturalNum = Natural;
    }
    return NaturalNum;
}
/**
 * 将时间戳转化为时间
 * @param UnixTime 时间 格式 2018/06/14 13:00:00
 * @param ShowTime 时间展示格式 选择 2018/06/14 13:00:00或2018-06-14 13:00:00等等格式
 * @constructor
 */

let UnixToDate = function (UnixTime, ShowTime) {
    var ToUnix = new Date(UnixTime);
    var Years = ToUnix.getFullYear();//获取年 例子：2018
    var Month = ToUnix.getMonth() + 1;//获取月(0-11,0代表1月)
    var Day = ToUnix.getDate();//获取日（0-31）
    var Week = ToUnix.getDay();//获取星期（0-6；0代表星期天）
    var Hours = ToUnix.getHours();//获取小时（0-23）
    var Minutes = ToUnix.getMinutes();//获取分钟（0-59）
    var Seconds = ToUnix.getSeconds();//获取秒
    var DaTime;
    if (ShowTime == 2) {
        DaTime = Years + "/" + DeCa(Month) + "/" + DeCa(Day) + " " + DeCa(Hours) + ":" + DeCa(Minutes) + ":" + DeCa(Seconds);
    } else if (ShowTime == 3) {
        DaTime = Years + "年" + DeCa(Month) + "月" + DeCa(Day) + "日 " + DeCa(Hours) + ":" + DeCa(Minutes) + ":" + DeCa(Seconds);
    } else if (ShowTime == 4) {
        DaTime = Years + "年" + DeCa(Month) + "月" + DeCa(Day) + "日";
    } else if (ShowTime == 5) {
        DaTime = Years + "/" + DeCa(Month) + "/" + DeCa(Day);
    } else if (ShowTime == 6) {
        DaTime = Years + "-" + DeCa(Month) + "-" + DeCa(Day);
    } else if (ShowTime == 7) {
        DaTime = DeCa(Hours) + ":" + DeCa(Minutes) + ":" + DeCa(Seconds);
    } else if (ShowTime == 8) {
        DaTime = DeCa(Hours) + "时" + DeCa(Minutes) + "分" + DeCa(Seconds) + "秒";
    } else if (ShowTime == 9) {
        DaTime = "星期" + Week;
    } else if (ShowTime == 10) {
        DaTime = NumBerToHanZi(Years) + "年" + NumBerToHanZi(Month) + "月" + NumBerToHanZi(Day) + "日 星期" + NumBerToHanZi(Week);
    } else if (ShowTime == 11) {
        DaTime = Years + "-" + DeCa(Month) + "-" + DeCa(Day) + " " + DeCa(Hours) + ":" + DeCa(Minutes) + ":" + DeCa(Seconds) + " 星期" + Week;
    } else if (ShowTime == 12) {
        DaTime = Years + "/" + DeCa(Month) + "/" + DeCa(Day) + " " + DeCa(Hours) + ":" + DeCa(Minutes) + ":" + DeCa(Seconds) + " 星期" + Week;
    } else if (ShowTime == 13) {
        DaTime = Years + "年" + DeCa(Month) + "月" + DeCa(Day) + "日 " + DeCa(Hours) + "时" + DeCa(Minutes) + "分" + DeCa(Seconds) + "秒 星期" + Week;
    } else {
        DaTime = Years + "-" + DeCa(Month) + "-" + DeCa(Day) + " " + DeCa(Hours) + ":" + DeCa(Minutes) + ":" + DeCa(Seconds);
    }
    return DaTime;
}
//将阿拉伯数字转换成汉字
let NumBerToHanZi = function (Numbers) {
    var strIns, chnStr = '';
    var chnNumChar = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
    while (Numbers > 0) {
        var v = Numbers % 10;
        strIns = chnNumChar[v];
        chnStr = chnNumChar[v] + chnStr;
        Numbers = Math.floor(Numbers / 10);
    }
    return chnStr;
}
// 计算时间差
let DownTime = function (EndTime) {
    //如果为时间戳
    var EndTimes = new Date(EndTime).getTime();//结束时间

    var NowTime = new Date().getTime();//当前时间

    var DeltaT = EndTimes - NowTime;
    //计算出相差天数
    var days = Math.floor(DeltaT / (24 * 3600 * 1000));

    //计算出小时数

    var leave1 = DeltaT % (24 * 3600 * 1000);
    var H = Math.floor(leave1 / (3600 * 1000));
    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000);
    var M = Math.floor(leave2 / (60 * 1000));
    //计算相差秒数
    var leave3 = leave2 % (60 * 1000);
    var S = Math.round(leave3 / 1000);
    var reminder;
    if (DeltaT > 0) {
        if (days != "") {
            reminder = days + "天 " + H + "小时 " + M + " 分钟" + S + " 秒";
        } else if (days == "" || H != "") {
            reminder = H + "小时 " + M + " 分钟" + S + " 秒";
        }
    } else {
        reminder = "请注意！时间到了！";
    }
    return reminder;

}
let baseUrlJs = function(val){
    return val;
}
export { DateToUnix, UnixToDate, NumBerToHanZi, DownTime, baseUrlJs}
