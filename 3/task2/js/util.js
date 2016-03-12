// 判断arr是否为一个数组，返回一个bool值
var array=[1,2];

var isArray=function(arr) {
    // your implement
    //return arr instanceof Array;
    return arr.constructor=== Array;//the fastest
    //return toString.call(obj) === "[object Array]";
}



function isFunction(Fn) {
    // your implement
 return(typeof Fn=="function") ? true : false;  
 
}
function cloneObject(src){
	var newsrc;
	if(isArray(src)||(typeof src=="object")){
		newsrc=(isArray(src))?[]:{};
		for(var i in src){
			newsrc[i]=cloneObject(src[i]);
		}
	}
	else{
		newsrc=src;
	}
	return newsrc;
}

var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
// var abObj = srcObj;
// var tarObj = cloneObject(srcObj);

// srcObj.a = 2;
// srcObj.b.b1[0] = "Hello";

// console.log(abObj.a);
// console.log(abObj.b.b1[0]);

// console.log(tarObj.a);      // 1
// console.log(tarObj.b.b1[0]);    // "hello"

///test


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
function isSiblingNode(element, siblingNode) {
    return element.parentNode == siblingNode.parentNode;
}
// 判断siblingNode和dom是否为同一个父元素下的同一级的元素，返回bool值


 function trim(str) {
    return str.replace(/^\s+|\s+$/g, '');
   
}
function isEmail(emailStr){
	var reg=/^[\w_-]+@[\w]+\.[a-z]{2,4}$/;
	return reg.test(emailStr);
}
function isMobilePhone(phone){
	var reg=/^1[\d]{10}$/g;
	return reg.test(phone);
}



   function getPosition(element) {
    // your implement

     var position = {};
        var index  = element;
        position.x = 0;
        position.y = 0;

        while(index != null ){
            position.x = index.offsetLeft+position.x;
            position.y = index.offsetTop+position.y;
            index =   index.offsetParent;
        }
        return position;
}