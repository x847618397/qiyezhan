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


	//banner图
	var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'horizontal',
	    loop: true,
	    
	    // 如果需要分页器
	    pagination: {
	      el: '.swiper-pagination',
	    },
	    
	    // 如果需要前进后退按钮
	    navigation: {
	      nextEl: '.swiper-button-next',
	      prevEl: '.swiper-button-prev',
	    },
	     autoplay: {
	    delay: 2500,//2.5秒切换一次
	    },
  })

	//style切换图
		let oImg=document.querySelectorAll(".style ul li img");
		console.log(oImg);
		for(let i=0;i<4;i++){
			oImg[i].onmouseenter=function(){
				var arr=[1,2,3,4];
				this.src="img/style-b ("+arr[i]+").jpg";
			}
			oImg[i].onmouseleave=function(){
				var arr=[1,2,3,4];
				this.src="img/style-a ("+arr[i]+").jpg";
			}
		}



	//返回顶部
	window.onscroll=function () {
        let bh = document.body.scrollTop || document.documentElement.scrollTop;
        let back = document.querySelectorAll(".fasten .back")[0];
        let wh=window.innerHeight;
        back.onclick = function () {
            animate(document.body, {scrollTop: 0}, 600);
            animate(document.documentElement, {scrollTop: 0}, 600);
        }
    }


}