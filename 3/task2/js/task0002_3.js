var NUM=0;
var oUl1=$('#task2-3-box');
var oUl2=$('#circle-box');
var left=getStyle(oUl1,'left');//js中注意字符串
var lilist1=oUl1.getElementsByTagName('li');
var lilist2=oUl2.getElementsByTagName('li');
var fangxiang=true;

var timer=null;
var config={
	timeout:3000,
	back:false,

}
tuse();
oUl1.style.width=lilist1.length*lilist1[0].offsetWidth+'px';
console.log(lilist1[0].offsetWidth);
function tab(){
	startMove(oUl1,{left:-(NUM*1000)});
	tuse();
}
function tuse(){
	for(var i=0;i<lilist2.length;i++){
		lilist2[i].className='';
	}
	lilist2[NUM].className='showCircle';

}



for(var i=0;i<lilist2.length;i++){
	lilist2[i].index=i;
	lilist2[i].onclick=function(){
		NUM=this.index;
		tab();
		clearInterval(timer);
		lunbo();
	}

}

// function lunbo(){
	
// 	if(fangxiang){
// 	NUM++;
// 	setTimeout(function() { 
// 		if(NUM>=3)
// 		fangxiang=false;
// 		tab();
		
// 		lunbo();
// 	}, 3000); }
// 	else{
// 		NUM--;
// 		setTimeout(function() { 
// 		if(NUM<=0)
// 			fangxiang=true;
// 			tab();
		
// 			lunbo();
// 	}, 3000); 
// 	}
	
// }

function truerun(){
	fangxiang=true;
	clearInterval(timer);
	timer=setInterval(function(){
			NUM++;
			tab();
			if(NUM==3){
				clearInterval(timer);
				lunbo();
			}
	},config.timeout);
}

function falserun(){
	fangxiang=false;
		clearInterval(timer);
		timer=setInterval(function(){
			NUM--;
			tab();
			if(NUM==0){
				clearInterval(timer);
				lunbo();
			}
		},config.timeout);
}
function lunbo(){
if(config.back){
	if(NUM==0)truerun();
	else if(NUM==3)falserun();
	else
	{
	if(fangxiang)truerun();
	else falserun();
	}
}else{
	if(NUM==0) truerun();
	if(NUM==3){
		clearInterval(timer);
		timer=setInterval(function(){
			oUl1.style.left=1000+'px';
			NUM=0;
			tab();
			if(NUM==0){
				clearInterval(timer);
				lunbo();
			}
		},config.timeout);
	}
	else truerun();
	}
}

function getStyle(obj, attr)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[attr];
	}
	else
	{
		return getComputedStyle(obj, false)[attr];
	}
}

function startMove(obj, json, fn)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		var bStop=true;		//ÕâÒ»´ÎÔË¶¯¾Í½áÊøÁË¡ª¡ªËùÓÐµÄÖµ¶¼µ½´ïÁË
		for(var attr in json)
		{
			//1.È¡µ±Ç°µÄÖµ
			var iCur=0;
			
			if(attr=='opacity')
			{
				iCur=parseInt(parseFloat(getStyle(obj, attr))*100);
			}
			else
			{
				iCur=parseInt(getStyle(obj, attr));
			}
			
			//2.ËãËÙ¶È
			var iSpeed=(json[attr]-iCur)/8;
			iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
			
			//3.¼ì²âÍ£Ö¹
			if(iCur!=json[attr])
			{
				bStop=false;
			}
			
			if(attr=='opacity')
			{
				obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')';
				obj.style.opacity=(iCur+iSpeed)/100;
			}
			else
			{
				obj.style[attr]=iCur+iSpeed+'px';
			}
		}
		
		if(bStop)
		{
			clearInterval(obj.timer);
			
			if(fn)
			{
				fn();
			}
		}
	}, 30)
}

lunbo();