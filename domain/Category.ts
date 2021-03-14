import { Article } from './Article'

export interface CategoryInfo {
  name: CategoryTypes
  color: string
}

export type Category = {
  articles: Article[]
} & CategoryInfo

export type CategoryTypes
  = 'general'
  | 'business'
  | 'entertainment'
  | 'health'
  | 'covid19'
  | 'technology'
  | 'science'
