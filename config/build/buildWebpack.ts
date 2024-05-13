import webpack from "webpack";
// import type {Configuration as DevServerConfiguration} from "webpack-dev-server";
import path from "path";
// import HtmlWebpackPlugin from "html-webpack-plugin";
// import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {buildDevServer} from "./buildDevServer";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {BuildOptions} from "./types/types"

type Mode = 'production' | 'development';

interface EnvVariables {
  mode: Mode,
  port: number,
}

export function buildWebpack(options: BuildOptions):  webpack.Configuration {
  const isDev = options.mode === 'development';

return {
    mode: options.mode ?? 'development',
    entry: {
      main: options.paths.entry,
    },
    output: {
      path: options.paths.output,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? "inline-source-map" : false,
    devServer: buildDevServer(options),

  }
}
