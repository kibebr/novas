import * as F from 'fp-ts/function'
import * as STDRE from 'fp-ts-std/Record'
import * as STDS from 'fp-ts-std/String'
import * as R from 'fp-ts-ramda'
import * as A from 'fp-ts/Array'
import { NextApiHandler } from 'next'
import { Article } from '../../../domain/Article'
import categories from '../../../fetchers/categories.preval'

const handler: NextApiHandler<Article[]> = (req, res) => {
  const articles: Article[] = F.pipe(
    categories,
    STDRE.values,
    A.chain(R.prop('articles')),
    A.filter(F.flow(
      R.prop('title'),
      STDS.toLower,
      STDS.contains(F.pipe(req.query?.name as string, STDS.toLower))
    ))
  )

  res.status(200).send(articles)
}

export default handler
