$(function() {
  $('.service-slider').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    focusOnSelect: true,
    dots: true,  // ドットナビゲーションを表示
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});
//スクロールに応じてヘッダーの背景色が変化
$(window).scroll(function () {
  if ($(this).scrollTop() > 800) {
    $(".header").addClass("is-active");
  } else {
    $(".header").removeClass("is-active");
  }
});