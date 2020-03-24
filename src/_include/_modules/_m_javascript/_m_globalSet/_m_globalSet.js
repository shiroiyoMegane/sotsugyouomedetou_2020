
import Barba from "barba.js"
export default function(name) {
	window.GLOBAL = {
		GLOBAL_WIDTH: window.innerWidth,
		GLOBAL_HEIGHT: window.innerHeight,
		BREAK_POINT_PC_FLAG: {
			one: false,
			resize: false,
		},
		BREAK_POINT_TB: 1024,
		BREAK_POINT_TB_FLAG: {
			one: false,
			resize: false,
		},
		BREAK_POINT_SP: 768,
		BREAK_POINT_SP_FLAG: {
			one: false,
			resize: false,
		},
		TIMEOUT_ID: null,
		UA: null,
		OS: null,
		WINDOW_TOP: null,
		WINDOW_BOTTOM: null,
		PJAX_FLAG: false,
		init() {
			let _t = this;
				_t.ua();
				_t.set();
				_t.reset();
				_t.deviceSet();
		},
		set() {
			let _t = this;
				_t.GLOBAL_WIDTH = window.innerWidth;
				_t.GLOBAL_HEIGHT = window.innerHeight;

				_t.WINDOW_TOP = (window.pageYOffset !== undefined) ? window.pageYOffset : document.documentElement.scrollTop;
				_t.WINDOW_BOTTOM = _t.WINDOW_TOP + window.innerHeight;
				// デバイスフラグ
				if( _t.GLOBAL_WIDTH > _t.BREAK_POINT_SP && _t.GLOBAL_WIDTH <= _t.BREAK_POINT_TB ) {
					if(_t.BREAK_POINT_TB_FLAG.resize == true) {
						_t.BREAK_POINT_TB_FLAG.one = false;
					} else {
						_t.BREAK_POINT_TB_FLAG.one = true;
					}
					_t.BREAK_POINT_PC_FLAG.resize = false;
					_t.BREAK_POINT_TB_FLAG.resize = true;
					_t.BREAK_POINT_SP_FLAG.resize = false;
				} else if( _t.GLOBAL_WIDTH <= _t.BREAK_POINT_SP ) {
					if(_t.BREAK_POINT_SP_FLAG.resize == true) {
						_t.BREAK_POINT_SP_FLAG.one = false;
					} else {
						_t.BREAK_POINT_SP_FLAG.one = true;
					}
					_t.BREAK_POINT_PC_FLAG.resize = false;
					_t.BREAK_POINT_TB_FLAG.resize = false;
					_t.BREAK_POINT_SP_FLAG.resize = true;
				} else {
					if(_t.BREAK_POINT_PC_FLAG.resize == true) {
						_t.BREAK_POINT_PC_FLAG.one = false;
					} else {
						_t.BREAK_POINT_PC_FLAG.one = true;
					}
					_t.BREAK_POINT_PC_FLAG.resize = true;
					_t.BREAK_POINT_TB_FLAG.resize = false;
					_t.BREAK_POINT_SP_FLAG.resize = false;
				}
		},
		reset() {
			let _t = this;
				function init() {
					_t.set();
				}

				window.addEventListener("resize", () => {
					if(_t.UA != 'pc'){
						if (_t.GLOBAL_WIDTH == window.innerWidth) return;
						init();
					} else {
						init();
					}
				});
				window.addEventListener("scroll", () => {
					init();
				});
		},
		ua() {
			let agent = window.navigator.userAgent.toLowerCase();
			var ipad = agent.indexOf('ipad') > -1 || agent.indexOf('macintosh') > -1 && 'ontouchend' in document;
			let _t = this,
				ua = navigator.userAgent;

				if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
					_t.UA = 'sp'
				} else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0 || ipad == true) {
					_t.UA = 'tb'
				} else {
					_t.UA = 'pc'
				}
				if (navigator.platform.indexOf("Win") != -1) {
					_t.OS = 'windows'
				} else if(navigator.platform.indexOf("Mac") != -1) {
					_t.OS = 'mac'
				}
				else {
					_t.OS = 'other'
				}

				if (ua.indexOf('iPhone') > 0) {
					_t.DEVICE = 'iPhone';
				} else if(ua.indexOf('iPad') > 0 || ipad == true) {
					_t.DEVICE = 'iPad';
				}  else if(ua.indexOf('Android') > 0) {
					_t.DEVICE = 'Android';
				} else if(ua.indexOf('Mobile') > 0) {
					_t.DEVICE = 'Mobile';
				} else {
					_t.DEVICE = 'pc';
				}

				if(agent.indexOf('msie') != -1 || agent.indexOf('trident') != -1) {
					_t.BROWSER = "ie"
				} else if(agent.indexOf('edge') != -1) {
					_t.BROWSER = "edge"
				} else if(agent.indexOf('chrome') != -1) {
					_t.BROWSER = "chrome"
				} else if(agent.indexOf('safari') != -1) {
					_t.BROWSER = "safari"
				} else if(agent.indexOf('firefox') != -1) {
					_t.BROWSER = "firefox"
				} else if(agent.indexOf('opera') != -1) {
					_t.BROWSER = "opera"
				} else {
					_t.BROWSER = "other"
				}
		},
		deviceSet() {
			let _t = this;
			_t.domLoad(function(){
				document.getElementById('l-contentsTop').classList.add(_t.DEVICE);
				document.getElementById('l-contentsTop').classList.add(_t.OS);
				document.getElementById('l-contentsTop').classList.add(_t.BROWSER);
			})
		},
		domLoad(cb) {
			let _t = this;
				function init() {
					cb();
				}
				document.addEventListener("DOMContentLoaded", () => {
					init();
				},false);
		},
		imageLoad(cb) {
			let _t = this;
				function init() {
					cb();
				}
				window.addEventListener('load', () => {
					init();
				},false);
		},
		pjaxLoad(cb) {
			let _t = this;
				function init() {
					cb();
				}
				Barba.Dispatcher.on('transitionCompleted', function () {
					init();
				});
		},
		resize(cb) {
			let _t = this;
			function init() {
				cb();
			}
			window.addEventListener("resize", () => {
				clearTimeout( _t.TIMEOUT_ID );
				_t.TIMEOUT_ID = setTimeout( () => {
					_t.TIMEOUT_ID = 0;
					// ios resize制御
					if(_t.UA != 'pc'){
						if (_t.GLOBAL_WIDTH == window.innerWidth) return;
						init();
					} else {
						init();
					}
				}, 100 ) ;
			});
		},
		scroll(cb) {
			let _t = this;
			function init() {
				cb();
			}	
			window.addEventListener("scroll", () => {
				clearTimeout( _t.TIMEOUT_ID );
				_t.TIMEOUT_ID = setTimeout( () => {
					_t.TIMEOUT_ID = 0;
					init();
				}, 100 ) ;
			});
		},
		absolutePath(href) {
			var link = document.createElement("a");
			link.href = href;
			return link.href;
		}
	}
	window.GLOBAL.init();
}
