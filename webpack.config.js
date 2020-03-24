const path = require('path');
const glob = require("glob");
const webpack = require('webpack');

const option = {
	srcDir: "src/",
	distDir: "dist/",
}

const entries = {};
glob.sync("**/*.js", {
	ignore: '**/_*.js',
	cwd: option.srcDir
	}).map(function (key) {
		// {key:value}の連想配列を生成
		// { **/*.js : './src/**/*.js' }という形式のobjectになる
		entries[key] = path.resolve(option.srcDir, key);
	}
);

const app = {
	mode: 'production',
	entry: entries,
	output: {
		filename: '[name]',// 出力ファイル名
		path: path.resolve(__dirname, option.distDir)//  出力ファイルのディレクトリ名
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/, //node_module除外
				use: [
						{
						loader: "babel-loader", // Babel を利用する
						options: {
							presets: [
							"@babel/preset-env"
							],
							root: path.resolve(__dirname, option.srcDir+'/js'),
						}
					}
				],
			},
			{
				test: /\.css/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							url: false
						}
					}
				],
			}
		]
	},
	plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};

module.exports = app;
