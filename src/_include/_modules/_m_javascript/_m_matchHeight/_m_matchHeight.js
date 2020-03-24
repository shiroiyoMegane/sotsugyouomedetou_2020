
window.C_MATCH_HEIGHT = {
	ELM: null,
	DEFAULT: {
		className: '.js-matchHeight',
	},
	OPTION: null,
	ARRAY: [],
	ARRAY_LENGTH: 0,
	ARRAY_COUNT: 0,
	init: function(op){
		let _g = window.GLOBAL;
		let _c = this;
			_c.ELM = document.querySelectorAll(_c.DEFAULT.className);
			if(_c.ELM != null) {
				_c.OPTION = Object.assign(_c.DEFAULT, op);

				_c.arrayLengthSet();
				_g.resize(function(){
					_c.arrayLengthSet();
				});
				_g.scroll(function(){
					_c.arrayLengthSet();
				});
			}
	},
	arrayLengthSet: function(){
		let _c = this;
		let offTop = 0;
			_c.ELM = document.querySelectorAll(_c.DEFAULT.className);
			[].slice.call(_c.ELM).forEach(function(event, i) {
				//同じ位置に居なければ次の配列へ、同じなら配列の長さを追加
				if(offTop !== 0 && offTop !== event.getBoundingClientRect().top + window.pageYOffset) {
					_c.ARRAY_LENGTH++;
				}
				offTop = event.getBoundingClientRect().top + window.pageYOffset;
			});
			for(let i = 0; i <= _c.ARRAY_LENGTH; i++) {
				_c.ARRAY.push([]);
			}
			_c.arraySetFunc(_c.ARRAY);
	},
	arraySetFunc: function(){
		let _c = this;
		let offTop = 0;
			[].slice.call(_c.ELM).forEach(function(event, i) {
				//同じ位置に居なければ次の配列へ、同じなら配列に追加
				if(offTop !== 0 && offTop !== event.getBoundingClientRect().top + window.pageYOffset) {
					_c.ARRAY_COUNT++;
				}
				_c.ARRAY[_c.ARRAY_COUNT].push(event);
				offTop = event.getBoundingClientRect().top + window.pageYOffset;
			});
			_c.heightSetFunc();
	},
	heightSetFunc: function(){
		let _c = this;
		let height = 0;
			for(let i = 0; i <= _c.ARRAY_COUNT; i++) {
				height = 0;
				_c.ARRAY[i].forEach(function(event, index) {
					if (index === 0 || index % _c.ARRAY[i].length === 0) {

						//初期化
						for (let n = index; n <= index + index + _c.ARRAY[i].length - 1; n++) {
							_c.ARRAY[i][n].style.height = 'inherit';
						}

						//横並びの要素で一番高い高さを取得
						height = event.clientHeight;
						for (let n = index + 1; n <= index + _c.ARRAY[i].length - 1; n++) {
							if (height < _c.ARRAY[i][n].clientHeight) {
								height = _c.ARRAY[i][n].clientHeight;
							}
						}

						//高さを設定
						for (let n = index; n <= index + index + _c.ARRAY[i].length - 1; n++) {
							_c.ARRAY[i][n].style.height = height + "px" ;
						}
					}
				});
			}
	}
}

export default function(op) {
	window.C_MATCH_HEIGHT.init(op);
}

