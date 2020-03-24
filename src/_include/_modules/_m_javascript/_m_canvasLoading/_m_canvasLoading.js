//ua 判定
module.exports = class canvasLoading {
	constructor(op) {
		let _t = this;
			_t.target = op.tg;
			_t.contentsName = [
					{name:"type01",src:"../images/logo01.png"},
					{name:"type02",src:"../images/logo02.png"},
					{name:"type03",src:"../images/logo03.png"},
					{name:"type04",src:"../images/logo04.png"},
					{name:"type05",src:"../images/logo05.png"}
				];
			_t.containerArray = {};
			_t.graphicArray = {};
			_t.pointArray = {};
			_t.bgArray = {};
			_t.imageArray = {};
			_t.queue = new createjs.LoadQueue(false);
	}
	set() {
		let _t = this;
			_t.imagePath = {};
		
		const callFunction = () => {
			$.each(_t.contentsName, function(index, val) {
				_t.imagePath[index] = new Image();
				_t.imagePath[index].src = val.src;
				val.width = _t.imagePath[index].naturalWidth;
				val.height = _t.imagePath[index].naturalHeight;
			});
			scaleInit();
			_t.drawInit();
		}
		const initSet = () => {
			_t.stage = new createjs.Stage(_t.target);
			createjs.Ticker.addEventListener('tick', update , false);
			createjs.Ticker.setFPS(60);
			createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;

			_t.queue.loadManifest(_t.contentsName);
			_t.queue.setMaxConnections(3);
			_t.queue.addEventListener('complete', (e) => {
				callFunction();
			});
			
			function update() {
				_t.stage.update();
			}
		}

		const scaleInit = () => {
			function scaleset() {
				_t.stage.canvas.width = window.innerWidth;
				_t.stage.canvas.height = window.innerHeight;
			}
			scaleset();
			window.addEventListener("resize", scaleset);
		}
		initSet();
	}
	drawInit() {
		let _t = this;
		function resize() {
			_t.cw = _t.stage.canvas.width*1.5;
			_t.ch = _t.stage.canvas.height*1.5;

			$.each(_t.contentsName, function(index, val) {
				_t.graphicArray[index] = new createjs.Shape();
				_t.imageArray[index] = new createjs.Bitmap(val.src);
				_t.containerArray[index] = new createjs.Container();

				_t.bgArray[index] = new createjs.Shape();
				_t.stage.removeChild(_t.containerArray[index]);
				_t.containerArray[index].removeChild(_t.bgArray[index]);
				_t.containerArray[index].removeChild(_t.imageArray[index]);
				_t.stage.addChild(_t.containerArray[index]);
				_t.containerArray[index].addChild(_t.bgArray[index]);
				_t.containerArray[index].addChild(_t.imageArray[index]);
				
				
				switch(val.name) {
					case "type01":
						_t.bgArray[index].graphics.beginFill("#355cfc").drawRect(0,0,_t.cw, _t.ch);
						_t.pointArray[index] = [];

						chm = _t.ch/9;

						

						_t.pointArray[index][0] = _t.graphicArray[index].graphics.moveTo(_t.cw*0.5,0).command;
						_t.pointArray[index][1] = _t.graphicArray[index].graphics.lineTo(_t.cw*0.6, 0).command;

						_t.pointArray[index][2] = _t.graphicArray[index].graphics.bezierCurveTo(_t.cw*0.7, chm*1, _t.cw*0.65, chm*2, _t.cw*0.75, chm*3).command;
						_t.pointArray[index][3] = _t.graphicArray[index].graphics.bezierCurveTo(_t.cw*0.85, chm*4, _t.cw*0.7, chm*5, _t.cw*0.85, chm*6).command;
						_t.pointArray[index][4] = _t.graphicArray[index].graphics.bezierCurveTo(_t.cw*1.05, chm*7, _t.cw, chm*8, _t.cw, chm*9).command;

						_t.pointArray[index][5] = _t.graphicArray[index].graphics.lineTo(_t.cw*0.5, _t.ch).command;
						_t.pointArray[index][6] = _t.graphicArray[index].graphics.closePath().command;
						
						_t.pointArray[index][7] = _t.graphicArray[index].graphics.moveTo(_t.cw*0.5+10,_t.ch).command;
						_t.pointArray[index][8] = _t.graphicArray[index].graphics.lineTo(0, _t.ch).command;
						_t.pointArray[index][9] = _t.graphicArray[index].graphics.bezierCurveTo(0, chm*8, 0, chm*7, 0, chm*6).command;
						_t.pointArray[index][10] = _t.graphicArray[index].graphics.bezierCurveTo(0, chm*5, 0, chm*4, 0, chm*3).command;
						_t.pointArray[index][11] = _t.graphicArray[index].graphics.bezierCurveTo(0, chm*2, 0, chm*1, 0, 0).command;
						_t.pointArray[index][12] = _t.graphicArray[index].graphics.lineTo(_t.cw*0.5+10, 0).command;
						_t.graphicArray[index].set({
							x        : - _t.cw*2,
							// x        : 0,
							y        : 0,
							scaleX: 1.0,
							scaleY: 1.0
						});
						break;

					case "type02":
						_t.bgArray[index].graphics.beginFill("#ff5b7f").drawRect(0,0,_t.cw,_t.ch);
						_t.pointArray[index] = [];

						cwm = _t.cw/6;
						

						_t.pointArray[index][0] = _t.graphicArray[index].graphics.moveTo(0,_t.ch*0.5).command;
						_t.pointArray[index][1] = _t.graphicArray[index].graphics.lineTo(0, _t.ch*0.3).command;
						_t.pointArray[index][2] = _t.graphicArray[index].graphics.bezierCurveTo(cwm*1, _t.ch*0.1, cwm*2, _t.ch*0.22, cwm*3, _t.ch*0.2).command;
						_t.pointArray[index][3] = _t.graphicArray[index].graphics.bezierCurveTo(cwm*4, _t.ch*0.2, cwm*5, 0, cwm*6, _t.ch*0.07).command;

						_t.pointArray[index][4] = _t.graphicArray[index].graphics.lineTo(_t.cw, _t.ch/2).command;
						_t.pointArray[index][5] = _t.graphicArray[index].graphics.closePath().command;
						
						_t.pointArray[index][6] = _t.graphicArray[index].graphics.moveTo(_t.cw,_t.ch/2).command;

						_t.pointArray[index][7] = _t.graphicArray[index].graphics.lineTo(_t.cw,_t.ch).command;
						_t.pointArray[index][8] = _t.graphicArray[index].graphics.bezierCurveTo(cwm*5, _t.ch, cwm*4, _t.ch, cwm*3, _t.ch).command;
						_t.pointArray[index][9] = _t.graphicArray[index].graphics.bezierCurveTo(cwm*2, _t.ch, cwm*1, _t.ch, 0, _t.ch).command;
						_t.pointArray[index][10] = _t.graphicArray[index].graphics.lineTo(0, _t.ch/2).command;
						_t.graphicArray[index].set({
							x        : 0,
							y        : _t.ch,
							scaleX: 1.0,
							scaleY: 1.0
						});
						break;
					

					case "type03":
						_t.bgArray[index].graphics.beginFill("#22ad77").drawRect(0,0,_t.cw,_t.ch);
						_t.pointArray[index] = [];

						cwm = _t.cw/12;

						_t.pointArray[index][0] = _t.graphicArray[index].graphics.moveTo(0,_t.ch*0.5).command;
						_t.pointArray[index][1] = _t.graphicArray[index].graphics.lineTo(_t.cw, _t.ch*0.5).command;
						_t.pointArray[index][2] = _t.graphicArray[index].graphics.lineTo(_t.cw, _t.ch*0.6).command;

						_t.pointArray[index][3] = _t.graphicArray[index].graphics.bezierCurveTo(cwm*11, _t.ch*0.52, cwm*10, _t.ch*0.75, cwm*9, _t.ch*0.55).command;
						_t.pointArray[index][4] = _t.graphicArray[index].graphics.bezierCurveTo(cwm*8, _t.ch*0.4, cwm*7, _t.ch*0.65, cwm*6, _t.ch*0.55).command;
						_t.pointArray[index][5] = _t.graphicArray[index].graphics.bezierCurveTo(cwm*5, _t.ch*0.45, cwm*4, _t.ch*0.8, cwm*3, _t.ch*0.65).command;
						_t.pointArray[index][6] = _t.graphicArray[index].graphics.bezierCurveTo(cwm*2, _t.ch*0.40, cwm*1, _t.ch*0.8, 0, _t.ch*0.55).command;

						_t.pointArray[index][8] = _t.graphicArray[index].graphics.lineTo(0, _t.ch*0.6).command;
						_t.pointArray[index][9] = _t.graphicArray[index].graphics.closePath().command;


						_t.pointArray[index][10] = _t.graphicArray[index].graphics.moveTo(0, _t.ch*0.5).command;
						_t.pointArray[index][11] = _t.graphicArray[index].graphics.lineTo(0, 0).command;
						_t.pointArray[index][12] = _t.graphicArray[index].graphics.bezierCurveTo(cwm*1, 0, cwm*2, 0, cwm*3, 0).command;
						_t.pointArray[index][13] = _t.graphicArray[index].graphics.bezierCurveTo(cwm*4, 0, cwm*5, 0, cwm*6, 0).command;
						_t.pointArray[index][14] = _t.graphicArray[index].graphics.bezierCurveTo(cwm*7, 0, cwm*8, 0, cwm*9, 0).command;
						_t.pointArray[index][15] = _t.graphicArray[index].graphics.bezierCurveTo(cwm*10, 0, cwm*11, 0, cwm*12, 0).command;

						_t.pointArray[index][17] = _t.graphicArray[index].graphics.lineTo(_t.cw, _t.ch*0.5).command;

						_t.graphicArray[index].set({
							x        : 0,
							y        : -_t.ch,
							// y        : 0,
							scaleX: 1.0,
							scaleY: 1.0
						});
						break;


					case "type04":
						_t.bgArray[index].graphics.beginFill("#ffb000").drawRect(0,0,_t.cw,_t.ch);
						_t.pointArray[index] = [];

						cwm = _t.cw/9;
						

						_t.pointArray[index][0] = _t.graphicArray[index].graphics.moveTo(0,_t.ch*0.5).command;
						_t.pointArray[index][1] = _t.graphicArray[index].graphics.lineTo(_t.cw, _t.ch*0.5).command;
						_t.pointArray[index][2] = _t.graphicArray[index].graphics.lineTo(_t.cw, _t.ch*0.55).command;

						_t.pointArray[index][3] = _t.graphicArray[index].graphics.bezierCurveTo(cwm*8, _t.ch*0.75, cwm*7, _t.ch*0.52, cwm*6, _t.ch*0.65).command;
						_t.pointArray[index][4] = _t.graphicArray[index].graphics.bezierCurveTo(cwm*5, _t.ch*0.80, cwm*4, _t.ch*0.65, cwm*3, _t.ch*0.85).command;
						_t.pointArray[index][5] = _t.graphicArray[index].graphics.bezierCurveTo(cwm*2, _t.ch*1.00, cwm*1, _t.ch*0.96, 0, _t.ch*0.95).command;

						_t.pointArray[index][6] = _t.graphicArray[index].graphics.closePath().command;
						
						_t.pointArray[index][7] = _t.graphicArray[index].graphics.moveTo(0,_t.ch*0.5).command;
						_t.pointArray[index][8] = _t.graphicArray[index].graphics.lineTo(0, _t.ch*0).command;
						_t.pointArray[index][9] = _t.graphicArray[index].graphics.bezierCurveTo(cwm*1, _t.ch*0, cwm*2, _t.ch*0, cwm*3, _t.ch*0).command;
						_t.pointArray[index][10] = _t.graphicArray[index].graphics.bezierCurveTo(cwm*4, _t.ch*0, cwm*5, _t.ch*0, cwm*6, _t.ch*0).command;
						_t.pointArray[index][11] = _t.graphicArray[index].graphics.bezierCurveTo(cwm*7, _t.ch*0, cwm*8, _t.ch*0, cwm*9, _t.ch*0).command;

						_t.pointArray[index][12] = _t.graphicArray[index].graphics.lineTo(_t.cw, _t.ch*0.5).command;
						_t.pointArray[index][13] = _t.graphicArray[index].graphics.closePath().command;

						_t.graphicArray[index].set({
							x        : 0,
							y        : -_t.ch,
							scaleX: 1.0,
							scaleY: 1.0
						});
						break;

					case "type05":
						_t.bgArray[index].graphics.beginFill("#e65024").drawRect(0,0,_t.cw,_t.ch);
						_t.pointArray[index] = [];

						chm = _t.ch/6;

						_t.pointArray[index][0] = _t.graphicArray[index].graphics.moveTo(_t.cw*0.5, 0).command;
						_t.pointArray[index][1] = _t.graphicArray[index].graphics.lineTo(_t.cw*0.5, _t.ch).command;

						_t.pointArray[index][2] = _t.graphicArray[index].graphics.lineTo(_t.cw*0.15, _t.ch).command;
						_t.pointArray[index][3] = _t.graphicArray[index].graphics.bezierCurveTo(_t.cw*0.15, chm*4, _t.cw*0.35, chm*5, _t.cw*0.25, chm*3).command;
						_t.pointArray[index][4] = _t.graphicArray[index].graphics.bezierCurveTo(_t.cw*0.18, chm*1, _t.cw*0.45, chm*2, _t.cw*0.4, 0).command;

						_t.pointArray[index][5] = _t.graphicArray[index].graphics.closePath().command;


						_t.pointArray[index][6] = _t.graphicArray[index].graphics.moveTo(_t.cw*0.5, 0).command;

						_t.pointArray[index][7] = _t.graphicArray[index].graphics.lineTo(_t.cw, 0).command;
						_t.pointArray[index][8] = _t.graphicArray[index].graphics.bezierCurveTo(_t.cw, chm*1, _t.cw, chm*2, _t.cw, chm*3).command;
						_t.pointArray[index][9] = _t.graphicArray[index].graphics.bezierCurveTo(_t.cw, chm*4, _t.cw, chm*5, _t.cw, chm*6).command;
						_t.pointArray[index][10] = _t.graphicArray[index].graphics.lineTo(_t.cw*0.5, _t.ch).command;

						_t.pointArray[index][11] = _t.graphicArray[index].graphics.closePath().command;
						
						_t.graphicArray[index].set({
							x        : _t.cw,
							y        : 0,
							scaleX: 1.0,
							scaleY: 1.0
						});
						break;
				}

				_t.containerArray[index].set({
					mask : _t.graphicArray[index]
				});
				_t.imageArray[index].x = _t.stage.canvas.width/2;
				_t.imageArray[index].y = _t.stage.canvas.height/2;

				_t.imageArray[index].regX =  val.width / 2;
				_t.imageArray[index].regY = val.height / 2;
			});
		}
		resize();
		window.addEventListener("resize", resize);
		
	}
	type01_start() {
		let _t = this;
		_t.cw = _t.stage.canvas.width*1.5;
		_t.ch = _t.stage.canvas.height*1.5;
		createjs.Tween.get(_t.graphicArray[0], {override:true})
			.to({x:-_t.cw}, 0)
			.to({x:0}, 1200, createjs.Ease.cubicOut);

		createjs.Tween.get(_t.pointArray[0][1], {override:true})
			.to({x:_t.cw*0.6}, 0)
			.to({x:_t.cw}, 1400, createjs.Ease.cubicOut);
		createjs.Tween.get(_t.pointArray[0][2], {override:true})
			.to({cp1x: _t.cw*0.7, cp2x: _t.cw*0.65, x:_t.cw*0.75}, 0)
			.to({cp1x: _t.cw, cp2x: _t.cw, x:_t.cw}, 1200, createjs.Ease.cubicOut);
		createjs.Tween.get(_t.pointArray[0][3], {override:true})
			.to({cp1x: _t.cw*0.85, cp2x: _t.cw*0.7, x:_t.cw*0.85}, 0)
			.to({cp1x: _t.cw, cp2x: _t.cw, x:_t.cw}, 1100, createjs.Ease.cubicOut);
		createjs.Tween.get(_t.pointArray[0][4], {override:true})
			.to({cp1x: _t.cw*1.05}, 0)
			.to({cp1x: _t.cw}, 600, createjs.Ease.cubicOut);
	}
	type01_end() {
		let _t = this;
		
		createjs.Tween.get(_t.graphicArray[0], {override:true})
			.to({x:0}, 0)
			.to({x:_t.cw}, 1400, createjs.Ease.cubicOut);

		createjs.Tween.get(_t.pointArray[0][8], {override:true})
			.to({x:0}, 0)
			.wait(100)
			.to({x:_t.cw*0.4}, 1000, createjs.Ease.cubicOut)
			.to({x:0}, 0);
		createjs.Tween.get(_t.pointArray[0][9], {override:true})
			.to({cp1x: 0, cp2x: 0, x:0}, 0)
			.wait(100)
			.to({cp1x: _t.cw*0.3, cp2x: _t.cw*0.35, x:_t.cw*0.25}, 1200, createjs.Ease.cubicOut)
			.to({cp1x: 0, cp2x: 0, x:0}, 0);
		createjs.Tween.get(_t.pointArray[0][10], {override:true})
			.to({cp1x: 0, cp2x: 0, x:0}, 0)
			.wait(100)
			.to({cp1x: _t.cw*0.15, cp2x: _t.cw*0.3, x:_t.cw*0.15}, 1300, createjs.Ease.cubicOut)
			.to({cp1x: 0, cp2x: 0, x:0}, 0);
		createjs.Tween.get(_t.pointArray[0][11], {override:true})
			.to({cp1x: 0}, 0)
			.wait(100)
			.to({cp1x: _t.cw*0.05}, 2000, createjs.Ease.cubicOut)
			.to({cp1x: 0}, 0);
	}
	type02_start() {
		let _t = this;
		_t.cw = _t.stage.canvas.width*1.5;
		_t.ch = _t.stage.canvas.height*1.5;
		createjs.Tween.get(_t.graphicArray[1], {override:true})
			.to({y:_t.ch}, 0)
			.to({y:0}, 1200, createjs.Ease.cubicOut);
		createjs.Tween.get(_t.pointArray[1][1], {override:true})
			.to({y:_t.ch*0.3}, 0)
			.to({y:0}, 1400, createjs.Ease.cubicOut);
		createjs.Tween.get(_t.pointArray[1][2], {override:true})
			.to({cp1y: _t.ch*0.1, cp2y: _t.ch*0.22, y:_t.ch*0.2}, 0)
			.to({cp1y: 0, cp2y: 0, y:0}, 1200, createjs.Ease.cubicOut);
		createjs.Tween.get(_t.pointArray[1][3], {override:true})
			.to({cp1y: _t.ch*0.2, cp2y: 0, y:_t.ch*0.07}, 0)
			.to({cp1y: 0, cp2y: 0, y:0}, 1200, createjs.Ease.cubicOut);
	}
	type02_end() {
		let _t = this;
		createjs.Tween.get(_t.graphicArray[1], {override:true})
			.to({y:0}, 0)
			.to({y:-_t.ch}, 1200, createjs.Ease.cubicOut);

		createjs.Tween.get(_t.pointArray[1][7], {override:true})
			.to({y:_t.ch}, 0)
			.to({y:_t.ch*0.7}, 1200, createjs.Ease.cubicOut)
			.to({y:_t.ch}, 0);
		createjs.Tween.get(_t.pointArray[1][8], {override:true})
			.to({cp1y: _t.ch, cp2y: _t.ch, y:_t.ch}, 0)
			.to({cp1y: _t.ch*0.9, cp2y: _t.ch*0.78, y:_t.ch*0.8}, 1200, createjs.Ease.cubicOut)
			.to({cp1y: _t.ch, cp2y: _t.ch, y:_t.ch}, 0);
		createjs.Tween.get(_t.pointArray[1][9], {override:true})
			.to({cp1y: _t.ch, cp2y: _t.ch, y:_t.ch}, 0)
			.to({cp1y: _t.ch*0.8, cp2y: _t.ch, y:_t.ch*0.93}, 1200, createjs.Ease.cubicOut)
			.to({cp1y: _t.ch, cp2y: _t.ch, y:_t.ch}, 0);
	}
	type03_start() {
		let _t = this;
		_t.cw = _t.stage.canvas.width*1.5;
		_t.ch = _t.stage.canvas.height*1.5;
		createjs.Tween.get(_t.graphicArray[2], {override:true})
			.to({y:-_t.ch}, 0)
			.to({y:0}, 1500);

		createjs.Tween.get(_t.pointArray[2][2], {override:true})
			.to({y:_t.ch*0.4}, 0)
			.wait(600)
			.to({y:_t.ch*0.6}, 600)
			.to({y:_t.ch}, 800, createjs.Ease.cubicOut);
		createjs.Tween.get(_t.pointArray[2][3], {override:true})
			.to({cp1y: _t.ch*0.4, cp2y: _t.ch*0.4, y:_t.ch*0.4}, 0)
			.wait(600)
			.to({cp1y: _t.ch*0.52, cp2y: _t.ch*0.75, y:_t.ch*0.55}, 600)
			.to({cp1y: _t.ch, cp2y: _t.ch, y:_t.ch}, 800, createjs.Ease.cubicOut);
			
		createjs.Tween.get(_t.pointArray[2][4], {override:true})
			.to({cp1y: _t.ch*0.4, cp2y: _t.ch*0.4, y:_t.ch*0.4}, 0)
			.wait(600)
			.to({cp1y: _t.ch*0.4, cp2y: _t.ch*0.65, y:_t.ch*0.55}, 600)
			.to({cp1y: _t.ch, cp2y: _t.ch, y:_t.ch}, 800, createjs.Ease.cubicOut);
		createjs.Tween.get(_t.pointArray[2][5], {override:true})
			.to({cp1y: _t.ch*0.4, cp2y: _t.ch*0.4, y:_t.ch*0.4}, 0)
			.wait(600)
			.to({cp1y: _t.ch*0.45, cp2y: _t.ch*0.8, y:_t.ch*0.65}, 600)
			.to({cp1y: _t.ch, cp2y: _t.ch, y:_t.ch}, 800, createjs.Ease.cubicOut);
		createjs.Tween.get(_t.pointArray[2][6], {override:true})
			.to({cp1y: _t.ch*0.4, cp2y: _t.ch*0.4, y:_t.ch*0.4}, 0)
			.wait(600)
			.to({cp1y: _t.ch*0.40, cp2y: _t.ch*0.8, y:_t.ch*0.55}, 600)
			.to({cp1y: _t.ch, cp2y: _t.ch, y:_t.ch}, 800, createjs.Ease.cubicOut);
	}
	type03_end() {
		let _t = this;
		createjs.Tween.get(_t.graphicArray[2], {override:true})
			.to({y:0}, 0)
			.to({y:_t.ch}, 1000);

		createjs.Tween.get(_t.pointArray[2][11], {override:true})
			.to({y:0}, 0)
			.to({y:_t.ch*0.4}, 600)
			.wait(500)
			.to({y:0}, 0);
		createjs.Tween.get(_t.pointArray[2][12], {override:true})
			.to({y:0, cp1y:0, cp2y:0}, 0)
			.to({cp1y: _t.ch*0.48, cp2y: _t.ch*0.25, y:_t.ch*0.45}, 600)
			.wait(500)
			.to({y:0, cp1y:0, cp2y:0}, 0);
		createjs.Tween.get(_t.pointArray[2][13], {override:true})
			.to({y:0, cp1y:0, cp2y:0}, 0)
			.to({cp1y: _t.ch*0.6, cp2y: _t.ch*0.35, y:_t.ch*0.45}, 600)
			.wait(500)
			.to({y:0, cp1y:0, cp2y:0}, 0);
		createjs.Tween.get(_t.pointArray[2][14], {override:true})
			.to({y:0, cp1y:0, cp2y:0}, 0)
			.to({cp1y: _t.ch*0.55, cp2y: _t.ch*0.2, y:_t.ch*0.35}, 600)
			.wait(500)
			.to({y:0, cp1y:0, cp2y:0}, 0);
		createjs.Tween.get(_t.pointArray[2][15], {override:true})
			.to({y:0, cp1y:0, cp2y:0}, 0)
			.to({cp1y: _t.ch*0.6, cp2y: _t.ch*0.2, y:_t.ch*0.45}, 600)
			.wait(500)
			.to({y:0, cp1y:0, cp2y:0}, 0);
	}
	type04_start() {
		let _t = this;
		_t.cw = _t.stage.canvas.width*1.5;
		_t.ch = _t.stage.canvas.height*1.5;
		createjs.Tween.get(_t.graphicArray[3], {override:true})
			.to({y:-_t.ch}, 0)
			.to({x:0, y:0}, 1000, createjs.Ease.cubicOut);
		createjs.Tween.get(_t.pointArray[3][2], {override:true})
			.to({y:_t.ch*0.55}, 0)
			.wait(300)
			.to({y:_t.ch}, 1500, createjs.Ease.cubicOut);
		createjs.Tween.get(_t.pointArray[3][3], {override:true})
			.to({y:_t.ch*0.65, cp1y:_t.ch*0.75, cp2y:_t.ch*0.52}, 0)
			.wait(300)
			.to({y:_t.ch, cp1y:_t.ch, cp2y:_t.ch}, 1500, createjs.Ease.cubicOut);
		createjs.Tween.get(_t.pointArray[3][4], {override:true})
			
			.to({y:_t.ch*0.85, cp1y:_t.ch*0.80, cp2y:_t.ch*0.65}, 0)
			.wait(300)
			.to({y:_t.ch, cp1y:_t.ch, cp2y:_t.ch}, 1500, createjs.Ease.cubicOut);
		createjs.Tween.get(_t.pointArray[3][5], {override:true})
			.to({y:_t.ch*1.00, cp1y:_t.ch*0.96, cp2y:_t.ch*0.95}, 0)
			.wait(300)
			.to({y:_t.ch, cp1y:_t.ch, cp2y:_t.ch}, 1500, createjs.Ease.cubicOut);
	}
	type04_end() {
		let _t = this;
		createjs.Tween.get(_t.graphicArray[3], {override:true})
			.to({y:0}, 0)
			.to({y:_t.ch}, 1000, createjs.Ease.cubicIn);
		createjs.Tween.get(_t.pointArray[3][8], {override:true})
			.to({y:0}, 0)
			.to({y:_t.ch*0.45}, 1500, createjs.Ease.cubicOut)
			.wait(500)
			.to({y:0}, 0);
		createjs.Tween.get(_t.pointArray[3][9], {override:true})
			.to({y:0, cp1y:0, cp2y:0}, 0)
			.to({cp1y: _t.ch*0.25, cp2y: _t.ch*0.48, y:_t.ch*0.35}, 1500, createjs.Ease.cubicOut)
			.wait(500)
			.to({y:0, cp1y:0, cp2y:0}, 0);
		createjs.Tween.get(_t.pointArray[3][10], {override:true})
			.to({y:0, cp1y:0, cp2y:0}, 0)
			.to({cp1y: _t.ch*0.20, cp2y: _t.ch*0.35, y:_t.ch*0.15}, 1500, createjs.Ease.cubicOut)
			.wait(500)
			.to({y:0, cp1y:0, cp2y:0}, 0);
		createjs.Tween.get(_t.pointArray[3][11], {override:true})
			.to({y:0, cp1y:0, cp2y:0}, 0)
			.to({cp1y: _t.ch*0, cp2y: _t.ch*0.04, y:_t.ch*0.05}, 1500, createjs.Ease.cubicOut)
			.wait(500)
			.to({y:0, cp1y:0, cp2y:0}, 0);
	}
	type05_start() {
		let _t = this;
		_t.cw = _t.stage.canvas.width*1.5;
		_t.ch = _t.stage.canvas.height*1.5;
		createjs.Tween.get(_t.graphicArray[4], {override:true})
			.to({x:_t.cw}, 0)
			.to({x:0}, 1500, createjs.Ease.cubicInOut);
		createjs.Tween.get(_t.pointArray[4][2], {override:true})
			.to({x:_t.cw*0.15}, 0)
			.to({x:0}, 1500, createjs.Ease.cubicInOut);
		createjs.Tween.get(_t.pointArray[4][3], {override:true})
			.to({cp1x: _t.cw*0.15, cp2x: _t.cw*0.35, x:_t.cw*0.25}, 0)
			.to({cp1x: 0, cp2x: 0, x:0}, 1500, createjs.Ease.cubicInOut);
		createjs.Tween.get(_t.pointArray[4][4], {override:true})
			.to({cp1x: _t.cw*0.18, cp2x: _t.cw*0.45, x:_t.cw*0.4}, 0)
			.to({cp1x: 0, cp2x: 0, x:0}, 1500, createjs.Ease.cubicInOut);
	}
	type05_end() {
		let _t = this;
		createjs.Tween.get(_t.graphicArray[4], {override:true})
			.to({x:0}, 0)
			.to({x:-_t.cw}, 1500, createjs.Ease.cubicInOut);
		createjs.Tween.get(_t.pointArray[4][7], {override:true})
			.to({x:_t.cw}, 0)
			.to({x:_t.cw*0.85}, 1500, createjs.Ease.cubicInOut)
			.to({x:_t.cw}, 0);
		createjs.Tween.get(_t.pointArray[4][8], {override:true})
			.to({cp1x: _t.cw, cp2x: _t.cw, x:_t.cw}, 0)
			.to({cp1x: _t.cw*0.85, cp2x: _t.cw*0.65, x:_t.cw*0.75}, 1500, createjs.Ease.cubicInOut)
			.to({cp1x: _t.cw, cp2x: _t.cw, x:_t.cw}, 0);
		createjs.Tween.get(_t.pointArray[4][9], {override:true})
			.to({cp1x: _t.cw, cp2x: _t.cw, x:_t.cw}, 0)
			.to({cp1x: _t.cw*0.85, cp2x: _t.cw*0.55, x:_t.cw*0.6}, 1500, createjs.Ease.cubicInOut)
			.to({cp1x: _t.cw, cp2x: _t.cw, x:_t.cw}, 0);
	}
}
