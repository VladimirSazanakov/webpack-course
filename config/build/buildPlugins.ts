import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, {Configuration, DefinePlugin} from "webpack";
// import path from "path";
import {BuildOptions} from "./types/types"

export function buildPlugins(options: BuildOptions): Configuration['plugins']{
  return [
    // new HtmlWebpackPlugin(),
    new HtmlWebpackPlugin({template: options.paths.html}),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new DefinePlugin({
      __PLATFORM__: JSON.stringify(options.platform),
    }),
  ]
}
