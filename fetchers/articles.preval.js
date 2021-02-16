import preval from 'next-plugin-preval'
import { getArticles as getArticlesFromNewsAPI } from './newsapi/index.js'

const getArticles = async () => getArticlesFromNewsAPI()

export default preval(getArticles())
