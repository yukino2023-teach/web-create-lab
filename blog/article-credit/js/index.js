
// アコーディオン

$('.a').hide();

$('.q').on('click', function() {//タイトル要素をクリックしたら
  var findElm = $(this).next(".a");//直後のアコーディオンを行うエリアを取得し
  $(findElm).slideToggle();//アコーディオンの上下動作
    
  if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
    $(this).removeClass('close');//クラス名を除去し
  }else{//それ以外は
    $(this).addClass('close');//クラス名closeを付与
  }
});

// タブ切り替え

$(function() {
  let tabs = $(".tab"); // tabのクラスを全て取得し、変数tabsに配列で定義
  $(".tab").on("click", function() { // tabをクリックしたらイベント発火
    $(".tab-active").removeClass("tab-active"); // activeクラスを消す
    $(this).addClass("tab-active"); // クリックした箇所にactiveクラスを追加
    const index = tabs.index(this); // クリックした箇所がタブの何番目か判定し、定数indexとして定義
    $(".tab-content-item").removeClass("tab-show").eq(index).addClass("tab-show"); // showクラスを消して、contentクラスのindex番目にshowクラスを追加
  })
})


// classをフックにしたポップアップ

$(document).ready( function(){
  // ページ下部固定ボタン表示非表示
      $(window).on('load resize',function(){
          btnOffset = $('.btn-appear').offset().top;
          winH = $(window).height();
      });
      $(function() {
          var fixedbtn = $('.fixed__btn');
          fixedbtn.hide();
          $(window).scroll(function () {
              if ($(this).scrollTop() > btnOffset - winH) {
                  fixedbtn.fadeIn();
              } else {
                  fixedbtn.fadeOut();
              }
          });
      });
  });


// 一番下までスクロールしたら出てくるポップアップ

$(window).on('scroll', function () {
  var doch = $(document).innerHeight(); //ページ全体の高さ
  var winh = $(window).innerHeight(); //ウィンドウの高さ
  var bottom = doch - winh; //ページ全体の高さ - ウィンドウの高さ = ページの最下部位置
  if (bottom * 0.97 <= $(window).scrollTop()) {
  //一番下までスクロールした時に実行
  setTimeout(function () {
    //時間を遅らせて動かしたいソースコードを記述する
    $('.popup').addClass('show');
  }, 200);//
  }
  $('.popup_close').on('click', () => {
    $('.popup').hide();
});
});