var path = require('path')
var webpack = require('webpack')
process.env.NODE_ENV === 'libProduction' ? flag = true : flag = false
module.exports = {
  entry: flag ? "./packages/index.js" : "./examples/main.js",
  output: {
    // 打包文件的生成路径
    path: path.resolve(__dirname, flag ? "./lib" : "./dist"),
    publicPath: flag ? "/lib/" : "/dist/",
    // 打包后生成的文件名
    filename: flag ? "hrssc-components.js" : "build.js",
    /**
     * library指定的就是你使用require时引入的模块名
     * 这里便是require(“hrssc-components”)
     */
    library: flag ? "hrssc-components" : "",
    /**
     * libraryTarget可以指定打包文件中代码的模块化方式，默认为var，常见有如下几种:
     * commonjs/commonjs2: 将你的library暴露为CommonJS模块
     * amd: 将你的library暴露为amd模块
     * umd: 将你的library暴露为所有的模块定义下都可运行的方式
     * 其中AMD和UMD需要指定library，如果不声明组件库则不能正常运行,
     * 这是为了在浏览器上通过script标签加载时，用AMD模块方式输出的组件库可以有明确的模块名
     */
    libraryTarget: flag ? "umd" : "var",
    /**
     * 当使用了 libraryTarget: "umd"，
     * 设置umNamedDefine为true时，
     * 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define。
     */
    umdNamedDefine: flag ? true : false,
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
