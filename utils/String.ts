export const capitalize = (s: string): string => s[0].toUpperCase() + s.substring(1)

export const getFilename = (str: string): string =>
  str.split(/[#?]/)[0].split('.').pop().trim()
