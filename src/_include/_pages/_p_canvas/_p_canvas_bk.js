const initFunc = require('../../_modules/_m_javascript/_m_initFunc/_m_initFunc.js');
const canvasLoading = require('../../_modules/_m_javascript/_m_canvasLoading/_m_canvasLoading.js');


const alphabetMaskFunc = () => {
	const init = () => {
		let funcTarget = new logoSetAll({
			tg: document.querySelector('#js-alphabetMask')
		});
		funcTarget.set();
	}
	class logoSetAll {
		constructor(op) {
			let _t = this;
				_t.target = op.tg;
				_t.C_WIDTH = 1366*2;
				_t.C_HEIGHT = 686*2;
				_t.queue = new createjs.LoadQueue(false);
				_t.imageArray = [
					{src: "/assets/images/top_mainvisual_bg01.jpg"},
				];
				_t.imagePath = {};
		}
		set() {
			let _t = this;
			const callSet = () => {
				_t.img = new Image();
				_t.img.src = _t.imageArray[0].src;

				_t.img.onload = function() {
					_t.img.width = _t.img.naturalWidth;
					_t.img.height = _t.img.naturalHeight;
				}

				_t.queue.loadManifest(_t.imageArray);
				_t.queue.setMaxConnections(3);
				_t.queue.addEventListener('complete', (e) => {
					initSet();
					pointFunc();
					_t.scaleInit();
					alphabetTween();
					update();
				});
			}
			const initSet = () => {

				_t.stage = new createjs.Stage(_t.target);
				_t.stage.enableMouseOver();

				_t.alphabetContainer = new createjs.Container();
				_t.stage.addChild(_t.alphabetContainer);

				_t.circleContainer = new createjs.Container();
				_t.stage.addChild(_t.circleContainer);

				_t.bgTarget01 = new createjs.Bitmap(_t.imageArray[0].src);
				_t.bgTarget02 = new createjs.Bitmap(_t.imageArray[0].src);
				_t.alphabetContainer.addChild(_t.bgTarget01);
				_t.circleContainer.addChild(_t.bgTarget02);

				imageTargetSet(_t.bgTarget01, _t.img);
				imageTargetSet(_t.bgTarget02, _t.img);
				
				_t.alphabetMaskWrap = new createjs.Shape();
				_t.alphabetMaskWrap.cache(0, 0, _t.C_WIDTH, _t.C_HEIGHT);

				_t.circleMaskWrap = new createjs.Shape();
				_t.circleMaskWrap.cache(0, 0, _t.C_WIDTH, _t.C_HEIGHT);


				_t.alphabetContainer.set({
					mask : _t.alphabetMaskWrap,
					alpha: 0
				});
				_t.circleContainer.set({
					mask : _t.circleMaskWrap
				});
				
				function mouseOverEvent(e) {
					console.log("侵入");
					console.log("x座標:"+_t.mouseX);
					console.log("y座標:"+_t.mouseY);
					circleTween();
				}
				function mouseMoveEvent(e) {
					_t.mouseX = e.clientX;
					_t.mouseY = e.clientY;
				};
				_t.alphabetContainer.on("mouseover", mouseOverEvent);
				_t.target.addEventListener('mousemove', mouseMoveEvent, false);


			}
			const update = () => {
				_t.stage.update();
			}
			const imageTargetSet = (imgTg, imgAr) => {
				imgTg.x = _t.C_WIDTH/2;
				imgTg.y = _t.C_HEIGHT/2;

				if(imgAr.height * _t.C_WIDTH /  imgAr.width < _t.C_HEIGHT) {
					imgTg.scaleY = _t.C_HEIGHT / imgAr.height;
					imgTg.scaleX = imgTg.scaleY;
				} else {
					imgTg.scaleX = _t.C_WIDTH / imgAr.width;
					imgTg.scaleY = imgTg.scaleX;
				}
				
				imgTg.regX = imgAr.width / 2;
				imgTg.regY = imgAr.height / 2;
			}
			const pointFunc = () => {
				_t.alphabet = {};
				/// O
				_t.alphabet[0] = new logoSet({
					mask: _t.alphabetMaskWrap,
					point: [
						{type: "mt", s: "208,262"},
						{type: "bt", s: "188,282,163,294,130,294"},
						{type: "bt", s: "97,294,72,282,52,262"},
						{type: "bt", s: "22,233,23,197,23,147"},
						{type: "lt", s: "23,126"},
						{type: "lt", s: "0,126"},
						{type: "bt", s: "0,87,3,57,28,32"},
						{type: "bt", s: "49,11,74,0,107,0"},
						{type: "bt", s: "140,0,164,11,185,32"},
						{type: "bt", s: "210,57,213,87,213,126"},
						{type: "lt", s: "237,126"},
						{type: "lt", s: "237,147"},
						{type: "bt", s: "237,197,237,233,208,262"},
						{type: "mt", s: "180,147"},
						{type: "lt", s: "180,126"},
						{type: "lt", s: "157,126"},
						{type: "bt", s: "156,88,152,76,143,66"},
						{type: "bt", s: "135,56,122,50,107,50"},
						{type: "bt", s: "92,50,78,56,70,66"},
						{type: "bt", s: "61,76,57,88,57,126"},
						{type: "lt", s: "80,126"},
						{type: "lt", s: "80,147"},
						{type: "bt", s: "80,202,82,216,93,228"},
						{type: "bt", s: "102,237,115,243,130,243"},
						{type: "bt", s: "145,243,158,237,166,228"},
						{type: "bt", s: "177,216,180,202,180,147"}
					],
					posx: _t.C_WIDTH*0,
					posy: _t.C_HEIGHT*0.05,
				});
				_t.alphabet[0].set();
				_t.alphabet[0].tween();

				/// E
				_t.alphabet[1] = new logoSet({
					mask: _t.alphabetMaskWrap,
					point: [
						{type: "mt", s:"89,38"},
						{type: "lt", s:"145,38"},
						{type: "lt", s:"145,0"},
						{type: "lt", s:"0,0"},
						{type: "lt", s:"0,215"},
						{type: "lt", s:"65,215"},
						{type: "lt", s:"70,190"},
						{type: "lt", s:"145,190"},
						{type: "lt", s:"145,153"},
						{type: "lt", s:"79,153"},
						{type: "lt", s:"73,177"},
						{type: "lt", s:"42,177"},
						{type: "lt", s:"42,130"},
						{type: "lt", s:"85,130"},
						{type: "lt", s:"90,106"},
						{type: "lt", s:"145,106"},
						{type: "lt", s:"145,68"},
						{type: "lt", s:"99,68"},
						{type: "lt", s:"93,93"},
						{type: "lt", s:"42,93"},
						{type: "lt", s:"42,38"},
						{type: "lt", s:"89,38"},
					],
					posx: _t.C_WIDTH*0.32,
					posy: - _t.C_HEIGHT*0.02,
				});
				_t.alphabet[1].set();
				_t.alphabet[1].tween();

				/// K
				_t.alphabet[2] = new logoSet({
					mask: _t.alphabetMaskWrap,
					point: [
						{type: "mt", s: "165,190"},
						{type: "lt", s: "98,190"},
						{type: "lt", s: "177,314"},
						{type: "lt", s: "243,314"},
						{type: "lt", s: "165,190"},
						{type: "mt", s: "210,0"},
						{type: "lt", s: "138,1"},
						{type: "lt", s: "62,135"},
						{type: "lt", s: "62,0"},
						{type: "lt", s: "0,0"},
						{type: "lt", s: "0,314"},
						{type: "lt", s: "62,314"},
						{type: "lt", s: "62,190"},
						{type: "lt", s: "98,190"},
						{type: "lt", s: "210,0"},
					],
					posx: _t.C_WIDTH*0.55,
					posy: - _t.C_HEIGHT*0.05,
				});
				_t.alphabet[2].set();
				_t.alphabet[2].tween();
				
				/// S
				_t.alphabet[3] = new logoSet({
					mask: _t.alphabetMaskWrap,
					point: [
						{type: "mt", s: "231.47, 148.81"},
						{type: "bt", s: "205.84, 123.35, 159.47, 121.42, 125.06, 116.05000000000001"},
						{type: "lt", s: "125.06, 143.37"},
						{type: "bt", s: "76.12, 138.45, 68.14, 96, 94.86, 71.67"},
						{type: "bt", s: "125.1, 48.14, 185.51, 61.36, 206.35, 83.85"},
						{type: "lt", s: "249.73, 41"},
						{type: "bt", s: "217, 8.62, 173.24, -3.25, 119.91, 0.74"},
						{type: "bt", s: "-27.66, 14, -19.93, 207.07, 125.1, 207.28"},
						{type: "lt", s: "125.1, 180"},
						{type: "bt", s: "223.56, 181.27, 206.86, 276, 125.1, 268.65999999999997"},
						{type: "lt", s: "125.1, 296"},
						{type: "bt", s: "94.17999999999999, 295.36, 65.69, 287.75, 44.459999999999994, 266.51"},
						{type: "lt", s: "0, 310.89"},
						{type: "bt", s: "33.83, 345.21, 73.38, 356.77, 125.06, 357.24"},
						{type: "lt", s: "125.06, 330"},
						{type: "bt", s: "280.78, 330.43, 276.88, 190.43, 231.47, 148.8"}
					],
					posx: _t.C_WIDTH*1.0 - 480,
					posy: _t.C_HEIGHT*0.16,
				});
				_t.alphabet[3].set();
				_t.alphabet[3].tween();

				/// T
				_t.alphabet[4] = new logoSet({
					mask: _t.alphabetMaskWrap,
					point: [
						{type: "mt", s:"178,23"},
						{type: "lt", s:"178,0"},
						{type: "lt", s:"0,0"},
						{type: "lt", s:"0,50"},
						{type: "lt", s:"78,50"},
						{type: "lt", s:"25,287"},
						{type: "lt", s:"81,287"},
						{type: "lt", s:"134,50"},
						{type: "lt", s:"178,50"},
						{type: "lt", s:"178,73"},
						{type: "lt", s:"236,73"},
						{type: "lt", s:"236,23"},
						{type: "lt", s:"178,23"},
					],
					posx: _t.C_WIDTH*0.65,
					posy: _t.C_HEIGHT*0.7,
				});
				_t.alphabet[4].set();
				_t.alphabet[4].tween();


				/// F
				_t.alphabet[5] = new logoSet({
					mask: _t.alphabetMaskWrap,
					point: [
						{type: "mt", s:"151.35,68.53"},
						{type: "bt", s:"137.13,54.31,120.42999999999999,45.53,98.97999999999999,43.25"},
						{type: "lt", s:"98.74999999999999,85.32"},
						{type: "bt", s:"105.09999999999998,85.58999999999999,119.97999999999999,95.58999999999999,124.64999999999998,109.13999999999999"},
						{type: "bt", s:"127.96999999999997,118.76999999999998,128.73,132.57999999999998,128.73,163"},
						{type: "bt", s:"128.73,163.76,128.73,236.82,128.73,237.56"},
						{type: "lt", s:"175,237.56"},
						{type: "bt", s:"173.21,154.23,183.74,99,151.35,68.53"},
						{type: "mt", s:"23.28,26.22"},
						{type: "bt", s:"-0.66,50.17,0,79.77,0,120.69"},
						{type: "lt", s:"0,237.56"},
						{type: "lt", s:"46.24,237.56"},
						{type: "lt", s:"46.24,186.21"},
						{type: "lt", s:"98.68,186.21"},
						{type: "lt", s:"98.68,145"},
						{type: "bt", s:"98.68,145,50.35000000000001,145,46.480000000000004,145"},
						{type: "bt", s:"45.85,124.13,45.38,78.68,50.74,65.43"},
						{type: "bt", s:"54.28,52.7,74.14,36.53,99,43.25"},
						{type: "bt", s:"99,43.25,98.79,6.009999999999998,98.77,1.3699999999999974"},
						{type: "bt", s:"76.26,-4.09,40,7.27,23.28,26.22"},
					],
					posx: _t.C_WIDTH*0.43,
					posy: _t.C_HEIGHT*0.67,
				});
				_t.alphabet[5].set();
				_t.alphabet[5].tween();

				/// y
				_t.alphabet[6] = new logoSet({
					mask: _t.alphabetMaskWrap,
					point: [
						{type: "mt", s:"111,0"},
						{type: "lt", s:"91,90"},
						{type: "lt", s:"49,90"},
						{type: "lt", s:"70,0"},
						{type: "lt", s:"29,0"},
						{type: "lt", s:"0,127"},
						{type: "lt", s:"83,127"},
						{type: "lt", s:"73,173"},
						{type: "lt", s:"114,173"},
						{type: "lt", s:"152,0"},
						{type: "lt", s:"111,0"},
						{type: "mt", s:"23,209"},
						{type: "lt", s:"64,209"},
						{type: "lt", s:"73,173"},
						{type: "lt", s:"31,173"},
						{type: "lt", s:"23,209"},
					],
					posx: _t.C_WIDTH*0.22,
					posy: _t.C_HEIGHT*0.64,
				});
				_t.alphabet[6].set();
				_t.alphabet[6].tween();

				/// i
				_t.alphabet[7] = new logoSet({
					mask: _t.alphabetMaskWrap,
					point: [
						{type: "mt", s:"74,0"},
						{type: "lt", s:"64,43"},
						{type: "lt", s:"45,43"},
						{type: "lt", s:"0,245"},
						{type: "lt", s:"48,245"},
						{type: "lt", s:"93,43"},
						{type: "lt", s:"112,43"},
						{type: "lt", s:"122,0"},
						{type: "lt", s:"74,0"},
					],
					posx: _t.C_WIDTH*0.08,
					posy: _t.C_HEIGHT*0.7,
				});
				_t.alphabet[7].set();
				_t.alphabet[7].tween();
				
				_t.hoverCircle = _t.circleMaskWrap.graphics.f('#FFF').dc(0,0,1).command;
				
			}
			const alphabetTween = () => {
				createjs.Ticker.addEventListener('tick', update , false);
				createjs.Tween.get(_t.alphabetContainer)
				.to({alpha:0}, 0)
				.to({alpha:1.0}, 2000)
				.call(function(){
					createjs.Ticker.removeEventListener("tick", update);
				});;
				
			}
			const circleTween = () => {
				createjs.Ticker.addEventListener('tick', update , false);
				_t.hoverCircle = _t.circleMaskWrap.graphics.f('#FFF').dc((_t.mouseX*(1366/window.innerWidth))*2,(_t.mouseY*(1366/window.innerWidth))*2,2).command;
				createjs.Tween.get(_t.hoverCircle)
					.to({radius:0}, 0)
					.to({radius:8000}, 2200, createjs.Ease.cubicInOut)
					.call(function(){
						createjs.Ticker.removeEventListener("tick", update);
					});
			}
			callSet();
		}
		scaleInit() {
			let _t = this;
			function set() {
				_t.stage.canvas.width = _t.C_WIDTH;
				_t.stage.canvas.height = _t.C_HEIGHT;
			}
			set();
		}
	}
	class logoSet {
		constructor(op) {
			let _t = this;
				_t.sx = op.posx/2;
				_t.sy = op.posy/2;
				_t.ss = 2.0;
				_t.s = {};
				_t.p = {};
				_t.t = {};
				_t.mask = op.mask;
				_t.point = op.point;
		}
		set() {
			let _t = this;
			[].slice.call(_t.point).forEach(function(event, index) {
				_t.s[index] = _t.pointSet(event, index);
			});
			_t.s[_t.point.length+1] = _t.mask.graphics.closePath().command;
		}
		pointSet(e,i) {
			let _t = this;
				_t.p = e.s.split(',');
			let pointCjs;
			_t.t[i] = {};
			
			[].slice.call(_t.p).forEach(function(event, index) {
				if((index % 2) != 0 ) {
					_t.p[index] = "("+event+100+"+_t.sy)*_t.ss,";
				} else {
					_t.p[index] = "("+event+"+_t.sx)*_t.ss,";
				}
				
				if( index == 0 ) {
					if(_t.p.length > 2) {
						_t.t[i].cp1x = event*2 + _t.sx*2;
					}
					_t.t[i].x = event*2 + _t.sx*2;
				} else if( index == 1 ) {
					if(_t.p.length > 2) {
						_t.t[i].cp1y = event*2 + _t.sy*2;
					}
					_t.t[i].y = event*2 + _t.sy*2;
				} else if( index == 2 ) {
					_t.t[i].cp2x = event*2 + _t.sx*2;
				} else if( index == 3 ) {
					_t.t[i].cp2y = event*2 + _t.sy*2;
				} else if( index == 4 ) {
					_t.t[i].x = event*2 + _t.sx*2;
				} else if( index == 5 ) {
					_t.t[i].y = event*2 + _t.sy*2;
				}
			});
			pointCjs = _t.p.join('');
			return eval("_t.mask.graphics."+_t.point[i].type+"("+ pointCjs +")").command
		}
		tween() {
			
			let _t = this;
			let randRange = function (min, max) {
				return Math.floor(Math.random() * (max - min + 1) + min);
			};
			_t.changeTime = randRange(500, 1200);

			[].slice.call(_t.point).forEach(function(event, index) {
				createjs.Tween.get(_t.s[index], createjs.Ease.cubicInOut)
					.to({y:_t.t[index].y+100, cp1y:_t.t[index].cp1y+100, cp2y:_t.t[index].cp2y+100}, 0)
					.to({y:_t.t[index].y, cp1y:_t.t[index].cp1y, cp2y:_t.t[index].cp2y}, _t.changeTime);
			});
		}
	}
	init();
}

// const nxpgLogoFunc = () => {
// 	let logoTarget;
// 	const init = () => {
// 		logoTarget = new logoSet({
// 			tg: document.querySelector('#js-logoTarget')
// 		});
// 		logoTarget.set();
// 	}
// 	class logoSet {
// 		constructor(op) {
// 			let _t = this;
// 				_t.target = op.tg;
// 				_t.queue = new createjs.LoadQueue(false);
// 				_t.imageArray = [
// 					{src:"../images/sample01.jpg"},
// 				];
// 				_t.imagePath = {};
// 		}
// 		set() {
// 			let _t = this;
// 			const initSet = () => {
// 				_t.stageTarget = new createjs.Stage(_t.target);
// 				createjs.Ticker.addEventListener('tick', update , false);
// 				createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
// 				$.each(_t.imageArray, function(index, val) {
// 					_t.imagePath[index] = new Image();
// 					_t.imagePath[index].src = val.src;
// 					val.width = _t.imagePath[index].naturalWidth;
// 					val.height = _t.imagePath[index].naturalHeight;
// 				});
// 				_t.queue.loadManifest(_t.imageArray);
// 				_t.queue.setMaxConnections(3);
// 				_t.queue.addEventListener('complete', (e) => {
// 					scaleInit();
// 					drawInit();
// 					tweenInit();
// 				});
// 				function update() {
// 					_t.stageTarget.update();
// 				}
// 			}
// 			const scaleInit = () => {
// 				function set() {
// 					_t.stageTarget.canvas.width = 500;
// 					_t.stageTarget.canvas.height = 500;
// 				}
// 				set();
// 				window.addEventListener("resize", set);
// 			}
// 			const drawInit = () => {
// 				let _t = this;
// 					_t.containerTarget = new createjs.Container();
// 					_t.graphicTarget = new createjs.Shape();
// 					_t.imageTarget = new createjs.Bitmap(_t.imageArray[0].src);
// 					_t.maskTarget = new createjs.Shape();
					
// 					_t.stageTarget.addChild(_t.containerTarget);
// 					_t.containerTarget.addChild(_t.graphicTarget);
// 					_t.containerTarget.addChild(_t.imageTarget);

// 					_t.imageTarget.x = 0;
// 					_t.imageTarget.y = 0;
// 					_t.imageTarget.scale = 0.3;

// 					_t.maskTarget.set({
// 						x        : 0,
// 						y        : 0,
// 						scaleX: 1.0,
// 						scaleY: 1.0
// 					});

// 					_t.point0101 = _t.maskTarget.graphics.moveTo(0,0).command;
// 					_t.point0102 = _t.maskTarget.graphics.lineTo(25, 0).command;
// 					_t.point0103 = _t.maskTarget.graphics.lineTo(25, 0).command;
// 					_t.point0104 = _t.maskTarget.graphics.lineTo(0, 0).command;
// 					_t.maskTarget.graphics.closePath().command;

// 					_t.point0201 = _t.maskTarget.graphics.moveTo(50,60).command;
// 					_t.point0202 = _t.maskTarget.graphics.lineTo(75, 60).command;
// 					_t.point0203 = _t.maskTarget.graphics.lineTo(75, 60).command;
// 					_t.point0204 = _t.maskTarget.graphics.lineTo(50, 60).command;
// 					_t.maskTarget.graphics.closePath().command;

// 					_t.point0301 = _t.maskTarget.graphics.moveTo(100,0).command;
// 					_t.point0302 = _t.maskTarget.graphics.lineTo(125, 0).command;
// 					_t.point0303 = _t.maskTarget.graphics.lineTo(125, 0).command;
// 					_t.point0304 = _t.maskTarget.graphics.lineTo(100, 0).command;
// 					_t.maskTarget.graphics.closePath().command;

// 					_t.point0401 = _t.maskTarget.graphics.moveTo(150,0).command;
// 					_t.point0402 = _t.maskTarget.graphics.lineTo(175, 0).command;
// 					_t.point0403 = _t.maskTarget.graphics.lineTo(175, 0).command;
// 					_t.point0404 = _t.maskTarget.graphics.lineTo(150, 0).command;
// 					_t.maskTarget.graphics.closePath().command;
					
// 					_t.graphicTarget.graphics.beginFill("#000000").drawRect(0,0,_t.stageTarget.canvas.width, _t.stageTarget.canvas.height);
// 					_t.containerTarget.set({
// 						mask : _t.maskTarget
// 					});
// 			}

// 			const tweenInit = () => {
// 				let _t = this;
// 					function logo01() {
// 						createjs.Tween.get(_t.point0103, {override:true})
// 							.to({y:0}, 0)
// 							.to({y:120}, 600, createjs.Ease.cubicOut);
// 						createjs.Tween.get(_t.point0104, {override:true})
// 							.to({y:0}, 0)
// 							.to({y:120}, 600, createjs.Ease.cubicOut)
// 							.call(logo02);
// 					}
// 					function logo02() {
// 						createjs.Tween.get(_t.point0203, {override:true})
// 							.to({y:60}, 0)
// 							.to({y:180}, 600, createjs.Ease.cubicOut);
// 						createjs.Tween.get(_t.point0204, {override:true})
// 							.to({y:60}, 0)
// 							.to({y:180}, 600, createjs.Ease.cubicOut)
// 							.call(logo03);
// 					}
// 					function logo03() {
// 						createjs.Tween.get(_t.point0303, {override:true})
// 							.to({y:0}, 0)
// 							.to({y:120}, 600, createjs.Ease.cubicOut);
// 						createjs.Tween.get(_t.point0304, {override:true})
// 							.to({y:0}, 0)
// 							.to({y:120}, 600, createjs.Ease.cubicOut)
// 							.call(logo04);
// 					}
// 					function logo04() {
// 						createjs.Tween.get(_t.point0403, {override:true})
// 							.to({y:0}, 0)
// 							.to({y:60}, 600, createjs.Ease.cubicOut);
// 						createjs.Tween.get(_t.point0404, {override:true})
// 							.to({y:0}, 0)
// 							.to({y:60}, 600, createjs.Ease.cubicOut);
// 					}
// 					logo01();
// 			}
// 			initSet();
// 		}
// 	}
// 	init();
// }

// const canvasLoadingFunc = () => {
// 	let canvasLoadingTarget;
// 	const init = () => {
// 		canvasLoadingTarget = new canvasLoading({
// 			tg: document.querySelector('#js-canvasLoadingAnimation')
// 		});
// 		canvasLoadingTarget.set();
// 	}

// 	$('#type01_start').on('click',function(){
// 		canvasLoadingTarget.type01_start();
// 	});
// 	$('#type01_end').on('click',function(){
// 		canvasLoadingTarget.type01_end();
// 	});
// 	$('#type02_start').on('click',function(){
// 		canvasLoadingTarget.type02_start();
// 	});
// 	$('#type02_end').on('click',function(){
// 		canvasLoadingTarget.type02_end();
// 	});
// 	$('#type03_start').on('click',function(){
// 		canvasLoadingTarget.type03_start();
// 	});
// 	$('#type03_end').on('click',function(){
// 		canvasLoadingTarget.type03_end();
// 	});
// 	$('#type04_start').on('click',function(){
// 		canvasLoadingTarget.type04_start();
// 	});
// 	$('#type04_end').on('click',function(){
// 		canvasLoadingTarget.type04_end();
// 	});
// 	$('#type05_start').on('click',function(){
// 		canvasLoadingTarget.type05_start();
// 	});
// 	$('#type05_end').on('click',function(){
// 		canvasLoadingTarget.type05_end();
// 	});
// 	init();
// }


// init
class initSet {
	DOMReadBefore(op) {
	}
	DOMReadAfter(op) {
		// canvasLoadingFunc();
		// nxpgLogoFunc();
		alphabetMaskFunc();
	}
	imageReadAfter(op) {
	}
	windowResize(op) {
	}
	windowScroll(op) {
	}
}

module.exports = (option) => {
	let init = new initSet();
	initFunc(init, option, 'is-canvas');
}