// スクロール量を取得してクラスのつけ外しをする

$(function () {
  // navを定数に入れる
  const nav = $(".global-nav");
  // offset()メソッドでnavの位置をページ左上からの絶対座標で取得し、その数値が固定化の場所を決めるポイントになる
  // offset().topまたはleftで取得する
  // navの座標とスクロール位置を比較して条件分岐させるための定数
  const navOffsetTop = nav.offset().top;

  // ユーザーがスクロールをするたびに以下の処理を実行する
  $(window).on("scroll", function () {
    // scrollTop()で現在のスクロール量を取得して定数scrollPosに入れる
    const scrollPos = $(window).scrollTop();
    // スクロール量がナビバーの元の位置以上になったら
    if (scrollPos >= navOffsetTop) {
      // nav(.global-nav)にfixedクラスを付与する
      // （position: fixed;や背景色変更はscss側で制御している）
      nav.addClass("fixed");
      // 元の位置未満のスクロール量になったら
    } else {
      // fixedクラスを外して元の位置に戻す
      nav.removeClass("fixed");
    }
  });
});
