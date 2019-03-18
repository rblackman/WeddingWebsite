const path = require("path");

module.exports = {
	entry: {
		hello: path.join(__dirname, '/ts/hello.tsx'),
	},
	output: {
		path: path.resolve(__dirname, "js"),
		filename: "[name].js",
		sourceMapFilename: "[name].map",
		library: "[name]",
		libraryTarget: "var"
	},
	module: {
		rules: [
			{ test: /\.tsx?$/, loader: "awesome-typescript-loader" },
			{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
			{
				test: /\.scss$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					},
					{
						loader: "sass-loader"
					}
				]
			},
			{
				test: /\.(png|jp(e*)g|svg)$/,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 10000, // Convert images < 8kb to base64 strings
							name: "images/[hash]-[name].[ext]"
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".scss"]
	},
	devtool: "source-map",
	context: __dirname,
	target: "web"
};
