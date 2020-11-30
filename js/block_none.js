/*
* 功能：页面点击导航栏，内容切换，可发现页面所有此模块
* 基于：class: class="block_none",
*       id: 内容id=导航id+"_view"
* active: 导航字体样式切换，加入class
* 以ul li标签为基础完成，对li标签进行操作。
*
* */

/*获取id及获取子元素li,添加点击事件*/
function getIdChildren(ul_id,ul_view_id){
  var ul=document.getElementById(ul_id);
  var ul_view=document.getElementById(ul_view_id);
  var li_tit=ul.children;
  var li_con=ul_view.children;
  for(let j=0; j<li_tit.length; j++){
    console.log(li_tit[j].innerHTML);
    li_tit[j].addEventListener("click",function(){
      console.log(li_tit[j].parentElement.id);
      index=j;
      for(let k=0; k<li_con.length; k++){
        if(li_con[k].style.display=="block"){
          li_tit[k].classList.remove("active");
          li_tit[j].classList.add("active");
          li_con[k].style.display="none";
          li_con[j].style.display="block";
          break;
        }
      }
    });
  }
}

//获取className=block_none的所有标签
var ul_tag=document.getElementsByClassName("block_none");
//对标签进行循环，获取其id
for(let i=0; i<ul_tag.length; i++){
  var ul_id=ul_tag[i].id;
  var ul_view_id=ul_id+"_view";
  getIdChildren(ul_id,ul_view_id);
}