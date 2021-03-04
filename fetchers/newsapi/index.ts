import NewsAPI from 'ts-newsapi'
import shortid from 'shortid'
import { toArticle } from './mappers'
import { Article, Category } from '../../pages/index'
import { ApiNewsCategory } from 'ts-newsapi/lib/types'

const newsapi = new NewsAPI(process.env.NEWSAPI_KEY as string)

const createCategory = (name: string, accentColor: string, articles: Article[]): Category => ({
  id: shortid(),
  name,
  accentColor,
  articles
})

export const getCategoriesWithArticles = async (): Promise<Category[]> => {
  const namesAndColors: Array<[string, string]> = [[
    'general',
    'black'
  ], [
    'entertainment',
    'pink'
  ], [
    'business',
    'a'
  ], [
    'health',
    'green'
  ], [
    'science',
    'blue'
  ]]

  const categories = await Promise.all(namesAndColors.map(async ([name, color]) => createCategory(
    name,
    color,
    await newsapi.getTopHeadlines({ category: name as ApiNewsCategory, country: 'us' })
      .then(({ articles }) => articles.map(article => toArticle(article, name)))
  )))

  return categories
}
