import preval from 'next-plugin-preval'
import { Category } from '../domain/Category'
import { getCategoriesWithArticles } from './newsapi/index'
import { downloadImage, saveImage } from '../image/ImageLoader'
import { of, Task } from 'fp-ts/Task'
import {
  taskEitherSeq,
  chainFirst,
  getOrElseW,
  chain as techain,
  TaskEither
} from 'fp-ts/TaskEither'
import { sequence, map as amap, chain } from 'fp-ts/Array'
import { pipe, flow, identity } from 'fp-ts/function'
import { values } from 'fp-ts-std/Record'
import { prop } from 'fp-ts-ramda'

const storeImages: (r: Record<string, Category>) => TaskEither<Error, {}> = flow(
  values,
  chain(prop('articles')),
  amap(({ id, imgUrl }) => pipe(
    pipe(
      imgUrl,
      downloadImage
    ),
    techain(({ extension, buffer }) => saveImage(`public/.images/${id}.${extension}`)(buffer))
  )),
  sequence(taskEitherSeq)
)

const getCategories: () => Task<Error | Record<string, Category>> = flow(
  getCategoriesWithArticles,
  chainFirst(storeImages),
  getOrElseW(flow(identity, of))
)

export default preval(getCategories()().then((v) => {
  if (v instanceof Error) {
    throw new Error(v.message)
  } else {
    return v
  }
}))
