import globalSet from '../_m_globalSet/_m_globalSet.js';
import Barba from "barba.js"
globalSet();
let _g = window.GLOBAL;

window.C_BARBA = {
	init: function(){
		let _c = this;
		Barba.Pjax.start();
		Barba.Prefetch.init();
		Barba.Utils.xhrTimeout = 10000;
	}
}

export default function() {
	window.C_BARBA.init();
}

