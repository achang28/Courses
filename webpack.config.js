/**
 * Created by albertwchang on 5/26/16.
 */
'use strict';

var Webpack = require('webpack');
var Path = require('path');

var baseConfig = {
	debug: true,
	devtool: 'cheap-module-eval-source-map',
	noInfo: true, // shows all files that are bundled
	entry: [
		'eventsource-polyfill', // necessary for hot reloading with IE
		'webpack-hot-middleware/client?reload=true', // note that it reloads the page if hot module reloading fails
		'./src/index' // refers to index.js file created
	],
	target: 'web', // has Webpack understand how to bundle for given target
	output: {
    /*
     Webpack does NOT generate physical files, instead if loads them into
     memory. It simulators the files' existence from a virtual 'dist' directory...
     */
		path: __dirname + '/dist',
		srcPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './src'
	},
	plugins: [
		new Webpack.HotModuleReplacementPlugin(), // allows browser to refresh up on detected changes
		new Webpack.NoErrorsPlugin() // keeps erros from breaking hot reloading experience
	],
	module: {
		loaders: [
			{test: /\.js$/, include: Path.join(__dirname, 'src'), loaders: ['babel']},
			{test: /(\.css)$/, loaders: ['style', 'css']},
			{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'}, // used by Bootstrap for fonts
			{test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'}, // used by Bootstrap for fonts
			{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'}, // used by Bootstrap for fonts
			{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'} // used by Bootstrap for fonts
		]
	}
};

module.exports = baseConfig;
