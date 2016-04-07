document.getElementById('main-contain').onclick=function(ev){
	var e=ev||event;
	var target=e.target||e.srcElement;
	if(target.nodeName=='H3'){
		var i,len;
		var dlList=target.parentNode.getElementsByTagName('dl');
		len=dlList.length;
		for(i=0;i<len;i++){
			if(getStyle(dlList[i], 'display')=='none')
				dlList[i].style.display='block';
			else 
				dlList[i].style.display='none';
		}
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

function init(arr,obj){
	var i,arr_len;
	arr_len=arr.length;
	for(i=0;i<arr_len;i++){
		var li=document.createElement('li');
		var h3=document.createElement('h3');
		h3.innerHTML=arr[i];
		li.appendChild(h3);
		if(obj){
				var obj_choose=obj[i+1],j,class_len=obj_choose.length;
				var dd=document.createElement('dd');
				for(j=0;j<class_len;j++){
					if(obj_choose[j]){
						var dl=document.createElement('dl');
						var a=document.createElement('a');
						a.href=obj_choose[j].url;
						a.target='_blank';
						a.innerHTML=obj_choose[j].content;
						dl.appendChild(a);
						dd.appendChild(dl);	
					}
			}
		li.appendChild(dd);
		document.getElementById('class-lists').appendChild(li);
		}
	}
}
