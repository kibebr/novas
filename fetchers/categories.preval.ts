import preval from 'next-plugin-preval'
import { Category } from '../domain/interfaces'
import { getCategoriesWithArticles } from './newsapi/index'
import { downloadImage, saveImage } from '../image/ImageLoader'
import { getFilename } from '../utils/String'
import { of, Task } from 'fp-ts/Task'
import {
  taskEitherSeq,
  chainFirst,
  getOrElseW,
  chain as techain,
  TaskEither
} from 'fp-ts/TaskEither'
import { sequence, map as amap, chain } from 'fp-ts/Array'
import { pipe, flow } from 'fp-ts/function'
import { values } from 'fp-ts-std/Record'
import { prop } from 'fp-ts-ramda'

const addHttp = (s: string): string => `http://${s}`

const storeImages: (r: Record<string, Category>) => TaskEither<Error, {}> = flow(
  values,
  chain(prop('articles')),
  amap(({ id, imgUrl }) => pipe(
    pipe(
      imgUrl,
      addHttp,
      downloadImage
    ),
    techain(({ extension, buffer }) => saveImage(`.tmp/${id}.${extension as string}`)(buffer))
  )),
  sequence(taskEitherSeq)
)

const getCategories: () => Task<string | Record<string, Category>> = flow(
  getCategoriesWithArticles,
  chainFirst(storeImages),
  getOrElseW(flow(prop('message'), of))
)

export default preval(getCategories()())
