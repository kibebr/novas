import fs from 'fs/promises'

export const downloadImage = async (url: string): Promise<Buffer> =>
  await fetch(url)
    .then(async (res) => await res.arrayBuffer())
    .then(Buffer.from)

export const saveImage = async (to: string, img: Buffer): Promise<void> => await fs.writeFile(to, img)
