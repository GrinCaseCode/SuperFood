$(document).ready(function() {


//прилипающие меню
var $menu = $(".header");
$(window).scroll(function(){
  if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
    $menu.removeClass("default").addClass("fixed");
  } else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
    $menu.removeClass("fixed").addClass("default");
  }
  
});

if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
    $menu.removeClass("default").addClass("fixed");
  } else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
    $menu.removeClass("fixed").addClass("default");
  }

	//плавный скролл
	$(".navigat li a").mPageScroll2id();


//кнопка sandwich
$(".sandwich").click(function() {
	if ($(".menu-mobile").is(":hidden")) {
		$(".menu-mobile").slideDown(200);
		$(".menu-overlay").fadeIn(200);
		$(this).addClass("active");
	} else {
		$(".menu-mobile").slideUp(200);
		$(".menu-overlay").fadeOut(200);
		$(this).removeClass("active");
	}
});

$(".menu-overlay").click(function() {
	$(".menu-mobile").slideUp(200);
	$(".menu-overlay").fadeOut(200);
	$(".sandwich").removeClass("active");
});

	//слайдер

	$('.navigation').slick({
		arrows: true,
		dots: false,
		infinite: false,
		touchThreshold: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		variableWidth: true,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
	});

	$('.slider-banners').slick({
		arrows: false,
		dots: false,
		infinite: false,
		touchThreshold: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					dots: true,
				}
			}
		]
	});

	$('.tabs:not(.no-tabs)').slick({
		arrows: true,
		dots: false,
		infinite: false,
		touchThreshold: 1000,
		mobileFirst: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		variableWidth: true,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',

});

{
	if ($(window).width() > 992) {
		$('.tabs:not(.no-tabs)').slick("unslick");
	}
}



	var rev = $('.slider-about');
rev.on('init', function(event, slick, currentSlide) {
  var
    cur = $(slick.$slides[slick.currentSlide]),
    next = cur.next(),
    prev = cur.prev();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  cur.removeClass('slick-snext').removeClass('slick-sprev');
  slick.$prev = prev;
  slick.$next = next;
}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  console.log('beforeChange');
  var
    cur = $(slick.$slides[nextSlide]);
  console.log(slick.$prev, slick.$next);
  slick.$prev.removeClass('slick-sprev');
  slick.$next.removeClass('slick-snext');
  next = cur.next(),
    prev = cur.prev();
  prev.prev();
  prev.next();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  slick.$prev = prev;
  slick.$next = next;
  cur.removeClass('slick-next').removeClass('slick-sprev');
});

rev.slick({
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
  dots: false,
  focusOnSelect: true,
  prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
  nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
  infinite: true,
  centerMode: true,
  slidesPerRow: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: '0',
  swipe: true,
  customPaging: function(slider, i) {
    return '';
  },
  responsive: [
	{
		breakpoint: 992,
		settings: {
			infinite: false,
			variableWidth: true,
			centerMode: false,
			autoplay: false,
		}
	}
]
});

$('.slider-for').slick({
	arrows: false,
	dots: false,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: '.slider-nav',
	touchThreshold: 1000,
	prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
	nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
});

$('.slider-nav').slick({
	arrows: true,
	dots: false,
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.slider-for',
	touchThreshold: 1000,
	vertical: true,
	verticalSwiping: true,
	focusOnSelect: true,
	prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
	nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				vertical: false,
				verticalSwiping: false,
			}
		}
	]
});

$(".sidebar-catalog .item-sidebar__head").click(function() {
	$(this).parent().siblings().removeClass("active");
	$(this).parent().siblings().find(".item-sidebar__content").slideUp(200);
	$(this).parent().toggleClass("active");
	$(this).siblings(".item-sidebar__content").slideToggle(200);
});


$(".next-sidebar").click(function() {
    var current = $(this).parent().parent();
    var next = current.next(".item-sidebar");
	current.slideUp(200);
	if (next.length) {
		next.slideDown(200);
	} else {
		$(".item-sidebar:first-child").slideDown(200);
	}
});

$(".prev-sidebar").click(function() {
    var current = $(this).parent().parent();
    var prev = current.prev(".item-sidebar");
    current.slideUp(200);
    if (prev.length) {
		prev.slideDown(200);
	} else {
		$(".item-sidebar").last().slideDown(200);
	}
});

$(".more-checkbox").click(function(e) {
	e.preventDefault();
	if ($(this).siblings(".list-checkboxes .checkbox:nth-child(n+6)").is(":hidden")) {
		$(this).siblings(".list-checkboxes .checkbox:nth-child(n+6)").slideDown(200);
		$(this).find("span").html("Свернуть"); 
		$(this).addClass("active");
	} else {
		$(this).siblings(".list-checkboxes .checkbox:nth-child(n+6)").slideUp(200);
		$(this).find("span").html("Показать ещё");
		$(this).removeClass("active");
	}
});


	$('.tabs:not(.no-tabs) li a').click(function(event) {
		event.preventDefault();
		$(this).parents().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(this).parents().find(".tab-pane").fadeOut(0);
		var selectTab = $(this).attr("href");
		$(selectTab).fadeIn(200);
		$(this).parents().find('.slider-about').slick('setPosition');
	});

	$(".hint").click(function(e) {
		e.preventDefault();
		if ($(this).find(".hint__content").is(":hidden")) {
			$(this).find(".hint__content").fadeIn(200);
		} else {
			$(this).find(".hint__content").fadeOut(200);
		}
	});



	$(".personal-input__edit").click(function() {
		$(this).siblings("input").prop('disabled', false);
		$(this).siblings("input").focus();
	});


	$(document).mouseup(function (e) {
		var hintContainer = $(".hint__content");
		if (hintContainer.has(e.target).length === 0){
		  hintContainer.fadeOut(200);
		}
	  });


	$(".btn-like").click(function() {
		$(this).toggleClass("active");
	});

	$(".input-phone").mask("+7 (999) 999-99-99");

	jQuery('.quantity').each(function() {
		var spinner = jQuery(this),
		input = spinner.find('input[type="number"]'),
		btnUp = spinner.find('.quantity-up'),
		btnDown = spinner.find('.quantity-down'),
		min = input.attr('min'),
		max = input.attr('max');

		btnUp.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

		btnDown.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
	});


	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox({
		autoFocus: false,
		backFocus: false,
	});


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();


});


/*polifyl*/
  /*! npm.im/object-fit-images 3.2.4 */
  var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

