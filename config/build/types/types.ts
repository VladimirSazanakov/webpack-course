export interface BuildPaths {
    entry: string;
    html: string;
    output: string;
    src: string;
}

export type BuildMode = 'production' | 'development';
export type BuildPlatform = 'modile' | 'desktop';

export interface BuildOptions {
  port: number,
  paths: BuildPaths,
  mode: BuildMode,
  platform: BuildPlatform,

}
