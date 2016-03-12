$.click('#insure',calculate);
var str_contain=$('#input');
var timer=null;
function calculate(){
	clearInterval(timer);
	var str=str_contain.value;
	var arr=str.split('-');
	
	var oInpuDay = Date.parse(arr[1] + " " + arr[2] + "," + arr[0]);

	var s=1000;
	var sMinutes=s*60;
	var sHours=sMinutes*60;
	var sDays=sHours*24;
	timer=setInterval(function(){
			var oD = new Date();
			var oCurDay = oD.getTime();
			var oDifferTime =  oCurDay-oInpuDay;
			var leftDays = Math.floor(oDifferTime / sDays);
			var toDays = oDifferTime % sDays;
			var toHours = toDays % sHours;
			// console.log(toHours)
			var toMinutes = toHours % sMinutes;
			var leftHours = Math.floor(toDays / sHours);
			var leftMinutes = Math.floor(toHours / sMinutes);
			var leftSeconds = Math.ceil(toMinutes / s);
			// console.log(leftSeconds);
			// console.log(1 % 2)
			$("#timeTips").innerHTML = "距离" + arr[0] + "年" +arr[1] + "月" + arr[2] + "日 还有" + leftDays + "天" + leftHours+ "小时" + leftMinutes+ "分钟" + leftSeconds+ "秒";
			if (oDifferTime == 0) {
				clearInterval(timer);
			}
	},1000);
	
}