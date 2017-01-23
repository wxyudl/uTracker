const webpack = require('webpack');
module.exports = function(grunt) {
	grunt.initConfig({
		jshint: {
			all: ['core/**/*.js']
		},

		webpack: {
			dev: {
				entry: ['./core/app.js'],
				output: {
					path: './build',
					filename: 'utracker.bundle.js'
				},
				module: {
					loaders: [{
						test: /\.js$/,
						exclude: /node_modules/,
						loader: 'babel-loader',
						query: {
							presets: ['es2015']
						}
					}]
				},
				plugins: [
					new webpack.optimize.UglifyJsPlugin({
			  		compress: {
			  			warnings: false,
			  		},
			  		output: {
			  			comments: false,
			  		},
			  	})
			  ]
			}
		},

		watch: {
			scripts: {
				files: ['core/**/*.js'],
				tasks: ['jshint', 'webpack'],
				options: {
					spawn: false,
				},
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-webpack');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch']);
};
