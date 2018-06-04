
	


function Header(){
	$(window).scroll(function(){
		// 滚动条距离顶部的距离 大于 200px时
		if($(window).scrollTop() >= 70){
			$(".entrance-header").css({"position":"fixed","top":"0"});
		}else{
			$(".entrance-header").css("position","relative");
		}
	});
}
Header();