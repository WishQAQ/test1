function changeInfoTable(param){
		if(param == null) {
			alert("error!");
		}
		for(var j=0; j<10; j++){
			if(j==param){
				document.getElementById("info_table_"+param+"_1").style.display = "block"; 
				document.getElementById("info_table_"+param).children[0].className = "label_L_1";
				document.getElementById("info_table_"+param).children[1].className = "label_C_1";
				document.getElementById("info_table_"+param).children[1].children[0].className = "label_C_text_1";
				document.getElementById("info_table_"+param).children[2].className = "label_R_1";		
			} else {
				document.getElementById("info_table_"+j+"_1").style.display = "none"; 
				var obj1 = document.getElementById("info_table_"+j);
				obj1.children[0].className = "label_Fault";
				obj1.children[1].className = "label_Fault";
				obj1.children[1].children[0].className = "label_C_text_1";
				obj1.children[2].className = "label_Fault";		
			}
		}
}

function save(){
	var enterName = $("#enterName1").val();
	var moveTel = $("#moveTel").val();
	var codeTrade = $("#codeTrade").val();
	
    if(enterName == ""){
		alert("单位名称不能为空!");
		$("#enterName").focus();
        return false;
    }
    if(moveTel == ""){
		alert("移动电话不能为空!");
		$("#moveTel").focus();
        return false;
    }
    if(codeTrade == ""){
		alert("行业分类不能为空!");
		$("#codeTrade").focus();
        return false;
    }
	$("#tRadiSafeForm").submit();
}

/********************************* 动态增加行、删除行***********************************************/
var tableIdS1 = 0;
var tableIdS2 = 0;
var tableIdS3 = 0;
var tableIdS4 = 0;
var tableIdS5 = 0;
var tableIdS6 = 0;
var tableIdS7 = 0;
var tableIdS8 = 0;
var tableIdS11 = 0;
var tableIdS12 = 0;

//动态添加 表1--辐射工作单位基本情况
function addTableS1(){
    var str = "<table cellpadding='0' cellspacing='0' width='100%' align='center' id='tableS1"+(tableIdS1)+"'>";
      str += "<tr><td class='info_con' style='width: 122px'><center>";
      str += "<input type='button' value='动态删除表格' id='tableS1"+tableIdS1+"' onclick='deleteTable(id);'/></center></td>";
      str += "<td class='info_con' style='width: 265px'><input class='input_text f-input' id='deptName1"+tableIdS1+"' type='text' maxlength='75' name='deptName1' /></td>";
      str += "<td class='info_con' style='width: 267px'><input class='input_text f-input' id='deptAddr1"+tableIdS1+"' type='text' maxlength='75' name='deptAddr1' /></td>";
      str += "<td class='info_con' style='padding-left: 23px' colspan='2'><input class='input_text f-input' style='width: 90% !important;' type='text' maxlength='75' id='contact1"+tableIdS1+"' name='contact1' /></td>";
      str += "</tr></table>";
      tableIdS1 = tableIdS1 + 1;
  	  $("#info_table_0_1").append(str);
}

//动态添加 表2  活动种类和范围 （一）放射源
function addTableS2(){
	var str = "<tr><td><table cellpadding='0' cellspacing='0' width='100%' align='center' id='tableS2"+(tableIdS2)+"'>";
  	  str += "<tr><td class='info_con' style='width: 115px'><center>";
      str += "<input type='button' value='动态删除表格' id='tableS2"+tableIdS2+"' onclick='deleteTable(id);'/></center></td>";
      str += "<td class='info_con' style='width: 250px'><input type='text' class='input_text f-input' maxlength='75' name='nuclide2'/></td>";
      str += "<td class='info_con' style='width: 250px'><input type='text' class='input_text f-input' maxlength='75' name='type2' /></td>";
      str += "<td class='info_con' style='width: 324px'><input type='text' class='input_text f-input' maxlength='75' name='calResult2'/></td>";
      str += "<td class='info_con' style='width: 250px'><input type='text' class='input_text f-input' maxlength='75' name='activeType2' /></td>";
      str += "</tr></table>";
      str += "</td></tr>";
      tableIdS2 = tableIdS2 + 1;
  	  $("#info_table_1_1").append(str);
}

//动态添加 表3 活动种类和范围 （二）非密封放射性物质
function addTableS3(){
	var str = "<tr><td><table cellpadding='0' cellspacing='0' width='100%' align='center' id='tableS3"+(tableIdS3)+"'>";
	str += "<tr><td class='info_con'><center>";
	str += "<input type='button' value='动态删除表格' id='tableS3"+tableIdS3+"' onclick='deleteTable(id);'/></center></td>";
	str += "<td class='info_con'><input type='text' class='input_text f-input' maxlength='75' name='workplaceName3'/></td>";
	str += "<td class='info_con'><input type='text' class='input_text f-input' maxlength='75' name='placeLevel3' /></td>";
	str += "<td class='info_con'><input type='text' class='input_text f-input' maxlength='75' name='nuclide3' /></td>";
	str += "<td class='info_con'><input type='text' class='input_text f-input' maxlength='75' name='dayMaxNum3' /></td>";
	str += "<td class='info_con'><input type='text' class='input_text f-input' maxlength='75' name='yearMaxNum3' /></td>";
	str += "<td class='info_con'><input type='text' class='input_text f-input' maxlength='75' name='activeType3' /></td>";
	str += "</tr></table>";
    str += "</td></tr>";
    tableIdS3 = tableIdS3 + 1;
    $("#info_table_2_1").append(str);
}

//动态添加表4  活动种类和范围 （三）射线装置
function addTableS4(){
	var str = "<tr><td><table cellpadding='0' cellspacing='0' width='100%' align='center' id='tableS4"+(tableIdS4)+"'>";
  	  str += "<tr><td class='info_con' style='width: 124px'><center>";
      str += "<input type='button' value='动态删除表格' id='tableS4"+tableIdS4+"' onclick='deleteTable(id);'/></center></td>";
      str += "<td class='info_con'><input type='text' class='input_text f-input' maxlength='50' name='equiName4'/></td>";
      str += "<td class='info_con'><input type='text' class='input_text f-input' maxlength='25' name='type4' /></td>";
      str += "<td class='info_con'><input type='text' class='input_text f-input' maxlength='20' name='equiNum4' dateVl='num' onBlur='checkValue(this,this.dateVl,3)'/></td>";
      str += "<td class='info_con'><input type='text' class='input_text f-input' maxlength='75' name='activeType4' /></td>";
      str += "</tr></table>";
      str += "</td></tr>";
      tableIdS4 = tableIdS4 + 1;
  	  $("#info_table_3_1").append(str);
}

//动态添加表5  台帐明细登记（一）放射源
function addTableS5(){
	var str = "<tr><td><table cellpadding='0' cellspacing='0' width='100%' align='center' id='tableS5"+(tableIdS5)+"'>";
  	  str += "<tr><td rowspan='2'  class='info_con'><center>";
      str += "<input type='button' value='动态删除表格' id='tableS5"+tableIdS5+"' onclick='deleteTable(id);'/></center></td>";
      str += "<td rowspan='2'  class='info_con'><input type='text' class='input_text f-input' maxlength='50' name='nuclide5'/></td>";
      str += "<td rowspan='2'  class='info_con'><input type='text' class='input_text f-input' maxlength='25' name='leaveFactoryDate5' onclick='WdatePicker();' readonly='readonly'/></td>";
      str += "<td rowspan='2'  class='info_con'><input type='text' class='input_text f-input' maxlength='75' name='leaveFactoryActive5' /></td>";
      str += "<td rowspan='2'  class='info_con'><input type='text' class='input_text f-input' maxlength='75' name='equiGrade5' /></td>";
      str += "<td rowspan='2'  class='info_con'><input type='text' class='input_text f-input' maxlength='75' name='equiCode5' /></td>";
      str += "<td rowspan='2'  class='info_con'><input type='text' class='input_text f-input' maxlength='75' name='type5' /></td>";
      str += "<td rowspan='2'  class='info_con'><input type='text' class='input_text f-input' maxlength='75' name='equiUse5' /></td>";
      str += "<td rowspan='2'  class='info_con'><input type='text' class='input_text f-input' maxlength='75' name='equiPlace5' /></td>";
    str += "<td class='info_name'>来源</td>";
    str += "<td class='info_con'><input type='text' class='input_text' maxlength='25' name='equiSrc5'/></td>";
    str += "</tr><tr>";
    str += "<td class='info_name'>去向</td>";
    str += "<td class='info_con'><input type='text' class='input_text' maxlength='25' name='equiTo5'/></td>";
      str += "</tr></table>";
      str += "</td></tr>";
      tableIdS5 = tableIdS5 + 1;
  	  $("#info_table_4_1").append(str);
}

function addTableS6(){
    var str = "<tr><td><table cellpadding='0' cellspacing='0' width='100%' align='center' id='tableS6"+(tableIdS6)+"'>";
    str += "<tr><td rowspan='2' class='info_con'><center>";
    str += "<input type='button' value='动态删除表格' id='tableS6"+tableIdS6+"' onclick='deleteTable(id);'/></center></td>";
    str += "<td rowspan='2' class='info_con'><input type='text' class='input_text' maxlength='50' name='nuclide6'/></td>";
    str += "<td rowspan='2' class='info_con'><input type='text' class='input_text' maxlength='25' name='totalActiveNum6'/></td>";
    str += "<td rowspan='2' class='info_con'><input type='text' class='input_text' maxlength='25' name='frequency6'/></td>";
    str += "<td rowspan='2' class='info_con'><input type='text' class='input_text' maxlength='50' name='equiUse6'/></td>";
    str += "<td class='info_name'>来源</td>";
    str += "<td class='info_con'><input type='text' class='input_text' maxlength='25' name='equiSrc6'/></td>";
    str += "</tr><tr>";
    str += "<td class='info_name'>去向</td>";
    str += "<td class='info_con'><input type='text' class='input_text' maxlength='25' name='equiTo6'/></td>";
    str += "</tr></table>";
    str += "</td></tr>";
    tableIdS5 = tableIdS5 + 1;
    $("#info_table_4_1").append(str);
}




//动态添加表6  台帐明细登记 （二）非密封放射性物质
function addTableS6(){
	var str = "<tr><td><table cellpadding='0' cellspacing='0' width='100%' align='center' id='tableS6"+(tableIdS6)+"'>";
  	  str += "<tr><td rowspan='2' class='info_con'><center>";
      str += "<input type='button' value='动态删除表格' id='tableS6"+tableIdS6+"' onclick='deleteTable(id);'/></center></td>";
      str += "<td rowspan='2' class='info_con'><input type='text' class='input_text' maxlength='50' name='nuclide6'/></td>";
      str += "<td rowspan='2' class='info_con'><input type='text' class='input_text' maxlength='25' name='totalActiveNum6'/></td>";
      str += "<td rowspan='2' class='info_con'><input type='text' class='input_text' maxlength='25' name='frequency6'/></td>";
      str += "<td rowspan='2' class='info_con'><input type='text' class='input_text' maxlength='50' name='equiUse6'/></td>";
      str += "<td class='info_name'>来源</td>";
      str += "<td class='info_con'><input type='text' class='input_text' maxlength='25' name='equiSrc6'/></td>";
      str += "</tr><tr>";
      str += "<td class='info_name'>去向</td>";
      str += "<td class='info_con'><input type='text' class='input_text' maxlength='25' name='equiTo6'/></td>";
      str += "</tr></table>";
      str += "</td></tr>";
      tableIdS6 = tableIdS6 + 1;
  	  $("#info_table_5_1").append(str);
}


//动态添加表7  台帐明细登记
function addTableS7(){
	var str = "<tr><td><table cellpadding='0' cellspacing='0' width='100%' align='center' id='tableS7"+(tableIdS7)+"'>";
  	  str += "<tr><td rowspan='2' class='info_con'><center>";
      str += "<input type='button' value='动态删除表格' id='tableS7"+tableIdS7+"' onclick='deleteTable(id);'/></center></td>";
      str += "<td rowspan='2' class='info_con'><input type='text' class='input_text f-input' maxlength='50' name='equiName7'/></td>";
      str += "<td rowspan='2' class='info_con'><input type='text' class='input_text f-input' maxlength='25' name='equiSpecModel7'/></td>";
      str += "<td rowspan='2' class='info_con'><input type='text' class='input_text f-input' maxlength='25' name='type7'/></td>";
      str += "<td rowspan='2' class='info_con'><input type='text' class='input_text f-input' maxlength='50' name='equiUse7'/></td>";
      str += "<td rowspan='2' class='info_con'><input type='text' class='input_text f-input' maxlength='25' name='equiPlace7'/></td>";
      str += "<td class='info_name'>来源</td>";
      str += "<td class='info_con'><input type='text' class='input_text' maxlength='25' name='equiSrc7'/></td>";
      str += "</tr><tr>";
      str += "<td class='info_name'>去向</td>";
      str += "<td class='info_con'><input type='text' class='input_text' maxlength='25' name='equiTo7'/></td>";
      str += "</tr></table>";
      str += "</td></tr>";
      tableIdS7 = tableIdS7 + 1;
  	  $("#info_table_6_1").append(str);
}

//动态添加表8  监测仪器、报警仪器和辐射防护用品登记
function addTableS8(){
	var str = "<tr><td><table cellpadding='0' cellspacing='0' width='100%' align='center' id='tableS8"+(tableIdS8)+"'>";
  	  str += "<tr><td class='info_con' style='width: 84px'><center>";
      str += "<input type='button' value='动态删除表格' id='tableS8"+tableIdS8+"' onclick='deleteTable(id);'/></center></td>";
      str += "<td class='info_con' style='width: 183px'><input type='text' class='input_text f-input'  maxlength='50' name='instrumentName8'/></td>";
      str += "<td class='info_con' style='width: 183px'><input type='text' class='input_text f-input'  maxlength='50' name='instrumentModel8' /></td>";
      str += "<td class='info_con' style='width: 183px'><input type='text' class='input_text f-input'  maxlength='10' name='payDate8' dateVl='yyyy-MM-dd' onclick='WdatePicker({dateFmt:this.dateVl})' readonly='readonly'/></td>";
      str += "<td class='info_con' style='width: 183px'><input type='text' class='input_text f-input'  maxlength='50' name='instrumentStatus8' /></td>";
      str += "<td class='info_con' style='width: 183px'><input type='text' class='input_text f-input'  maxlength='50' name='instrumentNum8' dateVl='num' onBlur='checkValue(this,this.dateVl,3)'/></td>";
      str += "<td class='info_con' style='width: 183px'><input type='text' class='input_text f-input'  maxlength='75' name='bak8' /></td>";
      str += "</tr></table>";
      str += "</td></tr>";
      tableIdS8 = tableIdS8 + 1;
  	  $("#tableS8").append(str);
}

//动态添加表9  辐射安全与环境保护管理机构及专/兼职管理人员表
function addTableS11(){
	var str = "<tr><td><table cellpadding='0' cellspacing='0' width='100%' align='center' id='tableS11"+(tableIdS11)+"'>";
  	  str += "<tr><td class='info_con'><center>";
      str += "<input type='button' value='动态删除表格' id='tableS11"+tableIdS11+"' onclick='deleteTable(id);'/></center></td>";
      str += "<td class='info_con'><input type='text' class='input_text f-input'  maxlength='150' name='personType11' /></td>";
      str += "<td class='info_con'><input type='text' class='input_text f-input'  maxlength='250' name='name11' /></td>";
      str += "<td class='info_con'><input type='text' class='input_text f-input'  maxlength='5' name='sex11' /></td>";
      str += "<td class='info_con'><input type='text' class='input_text f-input'  maxlength='25' name='professional11' /></td>";
      str += "<td class='info_con'><input type='text' class='input_text f-input'  maxlength='5' name='position11' /></td>";
      str += "<td class='info_con'><input type='text' class='input_text f-input'  maxlength='75' name='dept11' /></td>";
      str += "<td class='info_con'><input type='text' class='input_text f-input' maxlength='5' name='partFullTime11' /></td>";
      str += "</tr></table>";
      str += "</td></tr>";
      tableIdS11 = tableIdS11 + 1;
  	  $("#info_table_8_1").append(str);
}

//动态添加表10  辐射工作人员登记表
function addTableS12(){
	var str = "<tr><td><table cellpadding='0' cellspacing='0' width='100%' align='center' id='tableS12"+(tableIdS12)+"'>";
  	  str += "<tr><td class='info_con'><center>";
      str += "<input type='button' value='动态删除表格' id='tableS12"+tableIdS12+"' onclick='deleteTable(id);'/></center></td>";
      str += "<td class='info_con'><input type='text' class='input_text f-input'  maxlength='250' name='name12' /></td>";
      str += "<td class='info_con'><input type='text' class='input_text f-input'  maxlength='12' name='sex12' /></td>";
      str += "<td class='info_con'><input type='text' class='input_text f-input'  maxlength='10' name='brithdy12' dateVl='yyyy-MM-dd' onclick='WdatePicker({dateFmt:this.dateVl})' readonly='readonly'/></td>";
      str += "<td class='info_con'><input type='text' class='input_text f-input'  maxlength='25' name='certType12' value='身份证'/></td>";
      str += "<td class='info_con'><input type='text' class='input_text f-input'  maxlength='25' name='certNum12' /></td>";
      str += "<td class='info_con'><input type='text' class='input_text f-input'  maxlength='25' name='jobs12' /></td>";
      str += "<td class='info_con'><input type='text' class='input_text f-input'  maxlength='75' name='professional12' /></td>";
      str += "<td class='info_con'><input type='text' class='input_text f-input'  maxlength='10' name='trainingDate' dateVl='yyyy-MM-dd' onclick='WdatePicker({dateFmt:this.dateVl})' readonly='readonly'/></td>";
      str += "<td class='info_con'><input type='text' class='input_text f-input'  maxlength='25' name='trainingNo12' /></td>";
      str += "<td class='info_con'><input type='text' class='input_text f-input'  maxlength='75' name='bak12' /></td>";
      str += "</tr></table>";
      str += "</td></tr>";
      tableIdS12 = tableIdS12 + 1;
  	  $("#info_table_9_1").append(str);
}

//动态删除表格
function deleteTable(id){
  var r = confirm("确定要删除吗？");
  if (r == true)
  {
    $("#"+id).remove();
  }
}