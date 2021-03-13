import { Article, CategoryTypes } from '../../domain/interfaces'
import { deleteSourceFromTitle, toDateText } from './utils'
import { INewsApiArticle } from 'ts-newsapi/lib/types'
import shortid from 'shortid'

export const toArticle = (res: INewsApiArticle, categoryName: CategoryTypes): Article => ({
  id: shortid.generate(),
  title: deleteSourceFromTitle(res.title),
  description: res.description === null ? 'This article has no description.' : res.description,
  date: toDateText(res.publishedAt),
  imgUrl: res.urlToImage === null ? 'https://picsum.photos/1000/1000' : res.urlToImage,
  categoryName
})
