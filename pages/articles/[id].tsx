import {
  GetStaticProps,
  GetStaticPaths
} from 'next'
import { Header } from '../../components/Header/Header'
import { Article } from '../../domain/Article'
import { Category, CategoryInfo } from '../../domain/Category'
import Image from 'next/image'
import categories from '../../fetchers/categories.preval'
import { chain, map } from 'fp-ts/Array'
import { pipe, flow } from 'fp-ts/function'
import { values } from 'fp-ts-std/Record'
import { prop } from 'fp-ts-ramda'
import { colors } from '../../components/colors'
import tw from 'twin.macro'

interface ArticlePageProps {
  categoriesInfo: Record<string, CategoryInfo>
  article: Article
}

export default function ArticleComp ({ categoriesInfo, article }: ArticlePageProps): JSX.Element {
  return (
    <div>
      <Header borderColor={colors[article.categoryName]} categories={categoriesInfo} />

      <div tw='max-w-screen-lg m-0 m-auto px-4 mt-5'>
        <div tw='text-sm font-bold'>
          <span
            tw='border-r border-purple-700 pr-2 tracking-wider'
            css={{ color: `${colors[article.categoryName.toLowerCase()]}` }}
          >
            {article.categoryName.toUpperCase()}
          </span>
          <span tw='pl-2 text-gray-700 tracking-widest'>
            FEB, 19TH
            <span tw='font-serif italic text-xs'>
              &nbsp; by &nbsp;
            </span>
            JOHN DOE
          </span>
        </div>
        <div tw='flex flex-col border-b'>
          <h1 tw='font-serif font-bold text-3xl md:text-5xl mt-8'>
            {article.title}
          </h1>
          <p tw='py-3 font-bold text-2xl'>
            {article.description}
          </p>
        </div>

        <article tw='mt-5'>
          <div>
            <Image
              src={`/.images/${article.id}.jpg`}
              width='1080'
              height='600'
              layout='responsive'
            />
          </div>
          <div tw='font-serif text-lg mt-10 text-gray-900 tracking-wide'>
            <p>
              {article.content}
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
