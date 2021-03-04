import preval from 'next-plugin-preval'
import { Category } from '../pages/index'
import { getCategoriesWithArticles } from './newsapi/index'

const getCategories = async (): Promise<Category[]> => await getCategoriesWithArticles()

export default preval(getCategories())
