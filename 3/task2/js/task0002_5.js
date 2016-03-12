function click(ev){
	var e= ev || window.event;
	var target = e.target || e.srcElement;
	target.style.position='absolute';
	var disX = e.clientX - target.offsetLeft;
    var disY = e.clientY - target.offsetTop;
    document.onmousemove=function(e){
    	var ee=e||window.event;
    	var l=ee.clientX-disX;
    	var t=ee.clientY-disY;
    	
    	if(t>100&&t<600){
    	if(l>180&&l<220)l=201;
    	if(l>730&&l<770)l=752;
    	}
    	target.style.left=l+'px';
    	target.style.top=t+'px';
    	addClass(target,'fade');
    	return false;
    }
    document.onmouseup = function () {
            document.onmousemove = null;
            removeClass(target, "fade");
        }
        return false;
}

 $.delegate("#contain1", "div", "mousedown", click);
 $.delegate("#contain2", "div", "mousedown", click);

