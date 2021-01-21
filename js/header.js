$(function(){
    $("#header .gnb li a").mouseenter(function(){
       $(this).css({'transform':'translate(5px,0)', 'transition':'all 0.5s'});
       $("#header .gnb li a").not(this).css({'opacity':'0.5', 'transition':'all 0.5s'});
   }).mouseleave(function(){
       $(this).css({'transform':'translate(0,0)', 'transition':'all 0.5s'});
       $("#header .gnb li a").not(this).css({'opacity':'1', 'transition':'all 0.5s'});
   });
    
   $(".sns li a").eq(0).click(function(e){
       e.preventDefault();
      $("body").toggleClass('bgon').css({'transition':'all 0.3s'});
       $(".sns li").eq(0).toggleClass('on').css({'transition':'all 0.3s'});
   });
    
   $(".sns li a").mouseenter(function(){
       $(".sns li a").not(this).css({'color':'#909090', 'transition':'all 0.5s'});
       $(".sns li a").eq(5).css({'color':'white'});
   }).mouseleave(function(){
       $(".sns li a").not(this).css({'color':'black', 'transition':'all 0.5s'});
       $(".sns li a").eq(5).css({'color':'white'});
   });
    
   $(".sns li a").eq(5).mouseenter(function(){
       $(".sns li a").not(this).css({'color':'black'});
   }).mouseleave(function(){
       $(".sns li a").not(this).css({'color':'black'});
   });
    
    $('.top').hide();
   $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.top').fadeIn(500);
            $('.sns li').not('.top').fadeOut();
            $('.sns hr').fadeOut();
        } else {
            $('.top').fadeOut(500);
            $('.sns li').not('.top').fadeIn();
            $('.sns hr').fadeIn();
        }
    });

    $(".top").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop : 0
        }, 300);
            return false;
    });
    
   /* 햄버거 버튼 메뉴 */
            var num = 0;
            $(".ham").click(function(e){
                e.preventDefault();
                if(num==0){
                    $(".ham>a>img").attr('src', '../images/close.png');
//                    $("#header").css({'position': 'fixed', 'width':'100%', 'height':'100%', 'background':'blue', 'transition':'all 0.5s', 'z-index':'999'});
                    $("#gnbon").fadeIn(500);
                    $('body').css({'opacity':'0.3'});
                    
                    num=1;
                } else {
                    $(".ham>a>img").attr('src', '../images/menu.png');
//                    $("#header").css({'position': 'fixed', 'width':'100%', 'height':'182px', 'background':'none', 'transition':'all 0.5s', 'z-index':'999'});
                    $("#gnbon").fadeOut(100);
                    $('body').css({'opacity':'1'});
                    
                    num=0;
                }
            });
            
//            var number = 0;
//            $("#gnbon>li>a>span>i").click(function(e){
//               e.preventDefault();
//                if(number==0){
//                    $(this).css({'transform':'rotate(180deg)', 'transition':'all 0.3s'});
//                    number = 1;
//                } else {
//                    $(this).css({'transform':'rotate(0deg)', 'transition':'all 0.3s'});
//                    number = 0;
//                }
//            });
    
    
            $(".down2").eq(0).click(function(e){
                e.preventDefault();
               $(".subon").eq(0).addClass(".on").slideToggle('.on'); 
                $(this).toggleClass('down2on');
            });
            $(".down2").eq(1).click(function(e){
                e.preventDefault();
               $(".subon").eq(1).addClass(".on").slideToggle('.on'); 
                $(this).toggleClass('down2on');
            });
});