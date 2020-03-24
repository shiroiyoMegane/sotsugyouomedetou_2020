// 比率を保ったまま幅と高さを画面幅最大まで表示
const globalSet = require('../_m_globalSet/_m_globalSet.js');
globalSet();
let _g = window.GLOBAL;
module.exports = (tg) => {
	let sc, target, tgW, tgH;
	function init() {
		target = document.querySelector(tg);
		tgW = target.clientWidth;
		tgH = target.clientHeight;
		ratioSizeSet();
		_g.resize(ratioSizeSet);
	}
	function ratioSizeSet() {
		if(tgH * _g.GLOBAL_WIDTH /  tgW < _g.GLOBAL_HEIGHT) {
			sc = _g.GLOBAL_HEIGHT / tgH;
		} else {
			sc = _g.GLOBAL_WIDTH / tgW;
		}
		target.style.width = tgW * sc + "px";
	}
	_g.imageLoad(init);
}
