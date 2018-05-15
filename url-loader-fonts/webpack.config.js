const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src/js/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			//Aqui van los loaders
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options:{
						presets:['es2015', 'es2016']
					}
				}
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					// ['style-loader', 'css-loader']
					// fallback: "style-loader",
					use:"css-loader"
				})
			},
			{
				test: /\.(jpg|png|gif|jpeg|woff|eot|ttf|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 300000,
					}
				}
			},
		]
	},
	plugins: [
		//Aqui van los plugins
		new ExtractTextPlugin("css/[name].css")
	]
}