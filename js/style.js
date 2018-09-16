window.onload=function(){
	//选项卡函数
	//声明
	let father=document.querySelectorAll(".title .container ul li");
	let sign=document.querySelectorAll(".title .container ul li img");
	let son=document.querySelectorAll(".content dl");
	// console.log(son);
	//函数
	function house(lis,inn){
		for(let i=0;i<lis.length;i++){
			lis[i].onmouseenter=function(){
				for(let j=0;j<inn.length;j++){
					inn[j].style.display="none";
					lis[j].classList.remove("active");
					sign[j].style.display="none";
				}
				inn[i].style.display="block";
				lis[i].classList.add("active");
				sign[i].style.display="block";
			}
		}
	}
	house(father,son);//调用选项卡函数
}