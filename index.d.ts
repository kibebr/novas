declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg'
declare module '*.gif'
declare module download {
  image(options: Options): Promise<{ filename: string }>;
}
