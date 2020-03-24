const { src, dest, parallel, series, watch } = require('gulp');
const $ = require('./modules.js');
const fs = require('fs');

const option = {
	url: {
		src: 'src/', 
		dist: 'docs/', 
		js : 'js/',
		pug : 'pug/',
		css : 'css/',
		stylus : 'stylus/',
		images : 'images/',
		fonts : 'fonts/',
		iconfont : 'iconfont/',
		assets : 'assets/'
	},
	pugOption: {
		pretty : true,
		basedir : 'src/'
	},
	jsOption: {
		webpackConfig : require("./webpack.config"),
	},
	browserSyncOption: {
		port : 1580,
		virtualDomain : 'http://sample/',
		virtualDomainMode : false,
		phpMode : false,
	},
	iconFontOption: {
		fontName : 'myfont',
		className : 'is-iconFont',
	}
}

function pug() {
	let revision = $.crypto.randomBytes(8).toString('hex');
	return src([option.url.src + '**/*.pug', '!' + option.url.src + '**/_*.pug'])
	.pipe($.cache(pug))
	.pipe(
		$.plumber()
	)
	.pipe(
		$.pug(option.pugOption)
	)
	.pipe($.gulpIf(option.phpMode,
		$.rename({
			extname: '.php'
		})
	))
	.pipe(
		$.replace(/\.(js|css|gif|jpg|jpeg|png|svg|ico)\?rev/g, '.$1?rev='+revision)
	)
	.pipe(dest(option.url.dist))
	.pipe(
		$.browserSync.reload({
			stream: true,
			once: true
		})
	);
}

function stylus() {
	return src([option.url.src + '**/*.styl', '!' + option.url.src + '**/_*.styl'])
	.pipe(
		$.plumber()
	)
	.pipe(
		$.stylus()
	)
	.pipe(
		$.autoprefixer({
			browsers: ['last 2 version', 'iOS >= 8.1', 'Android >= 4.4'],
			cascade: false
		})
	)
	.pipe(
		$.pleeease({
			mqpacker: true,
			minifier: true,
		})
	)
	.pipe(
		$.cssTimeStamp(
			{
				useDate:true
			}
		)
	)
	.pipe(dest(option.url.dist))
	.pipe(
		$.browserSync.reload({
			stream: true,
			once: true
		})
	);
}

function js() {
	return src([option.url.src + '**/*.js', '!' + option.url.src + '**/_*.js'])
	.pipe(
		$.plumber()
	)
	.pipe(
		$.webpackStream(option.jsOption.webpackConfig, $.webpack)
	)
	.pipe(dest(option.url.dist))
	.pipe(
		$.browserSync.reload({
			stream: true,
			once: true
		})
	);
}

function jsVendor() {
	return src(
		[option.url.src + '**/_vendor/_v_jquery/' + '*.js', option.url.src + '**/_vendor/' + '**/*/*.js'],
	)
	.pipe(
		$.concat('vendor.js')
	)
	.pipe(dest(option.url.dist + option.url.assets + option.url.js))
	.pipe(
		$.browserSync.reload({
			stream: true,
			once: true
		})
	);
}


function imagemin() {
	return src( option.url.src + '**/*.+(jpg|jpeg|png|gif)' )
		.pipe(
			$.changed( option.url.dist + option.url.images )
		)
		.pipe(
			$.imagemin([
				$.imageminPng(),
				$.imageminJpg({
					min: 50,
					max: 95,
					quality:'high'
				}),
				$.imageminGif({
					interlaced: false,
					optimizationLevel: 3,
					colors:180
				})
			])
		)
		.pipe(dest( option.url.dist ))
		.pipe(
			$.browserSync.reload({
				stream: true,
				once: true
			})
		);
}

function svgmin() {
	return src( option.url.src + option.url.images + '**/*.+(svg)' )
		.pipe(
			$.changed( option.url.dist + option.url.images )
		)
		.pipe(
			$.svgmin()
		)
		.pipe(dest( option.url.dist + option.url.images ))
		.pipe(
			$.browserSync.reload({
				stream: true,
				once: true
			})
		);
}

function iconFont() {
	let iconfontUrl = option.url.src + option.url.assets + option.url.fonts + option.url.iconfont;
	return src([iconfontUrl + '**/*.svg'])
	.pipe($.iconfont({
		fontName: option.iconFontOption.fontName,
		prependUnicode: true,
		formats: ['ttf', 'eot', 'woff']
	}))
	.on('glyphs', function(glyphs) {
		src(iconfontUrl + '_template/iconfont.css')
			.pipe($.consolidate('lodash', {
				glyphs: glyphs.map(function(glyph) {
					return { name: glyph.name, codepoint: glyph.unicode[0].charCodeAt(0) }
				}),
				fontName: option.iconFontOption.fontName,
				fontPath: '../'+option.url.fonts+'iconfont/',
				className: option.iconFontOption.className
			}))
			.pipe(
				$.rename({
					basename: '_s_' + option.iconFontOption.fontName,
					extname: '.styl'
				})
			)
			.pipe(
				dest(option.url.src + '_include/_settings/_stylus/')
			);
		src(iconfontUrl + '_template/iconfont.css')
			.pipe($.consolidate('lodash', {
				glyphs: glyphs.map(function(glyph) {
					return { name: glyph.name, codepoint: glyph.unicode[0].charCodeAt(0) }
				}),
				fontName: option.iconFontOption.fontName,
				fontPath: '',
				className: option.iconFontOption.className
			}))
			.pipe(
				$.rename({
					basename: '_s_' + option.iconFontOption.fontName,
					extname: '.css'
				})
			)
			.pipe(
				dest(iconfontUrl + '_list/')
			);
		src(iconfontUrl + '_template/myfont.html')
			.pipe($.consolidate('lodash',  {
				glyphs: glyphs.map(function(glyph) {
					return { name: glyph.name, codepoint: glyph.unicode[0].charCodeAt(0) }
				}),
				fontName: option.iconFontOption.fontName,
				fontPath: '../'+option.url.fonts + option.url.iconfont,
				className: option.iconFontOption.className
			}))
			.pipe($.rename({ basename:'sample' }))
			.pipe(
				dest(iconfontUrl + '_list/')
			);
	})
	.pipe(
		dest(option.url.dist + option.url.assets + option.url.fonts + option.url.iconfont)
	)
	.pipe(
		dest(iconfontUrl + '_list/')
	)
	.pipe(
		$.browserSync.reload({
			stream: true,
			once: true
		})
	);
}

function bs() {
	if(option.browserSyncOption.virtualDomainMode) {
		$.browserSync.init({
			files: [option.url.src + '**/*.pug', '!' + option.url.src + '**/_*.pug'],
			proxy: option.browserSyncOption.virtualDomain,
			open: 'external'
		});
	} else {
		$.browserSync.init({
			port: option.browserSyncOption.port,
			server: {
				baseDir: option.url.dist
			},
			notify: true,
			xip: false
		});
	}
}

function clean() {
	return $.del([ option.url.dist ]);
}

function zip() {
	return src([option.url.src + '_include/_modules/*/*/', option.url.src + '_include/_components/*/*/', option.url.src + '_include/_layout/*/'], {base: option.url.src})
		.pipe(
			$.foreach(function(stream, file){
				var point = file.path.lastIndexOf('\\')+1;
				var fileName = file.path.substr(point);
				console.log(fileName);
				src([file.path + '/*.styl', file.path + '/*.pug'], {base: option.url.src})
					.pipe(
						$.zip(fileName+".zip")
					)
					.pipe(
						dest(option.url.dist + option.url.assets + "file/")
				);
				return stream;
			})
		);
}

function baseSrcZip() {
	return src(['baseSrc/**/*','baseSrc/.gitignore'])
		.pipe(
			$.zip("_b_baseSrc.zip")
		)
		.pipe(
			dest(option.url.dist + option.url.assets + "file/")
		);
}



exports.clean = clean;
var build = series(clean, parallel([imagemin, svgmin, iconFont, stylus, pug, js, jsVendor]));
exports.stylus = stylus;
exports.pug = pug;
exports.js = js;
exports.jsVendor = jsVendor;
exports.imagemin = imagemin;
exports.svgmin = svgmin;
exports.iconFont = iconFont;
exports.bs = bs;
exports.build = build;


exports.default = parallel([imagemin, svgmin, iconFont, stylus, pug, js, jsVendor, bs], () => {
	watch([option.url.src + '**/*.+(jpg|jpeg|png|gif)'], imagemin);
	watch([option.url.src + option.url.assets + option.url.image + '**/*.+(svg)'], svgmin);
	watch([option.url.src + option.url.assets + option.url.fonts + '**/*.+(svg)'], iconFont);
	watch([option.url.src + '**/*.pug'], pug);
	watch([option.url.src + '**/*.styl'], stylus);
	watch([option.url.src + '**/_vendor/' + '**/*.js'], jsVendor);
	watch([option.url.src + '**/*.js'], js);
});