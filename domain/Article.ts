import * as F from 'fp-ts/function'
import { prop } from 'fp-ts-ramda'
import { CategoryTypes } from './Category'
import { toLower, contains } from 'fp-ts-std/String'
import { MonoidAny } from 'fp-ts/boolean'
import { concatAll } from 'fp-ts/Monoid'
import { foldMap } from 'fp-ts/lib/Array'

export interface Article {
  id: string
  title: string
  date: string
  imgUrl: string
  description: string
  content: string
  categoryName: CategoryTypes
}

export const isCoronaRelated: (a: Article) => boolean = F.flow(
  prop('title'),
  toLower,
  (s) => s.includes('corona') || s.includes('covid')
)
