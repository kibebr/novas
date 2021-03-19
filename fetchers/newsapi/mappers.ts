import { Article } from '../../domain/Article'
import { CategoryTypes } from '../../domain/Category'
import { deleteSourceFromTitle, toDateText } from './utils'
import { INewsApiArticle } from 'ts-newsapi/lib/types'
import { ILoremIpsumParams, loremIpsum } from 'lorem-ipsum'
import shortid from 'shortid'

const loremIpsumConfig: ILoremIpsumParams = {
  count: 5,
  units: 'paragraphs'
}

export const toArticle = (res: INewsApiArticle, categoryName: string): Article => ({
  id: shortid.generate(),
  title: deleteSourceFromTitle(res.title),
  description: res.description === null ? 'This article has no description.' : res.description,
  date: toDateText(res.publishedAt),
  imgUrl: res.urlToImage ?? 'https://picsum.photos/1000/1000',
  content: loremIpsum(loremIpsumConfig),
  categoryName
})
