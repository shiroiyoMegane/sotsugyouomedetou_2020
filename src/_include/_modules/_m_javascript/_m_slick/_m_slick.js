import globalSet from '../_m_globalSet/_m_globalSet.js';
globalSet();
let _g = window.GLOBAL;

import 'slick-carousel';

export default class {
	constructor() {
		this.defaultOp = {
			// accessibility: true, // 矢印キーでスライドを切り替えるか
			// adaptiveHeight: false, // スライドの高さが違うときに自動調整するか
			// autoplay: false, // 自動再生するか
			// autoplaySpeed: 3000, // 自動再生で切り替えする時間(ミリ秒)
			arrows: false,// 前次ボタンを表示するか
			// asNavFor: null, // 別のスライドと連携したいときにクラス名を指定
			// appendArrows: $('.my-slide'), // 矢印ボタンの生成位置を変更
			// appendDots: $('.my-slide'), // ドットナビゲーションの生成位置を変更
			
			// prevArrow: '<button type="button" class="slick-prev">Previous</button>', // 前ボタンの要素を変更
			// nextArrow: '<button type="button" class="slick-next">Next</button>',// 次ボタンの要素を変更
			// centerMode: false,// slidesToShowが奇数のとき、現在のスライドを中央に表示するか
			// centerPadding: '50px',// centerMode:trueのとき、左右のスライドをチラ見せさせる幅
			// cssEase: 'ease',// ease-in,ease-in-outなどCSSのイージング
			// customPaging: function(slick, index){// dots:trueのとき、ドットをサムネイルなどにカスタマイズ
			// 	var num = slick.$slides.eq(index).html();
			// 	return '<b>' + num + '</b>';
			// },
			dots: false,// ドットナビゲーションを表示するか
			// dotsClass: 'slick-dots',// ドットナビゲーションのクラス名を変更
			// draggable: true,// マウスドラッグでスライドの切り替えをするか
			// fade: false,// スライド切り替えをフェードするか
			// focusOnSelect: true,// クリックでメインのスライドを切り替えるか
			// easing: 'linear',// jQueryのイージング
			// infinite: true,// スライドをループさせるか
			// edgeFriction: 0.15,// infinite:falseのとき、両端のスライドをドラッグしようとした際のバウンドスクロール値
			// initialSlide: 0,// 開始スライド（0から始まるので注意）
			// lazyLoad: 'ondemand',// 画像の遅延表示タイプ（ondemand/progressive)
			// mobileFirst: false,// モバイルファーストにするか
			// pauseOnFocus: true,// autoplay:trueのとき、マウスフォーカスしたら一時停止させるか
			// pauseOnHover: true,// autoplay:trueのとき、マウスホバーしたら一時停止させるか
			// pauseOnDotsHover: false,// autoplay:trueのとき、ドットナビゲーションをマウスホバーしたら一時停止させるか
			// respondTo: 'window',// レスポンシブ設定の基準（window/slider/min） [初期値:'window']
			// responsive: [// レスポンシブ設定
			// 	{
			// 		breakpoint: 1024,     // 600〜1023px
			// 		settings: {
			// 			slidesToShow: 3,
			// 			slidesToScroll: 3,
			// 			infinite: true,
			// 			dots: true
			// 		}
			// 	},
			// ],
			// rows: 1, // 行数 [初期値:1]
			// slide: '', // スライド部分の要素のタグ名
			// slidesPerRow: 1, // rowsの値が2以上のとき、1行あたりに表示させるスライド数
			// slidesToShow: 1, // 表示させるスライド数
			// slidesToScroll: 1, // 一度に移動させるスライド数
			// speed: 300,// スライド/フェードさせるスピード（ミリ秒）
			// swipe: true,// スワイプを検知するか
			// swipeToSlide: false, // slidesToScrollの値に関係なく、マウスドラッグやスワイプでスライドさせる際は1スライドずつ動かす
			// touchMove: true,// タッチでスライドさせるか
			// touchThreshold: 5,// (1/touchThreshold)*スライダーの横幅 分マウスドラッグするとスライドされる
			// useCSS: true,// CSSのtransitionを使用するか
			// useTransform: true,// CSSのtransformを使用するか
			// variableWidth: false,// 横幅がバラバラなスライドにするか
			// vertical: false,// 縦方向にスライドさせるか
			// verticalSwiping: false,// 縦方向のスワイプを有効にするか
			// rtl: false,// スライドの順番を逆にするか
			// waitForAnimate: true,// スライドアニメーション中サムネイルをクリックしたとき反応させないか
			// zIndex: 1000// z-index値
		}
	}
	set(tg) {
		let _t = this;
		_t.tg = tg;
		$(_t.tg).slick();
	}
	option(op) {
		let _t = this;
		_t.defaultOp = Object.assign(_t.defaultOp, op);

		$(_t.tg).slick('slickSetOption', _t.defaultOp, true);
	}
}