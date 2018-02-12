window.onload=function(){
	var list = document.getElementById("list");
	var leftIn = document.getElementById("leftIn");
	var rightIn = document.getElementById("rightIn");
	var leftOut = document.getElementById("leftOut");
	var rightOut = document.getElementById("rightOut");

	leftIn.onclick = rightIn.onclick = function(){
		queueIn(this.id);
	};
	leftOut.onclick = rightOut.onclick = function(){
		queueOut(this.id);
	};
	deleteLi();
}
function dataCheck(){
	var data = document.getElementById("input").value;
	if(!isNaN(data)){
		return data;
	}
	else{
		alert("请输入数字");
	}
}
// 入栈
function queueIn(id){
	var data = dataCheck();
	if(data){
		var li = document.createElement("li");
		li.innerHTML = data;
		if (id=="leftIn"){
			list.insertBefore(li,list.firstChild);
		}
		else if(id=="rightIn"){
			list.appendChild(li);
		}
	}
}
// 出栈
function queueOut(id){
	if(id=="leftOut"){
		var outLi = list.children[0];
	}
	else if(id=="rightOut"){
		var outLi = list.children[list.children.length-1];
	}
	list.removeChild(outLi);
}
// 找不到错在哪里,没有实现 点击队列中任何一个元素，该元素从队列中删除
function deleteLi() {
	var lis = list.getElementsByTagName('li');
	if(lis.length){
		for (var i = lis.length - 1; i >= 0; i--) {
			lis[i].onclick=function(){
				list.removeChild(lis[i]);
			}
		}
	}
}