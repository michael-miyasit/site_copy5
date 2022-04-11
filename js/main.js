'strict'; 
{
  {// スライダー
  
    $(document).ready(function(){
      $('.slider').slick({
        arrows: true,
        slidesToShow:3,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow:'<div class="prev"><i class="fa-solid fa-chevron-left"></i></div>',
        nextArrow:'<div class="next"><i class="fa-solid fa-chevron-right"></i></div>'
      }); 
    });
   
  };
   
  {// スライダー２
    $(document).ready(function(){
      $('.slider2').slick({
        arrows: false,
        slidesToShow:	1,
        slidesToScroll:	1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        // dotsClass: 'my-dots',
      }); 
    });
   
  };
  
  {// ヘッダー
    window.addEventListener("scroll", function () {
      // ヘッダーを変数の中に格納する
      const header = document.getElementById("header");
      // 100px以上スクロールしたらヘッダーに「scroll-nav」クラスをつける
      header.classList.toggle("scroll-nav", window.scrollY > 500);
    });
  };
};