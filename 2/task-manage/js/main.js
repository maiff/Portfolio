/**
 * Created by dell1 on 2016/1/21.
 */
/* 展开和合并分类*/

$.delegate('.left','dt','click',toggle);
$.delegate('.l-class','span','click',toggle);
function toggle(ev){
   var e = ev || window.event;
   var target = e.target || e.srcElement;
   var parent=null;
   if(target.parentNode.tagName=='DT'){
     parent=target.parentNode.parentNode;
   }
   else{
      parent=target.parentNode;
   }
   var child_dd=parent.getElementsByTagName('dd');
   for(var i=0;i<child_dd.length;i++){
      if(child_dd[i].className== 'disappear'){
        removeClass(child_dd[i],'disappear');
      }else {
         child_dd[i].className = '';
         addClass(child_dd[i], 'disappear');
      }
   }

}
//end

/*新建*/
var l_dl;
var name_count=1;
var task_count=1;
//去掉所有的l-chosed样式
function removeAllChosed(){
   var dt=$('.left').getElementsByTagName('dt');
   var dd=$('.left').getElementsByTagName('dd');
   for(var i=0;i<dt.length;i++)
      removeClass(dt[i],'l-chosed');
   for(var j=0;j<dd.length;j++)
      removeClass(dd[j],'l-chosed');
   removeClass($('#class-list'),'l-chosed');
   //$('#class-list').style.background=null;
}
$.click('#class-list',chose_list);
function chose_list(){
   removeAllChosed();
   addClass(this,'l-chosed');
   //this.style.background='#fff';
   l_dl=null;
}
$.delegate('.left','dt','click',chose);

function chose(ev){
   var e = ev || window.event;
   var target = e.target || e.srcElement;
   removeAllChosed();
   addClass(target,'l-chosed');
   l_dl=target.parentNode;
};
$.click('#new-class',function(){
   if(l_dl==null) {
      var name = prompt('请输入分类名称', 'no name'+name_count);

      if (name != null && name != '') {
         name_count++;
         var DL = document.createElement('dl');
         var DT = document.createElement('dt');
         var IMG = document.createElement('img');
         IMG.src = 'img/close.png';
         DT.className = 'l-class';
         DT.innerHTML = name + ' (<span>0</span>)';
         DT.appendChild(IMG);
         DL.appendChild(DT);
         $('.left').appendChild(DL);
      }
   }
   else{
      var l_dd=l_dl.getElementsByTagName('dd');
      for(var i=0;i<l_dd.length;i++)
         removeClass(l_dd[i],'disappear');
      var name = prompt('请输入task名称', 'task'+task_count);

      if (name != null && name != ''){
         task_count++;
         var DD = document.createElement('dd');
         addClass(DD,'l-chosed');
         var IMG = document.createElement('img');
         IMG.src = 'img/close.png';
         DD.innerHTML = name + ' (<span>0</span>)';
         DD.appendChild(IMG);
         removeAllChosed();
         l_dl.appendChild(DD);
         newCenter(name);
         to_do_plus_lists=getClass(main_container,'to-do');
  		}
   }
});

function newCenter(centerName) {
   var oDiv = document.createElement('div');
   oDiv.className = 'center ' + centerName;
   oDiv.innerHTML = "<div class='c-contain'><ul class='c-title'> <li class='intro'>所有</li> <li>未完成</li> <li >已完成</li></ul> </div> <div class='puls to-do'><p>新建任务</p></div> </div>";
   disappearAllCenter();
   main_container.appendChild(oDiv);

}

/*end*/


/*delete icon appear*/
$.delegate('.left','dt','mouseover',appear);
$.delegate('.left','dd','mouseover',appear);
$.delegate('.left','img','mouseover',appear);
$.delegate('.left','dt','mouseout',disappear);
$.delegate('.left','dd','mouseout',disappear);
function appear(ev){
   var e = ev || window.event;
   var target = e.target || e.srcElement;
   if(target.tagName=='IMG'){
      target.style.opacity=1;
   }else{
   var img=target.getElementsByTagName('img');
   img[0].style.opacity=1;
   }
}
function disappear(ev){
   var e = ev || window.event;
   var target = e.target || e.srcElement;
   var img=target.getElementsByTagName('img');
   img[0].style.opacity=0;
}
/*delete*/
$.delegate('.left','img','click',Delete);
function Delete(ev){
   var e = ev || window.event;
   var target = e.target || e.srcElement;
   if(confirm('确认删除？')){
      if(target.parentNode.tagName=='DT'){
         delete_count('dt',target);
         deleteAll(target.parentNode.parentNode);
         target.parentNode.parentNode.remove();
         l_dl=null;

      }
      else{
         delete_count('dd',target);
         deleteAllright(getTaskName(target.parentNode));
         //getClass(main_container,getTaskName(target.parentNode))[0].remove();
         deleteOneCenter(getTaskName(target.parentNode));
         target.parentNode.remove();
         to_do_plus_lists=getClass(main_container,'to-do');

      }
   }
   else return;
}
function getTrueCenter(taskName){
   var centerLists=getClass(main_container,'center');
   var trueCenter;
   for(var i=0;i<centerLists.length;i++){
      var classname=centerLists[i].className.split(' ');
      for(var j=0;j<classname.length;j++){
         if(classname[j]==taskName)
            trueCenter=centerLists[i];
      }
      //找到真正的center
   }
   return trueCenter;
}
function deleteAllright(taskName){

   var allDd=getTrueCenter(taskName).getElementsByTagName('dd');
   for(var k=0;k<allDd.length;k++){
      deleteOneRight(allDd[k].innerHTML);
   }

}
function getTrueRight(taskname){
   var right=getClass(main_container,'right');
   var trueRight;
   for(var i=0;i<right.length;i++){
      var classname=right[i].className.split(' ');
      for(var j=0;j<classname.length;j++){
         if(classname[j]==taskname)
            trueRight=right[i];
      }
      //找到真正的right
   }
   return trueRight;
}
function deleteOneRight(taskname){

   getTrueRight(taskname).remove();
}

function deleteOneCenter(taskName){
   getTrueCenter(taskName).remove();
}
function deleteAll(dl){
   var ddLists=dl.getElementsByTagName('dd');
   for(var i=0;i<ddLists.length;i++){
      var ddLists_c=getTrueCenter(getTaskName(ddLists[i])).getElementsByTagName('dd');
      for(var j=0;j<ddLists_c.length;j++){
         getTrueRight(ddLists_c[j].innerHTML).remove();
      }
      getTrueCenter(getTaskName(ddLists[i])).remove();
   }
}

function delete_count(del_tag,tag){
   if(del_tag=='dt')$('#all_count').innerHTML=$('#all_count').innerHTML-tag.parentNode.getElementsByTagName('span')[0].innerHTML;
   else{
      var dd_num=tag.parentNode.getElementsByTagName('span')[0].innerHTML
      tag.parentNode.parentNode.getElementsByTagName('dt')[0].getElementsByTagName('span')[0].innerHTML-=dd_num;
      $('#all_count').innerHTML=$('#all_count').innerHTML-dd_num;
   }

}
//end


/*task click*/
var main_container=$('.main');
$.delegate('.left','dd','click',task_click);

function task_click(ev){
   removeAllChosed();
   var e = ev || window.event;
   var target = e.target || e.srcElement;
   addClass(target,'l-chosed');
   disappearAllCenter();
   //console.log(getClass(main_container,getTaskName(target)));
   //alert(getTaskName(target));
   removeClass(getClass(main_container,getTaskName(target))[0],'disappear');
   removeAllC_chosed();
   removeAllRightClass();
}

function disappearAllCenter(){
   var centerDiv=getClass(main_container,'center');
   for(var i=0;i<centerDiv.length;i++){
      addClass(centerDiv[i],'disappear');
   }
}

function getTaskName(iTarget){
   var index=iTarget.innerHTML.indexOf('(');
   var TaskName=iTarget.innerHTML.slice(0,index);
   TaskName=trim(TaskName);
   return TaskName;
}
/*end*/

/*新建to-do*/
var to_do_plus_lists=getClass(main_container,'to-do');
function findOneClass(element,tag){
   var classnameLists=element.className.split(' ');
   for(var i=0;i<classnameLists.length;i++)
   {
      if(classnameLists[i]==tag)
      return true;
   }
   return false;

}
//重写事件委托
$.delegate_from_Fn=function(selector, Fn,tag, eventName, listener) {
   // your implement
   var element=$(selector);
   if (element.addEventListener) {
      element.addEventListener(eventName, function(ev){
         var oEvent=ev||event;
         var target=oEvent.target||oEvent.srcElement;
         if(Fn(target,tag)){
            listener(oEvent);
         }
      }, false);
   }else if (element.attachEvent) {
      element.attachEvent("on"+eventName,function(ev){
         var oEvent=ev||event;
         var target=oEvent.target||oEvent.srcElement;
         if(Fn(target,tag)){
            listener(oEvent);
         }
      });
   }else {
      element["on" + eventName] = function(ev){
         var oEvent=ev||event;
         var target=oEvent.target||oEvent.srcElement;
         if(Fn(target,tag)){
            listener(oEvent);
         };
      }
   }
}
function targetFn(Tag,classname){
   if(findOneClass(Tag,classname)||findOneClass(Tag.parentNode,classname))
   return true;
   else return false;

}
//新建任务
$.delegate_from_Fn('.main',targetFn,'to-do','click',function(ev){
   var e = ev || window.event;
   var target = e.target || e.srcElement;
   var now=new Date();
   var year=now.getFullYear();
   var mon=now.getMonth()+1;
   var day=now.getDate();
   var parent;
   var isExist=false;
   var date_dt;
   var now_date=year+'-'+mon+'-'+day;
   if(target.nodeName=='P')parent=target.parentNode.parentNode;
   else parent=target.parentNode;
   var dt=parent.getElementsByTagName('dt');
   for(var dt_count=0;dt_count<dt.length;dt_count++){
      if(dt[dt_count].innerHTML==now_date)
      {
         isExist=true;
         date_dt=dt[dt_count];
      }
   }
   removeAllC_chosed();
   if(isExist)
   {
      date_dt.parentNode.appendChild(new_dd(now_date));
      new_count();
   }
   else{
      parent.appendChild(new_dl(now_date));
      new_count();
   }

})

function new_count(){
   var which_parent_be_chosed=$('.left').getElementsByTagName('dd');
   for(var i=0;i<which_parent_be_chosed.length;i++){
      if(which_parent_be_chosed[i].className=='l-chosed'){
         var dd_num=which_parent_be_chosed[i].getElementsByTagName('span')[0].innerHTML;
         which_parent_be_chosed[i].getElementsByTagName('span')[0].innerHTML=Number(dd_num)+1;
         var dt_num=which_parent_be_chosed[i].parentNode.getElementsByTagName('dt')[0].getElementsByTagName('span')[0].innerHTML;
         which_parent_be_chosed[i].parentNode.getElementsByTagName('dt')[0].getElementsByTagName('span')[0].innerHTML=Number(dt_num)+1;

      }
   }
   var all_count=$('#all_count').innerHTML;
   $('#all_count').innerHTML=Number(all_count)+1;
}

function new_dd(now_date){
   var name=prompt('请输入新建任务名称')
   if(name != null && name != ''){
      var dd=document.createElement('dd');
      dd.innerHTML=name;
      dd.className='c-chosed';
      newRight(name,now_date);
      return dd;
   }
   else {
      alert('你什么都没输哦~')
      removeAllRightClass();
   }
}

function new_dl(now_date){
   var dt=document.createElement('dt');
   dt.className='t-title';
   dt.innerHTML=now_date;
   var dl=document.createElement('dl');
   dl.className='c-ele';
   dl.appendChild(dt);
   dl.appendChild(new_dd(now_date));
   return dl;
}
//end

//是否完成选项卡
$.delegate('.main','li','click',function(ev){
   var e=ev||event;
   var target= e.target|| e.srcElement;
   var oLi=target.parentNode.childNodes;
   for(var i=0;i<oLi.length;i++){
      oLi[i].className='';
   }
   var allDd=getAllDd(target);
   //console.log( allDd);
   if(target.innerHTML=='所有')
      allShown(allDd);
   if(target.innerHTML=='未完成')
      undoShown(allDd);
   if(target.innerHTML=='已完成')
      doShown(allDd);
   target.className='intro';
});

function getAllDd(tag){
   var center=tag.parentNode.parentNode.parentNode;
   return center.getElementsByTagName('dd');
}
function allShown(all){
   for(var i=0;i<all.length;i++){
      all[i].style.display='block';
   }
}

function doShown(all){
   for(var i=0;i<all.length;i++){
      all[i].style.display='none';

      if(isDone(all[i],'c-done'))
      all[i].style.display='block';
   }
}

function undoShown(all){
   for(var i=0;i<all.length;i++){
      all[i].style.display='block';
      if(isDone(all[i],'c-done'))
         all[i].style.display='none';
   }
}

function isDone(dd,Tag){
   var classname=dd.className.split(' ');
   for(var i=0;i<classname.length;i++){

      if(classname[i]==Tag) return true;
   }
   return false;

}

//新建task相关函数
function removeAllC_chosed(){
   var div=getClass(main_container,'center');
   for(var j=0;j<div.length;j++) {
      var dd =div[j].getElementsByTagName('dd');
      for (var i = 0; i < dd.length; i++) {
         removeClass(dd[i], 'c-chosed');
      }
   }
}
function newRight(name,now_date){
   removeAllRightClass();
   var oDiv=document.createElement('div');
   oDiv.className='right '+name;
   oDiv.style.display='block';
   oDiv.innerHTML=" <div class='r-title'> <h3>"+name+"</h3> <div> <img src='img/icon_tick.png' alt='done' class='img1'/> <img src='img/icon_write.png' alt='write' class='img2'/> </div> </div> <div class='r-timer'>任务日期:<time>"+now_date+"</time></div> <div class='r-content'> <p></p> </div>";
   main_container.appendChild(oDiv);
}
function removeAllRightClass(){
   var right_div=getClass(main_container,'right');
   for(var i=0;i<right_div.length;i++){
      right_div[i].style.display='none';
   }
}

//right appear
$.delegate('.main','dd','click',function(ev){
   var e=ev||event;
   var target= e.target|| e.srcElement;
   if(target.parentNode.className=='c-ele'){
      removeAllC_chosed();
      addClass(target,'c-chosed');
      var name=target.innerHTML;
      appearRight(name);

   }
});

function appearRight(name){
   removeAllRightClass();
   getClass(main_container,name)[0].style.display='block';
}



//点击勾变成已完成
$.delegate('.main','img','click',function(ev){
   var e=ev||event;
   var target= e.target|| e.srcElement;
   if(target.className=='img1'){

      addClass(getClass(main_container,'c-chosed')[0],'c-done');

   }
});

//编辑
var h3Ttile;
var content_p;
$.delegate('.main','img','click',function(ev){
   var e=ev||event;
   var target= e.target|| e.srcElement;
   if(target.className=='img2'){
      $('.right-masker').style.display='block';
      $('#title').value=getH3Value(target);
      $('#content').value=getContent(target);
      h3Ttile=getH3Value(target);
      content_p=target.parentNode.parentNode.parentNode.getElementsByTagName('p')[0];
   }
});
function getH3Value(target){
  return target.parentNode.parentNode.getElementsByTagName('h3')[0].innerHTML;
}

function getContent(target){
   return target.parentNode.parentNode.parentNode.getElementsByTagName('p')[0].innerHTML;
}

$.click('#insure',function(ev){
   setTitle();
   content_p.innerHTML=$('#content').value;
   Ini_mask();


})
$.click('#quit',Ini_mask);
function Ini_mask(){
      $('#title').value='';
      $('#content').value='';
      $('.right-masker').style.display='none';
}

function setTitle(){
   getClass(main_container,'c-chosed')[0].innerHTML=$('#title').value;
   getClass(main_container,h3Ttile)[0].getElementsByTagName('h3')[0].innerHTML=$('#title').value;
}


