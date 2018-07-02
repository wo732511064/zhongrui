function Header(){
	$(window).scroll(function(){
		// 滚动条距离顶部的距离 大于 200px时
		if($(window).scrollTop() >= 70){
			$(".entrance-header").css({"background":"white"});
			$(".entrance-header-min>a").css({"background-image":"url(images/hear-LOGO.png)"});
			$(".entrance-header-min a").css({"color":"#000000"});
			$(".entrance-header-text-border").css({"border-bottom":"3px solid #1c6faf"});
			
		}else{
			$(".entrance-header").css("background","none");
			$(".entrance-header-min>a").css({"background-image":"url(images/hear-LOGO1.png)"});
			$(".entrance-header-min a").css({"color":"#ffffff"});
			$(".entrance-header-text-border").css({"border-bottom":"3px solid #ffffff"});
		}
	});
}
Header();