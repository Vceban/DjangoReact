module.exports = {
	module: {
		rules:[
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
      		
      		{
        		test: /\.css$/i,
        		use: ['style-loader', 'css-loader'],
      		},

      		{
      			test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
      			use: ['url-loader?limit=100000' ]
  			},

			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		]
	}
}