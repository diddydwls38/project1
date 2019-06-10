$(function(){
  var n=0;
  var pos=0;
  var w=0;
  $(".menu_icon").click(function(e){
    e.preventDefault();
    $("nav").animate({"left":"0%"}, 300);
    $(".dim").fadeIn(300);
  //  $("#header").hide();
  });
  $(".dim").click(function(e){
    e.preventDefault();
    $("nav").animate({"left":"-70%"}, 300);
    $(".dim").fadeOut(300);
  });
  $(".nav_inner > ul > li").click(function(e){
    e.preventDefault();
    if(//상황 클릭한 것이 (슬라이드가 켜있을경우 == display 가 블럭인상태)
      $(this).find("ul").css("display") != 'none'
    ){//명령 슬라이드를 닫게합니다.
      $(this).find("ul").slideUp(300);
    }
    else// 상황 슬라이드가 켜있지 않을경우
    {//명령 슬라이드를 열게합니다.
      $(".nav_inner > ul > li").find("ul").slideUp(300);
      $(this).find("ul").slideDown(300);
      //console.log($(".nav_inner > ul > li").eq(0).find("ul").css("display"));
    }
  });

 setInterval(function(){
   for(var i=0; i<3; i++){
     if(i==3){
       i=0;
     }
   }
  if(n < 3){
    n=n+1;
  }
  else{
    n=0;
  }

  w=$('.main_img li').width();
  pos=(-1)*w*n;
  $(".main_img").css({left:pos});
  }, 3000);

  $(".bottom_menu > ul > li").click(function(){
    //$(this).find("ul").scrollDown(300);
  });

  var video=document.getElementById("m_video1")

   $(".control").click(function(e){
    e.preventDefault();
    $(this).fadeOut(300);
    video.play();
  });
    $("#m_video1").click(function(){
     $(".control").fadeIn(300);
      video.pause();
   });

var t=0;
$(window).scroll(function(){
  t=$(window).scrollTop();
  if(t > 250){
    $(".upper").css({"background-color":"#e6898b"});
  }
  else{
      $(".upper").css({"background-color":"transparent"});
  }
});

// $(".bottom_menu > ul > li").click(function(e){
//   e.preventDefault();
//   if(){
//     $(this).find("ul").slideUp(300);
//   }
//   else{
//     $(".bottom_menu > ul > li").find("ul").slideUp(300);
//     $(this).find("ul").slideDown(300);
//   }
// });

});
