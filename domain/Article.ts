import * as F from 'fp-ts/function'
import * as R from 'fp-ts/Reader'
import * as B from 'fp-ts/boolean'
import * as M from 'fp-ts/Monoid'
import { toLower, contains } from 'fp-ts-std/String'

export interface Article {
  id: string
  title: string
  date: string
  imgUrl: string
  description: string
  content: string
  categoryName: string
}

export const isCoronaRelated = ({ title }: Article): boolean => F.pipe(
  title,
  toLower,
  R.sequenceArray([
    contains('corona'),
    contains('covid')
  ]),
  M.concatAll(B.MonoidAny)
)
