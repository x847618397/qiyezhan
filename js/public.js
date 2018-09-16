window.onload=function(){
	//标题栏按键
	let btn=document.querySelector("top .con .icon img");
	console.log(btn);
	let menu=document.querySelector("top .con .icon .min-list");
	console.log(menu);
	let close=document.querySelector("top .con .icon .min-list img");
	btn.onclick=function(){
		menu.style.height="358px";
		btn.style.display="none";
		close.style.display="block";
	}
	close.onclick=function(){
		menu.style.height="0";
		btn.style.display="block";
		close.style.display="none";
	}
}