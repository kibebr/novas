import { VercelRequest, VercelResponse } from '@vercel/node'

export default (_: VercelRequest, res: VercelResponse): void => {
  res.status(200).send('Hello, world!')
}
