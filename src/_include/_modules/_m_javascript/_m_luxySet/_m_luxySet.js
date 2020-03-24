import luxy from 'luxy.js';


function init() {
	luxySet();
}
function luxySet() {
	luxy.init({
		wrapper: '.l-contentsBody',
		wrapperSpeed: 0.08,
	});
}

export default function(_g) {
	if(_g.UA == 'pc') {
		init();
	}
}
