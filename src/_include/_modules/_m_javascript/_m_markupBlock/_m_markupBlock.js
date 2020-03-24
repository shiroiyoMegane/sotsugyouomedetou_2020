export default function() {
	// マークアップアコーディオン用
	function markupBlock() {

		function init() {
			let $target = $(".l-markupBlock");
			replaceWord($target,'.pug+.source code', '                        ')
			replaceWord($target,'.js+.source code', '                        ')
		}
		function replaceAll(_f_str, _f_beforeStr, _f_afterStr){
			let reg = new RegExp(_f_beforeStr, "g");
			return _f_str.replace(reg, _f_afterStr);
		}
		function replaceWord(_f_$tg, _f_tg, _f_word) {
			let _t = this;
			let $str;
			_f_$tg.each(function(){
				$str = $(this).find(_f_tg).text();
				$str = replaceAll($str, _f_word, '');
				$(this).find(_f_tg).text($str);
			});
		}
		init();
	}

	function memoSet01() {
		let $target = $(".c-memoSet01"),
			tab = '.group.is-before .tab li',
			content = '.group.is-primary';

		$target.on('click',tab, function(){
			$(this).parents(".c-memoSet01").find(tab).removeClass('is-current');
			$(this).parents(".c-memoSet01").find(content).removeClass('is-current');
			$(this).addClass('is-current');
			$(this).parents(".c-memoSet01").find(content).eq($(this).index()).addClass('is-current');
		});
	}
	markupBlock();
	memoSet01();
}
