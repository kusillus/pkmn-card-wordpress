const path = require('path')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename:'bundle.js',
		publicPath: '/dist'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: { presets: ['es2015']}
				}
			},
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
			}

		]
	}
	// devServer: {
	// 	contentBase: path.join(__dirname, './'),
	// 	compress: true,
	// 	port: 9000
	// }
};