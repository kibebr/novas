import { NextApiHandler } from 'next'
import { Article } from '../../../domain/Article'
import { flow, pipe } from 'fp-ts/function'
import { values } from 'fp-ts-std/Record'
import { contains, toLower } from 'fp-ts-std/String'
import { chain, filter } from 'fp-ts/Array'
import { prop } from 'fp-ts-ramda'
import categories from '../../../fetchers/categories.preval'

const handler: NextApiHandler<Article[]> = (req, res) => {
  const articles: Article[] = pipe(
    categories,
    values,
    chain(prop('articles')),
    filter(flow(
      prop('title'),
      toLower,
      contains(req.query?.name as string)
    ))
  )
  res.status(200).send(articles)
}

export default handler
