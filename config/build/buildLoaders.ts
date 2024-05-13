import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {ModuleOptions} from "webpack";
import {BuildOptions} from "./types/types"

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {

  const isDev = options.mode === 'development';

  const assetLoader = {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  }

  const cssLoaderWithModule = {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
        },
    },
  }

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [MiniCssExtractPlugin.loader, cssLoaderWithModule, "sass-loader"],
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const babelLoader = {
        test: /\.m?js|.tsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript',
              ['@babel/preset-react', {
                runtime: 'automatic'
              }]
            ]
          }
        }
      }

  return [
    assetLoader,
    scssLoader,
    // tsLoader,
    babelLoader,
  ]

}
