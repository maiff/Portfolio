var oText=$('#hoppy');
var oBtn=$('#check');
var hoppy_text;
function remove_same(arr){
	var res=[];
	for(var i=0;i<arr.length;i++){
		if(res.indexOf(arr[i])==-1){
			res.push(arr[i]);
		}
	}
	return res;
}
function result(str){
	
	var hoppy_result=remove_same(str.split(/[\s,，;、]+/g));
	return hoppy_result.join('-');
}

$.click('#check',function(){
	if(oText.value.split(/[\s,，;、]+/g).length>10||oText.value==''){
	if(!$('#warnP')){
	var warnP=document.createElement('p');
	warnP.id='warnP';
	warnP.style.color='red';
	warnP.appendChild(document.createTextNode('你输入的有误'));
	this.parentNode.insertBefore(warnP,oBtn);//tip
	}
	}
	else{
	var textP=document.createElement('p');
	textP.className='textP';
	textP.appendChild(document.createTextNode(result(oText.value)));
	this.parentNode.appendChild(textP);
	}
});

$.on('#hoppy','keyup',function(){
	if($('#warnP'))
	$('#warnP').parentNode.removeChild($('#warnP'));
});
$.click('#clear',function(){
	if($('.textP')){
		//for(var i=0;i<$('.textP').length;i++)
			//{alert($('.textP').length)}
		$('.textP').parentNode.removeChild($('.textP'));
		
	}
});