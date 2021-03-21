/* eslint-disable @typescript-eslint/no-floating-promises */
import * as F from 'fp-ts/function'
import * as TE from 'fp-ts/TaskEither'
import * as J from 'fp-ts/Json'
import * as t from 'io-ts'
import * as A from 'fp-ts/Array'
import * as R from 'fp-ts-ramda'
import * as STDR from 'fp-ts-std/Record'
import { saveImage, downloadImage } from '../image/ImageLoader'
import { read } from '../utils/File'

(async () => {
  const ArticleV = t.type({
    id: t.string,
    imgUrl: t.string
  })

  const CategoryV = t.type({
    articles: t.array(ArticleV)
  })

  const CategoriesResponseV = t.record(t.string, CategoryV)

  type Article = t.TypeOf<typeof ArticleV>

  const downloadAndSave = ({ id, imgUrl }: Article): TE.TaskEither<Error, void> => F.pipe(
    F.pipe(
      imgUrl,
      downloadImage
    ),
    TE.chain(({ extension, buffer }) => saveImage(`public/.images/${id}.${extension}`)(buffer))
  )

  const exec = F.pipe(
    read('./.tmp/categories.json'),
    TE.map((s) => s as string),
    TE.chainEitherK(J.parse),
    TE.chainEitherKW(CategoriesResponseV.decode),
    TE.map(F.flow(STDR.values, A.chain(R.prop('articles')))),
    TE.chainW(TE.traverseArray(downloadAndSave))
  )

  const res = await exec()

  if (res._tag === 'Left') {
    console.error(res.left)
    throw new Error(res.left as string)
  } else {
    console.log('Saved files.')
  }
})()
