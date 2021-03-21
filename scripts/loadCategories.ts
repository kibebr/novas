/* eslint-disable @typescript-eslint/no-floating-promises */

import { save } from '../utils/File'
import { getCategoriesWithArticles } from '../fetchers/newsapi/index'

(async () => {
  const categories = await getCategoriesWithArticles()()

  if (categories._tag === 'Left') {
    console.error('Error while trying to fetch categories:')
    throw new Error(categories.left.message)
  } else {
    const stringified = JSON.stringify(categories.right)
    const res = await save('./.tmp/categories.json', stringified)()
    if (res instanceof Error) {
      console.error('Error while trying to save categories:')
      throw new Error(res.message)
    }
  }
})()
