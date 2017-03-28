/*
*
*validatehandle.js-v1.0.0
*
* dependencies:above jquery-1.8.2
*
* Author： ZhangDeng
*
* Date: 2016-03-14
*
*function：验证文本输入 限制文本 给出相应的提示
*
*
*Add:limitedFormat() 2016-03-15
*Add:checkFormat() 2016-03-15
*Add:replaceNumberForId() 2016-03-15
*Add:AddOrMinusDate() 2016-03-18
*Add:GetDateString()2016-03-18
*
*
*/

//输入替换
//参数1：输入字符串  参数2：首位是否包含0
function replaceNumber(inputStr, firstIsIncludingZero) {
    //首位不包含0
    if (!firstIsIncludingZero) {
        //第一个为数字而不是0
        inputStr.value = inputStr.value.replace(/^0/g, "");
    }
    //非数字的都替换掉，除了数字
    inputStr.value = inputStr.value.replace(/[^0-9]/g, "");
}

//值替换为全数字
//参数1：需替换的jquery选择器  参数2：首位是否包含0
function replaceNumberForId(id, firstIsIncludingZero) {
    var temp = $(id).val();
    if (!firstIsIncludingZero) {
        //第一个为数字而不是0
        temp = temp.replace(/^0/g, "");
    }

    temp = temp.replace(/[^0-9]/g, "");
    $(id).val(temp);
}


//焦点获取 提示清空
//参数1 ：需验证的jquery选择器 参数2：提示的jquery选择器 
function focus(id, tipsid) {
    $(id).focus(function () {
        $(tipsid).html("");
    })
}


//长度限制 给出提示
//参数1：需验证的jquery选择器 参数2：长度最小值 
//参数3：长度最大值 参数4：提示的jquery选择器 参数5：提示内容
function limitLength(id, lengthMin, lengthMax, tipsid, tips) {
    $(id).keyup(function () {
        if ($(id).val() != "") {
            if ($(id).val().length < lengthMin || $(id).val().length > lengthMax) {
                $(tipsid).html(tips);
            }
            else {
                $(tipsid).html("");
            }
        }
        else {
            $(tipsid).html("");
        }
    });
}


//验证长度 通过返回true 不通过返回false并给出提示
//参数1：需验证的jquery选择器 参数2：长度最小值 
//参数3：长度最大值 参数4：提示的jquery选择器 参数5：提示内容
function checkLength(id, lengthMin, lengthMax, tipsid, tips) {
    var pass = false;
    if ($(id).val().length < lengthMin || $(id).val().length > lengthMax) {
        pass = false;
        $(tipsid).html(tips);
    }
    else {
        pass = true;
    }
    return pass;
}

//格式限制
//参数1：需验证的jquery选择器
//function limitedFormat(id, tipsid) {
//    $(id).keyup(function () {
//        var reg = new RegExp("^(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])$");
//        if ($(id).val() != "") {
//            if (!reg.test($(id).val())) {
//                $(tipsid).html("IP格式不正确");

//            }
//            else {
//                $(tipsid).html("");
//            }
//        }
//        if ($(id).val() == "") {
//            $(tipsid).html("");
//        }
//    });
//}

//格式验证 
//参数1：需验证的jquery选择器 参数2：验证的格式类型（IP-IP地址，IDCard-身份证号码） 
//参数3：提示的jquery选择器 参数4：提示内容
function limitedFormat(id, validateFormat, tipsId, tips) {
    $(id).keyup(function () {
        var reg = new RegExp();
        if (validateFormat == "IP") {
            reg = new RegExp("^(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])$");
        }
        if (validateFormat == "IDCard") {
            reg = new RegExp("(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)");
        }
        if ($(id).val() != "") {
            if (!reg.test($(id).val())) {
                $(tipsId).html(tips);
            }
            else {
                $(tipsId).html("");
            }
        }
        if ($(id).val() == "") {
            $(tipsId).html("");
        }
    });
}

//格式限制 通过返回true 不通过返回false并给出提示
//参数1：需验证的jquery选择器
function checkFormat(id, tipsid) {
    var reg = new RegExp("^(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])$");
    if ($(id).val() != "") {
        if (!reg.test($(id).val())) {
            $(tipsid).html("IP格式不正确");
            return false;
        }
        else {
            $(tipsid).html("");
            return true;
        }
    }
}

//格式验证 通过返回true 不通过返回false并给出提示
//参数1：需验证的jquery选择器 参数2：验证的格式类型（IP-IP地址，IDCard-身份证号码） 
//参数3：提示的jquery选择器 参数4：提示内容
function checkFormat(id, validateFormat, tipsId, tips) {
    var reg = new RegExp();
    if (validateFormat == "IP") {
        reg = new RegExp("^(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])$");
    }
    if (validateFormat == "IDCard") {
        reg = new RegExp("(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)");
    }
    if ($(id).val() != "") {
        if (!reg.test($(id).val())) {
            $(tipsId).html(tips);
            return false;
        }
        else {
            $(tipsId).html("");
            return true;
        }
    }
}

///获取日期 并格式化
function GetDateString() {
    var myDate = new Date();
    var year = "";
    var month = "";
    var day = "";
    var strdate = "";
    year = myDate.getFullYear();
    month = myDate.getMonth() < 9 ? "0" + (myDate.getMonth() + 1) : myDate.getMonth() + 1;
    day = myDate.getDate() < 10 ? "0" + myDate.getDate() : myDate.getDate();
    strdate = year + "-" + month + "-" + day;
    return strdate;
}

//日期加减法
function AddOrMinusDate(days) {
    var d = new Date();
    if (days > 0) {
        d.setDate(d.getDate() + days);
    }
    else if (days < 0) {
        d.setDate(d.getDate() - days * (-1));
    }

    //获取当前日期
    else
        d.setDate(d.getDate());

    var month = d.getMonth() + 1;
    var day = d.getDate();
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    var val = d.getFullYear() + "-" + month + "-" + day;
    return val;
}
