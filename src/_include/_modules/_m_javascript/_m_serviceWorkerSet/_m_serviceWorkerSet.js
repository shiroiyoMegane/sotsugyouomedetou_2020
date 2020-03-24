import globalSet from '../_m_globalSet/_m_globalSet.js';
globalSet();
let _g = window.GLOBAL;
export default function() {
	function init() {
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register(_g.absolutePath('/sw.js')).then(() => {
				console.log('sw install');
			},() => {
				console.log('sw error');
			});
		}
	}
	_g.domLoad(init);
}
