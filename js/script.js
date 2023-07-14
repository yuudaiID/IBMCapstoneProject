// JavaScript Document

// smooth scroll
$(function(){
	$('a[href^="#"]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});

// gnav open-close
$(function() {
		$('.gnav_btn').on('click', function() {
			$('.gnav_btnline').toggleClass('active');
			$('.gnav').slideToggle(600);
		});
});

// acordion
$(function(){
	$(".acordion_btn").on("click", function() {
		$(this).next().slideToggle();
		$(this).toggleClass('open');
	});
});

// gnav acordion
$(function(){
	var windowSm = 1119;
	$(".gnav_acordion_btn").on("click", function() {
		var windowWidth = $(window).width();
		if (windowWidth <= windowSm) {
			$(this).next().slideToggle();
		}
	});
});



$(window).on('load resize', function(){
  var winW = $(window).width();
  var devW = 1199;
  if (winW >= devW) {
	$(window).scroll(function () {           /* スクロールされた時 */
		var pos = $('.main').offset();          /* mvを過ぎたmainタグの高さを取得して変数[pos]に格納 */
		if ($(this).scrollTop() > pos.top) {   /* 変数[pos]より、スクロールされていたら */
			$('.pcheader').fadeIn();                /* ヘッダーをふわっと表示 */
		} else {                               /* それ以外の場合 */
			$('.pcheader').fadeOut();               /* ヘッダーをふわっと非表示 */
		}
	});
  }
});

