//定义全局变量
var num = 0;
var result = 0;
var numshow = "0"; //screen显示的数字
var judge = 0;  //判断输入的状态
var calcul = 0; //判断计算的状态

function typeValue(num){

	//获取当前Screen的数据
	var str = String(document.getElementById("numScreen").value);
	str = (str!="0") ? ((judge==0) ? str : "") : "";
	//判断当前值是否为0，不是0且输入状态为0，则返回该数据，否则返回空
	str = str + String(num); //添加位数
	document.getElementById("numScreen").value = str; //刷新当前数据
	judge = 0; //重置输入状态
	quit = 0;
}

//定义'00'
function doublezero(){
	var str = String(document.getElementById("numScreen").value);
	if(str!= "0" && judge == 0) {
		return str + "00";  //这里和上面有区别
	}
	else{
		str = "";
	} 
	document.getElementById("numScreen").value = str; //刷新当前数据
	judge = 0;
}

//定义小数点
function dot(){
	var str = String(document.getElementById("numScreen").value);
	if(str!= "0" && judge == 0) {
		return str;
	}
	else{
		str = "";
	} 
	//遍历所有位数
	for(var i = 0 ; i <= str.length ; i++){
		//判断是否已有一个点,用substr()函数还是相对更聪明的
		if(str.substr(i,1) == ".") return false;
	}
	str = str + ".";
	document.getElementById("numScreen").value = str; //刷新当前数据
	judge = 0;	
}

//定义delete
function del(){
	var str = String(document.getElementById("numScreen").value);
	str = (str!= "0") ? str : "" ;
	str = str.substr(0,str.length-1);
	str = (str!= "") ? str : "0";
	document.getElementById("numScreen").value = str; //刷新当前数据
}

//定义全部清除
function clearAll(){
	num = 0;
	result = 0;
	numshow = "0"
	document.getElementById("numScreen").value = "0"; //刷新当前数据	
}

//定义基本运算
function calculate(){
	numshow = Number(document.getElementById("numScreen").value);
	if (num != 0){
		//判断计算状态
		switch(calcul){
			case 1 : result = num + numshow;break; //+运算
			case 2 : result = num - numshow;break; //-运算
			case 3 : result = num * numshow;break; //*运算
			case 4 : if( numshow != 0){
						result = num/numshow;
					}
					else{
						document.getElementById("prompt").innerHTML = "被除数不能为0";
						setTimeout(clearPrompt,3000);
						}
						break;						//除运算
			case 5 : result = num % numshow; break; //求余
		}
	}
	else{
		result = numshow;
	}
	numshow = String(result);
	document.getElementById("numScreen").value = numshow;
	num = result;  //储存当前的值
}

//定义运算符
function plus(){
	calculate();
	judge = 1 ; //更新输入状态
	calcul = 1 ; //索引状态
}

function minus(){
	calculate();
	judge = 1 ; //更新输入状态
	calcul = 2 ; //索引状态
}
function times(){
	calculate();
	judge = 1 ; //更新输入状态
	calcul = 3 ; //索引状态
}
function divide(){
	calculate();
	judge = 1 ; //更新输入状态
	calcul = 4 ; //索引状态
}
function persent(){
	calculate();
	judge = 1 ; //更新输入状态
	calcul = 5 ; //索引状态
}
//等于
function equal(){
	calculate();
	judge = 1 ; //更新输入状态
	num = 0 ;
	result = 0;
	numshow = "0"
}

//清空提示
function clearPrompt(){
	document.getElementById("prompt").innerHTML = "";
}