// 轮播图方法
/*
	获取 必须知道的 变量

	步骤1: 不考虑过渡效果 直接 刷刷刷的 切换
		定时器中 index++
			    判断是否越界
			   修改 轮播图ul的 位置
			   考虑到 索引从1开始
			   css 默认 让ul 往左边窜一个屏幕宽度

	步骤2:	  下方的 索引li标签 修改 外观
		由于我们是使用.current 标示当前的索引值
		清空所有li的 class
		为当前的那个 li 添加current

	步骤3:然切换有动画效果
		使用css3中的transition
		.style.transition ='all .3s';
		在获取的时候 进行添加即可

	步骤4:当我切换到 最后一张时 瞬间 切到 第一张
		关闭过度
		瞬间切换到第一张

	步骤5:对代码 进行重构 添加进来了 过渡结束知识点
		由于 我们在修改 ul的位置时 会使用过度
		当注册了 过渡结束事件之后,每次 过渡完毕 都会 调用该事件
			将 判断 index  是否 越界 以及 修改 索引的 代码 全部 迁移到 过渡结束事件中

			定时器逻辑
				index++;

				修改 ul的 位置 ->开始过渡

			过渡结束事件逻辑
				判断 index是否有效
					进行修正
				修改索引li标签的 显示

	步骤6: 使用touch事件,实现 手指 拨动 ul滑动 效果
		touchstart
			记录开始值
			关闭定时器
			关闭过渡效果
		touchmove
			计算移动值
			修改ul的位置(在原始值的基础上进行修改,没有过渡效果的)
		touchend
			记录移动的距离(?)
			开启定时器(*)




*/

function banner() {

	//1 获取变量
	// 屏幕的宽度
	var width = document.body.offsetWidth;
	// console.log(width);\

	//  获取 轮播图的ul
	var moveUl = document.querySelector('.banner_images');

	// 索引的li标签
	var indexLiArr = document.querySelectorAll('.banner_index li');

	// 定义 index 记录 当前的 索引值
	// 默认 我们的ul 已经 往左边 移动了 一倍的宽度
	var Ul = document.querySelector('.train_banner');
	// (为什么 一位 最左边的图片 是用来做无限轮播的 不希望用户看到) 所以 index =1
	var left = document.querySelector('.train_banner_left');
	var right = document.querySelector('.train_banner_right');
	var index = 1;

	// 抽取的代码 提升代码的可读性,以及 降低维护的难度
	var startTransition = function() {
		moveUl.style.transition = 'all .5s';
	}

	var endTransition = function() {
		moveUl.style.transition = '';
	}

	// 由于 移动的距离 无法确定 所以提取为参数
	var setTransform = function(distance) {
		moveUl.style.transform = 'translateX(' + distance + 'px)';
	}

	// 开启定时器
	var timeId = setInterval(function() {
		// 累加
		index++;

		// 将 过渡开启 管你三七二十一 只要进来 就开启过渡 保证 过渡效果一直存在
		// moveUl.style.transition = 'all .3s';
		startTransition();

		// 修改 ul的位置
		// moveUl.style.transform = 'translateX('+index*width*-1+'px)';
		setTransform(index * width * -1);

	}, 3000);

	function li() {
		for(var i = 0; i < indexLiArr.length; i++) {
			indexLiArr[i].index = i;
			indexLiArr[i].onclick = function() {
				for(var i = 0; i < indexLiArr.length; i++) {
					indexLiArr[i].className = '';
				}
				indexLiArr[this.index].className = 'current';
				clearInterval(timeId);
				endTransition();
				index = this.index + 1;
				setTransform((this.index + 1) * width * -1);
				startTransition()

				timeId = setInterval(function() {
					// 累加

					index++;
					// 将 过渡开启 管你三七二十一 只要进来 就开启过渡 保证 过渡效果一直存在
					// moveUl.style.transition = 'all .5s';
					startTransition();

					// 修改 ul的位置
					// moveUl.style.transform = 'translateX('+index*width*-1+'px)';
					setTransform(index * width * -1);

				}, 3000)
			};

		}
	}
	li();

	//轮播左点击
	left.addEventListener('click', function() {
		clearInterval(timeId);
		startTransition();
		index--;
		if(index < 1) {
			// 跳到倒数第二张
			index = 6;

			// 关闭过渡
			// moveUl.style.transition = '';

			// 瞬间 修改一下 ul 的位置
			// moveUl.style.transform = 'translateX('+index*width*-1+'px)';
			setTransform(index * width * -1);
		} else {
			setTransform(index * width * -1);
		}

		// 修改 索引li标签的 class
		for(var i = 0; i < indexLiArr.length; i++) {
			indexLiArr[i].className = '';
		}

		// 有一个 1的 差值
		indexLiArr[index - 1].className = 'current';

		timeId = setInterval(function() {
			// 累加

			index++;

			// 将 过渡开启 管你三七二十一 只要进来 就开启过渡 保证 过渡效果一直存在
			// moveUl.style.transition = 'all .3s';
			startTransition();

			// 修改 ul的位置
			// moveUl.style.transform = 'translateX('+index*width*-1+'px)';
			setTransform(index * width * -1);

		}, 3000)

	})

	//轮播右点击
	right.addEventListener('click', function() {
		clearInterval(timeId);
		startTransition();
		index++;
		if(index >= 7) {
			// 跳到倒数第二张
			index = 1;

			// 关闭过渡
			// moveUl.style.transition = '';

			// 瞬间 修改一下 ul 的位置
			// moveUl.style.transform = 'translateX('+index*width*-1+'px)';
			setTransform(index * width * -1);
		} else {
			setTransform(index * width * -1);
		}

		// 修改 索引li标签的 class
		for(var i = 0; i < indexLiArr.length; i++) {
			indexLiArr[i].className = '';
		}

		// 有一个 1的 差值
		indexLiArr[index - 1].className = 'current';

		timeId = setInterval(function() {
			// 累加

			index++;

			// 将 过渡开启 管你三七二十一 只要进来 就开启过渡 保证 过渡效果一直存在
			// moveUl.style.transition = 'all .3s';
			startTransition();

			// 修改 ul的位置
			// moveUl.style.transform = 'translateX('+index*width*-1+'px)';
			setTransform(index * width * -1);

		}, 3000)

	})

	// 过渡 结束事件 用来 修正 index的值 并修改索引
	moveUl.addEventListener('webkitTransitionEnd', function() {

		//  如果 index 太大了 
		if(index > 6) {
			index = 1;

			// 关闭过渡
			// moveUl.style.transition = '';
			endTransition();

			// 瞬间 修改一下 ul 的位置
			// moveUl.style.transform = 'translateX('+index*width*-1+'px)';
			setTransform(index * width * -1);
		} else if(index < 1) {
			// 跳到倒数第二张
			index = 6;

			// 关闭过渡
			// moveUl.style.transition = '';
			endTransition();

			// 瞬间 修改一下 ul 的位置
			// moveUl.style.transform = 'translateX('+index*width*-1+'px)';
			setTransform(index * width * -1);
		}

		// 修改 索引li标签的 class
		for(var i = 0; i < indexLiArr.length; i++) {
			indexLiArr[i].className = '';
		}

		// 有一个 1的 差值
		indexLiArr[index - 1].className = 'current';
	})

	window.onresize = function() {
		endTransition();
		clearInterval(timeId);
		width = document.documentElement.clientWidth;
		setTransform(index * width * -1);
		timeId = setInterval(function() {
			// 累加
			index++;

			// 将 过渡开启 管你三七二十一 只要进来 就开启过渡 保证 过渡效果一直存在
			// moveUl.style.transition = 'all .3s';
			startTransition();

			// 修改 ul的位置
			// moveUl.style.transform = 'translateX('+index*width*-1+'px)';
			setTransform(index * width * -1);
		}, 3000)
	}

}

function JiaZai() {
	if($(window).scrollTop() >= $("#xinwen").offset().top - $(window).height() + $("#xinwen").outerHeight(true)) {
		$(".entrance-center-left").animate({
			marginLeft: "0px",
			opacity: "1"
		}, 1000)
		$(".entrance-center-right").animate({
			marginRight: "0px",
			opacity: "1"
		}, 1000)
	}
	if($(window).scrollTop() >= $("#train-title-rili").offset().top - $(window).height() + $("#train-title-rili").outerHeight(true)) {
		if($("#calendar").length > 0) {} else {
			$("#rili").append("<div id='calendar' style='opacity: 0;'></div>");
			Rili()
			var i = 0
			$("#calendar").animate({
				opacity: "1"
			}, 1000)
		}
	}
	if($(window).scrollTop() >= $("#train-title-starcourse-dibu").offset().top - $(window).height() + $("#train-title-starcourse-dibu").outerHeight(true)) {
		if($(".starcourse").length > 0) {} else {
			$("#starcourse-dibu").append("<div class='starcourse clearfix' style='opacity: 0;'><!--明星课程左--><div class='starcourse-left'><div id='a1' class='starcourse-left-frame frame-a1'><img src='images/starcourse/a1.png'><span>IT管理</span></div><div id='a2' class='starcourse-left-frame frame-a2 active'><img src='images/starcourse/a2.png'><span>移动开发</span></div><div id='a3' class='starcourse-left-frame frame-a3'><img src='images/starcourse/a3.png'><span>大数据</span></div><div id='a4' class='starcourse-left-frame frame-a4'><img src='images/starcourse/a4.png'><span>软件测试</span></div><div id='a5' class='starcourse-left-frame frame-a5'><img src='images/starcourse/a5.png'><span>架构测试</span></div><div id='a6' class='starcourse-left-frame frame-a6'><img src='images/starcourse/a6.png'><span>产品规划</span></div></div><!--明星课程右--><div class='starcourse-right'><div class='starcourse-right-frame active' id='b1'><div class='right-frame-header'><span> </span><div id='b2'>移动开发</div></div><div class='right-frame-text' id='b3'>移动开发需求简介：  没错就是简介简介简介简介简介简介简介简介，简介简介简介简介简介简介简介简介简介，简介简介简介简介简介简介，简介简介简介简介简介简介简介简介简介，简介简介简介简介简介简介，简介简介简介简介简介简介简介简介简介，简介简介简介简介简介简介，简介简介简介简介简介简介简介简介简介。</div><div style='width: 700px;height: 380px;margin: 0 auto;transition: all 0.5s;' id='main'></div></div></div></div>");
			starcourse()
			YiDong();
			var i = 0
			$(".starcourse").animate({
				opacity: "1"
			}, 1000)
		}
	}

}

//日历
function Rili() {
	//$('#calendar').eCalendar();
	$('#calendar').eCalendar({
		weekDays: ['Mon', 'Tue', 'Wen', 'Sta', 'Fri', 'Sat', 'Sun'],
		months: ['01', '02', '03', '04', '05', '06',
			'07', '08', '09', '10', '11', '12'
		],
		events: [{
				title: 'Event Title 1',
				description: 'Description 1',
				datetime: new Date(2018, 3, 16, 12),
				href: 'http://www.baidu.com'
			},
			{
				title: 'Event Title 1',
				description: 'Description 1',
				datetime: new Date(2018, 3, 16, 12),
				href: 'http://www.baidu.com'
			},
			{
				title: 'Event Title 2',
				description: 'Description 2',
				datetime: new Date(2018, 3, 17, 12)
			},
			{
				title: 'Event Title 3',
				description: 'Description 3',
				datetime: new Date(2018, 3, 18, 17)
			},
			{
				title: 'Event Title 4',
				description: 'Description 4',
				datetime: new Date(2018, 3, 19, 12)
			},
			{
				title: 'Event Title 3',
				description: 'Description 3',
				datetime: new Date(2018, 3, 20, 17)
			},
			{
				title: 'Event Title 3',
				description: 'Description 3',
				datetime: new Date(2018, 3, 21, 17)
			},
			{
				title: 'Event Title 3',
				description: 'Description 3',
				datetime: new Date(2018, 3, 22, 17)
			},
			{
				title: 'Event Title 3',
				description: 'Description 3',
				datetime: new Date(2018, 3, 23, 17)
			},
			{
				title: 'Event Title 3',
				description: 'Description 3',
				datetime: new Date(2018, 3, 24, 17)
			},
			{
				title: 'Event Title 3',
				description: 'Description 3',
				datetime: new Date(2018, 3, 25, 17)
			},
			{
				title: 'Event Title 3',
				description: 'Description 3',
				datetime: new Date(2018, 3, 26, 17)
			},
			{
				title: 'Event Title 3',
				description: 'Description 3',
				datetime: new Date(2018, 3, 27, 17)
			},
			{
				title: 'Event Title 3',
				description: 'Description 3',
				datetime: new Date(2018, 6, 15, 17)
			},
			{
				title: 'Event Title 3',
				description: 'Description 3',
				datetime: new Date(2018, 6, 27, 17)
			}
		]
	});
};

(function($) {

	var eCalendar = function(options, object) {
		// Initializing global variables
		var adDay = new Date().getDate();
		var adMonth = new Date().getMonth();
		var adYear = new Date().getFullYear();
		var dDay = adDay;
		var dMonth = adMonth;
		var dYear = adYear;
		var instance = object;

		var settings = $.extend({}, $.fn.eCalendar.defaults, options);

		function lpad(value, length, pad) {
			if(typeof pad == 'undefined') {
				pad = '0';
			}
			var p;
			for(var i = 0; i < length; i++) {
				p += pad;
			}
			return(p + value).slice(-length);
		}

		var mouseOver = function() {
			$(this).addClass('c-nav-btn-over');
		};
		var mouseLeave = function() {
			$(this).removeClass('c-nav-btn-over');
		};

		var mouseOverEvent = function() {
			$(".c-event-list").scrollTop(0);
			$(this).addClass('c-event-over');
			var d = $(this).attr('data-event-day');
			$('div.c-event-item[data-event-day="' + d + '"]').addClass('c-event-over1').host;
			$(".c-event-list").scrollTop($('div.c-event-item[data-event-day="' + d + '"]').position().top - $('div.c-event-item[data-event-day="' + d + '"]').height())
		};

		var mouseLeaveEvent = function() {
			$(this).removeClass('c-event-over')
			var d = $(this).attr('data-event-day');
			$('div.c-event-item[data-event-day="' + d + '"]').removeClass('c-event-over1');

		};
		var mouseOverItem = function() {
			$(this).addClass('c-event-over1');
			var d = $(this).attr('data-event-day');
			$('div.c-event[data-event-day="' + d + '"]').addClass('c-event-over');
		};
		var mouseLeaveItem = function() {
			$(this).removeClass('c-event-over1')
			var d = $(this).attr('data-event-day');
			$('div.c-event[data-event-day="' + d + '"]').removeClass('c-event-over');
		};

		var clickitem = function() {
			var d = $(this).attr('data-event-day');
			$('div.c-event-item[data-event-day="' + d + '"]').siblings().removeAttr("style")
			$('div.c-event-item[data-event-day="' + d + '"]').css({
				"font-weight": "700",
				"color": "#fff",
				"background": "-webkit-linear-gradient(left, #01c2e6 , #1160ff)",
				"background": " -o-linear-gradient(right, #01c2e6 , #1160ff)",
				"background": "-moz-linear-gradient(right, #01c2e6 , #1160ff)",
				"background": "linear-gradient(to right, #01c2e6 , #1160ff)"
			}).host;
			$('div.c-event-item[data-event-day="' + d + '"]').siblings().children().removeAttr("style")
			$('div.c-event-item[data-event-day="' + d + '"]').children().css("color", "white")
			$('div.c-event[data-event-day="' + d + '"]').siblings().removeAttr("style")
			$('div.c-event[data-event-day="' + d + '"]').css({
				"box-shadow": " 0 0 8px #cccccc",
				"font-weight": "700",
				"color": "#fff",
				"background": "-webkit-linear-gradient(left, #01c2e6 , #1160ff)",
				"background": " -o-linear-gradient(right, #01c2e6 , #1160ff)",
				"background": "-moz-linear-gradient(right, #01c2e6 , #1160ff)",
				"background": "linear-gradient(to right, #01c2e6 , #1160ff)"
			}).host;

		}

		var nextMonth = function() {
			if(dMonth < 11) {
				dMonth++;
			} else {
				dMonth = 0;
				dYear++;
			}
			print();
			if($(".c-day").is(".c-today")) {
				$(".c-month-top").html(dYear + "-" + settings.months[dMonth]);
				$(".c-month-center").html($(".c-today").text());
				//	            $(".c-month-bottom").html("有课");
			} else {
				$(".c-month-top").html(dYear);
				$(".c-month-center").html(settings.months[dMonth]);
				$(".c-month-bottom").html("");
			}

		};
		var previousMonth = function() {
			if(dMonth > 0) {
				dMonth--;
			} else {
				dMonth = 11;
				dYear--;
			}
			print();
			if($(".c-day").is(".c-today")) {
				$(".c-month-top").html(dYear + "-" + settings.months[dMonth]);
				$(".c-month-center").html($(".c-today").text());
				//	            $(".c-month-bottom").html("有课");
			} else {
				$(".c-month-top").html(dYear);
				$(".c-month-center").html(settings.months[dMonth]);
				$(".c-month-bottom").html("");
			}
		};

		function loadEvents() {
			if(typeof settings.url != 'undefined' && settings.url != '') {
				$.ajax({
					url: settings.url,
					async: false,
					success: function(result) {
						settings.events = result;
					}
				});
			}
		}

		function print() {
			loadEvents();
			var dWeekDayOfMonthStart = new Date(dYear, dMonth, 1).getDay();
			var dLastDayOfMonth = new Date(dYear, dMonth + 1, 0).getDate();
			var dLastDayOfPreviousMonth = new Date(dYear, dMonth + 1, 0).getDate() - dWeekDayOfMonthStart + 1;

			var cBody = $('<div/>').addClass('c-grid');
			var cEvents = $('<div/>').addClass('c-event-grid');
			var cEventsBody = $('<div/>').addClass('c-event-body');
			var cEventsTop = $('<div/>').addClass('c-event-top clearfix');
			cEvents.append($('<div/>').addClass('c-event-title c-pad-top').html(settings.eventTitle));
			cEvents.append(cEventsBody);
			var cNext = $('<div/>').addClass('c-next c-grid-title c-pad-top');
			var cMonth = $('<div/>').addClass('c-month c-grid-title c-pad-top');
			var cPrevious = $('<div/>').addClass('c-previous c-grid-title c-pad-top');
			cPrevious.html(settings.textArrows.previous);

			cNext.html(settings.textArrows.next);

			cPrevious.on('mouseover', mouseOver).on('mouseleave', mouseLeave).on('click', previousMonth);
			cNext.on('mouseover', mouseOver).on('mouseleave', mouseLeave).on('click', nextMonth);

			cEventsTop.append(cPrevious);
			cEventsTop.append(cMonth);
			cEventsTop.append(cNext);
			for(var i = 0; i < settings.weekDays.length; i++) {
				var cWeekDay = $('<div/>').addClass('c-week-day c-pad-top');
				cWeekDay.html(settings.weekDays[i]);
				cBody.append(cWeekDay);
			}
			var day = 1;
			var dayOfNextMonth = 1;
			for(var i = 0; i < 42; i++) {
				var cDay = $('<div/>');
				if(i < dWeekDayOfMonthStart) {
					cDay.addClass('c-day-previous-month c-pad-top');
					//                  cDay.html(dLastDayOfPreviousMonth++);
				} else if(day <= dLastDayOfMonth) {
					cDay.addClass('c-day c-pad-top');
					if(day == dDay && adMonth == dMonth && adYear == dYear) {
						cDay.addClass('c-today');
					}
					for(var j = 0; j < settings.events.length; j++) {
						var d = settings.events[j].datetime;
						if(d.getDate() == day && (d.getMonth() - 1) == dMonth && d.getFullYear() == dYear) {
							cDay.addClass('c-event').attr('data-event-day', d.getDate());
							cDay.on('mouseover', mouseOverEvent).on('mouseleave', mouseLeaveEvent).on('click', clickitem);
						}
					}
					cDay.html(day++);
				} else {
					cDay.addClass('c-day-next-month c-pad-top');
					//                  cDay.html(dayOfNextMonth++);
				}
				cBody.append(cDay);
			}
			var eventList = $('<div/>').addClass('c-event-list');
			for(var i = 0; i < settings.events.length; i++) {
				var d = settings.events[i].datetime;
				if((d.getMonth() - 1) == dMonth && d.getFullYear() == dYear) {
					var date = lpad(d.getMonth(), 2) + '/' + lpad(d.getDate(), 2) + ' ' + lpad(d.getHours(), 2) + ':' + lpad(d.getMinutes(), 2);
					var item = $('<div/>').addClass('c-event-item');
					var a = $('<a/>').addClass('c-event-item-a').attr('href', settings.events[i].href);;
					var title = $('<div/>').addClass('title').html(date + '  ' + settings.events[i].title);
					var description = $('<div/>').addClass('description').html(settings.events[i].description);
					item.attr('data-event-day', d.getDate());
					item.on('mouseover', mouseOverItem).on('mouseleave', mouseLeaveItem).on('click', clickitem);

					item.append(a);
					a.append(title).append(description);
					eventList.append(item);

				}
			}

			$(instance).addClass('calendar');

			cEventsBody.append(eventList);
			$(instance).html(cBody).append(cEvents);
			$(instance).prepend(cEventsTop);
			$(".c-event-item").addClass("clearfix");

			var cMontop = $("<div/>").addClass("c-month-top");
			cMonth.append(cMontop);
			cMontop.html(dYear + "-" + settings.months[dMonth]);
			var cMoncenter = $("<div/>").addClass("c-month-center");
			cMonth.append(cMoncenter);
			cMoncenter.html($(".c-today").text());
			var cMonbottom = $("<div/>").addClass("c-month-bottom");
			cMonth.append(cMonbottom);
			if($(".c-today").is(".c-event")) {
				cMonbottom.html("有课");
			} else {
				cMonbottom.html(" ");
			}

		}

		return print();
	}

	$.fn.eCalendar = function(oInit) {
		return this.each(function() {
			return eCalendar(oInit, $(this));
		});
	};

	// plugin defaults
	$.fn.eCalendar.defaults = {
		weekDays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
		months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
		textArrows: {
			previous: '',
			next: ''
		},
		eventTitle: '',
		url: '',
		events: [{
				title: 'Brasil x Croácia',
				description: 'Abertura da copa do mundo 2014',
				datetime: new Date(2014, 6, 12, 17)
			},
			{
				title: 'Brasil x México',
				description: 'Segundo jogo da seleção brasileira',
				datetime: new Date(2014, 6, 17, 16)
			},
			{
				title: 'Brasil x Camarões',
				description: 'Terceiro jogo da seleção brasileira',
				datetime: new Date(2014, 6, 23, 16)
			}
		]
	};

}(jQuery));

function YiDong() {
	$("#a1").click(function() {
		$(a6).css({
			"top": "0px",
			"left": "0px"
		})
		$(a1).css({
			"top": "0px",
			"left": "180px"
		})
		$(a2).css({
			"top": "180px",
			"left": "180px"
		})
		$(a3).css({
			"top": "360px",
			"left": "180px"
		})
		$(a4).css({
			"top": "360px",
			"left": "0px"
		})
		$(a5).css({
			"top": "180px",
			"left": "0px"
		})
		$(a1).addClass("active")
		$(a1).siblings().removeClass("active")
		$(b2).html("IT管理")
		$(b3).html("IT管理简介：  没错就是简介简介简介简介简介简介简介简介，简介简介简介简介简介简介简介简介简介，简介简介简介简介简介简介，简介简介简介简介简介简介简介简介简介，简介简介简介简介简介简介，简介简介简介简介简介简介简介简介简介，简介简介简介简介简介简介，简介简介简介简介简介简介简介简介简介。")
	})
	$("#a2").click(function() {
		$(a1).css({
			"top": "0px",
			"left": "0px"
		})
		$(a2).css({
			"top": "0px",
			"left": "180px"
		})
		$(a3).css({
			"top": "180px",
			"left": "180px"
		})
		$(a4).css({
			"top": "360px",
			"left": "180px"
		})
		$(a5).css({
			"top": "360px",
			"left": "0px"
		})
		$(a6).css({
			"top": "180px",
			"left": "0px"
		})
		$(a2).addClass("active")
		$(a2).siblings().removeClass("active")
		$(b2).html("移动开发")
		$(b3).html("移动开发简介：  没错就是简介简介简介简介简介简介简介简介，简介简介简介简介简介简介简介简介简介，简介简介简介简介简介简介，简介简介简介简介简介简介简介简介简介，简介简介简介简介简介简介，简介简介简介简介简介简介简介简介简介，简介简介简介简介简介简介，简介简介简介简介简介简介简介简介简介。")
	})
	$("#a3").click(function() {
		$(a2).css({
			"top": "0px",
			"left": "0px"
		})
		$(a3).css({
			"top": "0px",
			"left": "180px"
		})
		$(a4).css({
			"top": "180px",
			"left": "180px"
		})
		$(a5).css({
			"top": "360px",
			"left": "180px"
		})
		$(a6).css({
			"top": "360px",
			"left": "0px"
		})
		$(a1).css({
			"top": "180px",
			"left": "0px"
		})
		$(a3).addClass("active")
		$(a3).siblings().removeClass("active")
		$(b2).html("大数据与云计算")
		$(b3).html("大数据与云计算简介：  没错就是简介简介简介简介简介简介简介简介，简介简介简介简介简介简介简介简介简介，简介简介简介简介简介简介，简介简介简介简介简介简介简介简介简介，简介简介简介简介简介简介，简介简介简介简介简介简介简介简介简介，简介简介简介简介简介简介，简介简介简介简介简介简介简介简介简介。")
	})
	$("#a4").click(function() {
		$(a3).css({
			"top": "0px",
			"left": "0px"
		})
		$(a4).css({
			"top": "0px",
			"left": "180px"
		})
		$(a5).css({
			"top": "180px",
			"left": "180px"
		})
		$(a6).css({
			"top": "360px",
			"left": "180px"
		})
		$(a1).css({
			"top": "360px",
			"left": "0px"
		})
		$(a2).css({
			"top": "180px",
			"left": "0px"
		})
		$(a4).addClass("active")
		$(a4).siblings().removeClass("active")
		$(b2).html("软件测试与质量管理")
		$(b3).html("软件测试与质量管理简介：  没错就是简介简介简介简介简介简介简介简介，简介简介简介简介简介简介简介简介简介，简介简介简介简介简介简介，简介简介简介简介简介简介简介简介简介，简介简介简介简介简介简介，简介简介简介简介简介简介简介简介简介，简介简介简介简介简介简介，简介简介简介简介简介简介简介简介简介。")
	})
	$("#a5").click(function() {
		$(a4).css({
			"top": "0px",
			"left": "0px"
		})
		$(a5).css({
			"top": "0px",
			"left": "180px"
		})
		$(a6).css({
			"top": "180px",
			"left": "180px"
		})
		$(a1).css({
			"top": "360px",
			"left": "180px"
		})
		$(a2).css({
			"top": "360px",
			"left": "0px"
		})
		$(a3).css({
			"top": "180px",
			"left": "0px"
		})
		$(a5).addClass("active")
		$(a5).siblings().removeClass("active")
		$(b2).html("架构设计与开发技术")
		$(b3).html("架构设计与开发技术简介：  没错就是简介简介简介简介简介简介简介简介，简介简介简介简介简介简介简介简介简介，简介简介简介简介简介简介，简介简介简介简介简介简介简介简介简介，简介简介简介简介简介简介，简介简介简介简介简介简介简介简介简介，简介简介简介简介简介简介，简介简介简介简介简介简介简介简介简介。")
	})
	$("#a6").click(function() {
		$(a5).css({
			"top": "0px",
			"left": "0px"
		})
		$(a6).css({
			"top": "0px",
			"left": "180px"
		})
		$(a1).css({
			"top": "180px",
			"left": "180px"
		})
		$(a2).css({
			"top": "360px",
			"left": "180px"
		})
		$(a3).css({
			"top": "360px",
			"left": "0px"
		})
		$(a4).css({
			"top": "180px",
			"left": "0px"
		})
		$(a6).addClass("active")
		$(a6).siblings().removeClass("active")
		$(b2).html("产品规划与软件需求")
		$(b3).html("产品规划与软件需求简介：  没错就是简介简介简介简介简介简介简介简介，简介简介简介简介简介简介简介简介简介，简介简介简介简介简介简介，简介简介简介简介简介简介简介简介简介，简介简介简介简介简介简介，简介简介简介简介简介简介简介简介简介，简介简介简介简介简介简介，简介简介简介简介简介简介简介简介简介。")
	})
}

function starcourse() {

	var pathSymbols = {
		reindeer: 'image://./images/starcourse/icon.png'
	};

	//IT管理
	var myChart = echarts.init(document.getElementById('main'));
	var option = {

		xAxis: {
			data: ['软件研发项目管理最佳实践', '打造高效的软件研发团队', 'Scrum敏捷项目管理实战演练', '从技术走向管理高级实战'],

		},

		series: [{

			data: [35, 51, 32, 40]
		}, {

			label: {
				normal: {
					show: true,
					position: 'insideTop',
					color: 'white',
					fontSize: 14,
					formatter: function(params) {
						if(params.dataIndex == 0) {
							return '35期'
						}
						if(params.dataIndex == 1) {
							return '51期'
						}
						if(params.dataIndex == 2) {
							return '32期'
						}
						if(params.dataIndex == 3) {
							return '40期'
						}
					}
				}
			},
			symbolPosition: 'end',
			symbolSize: 50,
			symbolOffset: [0, '-120%'],
			data: [{
					value: 35,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 40]
				}, {
					value: 51,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 40]
				},
				{
					value: 32,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 40]
				},
				{
					value: 40,
					symbol: pathSymbols.reindeer,
					symbolSize: [50, 40]
				},
			]
		}]
	};

	//移动开发
	var myChart2 = echarts.init(document.getElementById('main'));
	var option2 = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'none',
				label: {
					backgroundColor: '#6a7985'
				}
			},
			formatter: function(params) {
				return params[0].name + '<br/>' +
					params[0].seriesName + ' : ' + params[0].value

			}
		},
		xAxis: {
			data: ['构建高可用跨平台移动应用', 'Web前端框架选型与应用实战', 'HTML5(移动)应用高级实战', '微信APP高级实战', 'Python爬虫与数据分析'],

			axisLine: {
				lineStyle: {
					color: '#0177d4'
				}
			},

			axisLabel: {
				interval: 0,
				color: '#000000',
				fontSize: 14,
				lineHeight: 20,
				formatter: function(params) {
					var newParamsName = "";
					var paramsNameNumber = params.length;
					var provideNumber = 5; //一行显示几个字
					var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
					if(paramsNameNumber > provideNumber) {
						for(var p = 0; p < rowNumber; p++) {
							var tempStr = "";
							var start = p * provideNumber;
							var end = start + provideNumber;
							if(p == rowNumber - 1) {
								tempStr = params.substring(start, paramsNameNumber);
							} else {
								tempStr = params.substring(start, end) + "\n";
							}
							newParamsName += tempStr;
						}

					} else {
						newParamsName = params;
					}
					return(newParamsName.length > 8 ? (newParamsName.slice(0, 8) + "...") : newParamsName);
				},
				rich: {
					a: {}
				}
			}
		},
		yAxis: {
			name: "（期）",
			show: false,
			nameTextStyle: {
				color: '#fff',
				fontSize: 16,
			},
			axisLine: {
				lineStyle: {
					color: '#0177d4'
				}
			},
			axisLabel: {
				color: '#fff',
				fontSize: 16
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#0177d4'
				}
			},
			interval: 500,

		},
		series: [{
			name: '期数',
			type: 'bar',
			barWidth: 50,
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgb(0,176,255)'
					}, {
						offset: 0.8,
						color: 'rgb(112,82,244)'
					}], false)
				},
				emphasis: {
					shadowBlur: 5,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			},
			data: [35, 51, 32, 40, 59]
		}, {
			type: 'pictorialBar',
			barGap: '-100%',
			itemStyle: {
				emphasis: {
					shadowBlur: 5,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			},
			label: {
				normal: {
					show: true,
					position: 'insideTop',
					color: 'white',
					fontSize: 14,
					formatter: function(params) {
						if(params.dataIndex == 0) {
							return '35期'
						}
						if(params.dataIndex == 1) {
							return '51期'
						}
						if(params.dataIndex == 2) {
							return '32期'
						}
						if(params.dataIndex == 3) {
							return '40期'
						}
						if(params.dataIndex == 4) {
							return '59期'
						}
					}
				}
			},
			symbolPosition: 'end',
			symbolSize: 50,
			symbolOffset: [0, '-120%'],
			data: [{
					value: 35,
					symbol: pathSymbols.reindeer,
					symbolSize: [40, 30]
				}, {
					value: 51,
					symbol: pathSymbols.reindeer,
					symbolSize: [40, 30]
				},
				{
					value: 32,
					symbol: pathSymbols.reindeer,
					symbolSize: [40, 30]
				},
				{
					value: 40,
					symbol: pathSymbols.reindeer,
					symbolSize: [40, 30]
				},
				{
					value: 59,
					symbol: pathSymbols.reindeer,
					symbolSize: [40, 30]
				},
			]
		}]
	};

	var myChart3 = echarts.init(document.getElementById('main'));
	var option3 = {

		xAxis: {
			data: ['Oracle/MySQL高级性能优化', 'MySQL数据库高级应用开发', '构建Hadoop大数据平台', 'Spark大数据处理技术分析与实践', '机器深度学习算法与应用', '数据分析与数据建模', '基于R/Python的数据分析与挖掘（二选一）'],

		},
		series: [{
			data: [35, 51, 32, 40, 59, 67, 42]
		}, {

			label: {
				normal: {
					show: true,
					position: 'insideTop',
					color: 'white',
					fontSize: 14,
					formatter: function(params) {
						if(params.dataIndex == 0) {
							return '35期'
						}
						if(params.dataIndex == 1) {
							return '51期'
						}
						if(params.dataIndex == 2) {
							return '32期'
						}
						if(params.dataIndex == 3) {
							return '40期'
						}
						if(params.dataIndex == 4) {
							return '59期'
						}
						if(params.dataIndex == 5) {
							return '67期'
						}
						if(params.dataIndex == 6) {
							return '42期'
						}
					}
				}
			},
			symbolPosition: 'end',
			symbolSize: 50,
			symbolOffset: [0, '-120%'],
			data: [{
					value: 35,
					symbol: pathSymbols.reindeer,
					symbolSize: [40, 30]
				}, {
					value: 51,
					symbol: pathSymbols.reindeer,
					symbolSize: [40, 30]
				},
				{
					value: 32,
					symbol: pathSymbols.reindeer,
					symbolSize: [40, 30]
				},
				{
					value: 40,
					symbol: pathSymbols.reindeer,
					symbolSize: [40, 30]
				},
				{
					value: 59,
					symbol: pathSymbols.reindeer,
					symbolSize: [40, 30]
				},
				{
					value: 67,
					symbol: pathSymbols.reindeer,
					symbolSize: [40, 30]
				},
				{
					value: 42,
					symbol: pathSymbols.reindeer,
					symbolSize: [40, 30]
				},
			]
		}]
	};

	var myChart4 = echarts.init(document.getElementById('main'));
	var option4 = {

		xAxis: {
			data: ['JAVA单元测试方法与实践', '软件研发的质量管理与实战'],
			axisLine: {
				lineStyle: {
					color: '#0177d4'
				}
			},

		},

		series: [{

			data: [35, 51]
		}, {
			type: 'pictorialBar',
			barGap: '-100%',
			label: {
				normal: {
					show: true,
					position: 'insideTop',
					color: 'white',
					fontSize: 14,
					formatter: function(params) {
						if(params.dataIndex == 0) {
							return '35期'
						}
						if(params.dataIndex == 1) {
							return '51期'
						}
					}
				}
			},
			symbolPosition: 'end',
			symbolSize: 50,
			symbolOffset: [0, '-120%'],
			data: [{
				value: 35,
				symbol: pathSymbols.reindeer,
				symbolSize: [40, 30]
			}, {
				value: 51,
				symbol: pathSymbols.reindeer,
				symbolSize: [40, 30]
			}]
		}]
	};

	//架构测试
	var myChart5 = echarts.init(document.getElementById('main'));
	var option5 = {

		xAxis: {
			data: ['软件架构与设计高级实战', '微服务的架构与实践', '大规模分布式系统架构与实战', '软件安全的设计与开发', 'JavaWeb核心开发技术剖析与应用', '构建高性能的JAVA EE应用', '互联网运维与DevOps实战', 'OOAD与UML建模实战'],

		},

		series: [{
			data: [35, 51, 32, 40, 59, 67, 42, 55]
		}, {

			label: {
				normal: {
					show: true,
					position: 'insideTop',
					color: 'white',
					fontSize: 14,
					formatter: function(params) {
						if(params.dataIndex == 0) {
							return '35期'
						}
						if(params.dataIndex == 1) {
							return '51期'
						}
						if(params.dataIndex == 2) {
							return '32期'
						}
						if(params.dataIndex == 3) {
							return '40期'
						}
						if(params.dataIndex == 4) {
							return '59期'
						}
						if(params.dataIndex == 5) {
							return '67期'
						}
						if(params.dataIndex == 6) {
							return '42期'
						}
						if(params.dataIndex == 7) {
							return '55期'
						}
					}
				}
			},
			symbolPosition: 'end',
			symbolSize: 50,
			symbolOffset: [0, '-120%'],
			data: [{
					value: 35,
					symbol: pathSymbols.reindeer,
					symbolSize: [40, 30]
				}, {
					value: 51,
					symbol: pathSymbols.reindeer,
					symbolSize: [40, 30]
				},
				{
					value: 32,
					symbol: pathSymbols.reindeer,
					symbolSize: [40, 30]
				},
				{
					value: 40,
					symbol: pathSymbols.reindeer,
					symbolSize: [40, 30]
				},
				{
					value: 59,
					symbol: pathSymbols.reindeer,
					symbolSize: [40, 30]
				},
				{
					value: 67,
					symbol: pathSymbols.reindeer,
					symbolSize: [40, 30]
				},
				{
					value: 42,
					symbol: pathSymbols.reindeer,
					symbolSize: [40, 30]
				},
				{
					value: 55,
					symbol: pathSymbols.reindeer,
					symbolSize: [40, 30]
				},
			]
		}]
	};

	//产品规划
	var myChart6 = echarts.init(document.getElementById('main'));
	var option6 = {

		xAxis: {
			data: ['用户体验设计实战营', 'Axure快速原型实战', '互联网产品经理实战营', '产品设计与需求表达', '软件需求开发与管理'],

		},

		series: [{

			data: [35, 51, 32, 40, 59]
		}, {

			label: {
				normal: {
					show: true,
					position: 'insideTop',
					color: 'white',
					fontSize: 14,
					formatter: function(params) {
						if(params.dataIndex == 0) {
							return '35期'
						}
						if(params.dataIndex == 1) {
							return '51期'
						}
						if(params.dataIndex == 2) {
							return '32期'
						}
						if(params.dataIndex == 3) {
							return '40期'
						}
						if(params.dataIndex == 4) {
							return '59期'
						}
					}
				}
			},
			symbolPosition: 'end',
			symbolSize: 50,
			symbolOffset: [0, '-120%'],
			data: [{
					value: 35,
					symbol: pathSymbols.reindeer,
					symbolSize: [40, 30]
				}, {
					value: 51,
					symbol: pathSymbols.reindeer,
					symbolSize: [40, 30]
				},
				{
					value: 32,
					symbol: pathSymbols.reindeer,
					symbolSize: [40, 30]
				},
				{
					value: 40,
					symbol: pathSymbols.reindeer,
					symbolSize: [40, 30]
				},
				{
					value: 59,
					symbol: pathSymbols.reindeer,
					symbolSize: [40, 30]
				},
			]
		}]
	};
	myChart.setOption(option2);
	$(".starcourse-left-frame").each(function(i) {
		$(".starcourse-left-frame:eq(" + i + ")").click(function() {

			switch(i) {
				case 0:
					myChart.setOption(option);

					break;
				case 1:
					myChart2.setOption(option2);
					break;
				case 2:
					myChart3.setOption(option3);

					break;
				case 3:
					myChart4.setOption(option4);

					break;
				case 4:
					myChart5.setOption(option5);

					break;
				case 5:
					myChart6.setOption(option6);

					break;
			}
		})
	})
}