import {
  GetStaticProps,
  GetStaticPaths
} from 'next'
import { Header } from '../../components/Header'
import { Article, Category, CategoryInfo } from '../../domain/interfaces'
import Image from 'next/image'
import categories from '../../fetchers/categories.preval'
import { chain, map } from 'fp-ts/Array'
import { pipe, flow } from 'fp-ts/function'
import { values } from 'fp-ts-std/Record'
import { prop } from 'fp-ts-ramda'

interface ArticlePageProps {
  categoriesInfo: CategoryInfo[]
  article: Article
}

export default function ArticleComp ({ categoriesInfo, article }: ArticlePageProps): JSX.Element {
  return (
    <div>
      <Header borderColor='border-purple-700' categories={categoriesInfo} />

      <div className='max-w-screen-lg m-0 m-auto px-4 mt-5'>
        <div className='text-sm font-bold'>
          <span className='text-purple-700 border-r border-purple-700 pr-2'>{article.categoryName.toUpperCase()}</span>
          <span className='pl-2 text-gray-700'>FEB, 19TH <span className='font-serif italic text-xs'>&nbsp; by &nbsp;</span> JOHN DOE</span>
        </div>
        <div className='flex flex-col border-b'>
          <h1 className='font-serif font-bold text-3xl md:text-5xl mt-8'>
            {article.title}
          </h1>
          <p className='py-3 font-bold text-2xl'>
            {article.description}
          </p>
        </div>

        <article className='mt-5'>
          <div>
            <Image
              src='https://futurism.com/_next/image?url=https%3A%2F%2Fwp-assets.futurism.com%2F2020%2F06%2Fsom-sleep-aid-drink.jpg&w=1080&q=75'
              width='1080'
              height='600'
              layout='responsive'
            />
          </div>
          <div className='font-serif text-lg mt-10 text-gray-900 tracking-wide'>
            <p>
              Sometimes it seems like we’re facing an epidemic of sleep troubles. The modern era just wasn’t engineered with the goal of everybody getting a decent shut eye, and as a result, many of us are suffering on a nightly (and daily) basis. That means it’s up to us to try and take control of our own sleep habits.  And for many, Som Sleep is a sleep aid that might just be the perfect solution.

              It’s not unusual to worry about using a powerful prescription sedative for fear of becoming addicted, not to mention all the other potentially dangerous side-effects you might have to worry about. But Som Sleep was created to give users a good night’s rest with minimal side-effects, all in the form of a delicious berry-flavored drink that’s effective without being habit-forming. This is accomplished by way of the Original Som Sleep Formula, or “Som Stack,” which combines natural ingredients with green tea to give your body the nutritional building blocks of a good night’s sleep.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const categoriesArr: Category[] = values(categories)
  const categoriesInfo: CategoryInfo[] = pipe(
    categoriesArr,
    map((c) => ({ name: c.name, color: c.color }))
  )
  const articles = pipe(
    categoriesArr,
    chain(prop('articles'))
  )
  const article = articles.find(({ id }) => id === params?.id)

  return {
    props: {
      categoriesInfo,
      article
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allArticlesIds = pipe(
    categories,
    values,
    chain(flow(prop('articles'), map(prop('id'))))
  )

  return {
    paths: allArticlesIds.map(id => ({ params: { id } })),
    fallback: false
  }
}
