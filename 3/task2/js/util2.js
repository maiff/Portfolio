function isUnque(arr) {
    // your implement
    var b=arr.join(",");
    for(var i=0;i<b.length;i++){
    	if(b.replace(arr[i],"").indexOf(arr[i])>-1){
    		return true;
    		
    	}
    }
    return false;
}


function uniqArray(arr) {
    // your implement
    var newarr=[];
    for(var i=0;i<arr.length;i++){
    	if(newarr.indexOf(arr[i])==-1){
    		newarr.push(arr[i]);
    	}
    }
    return newarr;
}

function each(arr, fn) {
    for (var i = 0; i < arr.length; i++) {
        fn(arr[i], i);
        }
    }
    // 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item) {
    console.log(item)
}
//each(arr, output);  // java, c, php, html

// 使用示例
// var arr = ['java', 'c', 'php', 'html'];
// function output(item, index) {
//     console.log(index + ': ' + item)
// }
// each(arr, output);  // 0:java, 1:c, 2:php, 3:html
// function trim(str) {
//     return str.replace(/^\s+|\s+$/g, '');
// }

// console.log(trim(" hi wo    "));

function getObjectLength(obj) {
	var i=0;
	for(var attr in obj){
		i++;
	}
	return i;
}

var obj = {
    a: 1,
    b: 2,
    c: {
        c1: 3,
        c2: 4
    }
};
//console.log(getObjectLength(obj)); // 3