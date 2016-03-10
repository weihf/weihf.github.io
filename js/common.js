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
	
	//导航
	$("#nav a").click(function() {
		var target = $(this).attr("href");
		var targetScroll = $(target).offset().top - 50;
		$("html,body").animate({
			scrollTop: targetScroll
		}, 1000);
		return false;
	});
	var navHeight = $(".navWrap").offset().top;
	$(window).scroll(function() {
		var scrollHeight = $(this).scrollTop();
		if (scrollHeight > navHeight) {
			$(".navWrap").addClass("fix-top");
		} else {
			$(".navWrap").removeClass("fix-top");
		}
	})

})