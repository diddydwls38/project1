$(function(){//코드 선언위치를 제작합니다.
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
	animateOut: 'fadeOut',
    responsive:{
		0:{
            items:1
        },
        2000:{
            items:1
        }
    }
})
 $('.owl-carousel').trigger("refresh.owl.carousel");//초기 로딩시에 새로고침 합니다.
setInterval(function(){
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
	animateOut: 'fadeOut',
    responsive:{
		0:{
            items:1
        },
        2000:{
            items:1
        }
    }
})
}, 5000);
});
