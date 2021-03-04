import { Article } from '../../pages/index'
import { deleteSourceFromTitle, toDateText } from './utils'
import shortid from 'shortid'
import { INewsApiArticle } from 'ts-newsapi/lib/types'

export const toArticle = (res: INewsApiArticle, categoryName: string): Article => ({
  id: shortid.generate(),
  title: deleteSourceFromTitle(res.title),
  description: res.description === null ? 'This article has no description.' : res.description,
  date: toDateText(res.publishedAt),
  imgUrl: res.urlToImage === null ? 'PLACEHOLDER' : res.urlToImage,
  categoryName
})
