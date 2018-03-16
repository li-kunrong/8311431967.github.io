$(function() {
	//加载图片
	function imagedownload() {
		var imgNum = $('img').length;
		$('img').load(function() {
			if (--imgNum) {
				$('html').css({
					'overflow-y': 'hidden'
				});
			} else {
				$('.onload').css({
					'display': 'none'
				});
				$('html').css({
					'overflow-y': 'scroll'
				});
				
			}
		});
	}
	//音乐播放
	function musicplay() {
		var onoff = false;
		$('#bgmcontent').click(function() {
			if (onoff) {
				$(this).css({
					'background-image': 'url(img/musicon.gif)'
				});
				document.getElementById("bgm").play();
			} else {
				$(this).css({
					'background-image': 'url(img/musicoff.gif)'
				});
				document.getElementById("bgm").pause();
			}
			onoff = !onoff;
		})
	}
	function musicauto(){
		document.getElementById("bgm").play();
	}
	//菜单
	function menuscroll() {
		$(window).scroll(function() {
			var y = $(window).scrollTop();
			if (y > 70) {
				$('.navbar').addClass('fixnav');
				$('#headimg').css({
					"margin-top": "75px"
				});
				$('#menunav li a').css({
					"color": "white"
				});
				$('.navbar-default .navbar-brand').css({
					"transform": "scale(1.2,1.2)"
				});
			}
			if (y < 70) {
				$('.navbar').removeClass('fixnav');
				$('#headimg').css({
					"margin-top": "0"
				});
				$('#menunav li a').css({
					"color": "black"
				});
				$('.navbar-default .navbar-brand').css({
					"transform": "scale(1,1)"
				});
			}
		});
	}
	//图片经过
	function imagehover() {
		$('figure').hover(function() {
			$(this).children('.imgtxt').css('display', 'block');
			$(this).children('p').stop().animate({
				'opacity': '1',
				'top': '45%'

			}, 200);
		}, function() {
			$(this).children('.imgtxt').css('display', 'none');
			$(this).children('p').stop().animate({
				'top': '20%',
				'opacity': '0'
			}, 200);
		});
	}
	//图片点击
	function imageclick() {
		$(document).mousedown(function() {
			var a = $('.photocontainer').css("display");
			if (a == 'block') {
				var FUNC = [
					function() {
						$('.photocontainer img').stop().animate({
							'height': '70%'
						}, next);
					},
					function() {
						$('.photocontainer').css({
							'display': 'none'
						})
					}
				];
				var next = function() {
					$(document).dequeue("page1");
				}
				$(document).queue("page1", FUNC);
				next();

			} else {

			}
		})
		$('figure').not('.icon').click(function(e) {
			if (e.which == 2 || e.which == 3) {
				return false;
			} else {
				$(".photocontainer img").remove();
				$('.photocontainer').css({
					'display': 'block'
				});

				var a = $(this).children('img').attr("src");
				var b = "<img src='" + a + "'>";
				$(".photocontainer").append(b);
				$('.photocontainer img').stop().animate({
					'height': '100%'
				});
			}
		})
	}

	imagedownload();
	musicplay();
	musicauto();
	menuscroll();
	imagehover();
	imageclick();
})