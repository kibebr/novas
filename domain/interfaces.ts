export interface Article {
  id: string
  title: string
  date: string
  imgUrl: string
  description: string
  categoryName: CategoryTypes
}

export interface Category {
  name: CategoryTypes
  articles: Article[]
}

export type CategoryTypes
  = 'general'
  | 'business'
  | 'entertainment'
  | 'health'
  | 'covid19'
  | 'technology'
  | 'science'

export const colors: { [key in CategoryTypes]: string } = {
  BUSINESS: 'red',
  SCIENCE: 'purple',
  TECHNOLOGY: 'blue',
  'COVID-19': 'black',
  ENTERTAINMENT: 'yellow',
  HEALTH: 'green'
}
