const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');


module.exports = {
	entry: {
		modules: [
			'react',
			'react-dom',
		],
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		library: '[name]',
	},
	// module: {
	// 	rules: [
	// 		//Aqui van los loaders
	// 		{
	// 			test: /\.js$/,
	// 			use: {
	// 				loader: 'babel-loader',
	// 				options:{
	// 					presets:['es2015', 'es2016', 'react']
	// 				}
	// 			}
	// 		},
	// 		{
	// 			test: /\.css$/,
	// 			use: ExtractTextPlugin.extract({
	// 				// ['style-loader', 'css-loader']
	// 				// fallback: "style-loader",
	// 				use:"css-loader"
	// 			})
	// 		},
	// 		{
	// 			test: /\.scss$/,
	// 			use: ExtractTextPlugin.extract({
	// 				// ['style-loader', 'css-loader']
	// 				// fallback: "style-loader",
	// 				use:["css-loader", "sass-loader"]
	// 			})
	// 		},
	// 		{
	// 			test: /\.(jpg|png|gif|jpeg|woff|eot|ttf|svg)$/,
	// 			use: {
	// 				loader: 'url-loader',
	// 				options: {
	// 					limit: 300000,
	// 				}
	// 			}
	// 		},
	// 		{
	// 			test: /\.json$/,
	// 			use: {
	// 				loader: 'json-loader',
	// 			}
	// 		},
	// 	]
	// },
	plugins: [
		//Aqui van los plugins
		// new ExtractTextPlugin("css/[name].css"),
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: 'vendor',
		// 	minchunks: Infinity,
		// })
		new webpack.DllPlugin({
			name: "[name]",
			path: path.join(__dirname, "[name]-manifest.json")
		})
	]
}