// global option
import globalSet from '../../_modules/_m_javascript/_m_globalSet/_m_globalSet.js';
globalSet();
// top serviceWorker
import serviceWorkerSet from '../../_modules/_m_javascript/_m_serviceWorkerSet/_m_serviceWorkerSet.js';
// pjax
import barbaSet from '../../_modules/_m_javascript/_m_barbaSet/_m_barbaSet.js';
// inview set
import inView from '../../_modules/_m_javascript/_m_inView/_m_inView.js';
// Inertial scroll
import luxySet from '../../_modules/_m_javascript/_m_luxySet/_m_luxySet.js';
// accordion
import accordionSet from '../../_modules/_m_javascript/_m_accordionSet/_m_accordionSet.js';
// sp tell link
import spTellLink from '../../_modules/_m_javascript/_m_spTellLink/_m_spTellLink.js';
//matchHeight
import matchHeight from '../../_modules/_m_javascript/_m_matchHeight/_m_matchHeight.js';


// ----- component用 ------
import markupBlock from '../../_modules/_m_javascript/_m_markupBlock/_m_markupBlock.js';
import mainvisualSet01 from '../../_modules/_m_javascript/_m_mainvisualSet01/_m_mainvisualSet01.js';
import canvasSlider01 from '../../_modules/_m_javascript/_m_canvasSlider01/_m_canvasSlider01.js';
import arcanoid01 from '../../_modules/_m_javascript/_m_arcanoid01/_m_arcanoid01.js';

let _g;

function domLoadAfter() {
	accordionSet();
	markupBlock();
	spTellLink();
	
}

function imageLoadAfter() {
	inView();
	luxySet(_g);
	mainvisualSet01();
	matchHeight();
	canvasSlider01(_g);
	arcanoid01();
}

function init() {
	// serviceWorkerSet();
	
	_g = window.GLOBAL;
	_g.domLoad(function(){
		barbaSet();
		if(_g.PJAX_FLAG == false) {
			console.log("domLoad");
			domLoadAfter();
		}
		_g.pjaxLoad(function(){
			console.log("domLoad_pjax");
			domLoadAfter();
		});
	});
	_g.imageLoad(function(){
		if(_g.PJAX_FLAG == false) {
			console.log("imageLoad");
			
			imageLoadAfter();
			
		}
		_g.pjaxLoad(function(){
			console.log("imageLoad_pjax");
			imageLoadAfter();
		});
		_g.PJAX_FLAG = true;
	});
}

export default function() {
	init();
}