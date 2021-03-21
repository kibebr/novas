import { Category } from '../domain/Category'
import preval from 'next-plugin-preval'
import { read } from '../utils/File'

export default preval(read('./.tmp/categories.json')().then((v) => {
  if (v._tag === 'Left') {
    throw new Error(v.left.message)
  } else {
    const buf = v.right as Buffer
    return JSON.parse(buf.toString()) as Record<string, Category>
  }
}))
