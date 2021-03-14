export interface Article {
  id: string
  title: string
  date: string
  imgUrl: string
  description: string
  content: string
  categoryName: CategoryTypes
}

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
