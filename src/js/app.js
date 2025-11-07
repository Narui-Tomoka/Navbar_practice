// position: stickyを用いた方法
//

$(function () {
  // navを定数に入れる
  const nav = $(".global-nav");
  // offset()メソッドでnavの位置をページ左上からの絶対座標で取得し、その数値が固定化の場所を決めるポイントになる
  // offset().topまたはleftで取得する
  // navの座標とスクロール位置を比較して条件分岐させるための定数
  const navOffsetTop = nav.offset().top;
  // スクロールイベントを監視
  $(window).on("scroll", function () {
    // scrollTop()で現在のスクロール量を取得して定数scrollPosに入れる
    const scrollPos = $(window).scrollTop();
    // 現在のスクロール量がnavの元位置以上になったら（画面上部にnavが来たら）
    if (scrollPos >= navOffsetTop) {
      if (!nav.hasClass("is-scrolled")) {
        // nav(.global-nav)にis-scrolledクラスをつける
        nav.addClass("is-scrolled");
      }
      // スクロール量がnavの元の位置以下になったら
    } else {
      // navからis-scrolledクラスを外す
      nav.removeClass("is-scrolled");
    }
  });
});

// 以下はposition: fixed;を指定してダミー要素を入れて隙間を調整する方法

// スクロール量を取得してクラスのつけ外しをする
// fixedクラスをつけるとナビバーが要素の通常フローから外れるために
// 次の要素が上に詰まってしまう（floatした要素に回り込むような現象）
// その対処法としてプレースホルダーを作成してダミー要素とし、隙間を埋める形にすることでなめらかな動きが実装できる

// $(function () {
//   // navを定数に入れる
//   const nav = $(".global-nav");
//   // offset()メソッドでnavの位置をページ左上からの絶対座標で取得し、その数値が固定化の場所を決めるポイントになる
//   // offset().topまたはleftで取得する
//   // navの座標とスクロール位置を比較して条件分岐させるための定数
//   const navOffsetTop = nav.offset().top;
//   // navの高さを取得
//   // outerHeight()は指定した要素の高さをborderとpaddingも含めて取得するメソッド
//   const navHeight = nav.outerHeight();
//   // 高さ維持用のダミー要素を定義し、position: static;の時は使わないので最初はhide()で隠しておく
//   const placeholder = $("<div>").css("height", navHeight).hide();

//   // 作ったダミー要素をnavのすぐ後に挿入しておく
//   nav.after(placeholder);

//   // ユーザーがスクロールをするたびに以下の処理を実行する
//   $(window).on("scroll", function () {
//     // scrollTop()で現在のスクロール量を取得して定数scrollPosに入れる
//     const scrollPos = $(window).scrollTop();
//     // スクロール量がナビバーの元の位置以上になり
//     if (scrollPos >= navOffsetTop) {
//       // navにfixedクラスがついていなければ
//       if (!nav.hasClass("fixed")) {
//         // nav(.global-nav)にfixedクラスを付与する
//         // （position: fixed;や背景色変更はscss側で制御している）
//         nav.addClass("fixed");
//         // fixedクラスが付与されるとcssに起因して要素の高さが認識されなくなるので
//         // ダミー要素をdisplay: none → block にすることでその高さ分を埋めている
//         placeholder.show();
//       }
//       // 元の位置未満のスクロール量になったら
//     } else {
//       if (nav.hasClass("fixed")) {
//         // fixedクラスを外して元の位置に戻す
//         nav.removeClass("fixed");
//         // navからfixedクラスが外れることで通常フローに戻るので
//         // ダミー要素を非表示にする
//         placeholder.hide();
//       }
//     }
//   });
// });
