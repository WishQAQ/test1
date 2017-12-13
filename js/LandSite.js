//脚本验证
function validataData() {
    var vMess = "";
    for (var i = 0; i < validatorType.length; i++) {
        $("input:enabled[readonly!='readonly'][valiname=" + validatorType[i] + "],select:enabled[readonly!='readonly'][valiname=" + validatorType[i] + "],textarea:enabled[readonly!='readonly'][valiname=" + validatorType[i] + "]").each(function () {
            var bReg;
            var type = validatorConten[validatorType[i]];
            var code = $(this).val();
            if (code != null) {
            	if(validatorConten[validatorType[i]].validmethod){
            		var validmethod = validatorConten[validatorType[i]].validmethod;
            		bReg = eval(validmethod + "('"+code+"')");
            	}else{
            		bReg = code.match(validatorConten[validatorType[i]].validator);
            	}
                
            }
            if (!bReg) {
                vMess += $(this).attr("valimess") + validatorConten[validatorType[i]].mess + "\r\n";
                $(this).css("background-color", "#FFEEEC");
                $(this).keydown(function () {
                    $(this).css("background-color", "#F5F5F5");
                });
            }else {
                $(this).off("keydown");
            }
        });
    }
    if (vMess != "") {
        alert(vMess);
        return false;
    }
    return true;
}
var validatorType = ["number", "cellPhoneNumber", "cellPhoneNumberNullAble", "tellPhoneNumber", "required", "requirednumber", "identity", "identityNullAble", "digits", "DJH", "DJHnullAble", "postcode", "ZDDM", "unitno", "email" ,"socialCreditCode","socialCreditCodeNullAble","organizationStructureCode","organizationStructureCodeNullAble"];
var validatorConten = {
    number: { mess: "请输入合法的数字", validator: "^\\d*$|(^\\d+(\.\\d+)?$)" },
    cellPhoneNumber: { mess: "请输入合法的手机号码", validator: "^((1[34578][0-9])|(15[^4,\\D])|(18[0,5-9]))\\d{8}$" },
    cellPhoneNumberNullAble: { mess: "请输入合法的手机号码", validator: "(^\\.{0}$)|(^\\d{11,11}$)" },
	tellPhoneNumber: { mess: "请输入合法的固定电话号码", validator: "/^0\d{2,3}-\d{7,8}(-\d{1,6})?$/" },
    //required: { mess: "必填字段", validator: "^\.+$\m" },//只能验证单行文字
    required: { mess: "必填字段", validator: /.+/m },//可验证多行文字
    requirednumber: { mess: "请输入数字", validator: "^(^\\d+(\.\\d+)?$)" },
    identity: { mess: "请输入合法的身份证号", validator: "" ,validmethod:"IdentityCodeValid" },
    identityNullAble: { mess: "请输入合法的身份证号", validator: "",validmethod:"IdentityCodeValidNullAble"},
    digits: { mess: "只能输入整数", validator: "^\\d*$" },
    postcode: { mess: "请输入合法的邮政编码", validator: "(^\\.{0}$)|(^[0-9]{6}$)" },
    DJH: { mess: "请输入合法的地籍号", validator: "^\\d{12}[A-Z]{2}\\d{5}$" },
    DJHnullAble: { mess: "请输入正确格式的地籍号", validator: "((^\\.{0}$))|(^\\d{12}[A-Z]{2}\\d{5}$)" },
    ZDDM: { mess: "请输入合法的宗地代码", validator: "^\\d{12}[A-Z]{2}\\d{5}$" },
    unitno: { mess: "请输入合法的不动产单元号", validator: "^\\d{12}[A-Z]{2}\\d{5}[A-Z]{1}\\d{8}$" },
    email: { mess: "请输入正确格式的电子邮件", validator: "(^\.{0}$)|(^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$)" },
    socialCreditCode:{mess: "请输入合法的统一社会信用代码", validator: "" ,validmethod:"tyshxydmCodeValid"},
    socialCreditCodeNullAble:{mess: "请输入合法的统一社会信用代码", validator: "" ,validmethod:"tyshxydmCodeValidNullAble"},
    organizationStructureCode:{mess: "请输入合法的组织机构代码", validator: "" ,validmethod:"organizationStructureCodeValid"},
    organizationStructureCodeNullAble:{mess: "请输入合法的组织机构代码", validator: "",validmethod:"organizationStructureCodeValidNullAble" }
};


//身份证校验
var IdentityCodeValid = function(code) {
	if(code == null || code == ""){
		return false;
	}
     var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
     var tip = "";
     var pass= true;
     
     if(!code || !/^\d{6}-?(18|19|20)?\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])-?\d{3}(\d|X)$/i.test(code)){
         tip = "身份证号格式错误";
         pass = false;
     }else if(!city[code.substring(0,2)]){
         tip = "地址编码错误";
         pass = false;
     }else{
         //18位身份证需要验证最后一位校验位
         if(code.length == 18){
             code = code.split('');
             //∑(ai×Wi)(mod 11)
             //加权因子
             var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
             //校验位
             var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
             var sum = 0;
             var ai = 0;
             var wi = 0;
             for (var i = 0; i < 17; i++)
             {
                 ai = code[i];
                 wi = factor[i];
                 sum += ai * wi;
             }
             var last = parity[sum % 11];
             if(parity[sum % 11] != code[17]){
                 tip = "校验位错误";
                 pass =false;
             }
         }
     }
     return pass;
 }
var IdentityCodeValidNullAble = function(code){
	if(code == null || code == ""){
		return true;
	}
	var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
    var tip = "";
    var pass= true;
    
    if(!code || !/^\d{6}-?(18|19|20)?\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])-?\d{3}(\d|X)$/i.test(code)){
        tip = "身份证号格式错误";
        pass = false;
    }else if(!city[code.substring(0,2)]){
        tip = "地址编码错误";
        pass = false;
    }else{
        //18位身份证需要验证最后一位校验位
        if(code.length == 18){
            code = code.split('');
            //∑(ai×Wi)(mod 11)
            //加权因子
            var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
            //校验位
            var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
            var sum = 0;
            var ai = 0;
            var wi = 0;
            for (var i = 0; i < 17; i++)
            {
                ai = code[i];
                wi = factor[i];
                sum += ai * wi;
            }
            var last = parity[sum % 11];
            if(parity[sum % 11] != code[17]){
                tip = "校验位错误";
                pass =false;
            }
        }
    }
    return pass;
}
//统一社会信用代码
var tyshxydmCodeValid = function(code){
	if(code == null || code == ""){
		return false;
	}
	var patrn = /^[0-9A-Z]+$/;
    //18位校验及大写校验
    if ((code.length != 18) || (patrn.test(code) == false)){
        return  false;
    } else{
        var Ancode;//统一社会信用代码的每一个值
        var Ancodevalue;//统一社会信用代码每一个值的权重
        var total = 0;
        var weightedfactors = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28];//加权因子
        var str = '0123456789ABCDEFGHJKLMNPQRTUWXY';
        //不用I、O、S、V、Z
        for (var i = 0; i < code.length - 1; i++)
        {
            Ancode = code.substring(i, i + 1);
            Ancodevalue = str.indexOf(Ancode);
            total = total + Ancodevalue * weightedfactors[i];
            //权重与加权因子相乘之和
        }
        var logiccheckcode = 31 - total % 31;
        if (logiccheckcode == 31)
        {
            logiccheckcode = 0;
        }
        var Str = "0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,J,K,L,M,N,P,Q,R,T,U,W,X,Y";
        var Array_Str = Str.split(',');
        logiccheckcode = Array_Str[logiccheckcode];


        var checkcode = code.substring(17, 18);
        if (logiccheckcode != checkcode) {
            return false;
        }else{
        	return true;
        }
    }
}
var tyshxydmCodeValidNullAble = function(code){
	if(code == null || code == ""){
		return true;
	}
	var patrn = /^[0-9A-Z]+$/;
    //18位校验及大写校验
    if ((code.length != 18) || (patrn.test(code) == false)){
        return  false;
    } else{
        var Ancode;//统一社会信用代码的每一个值
        var Ancodevalue;//统一社会信用代码每一个值的权重
        var total = 0;
        var weightedfactors = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28];//加权因子
        var str = '0123456789ABCDEFGHJKLMNPQRTUWXY';
        //不用I、O、S、V、Z
        for (var i = 0; i < code.length - 1; i++)
        {
            Ancode = code.substring(i, i + 1);
            Ancodevalue = str.indexOf(Ancode);
            total = total + Ancodevalue * weightedfactors[i];
            //权重与加权因子相乘之和
        }
        var logiccheckcode = 31 - total % 31;
        if (logiccheckcode == 31)
        {
            logiccheckcode = 0;
        }
        var Str = "0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,J,K,L,M,N,P,Q,R,T,U,W,X,Y";
        var Array_Str = Str.split(',');
        logiccheckcode = Array_Str[logiccheckcode];


        var checkcode = code.substring(17, 18);
        if (logiccheckcode != checkcode) {
            return false;
        }else{
        	return true;
        }
    }
}
//校验组织机构代码
var organizationStructureCodeValid = function (code) {
	if(code == null || code == ""){
		return false;
	}
	var ws = [3, 7, 9, 10, 5, 8, 4, 2];
	var str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var reg = /^([0-9A-Z]){8}-?[0-9X]$/; 
	if (!reg.test(code)) {
		return false;
	}
	var C1_8 = code.substring(0,8);
	var n = code.length-1;
	var C1_last = code.charAt(n);
	var sum = 0;
	for (var i = 0; i < 8; i++) {
		sum += str.indexOf(C1_8.charAt(i)) * ws[i];
	}
	var C9 = 11 - (sum % 11);
	var check = "";
	if (C9 == 11) {
		check = '0';
	} else if (C9 == 10) {
		check = 'X';
	} else {
		check = C9;
	}
	if (check == C1_last) {
		return true;
	} else {
		return false;
	}
}
var organizationStructureCodeValidNullAble = function (code) {//78305975-3
	if(code == null || code == ""){
		return true;
	}
	var ws = [3, 7, 9, 10, 5, 8, 4, 2];
	var str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var reg = /^([0-9A-Z]){8}-?[0-9X]$/; 
	if (!reg.test(code)) {
		return false;
	}
	var C1_8 = code.substring(0,8);
	var n = code.length-1;
	var C1_last = code.charAt(n);
	var sum = 0;
	for (var i = 0; i < 8; i++) {
		sum += str.indexOf(C1_8.charAt(i)) * ws[i];
	}
	var C9 = 11 - (sum % 11);
	var check = "";
	if (C9 == 11) {
		check = '0';
	} else if (C9 == 10) {
		check = 'X';
	} else {
		check = C9;
	}
	if (check == C1_last) {
		return true;
	} else {
		return false;
	}
}
/***********************
*获取时间（yyyy-MM-dd）
************************/
function getDate() {
    WdatePicker();
}

/***********************
*获取时间（yyyy-MM-dd HH:mm:ss）
************************/
function getDateTime() {
    WdatePicker({ dateFmt: 'yyyy-MM-dd HH:mm:ss' });
} 
//自适应高度
function ___setIframeHeight(iframe) 
{
	var topWindow=window;
	for(var i=0;i<topWindow.parent.frames.length;i++)
	{
		if(topWindow.parent.frames[i].window.document==topWindow.document)
		{
			var iframe=topWindow.parent.frames[i];				 
			var parentIFrameId=iframe.name;
			iframe=window.parent.document.getElementById(parentIFrameId);
			var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
			if (iframeWin.document.body) {
				iframe.height =iframeWin.document.body.scrollHeight|| iframeWin.document.documentElement.scrollHeight ;
				var tt=iframe.height ;
			}
		}
	}
}
