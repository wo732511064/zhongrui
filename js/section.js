

function flow(){
	 
// 	$(".enterprise-flow").on("click",function(){
//		$(this).css({"position":"static","width":"100%"}).siblings().css({"position":"static","width":"0"});
//		$(".enterprise-flow-img img:nth-child(1)").css({"opacity":"0"});
//		$(".enterprise-flow-img img:nth-child(2)").addClass("active");
//		$(".enterprise-flow").css("transform","none")
//		$(".enterprise-flow-header").css({"width":"0","margin-left":"0","height":"0"});
//		$(".enterprise-flow:nth-child(1) .enterprise-flow-img").css({"left":"30px","margin-left":"0","top":"40%","width":"50px","height":"50px"}).siblings().css({"top":"40%","margin-top":"-110px"});
//		$(".enterprise-flow:nth-child(2) .enterprise-flow-img").css({"left":"30px","margin-left":"0","top":"50%","width":"50px","height":"50px"}).siblings().css({"top":"50%","margin-top":"-110px"});
//		$(".enterprise-flow:nth-child(3) .enterprise-flow-img").css({"left":"30px","margin-left":"0","top":"60%","width":"50px","height":"50px"}).siblings().css({"top":"60%","margin-top":"-110px"});
//		$(".enterprise-flow:nth-child(4) .enterprise-flow-img").css({"left":"30px","margin-left":"0","top":"70%","width":"50px","height":"50px"}).siblings().css({"top":"70%","margin-top":"-110px"});
//		$(".enterprise-flow:nth-child(5) .enterprise-flow-img").css({"left":"30px","margin-left":"0","top":"80%","width":"50px","height":"50px"}).siblings().css({"top":"80%","margin-top":"-110px"});
//		$(".enterprise-flow-img img").css({"margin-left": "-19.5px","margin-top": "-19.5px"});
//		$(this).children(".enterprise-flow-img").css({"border":"2px solid #fff","left":"28px"}).children(".enterprise-flow-img img:nth-child(3)").css({"opacity":"1"}).prev().css("opacity","0")
//		$(this).children(".enterprise-flow-text").css({"opacity":"1","border":"1px solid #fff","width":"200px","left":"100px"}).parent().siblings().children(".enterprise-flow-text").css({"opacity":"0"})
// 		
// 	
//	$(".enterprise-flow-img img:nth-child(2)").on("click",function(){
//		$(this).css("opacity","0").next().css("opacity","1");
//		$(this).parent().parent().siblings().children(".enterprise-flow-img").css({"border":"0"}).children(".enterprise-flow-img img:nth-child(3)").css("opacity","0").prev().css("opacity","1");
//	})
	var t = 0;
	$(".enterprise-flow").on("click",function(){
		$(".enterprise-flow-header").css({"width":"0","margin-left":"10px"});
		$(this).css({"position":"static","width":"100%"}).siblings().css({"position":"static","width":"0"});
		$(".enterprise-flow-img,.enterprise-flow-text,.enterprise-flow-text1").css({"display":"none"});
		$(".enterprise-qiehuan").css({"display":"block"});
		$(".enterprise-qiehuan-img1").css({"display":"block"});
		$(".enterprise-qiehuan-right").css("display","block");
		t = $(".enterprise-flow").index(this);
		$(".enterprise-qiehuan-img").eq(t).children(".enterprise-qiehuan-img2").css("display","block").prev().css("display","none");
 		
 		$(".enterprise-content-frame").eq(t).css("display","block");
 		return t;
// 		$(".enterprise-flow").eq(0).css("background","url(images/enterprise/enterprise1.png)")
// 		$(".enterprise-flow").eq(1).css("background","url(images/enterprise/enterprise2.png)")
// 		$(".enterprise-flow").eq(2).css("background","url(images/enterprise/enterprise3.png)")
// 		$(".enterprise-flow").eq(3).css("background","url(images/enterprise/enterprise4.png)")
// 		$(".enterprise-flow").eq(4).css("background","url(images/enterprise/enterprise5.png)")
	})
	$(".enterprise-qiehuan-img").on("click",function(){
		$(this).children(".enterprise-qiehuan-img2").css("display","block").prev().css("display","none");
		$(this).siblings(".enterprise-qiehuan-img").children(".enterprise-qiehuan-img2").css("display","none").prev().css("display","block")
		
		t = $(".enterprise-qiehuan-img").index(this);
		$(".enterprise-flow").eq(t).css("width","100%").siblings(".enterprise-flow").css("width","0");
		$(".enterprise-content-frame").eq(t).css("display","block").siblings(".enterprise-content-frame").css("display","none")	
		return t;
	})
	
	$(".enterprise-iscrum").on("click",function(){
		$(this).siblings(".enterprise-qiehuan-img").children(".enterprise-qiehuan-img2").css("display","none").prev().css("display","block")
		
		t = 0;
		$(".enterprise-flow").eq(t).css("width","100%").siblings(".enterprise-flow").css("width","0");
		$(".enterprise-content-frame").eq(t).css("display","block").siblings(".enterprise-content-frame").css("display","none")	
		return t;
	})
	$(".enterprise-qiehuan-img4").on("click",function(){
		$(".enterprise-flow-header").css({"width":"535px","margin-left":"-268px"});
		$(".enterprise-flow").css({"position":"relative","width":"16.666666%"});
		$(".enterprise-flow-img,.enterprise-flow-text,.enterprise-flow-text1").css({"display":"block"});
		$(".enterprise-qiehuan").css({"display":"none"});
		$(".enterprise-qiehuan-img1").css({"display":"none"});
		
		$(".enterprise-qiehuan-img2").css("display","none");
 		$(".enterprise-qiehuan-right").css("display","none");
 		$(".enterprise-content-frame").css("display","none");
	})
	$(".enterprise-qiehuan-next").on("click",function(){
		if(t>=4){
			t=-1;
		}
		t++;
		$(".enterprise-flow").eq(t).css("width","100%").siblings(".enterprise-flow").css("width","0");
		$(".enterprise-content-frame").eq(t).css("display","block").siblings(".enterprise-content-frame").css("display","none");	
		$(".enterprise-qiehuan-img2").eq(t).css("display","block").prev().css("display","none");
		$(".enterprise-qiehuan-img2").eq(t).parent().siblings().children(".enterprise-qiehuan-img2").css("display","none").prev().css("display","block")
	})
	$(".enterprise-qiehuan-prev").on("click",function(){
		if(t<=0){
			t=5;
		}
		t--;
		$(".enterprise-flow").eq(t).css("width","100%").siblings(".enterprise-flow").css("width","0");
		$(".enterprise-content-frame").eq(t).css("display","block").siblings(".enterprise-content-frame").css("display","none");	
		$(".enterprise-qiehuan-img2").eq(t).css("display","block").prev().css("display","none");
		$(".enterprise-qiehuan-img2").eq(t).parent().siblings().children(".enterprise-qiehuan-img2").css("display","none").prev().css("display","block")
	})
	
}

function xuanzhuan(){
			$(".menu li:nth-child(1)").css({"transition-delay":"0.02s","transform":"rotate(105deg)"})
			$(".menu li:nth-child(1) a").css({"transition-delay":"0.04s","transform":"rotate(255deg)"})
			$(".menu li:nth-child(2)").css({"transition-delay":"0.04s","transform":"rotate(165deg)"})
			$(".menu li:nth-child(2) a").css({"transition-delay":"0.08s","transform":"rotate(195deg)"})
			$(".menu li:nth-child(3)").css({"transition-delay":"0.06s","transform":"rotate(225deg)"})
			$(".menu li:nth-child(3) a").css({"transition-delay":"0.12s","transform":"rotate(135deg)"})
			$(".menu li:nth-child(4)").css({"transition-delay":"0.08s","transform":"rotate(285deg)"})
			$(".menu li:nth-child(4) a").css({"transition-delay":"0.16s","transform":"rotate(255deg)"})
			$(".menu li:nth-child(5)").css({"transition-delay":"0.1s","transform":"rotate(345deg)"})
			$(".menu li:nth-child(5) a").css({"transition-delay":"0.2s","transform":"rotate(15deg)"})
			$(".menu li:nth-child(6)").css({"transition-delay":"0.12s","transform":"rotate(405deg)"})
			$(".menu li:nth-child(6) a").css({"transition-delay":"0.24s","transform":"rotate(315deg)"})
}


function demo(){
	$(".demo").height($(window).height());
	
	if (jQuery.isReady) {
		$(".navbar").fadeIn(1000);
		
		setTimeout(xuanzhuan(),1250);
		$(".demo-img1 img").fadeIn(1000);
        setTimeout('$(".demo-img2 img").fadeIn(1000);',250);
        setTimeout('$(".demo-violet").fadeIn(1000);',375);
        setTimeout('$(".demo-img3 img").fadeIn(1000);',500);
        setTimeout('$(".demo-violet1").fadeIn(1000);',625);
        setTimeout('$(".demo-img4 img").fadeIn(1000);',750);
        setTimeout('$(".demo-red").fadeIn(1000);',875);
        setTimeout('$(".demo-img5 img").fadeIn(1000);',1000);
        setTimeout('$(".demo-red").fadeIn(1000);',1125);
        setTimeout('$(".demo-img6 img").fadeIn(1000);',1250);
        setTimeout('$(".demo-red1").fadeIn(1000);',1375);
        setTimeout('$(".demo-img7 img").fadeIn(1000);',1500);
        setTimeout('$(".demo-blue").fadeIn(1000);',1625);
        setTimeout('$(".demo-img8 img").fadeIn(1000);',1750);
        setTimeout('$(".demo-green").fadeIn(1000);',1875);
        setTimeout('$(".demo-img9 img").fadeIn(1000);',2000);
        setTimeout('$(".demo-orange").fadeIn(1000);',2125);
        setTimeout('$(".demo-img10 img").fadeIn(1000);',2250);
        setTimeout('$(".demo-img11 img").fadeIn(1000);',2500);
        setTimeout('$(".demo-img12 img").fadeIn(1000);',2750);
        setTimeout('$(".demo-img13 img").fadeIn(1000);',3000);
        setTimeout('$(".demo-img14 img").fadeIn(1000);',3250);
      }

}

function section(){
	!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});

	

	$(function(){

		var i=0;

		var $btn = $('.section-btn li'),

			$wrap = $('.section-wrap'),

			$arrow = $('.arrow');

		

		/*当前页面赋值*/

		function up(){i++;if(i==$btn.length){i=0};}

		function down(){i--;if(i<0){i=$btn.length-1};}

		

		/*页面滑动*/

		function run(){
			
			$btn.eq(i).addClass('on').siblings().removeClass('on');	
			
			$wrap.attr("class","section-wrap").addClass(function() { return "put-section-"+i; }).find('.section').eq(i).find('.title').addClass('active');
			if($("section").hasClass("put-section-0")){
				$(".navbar").css("display","none");
				$(".menu li").css("transform","rotate(0deg)");
				$(".gray img").css("display","none");
				$(".displaynone").css("display","none");
				$(".navbar").fadeIn(1000);
				setTimeout(xuanzhuan(),1250);
				$(".demo-img1 img").fadeIn(1000);
		        setTimeout('$(".demo-img2 img").fadeIn(1000);',250);
		        setTimeout('$(".demo-violet").fadeIn(1000);',375);
		        setTimeout('$(".demo-img3 img").fadeIn(1000);',500);
		        setTimeout('$(".demo-violet1").fadeIn(1000);',625);
		        setTimeout('$(".demo-img4 img").fadeIn(1000);',750);
		        setTimeout('$(".demo-red").fadeIn(1000);',875);
		        setTimeout('$(".demo-img5 img").fadeIn(1000);',1000);
		        setTimeout('$(".demo-red").fadeIn(1000);',1125);
		        setTimeout('$(".demo-img6 img").fadeIn(1000);',1250);
		        setTimeout('$(".demo-red1").fadeIn(1000);',1375);
		        setTimeout('$(".demo-img7 img").fadeIn(1000);',1500);
		        setTimeout('$(".demo-blue").fadeIn(1000);',1625);
		        setTimeout('$(".demo-img8 img").fadeIn(1000);',1750);
		        setTimeout('$(".demo-green").fadeIn(1000);',1875);
		        setTimeout('$(".demo-img9 img").fadeIn(1000);',2000);
		        setTimeout('$(".demo-orange").fadeIn(1000);',2125);
		        setTimeout('$(".demo-img10 img").fadeIn(1000);',2250);
		        setTimeout('$(".demo-img11 img").fadeIn(1000);',2500);
		        setTimeout('$(".demo-img12 img").fadeIn(1000);',2750);
		        setTimeout('$(".demo-img13 img").fadeIn(1000);',3000);
		        setTimeout('$(".demo-img14 img").fadeIn(1000);',3250);
			}
			
			
		};

		

		/*右侧按钮点击*/

		$btn.each(function(index) {

			$(this).click(function(){

				i=index;

				run();

			})

		});

		

		/*翻页按钮点击*/

		$arrow.one('click',go);

		function go(){

			up();run();	

			setTimeout(function(){$arrow.one('click',go)},1000)

		};

		

		/*响应鼠标*/

		$wrap.one('mousewheel',mouse_);

		function mouse_(event){

			if(event.deltaY<0) {up()}

			else{down()}

			run();

			setTimeout(function(){$wrap.one('mousewheel',mouse_)},1000)

		};

		

		/*响应键盘上下键*/

		$(document).one('keydown',k);

		function k(event){

			var e=event||window.event;

			var key=e.keyCode||e.which||e.charCode;

			switch(key)	{

				case 38: down();run();	

				break;

				case 40: up();run();	

				break;

			};

			setTimeout(function(){$(document).one('keydown',k)},1000);

		}

	});
}
