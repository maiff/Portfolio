function getClass(Oparent,Oclassname){

	var elems=Oparent.getElementsByTagName("*");
	var result=[];
	//var index;
	for(var i=0;i<elems.length;i++){
		var getclassname=elems[i].className.split(' ');
		//console.log(getclassname);
		//index=i;
		for(var j=0;j<getclassname.length;j++){
			if(getclassname[j]==Oclassname){
				result.push(elems[i]);
				//console.log(elems[i]);
			}
		}
		//alert(getclassname);
	}
	//console.log(result[0]);
	return result;
}

function getAttr(Oparent,attr){
	var elems=Oparent.getElementsByTagName("*");
	var result=[];
	for(var i=0;i<elems.length;i++){
		if (elems[i].attributes.length > 0) {
			for(var j=0;j<elems[i].attributes.length;j++){
				if (elems[i].attributes[j].name == attr) {
					result.push(elems[i]);
			}
		}
	}

	}
	return result;
}
function getAttrValue(Oparent,attr,value){
	var elems=Oparent.getElementsByTagName("*");
	var result=[];
	for(var i=0;i<elems.length;i++){
		if (elems[i].attributes.length > 0) {
			for(var j=0;j<elems[i].attributes.length;j++){
				if (elems[i].attributes[j].name == attr) {
					if(elems[i].getAttribute(attr) == value)
					result.push(elems[i]);
			}
		}
	}

	}
	return result;
}
function $(selector){
	if(selector[0]=='#'&&selector.indexOf('.')==-1){
		return document.getElementById(selector.replace(/^#/g,''));
	}
	if(selector[0]=='#'&&selector.indexOf('.')!=-1){
		var now_sele=selector.split(' ');
		//console.log(now_sele[1].replace(/./,''));
		var parent=document.getElementById(now_sele[0].replace(/#/,''));
		return getClass(parent,now_sele[1].replace(/./,''))[0];

	}
	if(selector[0]=='.'){
		return getClass(document,selector.replace(/^./g,''))[0];
	}
	
	if(selector[0]=='['&&selector.indexOf("=")==-1){
		
		console.log(selector.replace(/^\[|\]$/g,''));
		return getAttr(document,selector.replace(/^\[|\]$/g,''))[0];
	}

	if(selector[0]=='['&&selector.indexOf("=")!=-1){
		var getstrings=selector.replace(/^\[|\]$/g,'');
		var attr=getstrings.split('=')[0];
		var value=getstrings.split('=')[1];
		return getAttrValue(document,attr,value)[0];
	}
	else{
		return document.getElementsByTagName(selector)[0];
	}	

	
}

//getClass(document,'x1').style.background='red';
//这是错的，因为这是数组要的是数组中的元素

//$("[data-test=test]").style.background='red';
function addEvent(element, event, listener) {
    if (element.addEventListener) {
        element.addEventListener(event, listener, false);
    }else if (element.attachEvent) {
        element.attachEvent("on" + event, listener);
    }else {
        element["on" + event] = listener;
    }
}
function removeEvent(element, event, listener) {
    if (listener) {
        if (element.removeEventListener) {
            element.removeEventListener(event, listener, false);
        }else if (element.detachEvent) {
            element.detachEvent("on" + event, listener);
        }else {
            element["on" + event] = null;
        }
    }else {
        return; ///?????
    }
}


function addClickEvent(element, listener) {
    // your implement
    if(listener){
    if (element.addEventListener) {
        element.addEventListener('click', listener, false);
    }else if (element.attachEvent) {
        element.attachEvent("on" + 'click', listener);
    }else {
        element["on" + 'click'] = listener;
    }
    }
    else
    	return;
}

// addClickEvent($('#addbtn'),function(){
// 	alert("yes!");
// });


function addEnterEvent(element, listener) {
    // your implement
    if (element.addEventListener) {
        element.addEventListener('keydown', function (ev) {
                    var oEvent = ev || event;
                    if (oEvent.keyCode == 13) {
                        listener();
                    }
                }, false);
    }else if (element.attachEvent) {
        element.attachEvent("onkeyup", function (ev) {
                    var oEvent = ev || event;
                    if (oEvent.keyCode == 13) {
                        listener();
                    }
                });
    }else {
        element.onkeyup = function (ev) {
                    var oEvent = ev || event;
                    if (oEvent.keyCode == 13) {
                        listener();
                    }
                };
    }
  
}

// addEnterEvent(document,function(){
// 	alert('yes');
// });

// $.on=function(element, event, listener){
	// if (element.addEventListener) {
 //        element.addEventListener(event, listener, false);
 //    }else if (element.attachEvent) {
 //        element.attachEvent("on" + event, listener);
 //    }else {
 //        element["on" + event] = listener;
 //    }
// }

// $.un=function(element, event, listener){
// 	 if (listener) {
//         if (element.removeEventListener) {
//             element.removeEventListener(event, listener, false);
//         }else if (element.detachEvent) {
//             element.detachEvent("on" + event, listener);
//         }else {
//             element["on" + event] = null;
//         }
//     }else {
//         return; ///?????
//     }
// }
// $.click=function(element, listener){
// 	if (element.addEventListener) {
//         element.addEventListener('click', listener, false);
//     }else if (element.attachEvent) {
//         element.attachEvent('onclick', listener);
//     }else {
//         element.onclick= listener;
//     }
// }

//  $.enter=function(element, listener){
//  	if(element.addEventListener){
//  		element.addEventListener('keydown',function(ev){
//  			var oEvent=ev||event;
//  			if(oEvent.keyCode==13){
//  				listener();
//  			}
//  		},false);}
//  	else if (element.attachEvent) {
//         element.attachEvent("onkeyup",function(ev) {
//                     var oEvent = ev || event;
//                     if (oEvent.keyCode == 13) {
//                         listener();
//                     }
//                 });
//     }else {
//         element.onkeyup = function(ev) {
//                     var oEvent = ev || event;
//                     if (oEvent.keyCode == 13) {
//                         listener();
//                     }
//                 };


//  	}
//  }

 // $.enter(document,function(){alert(1)})
 function clickListener(event) {
    console.log(event);
}


// each($("#list").getElementsByTagName('li'), function(li) {
//     addClickEvent(li, clickListener);
// });

// document.getElementById("list").addEventListener("click", function(e) {
// 	// e.target is the clicked element!
// 	// If it was a list item
// 	if(e.target && e.target.nodeName == "LI") {
// 		// List item found!  Output the ID!
// 		console.log("List item ", e.target.id, " was clicked!");
// 	}
// });

// function delegateEvent(element, tag, eventName, listener) {
//     // your implement
//     if (element.addEventListener) {
// 	element.addEventListener(eventName, function(ev){
// 		var oEvent=ev||event;
// 		var target=oEvent.target||oEvent.srcElement;
// 		if(target.nodeName.toLowerCase()=='tag'){
// 			listener(oEvent);
// 		}
// 	}, false);
//     }else if (element.attachEvent) {
//         element.attachEvent("on"+eventName,function(ev){
// 		var oEvent=ev||event;
// 		var target=oEvent.target||oEvent.srcElement;
// 		if(target.nodeName.toLowerCase()=='tag'){
// 			listener(oEvent);
// 		}
// 	});
//     }else {
//         element["on" + event] = function(ev){
// 		var oEvent=ev||event;
// 		var target=oEvent.target||oEvent.srcElement;
// 		if(target.nodeName.toLowerCase()=='tag'){
// 			listener(oEvent);
// 		};
//     }

// }
// }




$.on=function(selector, event, listener) {
    // your implement
    var element=$(selector);
    if (element.addEventListener) {
        element.addEventListener(event, listener, false);
    }else if (element.attachEvent) {
        element.attachEvent("on" + event, listener);
    }else {
        element["on" + event] = listener;
    }
}
$.click=function(selector, listener) {
    // your implement
    var element=$(selector);
    if (element.addEventListener) {
        element.addEventListener('click', listener, false);
    }else if (element.attachEvent) {
        element.attachEvent('onclick', listener);
    }else {
        element.onclick= listener;
    }
}

$.un=function(selector, event, listener) {
    // your implement
    var element=$(selector);
    if (element.removeEventListener) {
        element.removeEventListener(event, listener, false);
    }else if (element.detachEvent) {
        element.detachEvent("on" + event, listener);
    }else {
        element["on" + event] = null;
    }
}

$.delegate=function(selector, tag, eventName, listener) {
    // your implement
    var element=$(selector);
    if (element.addEventListener) {
	element.addEventListener(eventName, function(ev){
		var oEvent=ev||event;
		var target=oEvent.target||oEvent.srcElement;
		if(target.nodeName.toLowerCase()==tag){
			listener(oEvent);
		}
	}, false);
    }else if (element.attachEvent) {
        element.attachEvent("on"+eventName,function(ev){
		var oEvent=ev||event;
		var target=oEvent.target||oEvent.srcElement;
		if(target.nodeName.toLowerCase()==tag){
			listener(oEvent);
		}
	});
    }else {
        element["on" + eventName] = function(ev){
		var oEvent=ev||event;
		var target=oEvent.target||oEvent.srcElement;
		if(target.nodeName.toLowerCase()==tag){
			listener(oEvent);
		};
    }

}
}


// $.on('#addbtn','click',function(){
// 	alert("yes");
// });

// $.delegate("#list",'li','click',clickListener);
// $.click("[data-test]", function(){
// 	alert('yes');
// });
// $.delegate('#list', "li", "click", function(){
// 	alert('yes');});


function isIE() {
    var sTr = window.navigator.userAgent;
    return sTr.toLowerCase().indexOf("ie") != -1;
}

function setCookie(cookieName, cookieValue, expiredays) {
    // your implement
    var nowdate=new Date();
    nowdate.setDate(nowdate.getDate()+expiredays);
    document.cookie=cookieName+'='+cookieValue+((expiredays==null)?'':';expires='+nowdate.toGMTString())


}

function getCookie(cookieName){
	if(document.cookie.length>0){
		var cookie_start=document.cookie.indexOf(cookieName+'=');
		if(cookie_start!=-1){
			cookie_start=cookie_start+cookieName.length+1;
			var cookie_end=document.cookie.indexOf(';',cookie_start);
			if(cookie_end==-1)cookie_end=document.cookie.length;
			return document.cookie.substring(cookie_start,cookie_end);
		}
	}
}


// setCookie('test','love',365);


function ajax(url, options) {
    // your implement
    if(!url) return;
    // alert(1);
    var dataType = options.dataType||'text';
    var xmlhttp;
    var convertedData;
    var endata=function(data){
    	
    	if(typeof data==='string')
    		convertedData=data;
    	var res=[];
        for(var prop in data){
            var temp=encodeURIComponent(prop)+"="+encodeURIComponent(data[prop]);
            res.push(temp);
        }
        convertedData=res.join("&");
    }
    if(options.data){
    	endata(options.data);
    }
   
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
if(window.ActiveXObject)
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
 // else return;
  console.log(dataType);
  var type=options.type||'GET';
  if(type.toLowerCase()=='get'){
	xmlhttp.open('GET',convertedData?(url+="?"+dataType):url,true);
	xmlhttp.send();
}
  if(type.toLowerCase()=='post'){
  	xmlhttp.open('post',url,true);
  	xmlhttp.setRequestHeader("content-type",
                    "application/x-www-form-urlencoded");
  	xmlhttp.send(convertedData);
  	
  }
xmlhttp.onreadystatechange=function()
  {
  if(xmlhttp.readyState==4)	//完成
		{
			if(xmlhttp.status==200)	//成功
			{
			if(dataType==='text'||dataType==='TEXT'){
    		options.onsuccess(xmlhttp.responseText);
				}
			if(dataType==='xml'||dataType==='XML'){
				
			options.onsuccess(xmlhttp.responseXML,xmlhttp);
				}
			}
			else
			{
				if(options.onfail)
					options.onfail(xmlhttp);
			}
		}

  }
  

 
}


ajax('1.txt',{
       
        onsuccess: function (responseText) {
           console.log(responseText);
         
        }
    });

function addClass(element, newClassName) {
    // your implement
    var isIn=false;
    if(element.className==""){
        element.className=newClassName;
    }
    else{
        var oldClassName=element.className.split(" ");
        for(var i=0;i<oldClassName.length;i++){
            if(oldClassName[i]==newClassName){
                isIn=true;
            }
          }
          if(isIn==false){
            var oldClassName2 = element.className;
            element.className=oldClassName2 +" "+newClassName;}
        }

}

function removeClass(element, oldClassName) {
    // your implement
    if(element.className==""){
        return false;
    }
    else{
        var nowClassName=element.className.split(" ");
        for(var i=0;i<nowClassName.length;i++){
            if(nowClassName[i]==oldClassName){
                nowClassName[i]="";
            }
          }
          element.className=nowClassName.join(" ");
    }

}


