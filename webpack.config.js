const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development', // 'production' para otimização
  entry: './src/index.js', // Arquivo principal
  output: {
    path: path.resolve(__dirname, 'dist'), // Diretório de saída
    filename: 'bundle.js', // Nome do arquivo de saída
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'], // Extensões de arquivo
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Para arquivos .js e .jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Transpila o código
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/, // Para arquivos .css
        use: [
          'style-loader', // Adiciona CSS ao DOM
          'css-loader',   // Interpreta @import e url()
        ],
      },
      {
        test: /\.scss$/, // Para arquivos .scss
        use: [
          'style-loader', // Adiciona CSS ao DOM
          'css-loader',   // Interpreta @import e url()
          'sass-loader',  // Compila Sass para CSS
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Template HTML
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css', // Nome do arquivo CSS
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Diretório de saída
    },
    compress: true,
    port: 3000,
    historyApiFallback: true, // Suporte a navegação em SPA
  },
};
