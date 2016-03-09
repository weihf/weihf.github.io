$(function() {
	//首先将#back-to-top隐藏
	$("#backTop").hide();
	//当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
	$(function() {
		$(window).scroll(function() {
			if ($(window).scrollTop() > 100) {
				$("#backTop").fadeIn(1500);
			} else {
				$("#backTop").fadeOut(1000);
			}
		});
		//当点击跳转链接后，回到页面顶部位置
		$("#backTop").click(function() {
			$('body,html').animate({
				scrollTop: 0
			}, 1000);
			return false;
		});
	});
	var navHeight = $(".navWrap").offset().top;
	$(window).scroll(function() {
		var scrollHeight = $(this).scrollTop();
		if (scrollHeight > navHeight) {
			$(".navWrap").addClass("fix-top");
			$(".main").css("padding-top", $(".navWrap").outerHeight() + 50);
		} else {
			$(".navWrap").removeClass("fix-top");
			$(".main").css("padding-top", 0);
		}
	})
	$(".nav a").click(function() {
		$(this).addClass("select").siblings().removeClass("select");
		var section = $(this).attr("href");
		$(section).addClass("topHeight");
	})
	$(window).scroll(function() {
		$(".section").removeClass("topHeight");
	})

	//导航

	$("#nav a").click(function() {
		var target = $(this).attr("href");
		var targetScroll = $(target).offset().top - 50;
		$("html,body").animate({
			scrollTop: targetScroll
		}, 300);
		return false;
	});

})