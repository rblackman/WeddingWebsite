const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const dev = process.env.NODE_ENV !== 'production';

const HTMLIndexWebpackPluginConfig = new HTMLWebpackPlugin({
	template: 'src/html/index.html',
	filename: 'index.html',
	inject: true,
});
const HTMLRegistryWebpackPluginConfig = new HTMLWebpackPlugin({
	template: 'src/html/registry.html',
	filename: 'registry.html',
	inject: true,
});

const DefinePluginConfig = new webpack.DefinePlugin({
	'process.env.NODE_ENV': JSON.stringify('production'),
});

const indexPath = path.join(__dirname, '/src/ts/index.tsx');
const registryPath = path.join(__dirname, '/src/ts/registry.tsx');

module.exports = {
	devServer: {
		contentBase: path.join(__dirname, 'docs'),
		host: 'localhost',
		port: '3000',
		hot: true,
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
		historyApiFallback: true,
	},
	entry: dev ? ['react-hot-loader/patch', indexPath, registryPath] : [indexPath, registryPath],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'babel-loader',
			},
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader',
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader',
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader: 'url-loader',
				options: {
					limit: 10000,
				},
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, '/docs'),
	},
	mode: dev ? 'development' : 'production',
	plugins: dev
		? [HTMLIndexWebpackPluginConfig, HTMLRegistryWebpackPluginConfig, new webpack.HotModuleReplacementPlugin()]
		: [HTMLIndexWebpackPluginConfig, HTMLRegistryWebpackPluginConfig, DefinePluginConfig],
};
