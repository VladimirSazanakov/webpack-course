declare module '*.module.scss' {
interface IClassNames {
[className: string]: string
}
const classNames: IClassNames;
export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare const __PLATFORM__: 'mobile' | 'desktop'
