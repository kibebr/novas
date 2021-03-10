import preval from 'next-plugin-preval'
import { Category, CategoryTypes } from '../domain/interfaces'
import { getCategoriesWithArticles } from './newsapi/index'

const getCategories = async (): Promise<Record<CategoryTypes, Category>> => await getCategoriesWithArticles()

export default preval(getCategories())
