
import webpack from "webpack";
import path from "path";

import {buildWebpack} from "./config/build/buildWebpack";
import type {BuildPaths} from "./config/build/types/types";
import type {BuildMode} from "./config/build/types/types";
import type {BuildPlatform} from "./config/build/types/types";

// type Mode = 'production' | 'development';

interface EnvVariables {
  mode: BuildMode,
  port: number,
  platform: BuildPlatform
}


export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    output: path.resolve(__dirname, "build"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  }


  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths: paths,
    platform: env.platform ?? 'desktop',
  })

return config;
}
