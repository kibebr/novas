import NewsAPI from 'ts-newsapi'
import shortid from 'shortid'
import { toArticle } from './mappers'
import { Article, Category, CategoryTypes } from '../../domain/interfaces'
import { ApiNewsCategory } from 'ts-newsapi/lib/types'

const newsapi = new NewsAPI(process.env.NEWSAPI_KEY as string)

const categoriesToSearchFor: Array<[ApiNewsCategory, string]> = [
  ['general', 'black'],
  ['business', 'purple-600'],
  ['science', 'blue-600'],
  ['health', 'green-600']
]

const assignBy = (key: any) => (data: any, item: any) => {
  data[item[key]] = item
  return data
}

export const getCategoriesWithArticles = async (): Promise<Record<CategoryTypes, Category>> => {
  const categories = await Promise.all([
    ...categoriesToSearchFor.map(async (c) => await newsapi.getTopHeadlines({ category: c[0], country: 'us' }))
  ])

  const withNames = categories.map((c, i) => ({ ...c, name: categoriesToSearchFor[i][0], color: categoriesToSearchFor[i][1] }))

  const categoriesWithMappedArticles = withNames.map((c) => ({
    ...c,
    articles: c.articles.map((a) => toArticle(a, c.name as CategoryTypes))
  }))

  const normalized = categoriesWithMappedArticles.reduce(assignBy('name'), {})

  return normalized
}

// TODO: it'd be great to check if a category that is to be searched does not exist in the domain, or if the api does not have a category specified in the domain. however, for now, just returning [] is okay
