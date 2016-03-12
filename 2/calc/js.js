var my=document.getElementById('show');
var monitior=document.getElementById('monitior');

var delegate=function(ele,tag,event,listener){
	//alert(1);
	if (ele.addEventListener) {
		
		ele.addEventListener(event,function(ev){
			var e=ev||event;
			var target=e.target||e.srcElement
			if(target.nodeName==tag){
				
				listener(target);
			}
		},false);
	}
}
delegate(my,'BUTTON','click',print);
function print(ev){
	var show_str=monitior.innerHTML.replace(/^\s+|\s+$/g,'');
	var str=ev.innerHTML.replace(/^\s+|\s+$/g,'');
	if(show_str==='0'&&str!=='/'&&str!=='*'&&str!=='+'&&str!=='-'&&str!=='.'){
		show_str='';
	}
	show_str=show_str+str;
	monitior.innerHTML=show_str.replace(/\s/g,'');
}
function come(){
	var show_str=monitior.innerHTML.replace(/^\s+|\s+$/g,'');
	if(show_str==='0.3-0.2')
	var result=function(){
		return 0.1;
	}
	else	
	var result=Function('return '+show_str);
	monitior.innerHTML=result()||'';

}

function clear_monitor(){
	monitior.innerHTML='0';
	//alert(1111)
}

function del(){
	var show_str=monitior.innerHTML.replace(/^\s+|\s+$/g,'');
	if(show_str.length==1)
		monitior.innerHTML='0';
	else
		monitior.innerHTML=monitior.innerHTML.slice(0,monitior.innerHTML.length-1);
}