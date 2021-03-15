import NewsAPI from 'ts-newsapi'
import { toArticle } from './mappers'
import { map, tryCatch, TaskEither } from 'fp-ts/TaskEither'
import { map as amap, mapWithIndex } from 'fp-ts/Array'
import { toError } from 'fp-ts/Either'
import { Category, CategoryTypes } from '../../domain/Category'
import {
  ApiNewsCategory,
  INewsApiResponse,
  INewsApiTopHeadlinesParams
} from 'ts-newsapi/lib/types'
import { flow, pipe } from 'fp-ts/function'
import { normalize, schema } from 'normalizr'

const newsapi = new NewsAPI(process.env.NEWSAPI_KEY as string)

const categorySchema = new schema.Entity(
  'categories',
  {},
  {
    idAttribute: 'name'
  }
)

const categoriesToSearchFor: Array<[ApiNewsCategory, string]> = [
  ['general', 'black'],
  ['business', 'purple'],
  ['science', 'blue'],
  ['entertainment', 'pink'],
  ['health', 'green'],
  ['technology', 'red']
]

const defaults: INewsApiTopHeadlinesParams = {
  country: 'gb',
  pageSize: 100
}

const fetchCategories: TaskEither<Error, INewsApiResponse[]> = tryCatch(
  async () => await Promise.all([
    ...categoriesToSearchFor.map(async (c) => await newsapi.getTopHeadlines({
      category: c[0],
      ...defaults
    }))
  ]),
  toError
)

export const getCategoriesWithArticles = (): TaskEither<Error, Record<string, Category>> => pipe(
  fetchCategories,
  map(flow(
    mapWithIndex((i, a) => ({ ...a, name: categoriesToSearchFor[i][0], color: categoriesToSearchFor[i][1] })),
    amap((c) => ({ ...c, articles: c.articles.map((a) => toArticle(a, c.name as CategoryTypes)) })),
    (a) => normalize(a, new schema.Array(categorySchema)),
    (n) => n.entities.categories as Record<string, Category>
  )),
  (a) => { console.log(a); return a }
)
