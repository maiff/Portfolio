$.delegate('#tishi','li','mouseover',function (ev){
	var e = ev || event;
	var target = e.target || e.srcElement;
	addClass(target,'over');
});
$.delegate('#tishi','li','mouseout',function (ev){
	var e = ev || event;
	var target = e.target || e.srcElement;
	removeClass(target,'over');
});
//对li增加移入移出样式
var text=$('#shuru');
var oUl=$('#tishi');
var tishiArray=['text1','text123','text123456','ttttt','woaini','maiff','yqq','fighting','delegate'];

function judge(){
	var newArray=[];
	var content=text.value;
	if(content=='') oUl.style.display='none';
	else{
	reg = new RegExp("\^" + content);
	for(var i=0;i<tishiArray.length;i++){
		if(reg.test(tishiArray[i])){
			newArray.push(tishiArray[i]);
		}
	}
	pushLi(newArray);
	
	}
}

function pushLi(arr){
	oUl.innerHTML='';
	var len=arr.length;
	if(len==0) oUl.style.display='none';
	else{
	for(var i=0;i<len;i++){
		var li=document.createElement('li');
		li.innerHTML=arr[i];
		oUl.appendChild(li);

		}
		oUl.style.display='block';
	}
}

$.on('#shuru','keyup',function(){
	
	
});
//判断->出现

$.delegate('#tishi','li','click',function (ev){
	var e = ev || event;
	var target = e.target || e.srcElement;
	text.value=target.innerHTML;
	judge();
});

$.click('#shuru',function(ev){
	judge();
	var e=ev||event;
	if (e.stopPropagation) {
			e.stopPropagation();
		} else {
			e.cancelBubble = true;
		}
});

document.onclick=function(){
	oUl.style.display='none';
}


function removeAllClassName(len){
	for (var i=0; i<len.length; i++) {
					removeClass(len[i], 'over');
				}
}
var NUM=-1;
$.on('#shuru','keyup',function (ev){
	var liList;
	if(oUl.style.display=='block') liList=oUl.getElementsByTagName('li');
	var e=ev||event;
	if ( e.keyCode!=40&& e.keyCode!=38&&e.keyCode!=13) {
		judge();
		NUM=-1;
	}
	if(e.keyCode==40){
		NUM++;
		if(NUM>=0&&NUM<liList.length){
		//console.log(NUM)
		removeAllClassName(liList);
		addClass(liList[NUM],'over');
		}else {
		NUM=-1;
		removeAllClassName(liList);
	}
}
	if(e.keyCode==38){
	
		NUM--;
		if(NUM>=0&&NUM<liList.length){
		removeAllClassName(liList);
				//console.log(NUM)
		addClass(liList[NUM],'over');
	}else {
		NUM=-1;
		removeAllClassName(liList);
	}
}
	 if(e.keyCode==13){	
			text.value=liList[NUM].innerHTML;
			NUM=-1;
			oUl.style.display='none';
			//console.log(13)
		}
	if(liList)
	if(NUM>liList.length){
		NUM=-1;
	}
	
});