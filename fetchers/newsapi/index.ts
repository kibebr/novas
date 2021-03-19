import NewsAPI from 'ts-newsapi'
import { toArticle } from './mappers'
import * as TE from 'fp-ts/TaskEither'
import * as A from 'fp-ts/Array'
import * as O from 'fp-ts/Option'
import { toError } from 'fp-ts/Either'
import { parseO } from 'fp-ts-std/URL'
import * as R from 'fp-ts-ramda'
import { Category, CategoryTypes } from '../../domain/Category'
import { Article } from '../../domain/Article'
import {
  ApiNewsCategory,
  INewsApiArticle,
  INewsApiResponse,
  INewsApiTopHeadlinesParams
} from 'ts-newsapi/lib/types'
import * as F from 'fp-ts/function'
import { normalize, schema } from 'normalizr'
import { Lens } from 'monocle-ts'

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

const fetchCategories: TE.TaskEither<Error, INewsApiResponse[]> = TE.tryCatch(
  async () => await Promise.all([
    ...categoriesToSearchFor.map(async (c) => await newsapi.getTopHeadlines({
      category: c[0],
      ...defaults
    }))
  ]),
  toError
)

const url = Lens.fromProp<INewsApiArticle>()('urlToImage')

const filterBadArticles: (res: INewsApiArticle[]) => INewsApiArticle[] = A.filter(F.flow(
  url.get,
  O.fromNullable,
  O.chain(parseO),
  O.isSome
))

export const getCategoriesWithArticles = (): TE.TaskEither<Error, Record<string, Category>> => F.pipe(
  fetchCategories,
  TE.map(F.flow(
    A.mapWithIndex((i, c) => ({
      ...c,
      articles: F.pipe(
        c.articles,
        filterBadArticles,
        A.map((a) => toArticle(a, categoriesToSearchFor[i][0]))
      ),
      name: categoriesToSearchFor[i][0],
      color: categoriesToSearchFor[i][1]
    })),
    (a) => normalize(a, new schema.Array(categorySchema)),
    (n) => n.entities.categories as Record<string, Category>
  ))
)
