export interface RGB {
  r: number
  g: number
  b: number
}

export const defaultRGB: RGB = {
  r: 0,
  g: 0,
  b: 0
}

export const hexToRgb = (h: string): RGB => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h)
  return result !== null
    ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
    : defaultRGB
}

export const showRGB = ({ r, g, b }: RGB): string => `rgb(${r}, ${g}, ${b})`

export const showRGBWithA = (a: number) => ({ r, g, b }: RGB): string => `rgba(${r}, ${g}, ${b}, ${a})`
