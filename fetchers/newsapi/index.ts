import NewsAPI from 'ts-newsapi'
import { toArticle } from './mappers'
import { Article, Category, CategoryTypes } from '../../domain/interfaces'
import { ApiNewsCategory } from 'ts-newsapi/lib/types'
import { downloadImage, saveImage } from '../../image/ImageLoader'
import { getFilename } from '../../utils/String'
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
  ['business', 'purple-600'],
  ['science', 'blue-600'],
  ['entertainment', 'pink-600'],
  ['health', 'green-600'],
  ['technology', 'red-600']
]

export const getCategoriesWithArticles = async (): Promise<Record<CategoryTypes, Category>> => {
  const categories = await Promise.all([
    ...categoriesToSearchFor.map(async (c) => await newsapi.getTopHeadlines({
      category: c[0],
      country: 'us',
      pageSize: 100
    }))
  ])

  const withNames = categories.map((c, i) => ({ ...c, name: categoriesToSearchFor[i][0], color: categoriesToSearchFor[i][1] }))

  const categoriesWithMappedArticles = withNames.map((c) => ({
    ...c,
    articles: c.articles.map((a) => toArticle(a, c.name as CategoryTypes))
  }))

  const normalized = normalize(categoriesWithMappedArticles, new schema.Array(categorySchema))

  return normalized.entities.categories as Record<CategoryTypes, Category>
}

// TODO: it'd be great to check if a category that is to be searched does not exist in the domain, or if the api does not have a category specified in the domain. however, for now, just returning [] is okay
