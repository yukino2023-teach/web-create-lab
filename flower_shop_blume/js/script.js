//AOS読み込み
AOS.init();


// スライダー
$(function () {
  function initializeSlick() {
    if (window.matchMedia("(max-width: 400px)").matches) {
      // 400px以下の設定
      $(".slider").slick({
        fade: true,
        speed: 1500,
        autoplaySpeed: 3000,
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      });
    } else if (window.matchMedia("(max-width: 500px)").matches) {
      // 767px以下の設定 (400px以下には適用されない)
      $(".slider").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        infinite: true
      });
    }else if (window.matchMedia("(max-width: 767px)").matches) {
      // 767px以下の設定 (400px以下には適用されない)
      $(".slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        infinite: true
      });
    }
  }

  // 初期化
  initializeSlick();

  // ウィンドウサイズが変更されたときにもスライダーを更新する
  $(window).resize(function () {
    if ($(".slider").hasClass('slick-initialized')) {
      $(".slider").slick('unslick');
    }
    initializeSlick();
  });
});
