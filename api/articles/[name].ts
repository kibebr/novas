import { VercelRequest, VercelResponse } from '@vercel/node'
import { Category } from '../../domain/Category'
import { join } from 'path'
import { read } from '../../utils/File'
import * as J from 'fp-ts/Json'
import * as TE from 'fp-ts/TaskEither'
import * as F from 'fp-ts/function'
import * as E from 'fp-ts/Either'
import * as A from 'fp-ts/Array'
import * as STDRE from 'fp-ts-std/Record'
import * as STDS from 'fp-ts-std/String'
import * as R from 'fp-ts-ramda'
import * as t from 'io-ts'

const asString = (s: unknown): string => s as string

const ArticleV = t.type({
  title: t.string
})

const CategoryV = t.type({
  articles: t.array(ArticleV)
})

const Response = t.record(t.string, CategoryV)

type Article = t.TypeOf<typeof ArticleV>

const filterWithTitle = (t: string): (xs: Article[]) => Article[] => A.filter(
  F.flow(
    R.prop('title'),
    STDS.toLower,
    STDS.contains(F.pipe(t, STDS.toLower))
  )
)

export default async (req: VercelRequest, res: VercelResponse): Promise<void> => {
  const { name } = req.query

  const findArticle = F.pipe(
    join(__dirname, 'categories.json'),
    read,
    TE.map(asString),
    TE.chainEitherKW(F.flow(J.parse, E.chainW(Response.decode))),
    TE.map(F.flow(STDRE.values, A.chain(R.prop('articles')))),
    TE.map(filterWithTitle(name as string))
  )

  const result = await findArticle()

  if (result._tag === 'Left') {
    console.error(result.left)
    res.status(500).send('Internal error.')
  } else {
    res.status(200).send(result.right)
  }
}
