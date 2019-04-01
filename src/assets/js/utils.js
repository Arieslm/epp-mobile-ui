// import echarts from 'echarts';
// import router from '../../router';
import moment from 'moment-timezone';
moment.tz.setDefault('Asia/Shanghai');

const getCookie = function(name) { //获取cookia
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
const qcloudHost = 'https://dasuan-app-1255389510.cos.ap-beijing.myqcloud.com';

const setTitle = function(title) {
    setTimeout(function() {
        //利用iframe的onload事件刷新页面
        document.title = title
        var iframe = document.createElement('iframe');
        iframe.style.visibility = 'hidden';
        iframe.style.width = '1px';
        iframe.style.height = '1px';
        iframe.onload = function() {
            setTimeout(function() {
                document.body.removeChild(iframe);
            }, 0);
        };
        document.body.appendChild(iframe);
    }, 0);
}

const getToday = function(type, daynum=0) {
    // 默认周时间
    var length = listLastWeeks(moment().subtract(daynum, 'days').format('YYYY-MM-DD'), 5).length - 1;
    var time = listLastWeeks(moment().subtract(daynum, 'days').format('YYYY-MM-DD'), 5)[length].time;
    // 当天日期
    switch (type) {
        case 0:
            return moment().subtract(daynum, 'days').format('YYYY-MM-DD');
        case 1:
            return time
        case 2:
            return moment().subtract(daynum, "days").format('YYYY-MM');
        case 3:
            return '开始时间 ~ 结束时间';
        case 4:
            return moment().subtract(daynum, "days").format('Q');
        case 5:
            return moment().subtract(daynum, "days").format('YYYY');
        default:
            return moment().subtract(daynum, "days").format('YYYY-MM-DD');
    }
}

const getLatestDate = function(length) {
    // length 前多少天
    let myDate = new Date(); //获取今天日期
    myDate.setDate(myDate.getDate() - length);
    let dateArray = [];
    let dateTemp;
    let flag = 1;
    for (let i = 0; i < length; i++) {
        dateTemp = (myDate.getFullYear() + '-' + ((myDate.getMonth() + 1) < 10 ? ('0' + (myDate.getMonth() + 1)) : (myDate.getMonth() + 1)) + "-" + (myDate.getDate() < 10 ? ('0' + myDate.getDate()) : myDate.getDate()));
        dateArray.push(dateTemp);
        myDate.setDate(myDate.getDate() + flag);
    }
    return dateArray;
}

const pad = function(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}

const listLastWeeks = function(today_string, total_weeks) {
    let today = moment(today_string, "YYYY-MM-DD")
    let result = []
    for (let i = 0; i <= total_weeks; i++) {
        let startDay = moment(today).subtract(7 * i, 'days').startOf('isoweek').format("YYYY-MM-DD")
        let endDay = moment(today).subtract(7 * i, 'days').endOf('isoweek').format("YYYY-MM-DD")
        if (endDay >= today.format("YYYY-MM-DD")) {
            endDay = today.format("YYYY-MM-DD");
        }
        if (startDay > endDay) {
            continue
        }
        let weekNum = pad(moment(today).subtract(7 * i, 'days').isoWeek(), 2)
        let YearNum = moment(endDay, "YYYY-MM-DD").isoWeekYear()
        result.push({
            time: startDay + ' ~ ' + endDay,
            weekNum: weekNum,
            YearNum: YearNum,
            yw: YearNum + '' + weekNum
        })
    }
    return result.reverse();
}
const trim = function(str) { //删除左右两端的空格
    　　
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

const getNowDay = function() {
    return moment().format('YYYY-MM-DD')
}

const getYesterday = function() {
    return moment(moment().subtract(1, 'days')).format('YYYY-MM-DD')
}

const getAfterDay = function(length=1){
    return moment(moment().add(length, 'days')).format('YYYY-MM-DD')
}

const getNowMonth = function(n=0) { // 获取月份 月初第一天取上个月
    let month = moment(moment().subtract(0, 'days')).format('MM')
    let day = moment(moment().subtract(0, 'days')).format('DD')
    let month_int = parseInt(month)
    let day_int = parseInt(day);
    if(day_int == 1) {
        month_int -= 1
    }
    if(month_int == 0) {
        month_int = 12
    }

    if (month_int>n) {
        return month_int-n
    } else{
        return 12-(n-month_int)
    };
}

const getSameDay = function(date_string) {
    return moment(date_string, "YYYY-MM-DD").subtract(1, 'years').format("YYYY-MM-DD")
}

const getValue = function(obj, keys) {
    try {
        if (keys.length == 1) {
            return obj[keys[0]]
        }
        if (keys.length == 2) {
            return obj[keys[0]][keys[1]]
        }
        if (keys.length == 3) {
            return obj[keys[0]][keys[1]][keys[2]]
        }
        if (keys.length == 4) {
            return obj[keys[0]][keys[1]][keys[2]][keys[3]]
        }
    } catch (error) {
        return null
    }
    return null

}
const formatPrice = function(price) { // 金额格式化
    if (price == null) {
        return '-'
    }
    return parseFloat(price).toFixed(0).replace(new RegExp('(\\d)(?=(\\d{3})+$)', 'ig'), "$1,");
}

const decimalTwo = (nums, y = true, i = 2) => {
    if (nums == null) {
        return '-'
    }
    if (+nums) {
        return y ? (parseFloat(+nums) * 100).toFixed(i) : (parseFloat(+nums)).toFixed(i);
    } else {
        return nums
    }
}
const insertStr = function(str1,n,str2){  // 指定位置插入
    let s1;
    let s2;
    if(str1.length<n){
        return str1+str2;
    }else{
        s1 = str1.substring(0,n);
        s2 = str1.substring(n,str1.length);
        return s1+str2+s2;
    }
}


const  setupWebViewJavascriptBridge = function(callback) {
    if (window.WebViewJavascriptBridge)  {
        callback(WebViewJavascriptBridge)
    } else {
        document.addEventListener('WebViewJavascriptBridgeReady', function() {
            callback(WebViewJavascriptBridge)
        },false);
    }
    if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge);}
    if (window.WVJBCallbacks)  { return window.WVJBCallbacks.push(callback);}
    window.WVJBCallbacks = [callback];
    var WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'https://__bridge_loaded__';
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function() { document.documentElement.removeChild(WVJBIframe)}, 0)
}

const checkFloat = function(c){
    var r= /^[+-]?[1-9]?[0-9]*\.[0-9]*$/;
    return r.test(c);
}

const getStoreIdName = function () {
    // if (router.history.current.query.store_id && router.history.current.query.store_name) {
    //     return encodeURI('store_id=' + router.history.current.query.store_id + '&store_name=' +
    //         router.history.current.query.store_name);
    // } else {
    //     return '';
    // }
    let opt = {},
        storeId = router.history.current.query.store_id,
        storeName = router.history.current.query.store_name,
        storeFlag = router.history.current.query.store_flag;
    if ( storeId && storeName) {
        opt.store_id = storeId;
        opt.store_name = encodeURIComponent(storeName);
    }
    if (storeFlag) {
        opt.store_flag = storeFlag
    }
    let strUrl = '',
        keys = Object.keys(opt);
    if (keys.length) {
        let arr = keys.map((item)=>{
            return `${item}=${opt[item]}`;
        });
        strUrl = arr.join('&');
    }
    return strUrl;
}

const windowBridge = function (callback) {
    if (window.bridge && window.bridge.callHandler) {
            callback()
    } else {
        setupWebViewJavascriptBridge(callback)
    }
}

const goStoreType = function (to,flag) {
    let fullQuery = to.fullPath.split('?')[1]
    let pathBoolean = false;
    let BigurlBoolean = false;
    let routerUrl = router.options.routes;
    let StoreType;

    if (flag==0) {
        StoreType="";
    } else if(flag==1){
        StoreType="big_";
    }else if(flag==3){
        StoreType="multi_";
    }else{
        StoreType="";
    };

    let flagUrl = `/${StoreType}${to.path.split('/')[1]}`;
    let result = {
        url: flagUrl,
        isGo: false,
        fullQuery:fullQuery
    }
    routerUrl.forEach((item) => {
        if (item.path == to.path) {
            pathBoolean = true;
        }
        if (item.path == flagUrl) {
            BigurlBoolean = true;
        }
    })
    if (pathBoolean && BigurlBoolean) {
        result.isGo = true;
    }
    return result;
}



const formatterRate=function(str){
    let a=str*100;
    a=a.toFixed(1);
    let b=a.toString();
    return b+'%';
}
const formatterRateWithNum=function(str){
        let a=str.replace('%','');
        if(str=='') return a;
        a=parseFloat(a);
        return a/100;
}
const getByteLen = function (val, num) {
    var len = 0;
    for (var i = 0; i < val.length; i++) {
        var a = val.charAt(i);
        if (a.match(/[^\x00-\xff]/ig) != null || (a.charCodeAt(0) > 64 && a.charCodeAt(0) < 90)) {
            len += 2;
        } else {
            len += 1;
        }

    }
    if (len > num) {
        return true
    } else {
        return false
    }
}

const randomString = function () {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( let i=0; i < 8; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

const checkTime = function (star, end) {
    let nowtime = moment().hour();
    if (nowtime >= star && nowtime <= end) {
        return {
            type: true,
            time: moment().format('YYYY-MM-DD')
        }
    } else {
        return {
            type: false,
            time: getYesterday()
        }
    }
}

const checkTimes = function (time) {
    let ymd = moment().format('YYYY-MM-DD')
    let pktime =`${ymd.replace(/-/g,"/")} ${time}`;//替换字符，变成标准格式
    let nowtimes  = moment().format('YYYY-MM-DD HH:mm:ss')
    let nowpktime  = nowtimes.replace(/-/g,"/");
    if (nowpktime>pktime) {
        return getNowDay();
    } else{
        return getYesterday();
    };
}
const formatIntWithNum = function (value){
    return Math.round(value);
}
const isIos = !!(window.navigator && window.navigator.userAgent || '').match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

const checkIosVersion = function(N){
    var agent = navigator.userAgent.toLowerCase();
    var version;
    var regStr_saf = /os [\d._]*/gi;
    var verinfo = agent.match(regStr_saf);
    version = (verinfo + "").replace(/[^0-9|_.]/ig, "").replace(/_/ig, ".");

    var version_str = version + "";
    version = version.split('.')[0];
    return Number(version)
}

const addUrlQuery = (url, ...args) => {
    let query = location.search;
    let queryAll = query.substr(1);
    let result = '';
    let queryAdd = '';
    if (args.length) {
        args.forEach((item) => {
            var reg = new RegExp("(^|&)" + item + "=([^&]*)(&|$)", "i");
            var r = queryAll.match(reg);
            if ( r != null ){
                queryAdd += `&${item}=${r[2]}`;
            } else {
                queryAdd += `&${item}`;
            }
        })
        if (url.includes('?')) {
            result = url + queryAdd
        } else {
            result = url + '?' + queryAdd.substr(1);
        }
    } else {
        if (url.includes('?')) {
            result = url + '&' + queryAll
        } else {
            result = url + query
        }
    }
    return result;
}

class StoreSelected {
    constructor(selected) {
        this.selected = selected
    }

    formatResult(data) {
        let result = []
        for(let i = 0 ; i < data.length ; i ++) {

            let type = 0 // 不选中，可点击

            for(let key of Object.keys(this.selected) ) {
                let node = this.selected[key]

                if(this.isChild(data[i],node)) {
                    type = 1 //子节点，默认选中，置灰
                    break
                } else if (key == data[i].department_id) {
                    type = 2 // 自身，默认选中，可点击
                    break
                }
            }

            result.push({
                department_id : data[i].department_id,
                hierarchy_index : data[i].hierarchy_index,
                department_name: data[i].department_name,
                department_type: data[i].department_type,
                has_more:data[i].has_more,
                parent_id: data[i].parent_id,
                choose_state: data[i].choose_state,
                staff_numbers: data[i].staff_numbers,
                type : type
            })
        }
        return result
    }

    /*判断node1是node2的孩子*/
    isChild(node1,node2) {

        if(node1.hierarchy_index.length <= node2.hierarchy_index.length){
            return false
        }
        let tmp = node1.hierarchy_index.slice(0,node2.hierarchy_index.length)

        if(tmp == node2.hierarchy_index) {
            return true
        }
        return false
    }

    getSelected() {
        return this.selected
    }

    setSelected(selected) {
        this.selected = selected
    }

    addItemToSelect(item) {
        let deleted = []
        let add2Selected = true

        for(let key of Object.keys(this.selected) ) {

            let node = this.selected[key]

            if(this.isChild(node,item)) {
                deleted.push(key)
            }
            else if(this.isChild(item,node)) {
                add2Selected = false
            } else if (item.department_id == key) {
                add2Selected = false
            }
        }

        if(add2Selected) {
            this.selected[item.department_id] = item
        }

        for(let i = 0 ; i < deleted.length ; i ++) {

            delete this.selected[deleted[i]]
        }
    }

    removeFromSelect(item) {
        if(this.selected.hasOwnProperty(item.department_id)) {

            delete this.selected[item.department_id]
        }
    }
}

//部门管理下钻导航
const NavRoute = function (navArr=[],navObj,ids='id'){
    if (navArr.length==0) {
        navArr.push(navObj)
    } else{
        for (let i = 0; i < navArr.length; i++) {
            if (navArr[i][ids]==navObj[ids]) {
                navArr.splice(i+1)
            } else{
                navArr.push(navObj)
            };
        };
    };
    return navArr;
}

//部门管理上边导航
const getNavLocal = function(localStorageName,infoObjQuery={},ids='id'){
    let routeIndex;
    let NavLocal = JSON.parse(localStorage.getItem(localStorageName)) || []
    for (var i = 0; i < NavLocal.length; i++) {
        if (NavLocal[i][ids]==infoObjQuery[ids]) {
            routeIndex = i
        }
    };
    return {
        get:NavLocal.pop(),
        go: `-${NavLocal.length-routeIndex}`
    }
}

const isIncludes = (toPath,includesArr) =>{
    let isNext = false
    for (let i = 0; i < includesArr.length; i++) {
        includesArr[i]
        if (toPath.includes(includesArr[i])) {
            isNext = true
        }
    };
    return isNext
}

const getYesterMonth = (n)=>{//向前推N个月
    let month = moment(moment().subtract(0, 'days')).format('YYYYMM')
    return month-n
}

const isColor = function (value) {
    const colorReg = /^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/;
    const rgbaReg = /^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/;
    const rgbReg = /^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;

    return colorReg.test(value) || rgbaReg.test(value) || rgbReg.test(value);
};

const hasClass = function (elem, cls) {
    cls = cls || '';
    if (cls.replace(/\s/g, '').length === 0 || !elem) return false;
    return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
};

const addClass = function (ele, cls) {
    console.log(ele);
    console.log(cls);
    if (!hasClass(ele, cls)) {
        console.log(2,ele);
        console.log(2,cls);
        ele.className = ele.className === '' ? cls : ele.className + ' ' + cls;
    }
};

const removeClass = function (ele, cls) {
    if (hasClass(ele, cls)) {
        let newClass = ' ' + ele.className.replace(/[\t\r\n]/g, '') + ' ';
        while (newClass.indexOf(' ' + cls + ' ') >= 0) {
            newClass = newClass.replace(' ' + cls + ' ', ' ');
        }
        ele.className = newClass.replace(/^\s+|\s+$/g, '');
    }
};

const getScrollview = function (el) {
    let currentNode = el;
    console.log(currentNode.tagName);
    console.log(currentNode.nodeType)
    while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
        console.log('in');
        let overflowY = document.defaultView.getComputedStyle(currentNode).overflowY;
        console.log('overflowY', overflowY);
        if (overflowY === 'scroll' || overflowY === 'auto') {
            return currentNode;
        }
        currentNode = currentNode.parentNode;
    }
    return window;
};
const SpanGrid = function (tabObj, cellindex, beginRow) {
    var colIndex = cellindex;
    var rowBeginIndex = beginRow;
    if (tabObj != null) {
        var i, j, m;
        var intSpan;
        var strTemp;
        m = 0;
        for (i = rowBeginIndex; i < tabObj.rows.length; i++) {
            intSpan = 1;
            m++;
            strTemp = tabObj.rows[i].cells[colIndex].innerText;
            for (j = i + 1; j < tabObj.rows.length; j++) {
                if (strTemp == tabObj.rows[j].cells[colIndex].innerText && (tabObj.rows[i].cells[0].innerText == tabObj.rows[j].cells[0].innerText)) {
                    intSpan++;
                    tabObj.rows[i].cells[colIndex].rowSpan = intSpan;
                    tabObj.rows[j].cells[colIndex].style.display = "none";
                } else {
                    break;
                }
            }

        }
        i = j - 1;
    }
}

export default {
    isColor: isColor,
    getCookie: getCookie,
    setTitle: setTitle,
    trim: trim,
    getToday: getToday,
    getLatestDate: getLatestDate,
    listLastWeeks: listLastWeeks,
    pad: pad,
    getYesterday: getYesterday,
    getSameDay: getSameDay,
    getValue: getValue,
    formatPrice: formatPrice,
    decimalTwo: decimalTwo,
    insertStr: insertStr,
    setupWebViewJavascriptBridge : setupWebViewJavascriptBridge,
    checkFloat:checkFloat,
    moment: moment,
    getStoreIdName: getStoreIdName,
    windowBridge: windowBridge,
    goStoreType: goStoreType,
    formatterRate:formatterRate,
    formatterRateWithNum:formatterRateWithNum,
    getByteLen:getByteLen,
    randomString: randomString,
    checkTime: checkTime,
    getNowMonth: getNowMonth,
    getNowDay: getNowDay,
    checkTimes: checkTimes,
    getAfterDay: getAfterDay,
    formatIntWithNum: formatIntWithNum,
    isIos:isIos,
    checkIosVersion:checkIosVersion,
    addUrlQuery: addUrlQuery,
    StoreSelected: StoreSelected,
    NavRoute:NavRoute,
    getNavLocal:getNavLocal,
    qcloudHost: qcloudHost,
    isIncludes:isIncludes,
    getYesterMonth:getYesterMonth,
    addClass: addClass,
    removeClass: removeClass,
    getScrollview: getScrollview,
    SpanGrid: SpanGrid
}
