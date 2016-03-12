

var timer=null;
	
	
	var oInpuDay = Date.parse(10+" "+ 7 +"," +2015);

	var s=1000;
	var sMinutes=s*60;
	var sHours=sMinutes*60;
	var sDays=sHours*24;
	timer=setInterval(function(){
			var oD = new Date();
			var oCurDay = oD;
			var oDifferTime =oCurDay-oInpuDay;
			var leftDays = Math.floor(oDifferTime / sDays);
			var toDays = oDifferTime % sDays;
			var toHours = toDays % sHours;
			// console.log(toHours)
			var toMinutes = toHours % sMinutes;
			var leftHours = Math.floor(toDays / sHours);
			var leftMinutes = Math.floor(toHours / sMinutes);
			var leftSeconds = Math.floor(toMinutes / s);
			// console.log(leftSeconds);
			// console.log(1 % 2)
			$("#timeTips").innerHTML = "我们在一起已经有" + leftDays + "天" + leftHours+ "小时" + leftMinutes+ "分钟" + leftSeconds+ "秒";
	},1000);
	
