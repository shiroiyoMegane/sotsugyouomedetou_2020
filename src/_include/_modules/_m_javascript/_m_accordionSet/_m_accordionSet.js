// import globalSet from '../_m_globalSet/_m_globalSet.js';
// globalSet();
// let _g = window.GLOBAL;

window.C_ACCORDION = {
	TARGET: null,
	DEFAULT: {
		target: '.js-accordion',
		parentName: '.js-accordion-parent', // クリック要素
		childName: '.js-accordion-child', // アコーディオン要素
		speed: 300, // 速度
		timing: 'ease', // タイミング
		linkage: true, // アコーディオン連動
		collapsible: true, // 折りたたみ有効
		setBefore: function() {},
		setAfter: function() {},
		animationAfter: function() {},
	},
	OPTION: null,
	G_ARRAY: {},
	init: function(op){
		let _c = this;
			_c.OPTION = Object.assign(_c.DEFAULT, op);
			_c.TARGET = document.querySelectorAll(_c.OPTION.target);

		[].slice.call(_c.TARGET).forEach(function(event, index) {
			_c.G_ARRAY[index] = new accordionWrap({
				target: event,
				op:_c.OPTION,
			});
			_c.G_ARRAY[index].set();
		});
	}
}

class accordionWrap {
	constructor(op) {
		let _t = this;
			_t.tg = op.target;
			_t.op = op.op;
			_t.targetParents = _t.tg.querySelectorAll(_t.op.parentName);
			_t.arrayLength = _t.targetParents.length;
	}
	set() {
		let _t = this;
			_t.fArray = {};
			[].slice.call(_t.targetParents).forEach(function(event, index) {
				_t.fArray[index] = new accordionChild({
					target:event,
					array:_t.fArray,
					length:_t.arrayLength,
					op:_t.op
				});
				_t.fArray[index].set();
			});
	}
}

class accordionChild {
	constructor(op) {
		let _t = this;
			_t.targetParent = op.target;
			_t.targetParent.style.cursor = 'pointer';
			_t.targetChild = op.target.nextElementSibling;
			_t.targetChild.style.overflow = 'hidden';
			_t.targetChild.style.transitionProperty = 'height';
			_t.op = op.op;
			_t.targetChild.style.transitionDuration = _t.op.speed + 'ms';
			_t.targetChild.style.transitionTimingFunction = _t.op.timing;
			_t.clientH = _t.targetChild.clientHeight;
			_t.currentFlag = false;
			_t.array = op.array;
			_t.arrayLength = op.length;
	}
	set() {
		let _t = this;

		_t.op.setBefore();

		(_t.targetParent.classList.contains("is-open")) ? _t.open(_t) : _t.close(_t) ;

		_t.targetParent.addEventListener('click',function(){
			_t.lastH = _t.targetChild.style.height;
			for(let i = 0; i < _t.arrayLength; i++) {
				_t.array[i].currentFlag = false;
			}

			_t.currentFlag = true;
			
			if(_t.lastH == '0px') {
				_t.open();
			} else if(_t.op.collapsible) {
				_t.close();
			}

			if(_t.op.linkage) {
				_t.linkage();
			}

		},false);

		
		_t.targetChild.addEventListener('transitionend', function() {
			if(_t.currentFlag == true) {
				_t.op.animationAfter();
			}
		},false);
		

		_t.op.setAfter();
	}
	open() { // 開く処理
		let _t = this;
			_t.targetChild.style.height = _t.clientH + 'px'
	}
	close() { // 閉じる処理
		let _t = this;
			_t.targetChild.style.height = '0px';
			_t.currentFlag = false;
	}
	linkage() { // アコーディオン連動
		let _t = this;
			_t.lastH = _t.targetChild.style.height;
		for(let i = 0; i < _t.arrayLength; i++) {
			if(_t.array[i].currentFlag == false) {
				_t.array[i].close();
			}
		}
	}
}

export default function(op) {
	window.C_ACCORDION.init(op);
	// _g.imageLoad(function(){
	// 	window.C_ACCORDION.init(op);
	// });
}

