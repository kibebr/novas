import {
  GetStaticProps,
  GetStaticPaths
} from 'next'
import { Header } from '../../components/Header/Header'
import { Article } from '../../domain/Article'
import { ArticleTape } from '../../components/Articles/ArticleTape'
import { Category, CategoryInfo } from '../../domain/Category'
import { Container } from '../../components/Container'
import Image from 'next/image'
import categories from '../../fetchers/categories.preval'
import { colors } from '../../components/colors'
import tw from 'twin.macro'
import * as A from 'fp-ts/Array'
import * as F from 'fp-ts/function'
import * as RE from 'fp-ts-std/Record'
import * as R from 'fp-ts-ramda'

interface ArticlePageProps {
  categoriesInfo: Record<string, CategoryInfo>
  categoryColor: string
  article: Article
}

export default function ArticleComp ({ categoryColor, categoriesInfo, article }: ArticlePageProps): JSX.Element {
  return (
    <div>
      <Header accentColor={categoryColor} categories={categoriesInfo} />

      <div tw='px-4 mt-5'>
        <Container>
          <div tw='text-sm font-bold'>
            <span
              tw='border-r border-purple-700 pr-2 tracking-wider'
              css={{ color: categoryColor }}
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
            <div tw='relative h-96'>
              <Image
                src={`/.images/${article.id}.jpg`}
                tw='object-fill'
                layout='fill'
              />
            </div>
            <div tw='font-serif text-lg mt-10 text-gray-900 tracking-wide'>
              <p>
                {article.content}
              </p>
            </div>
          </article>
        </Container>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const categoriesArr: Category[] = RE.values(categories)

  const categoriesInfo: CategoryInfo[] = F.pipe(
    categoriesArr,
    A.map((c) => ({ name: c.name, color: c.color }))
  )

  const articles = F.pipe(
    categoriesArr,
    A.chain(R.prop('articles'))
  )

  const article = articles.find(({ id }) => id === params?.id)

  const categoryColor = article !== undefined
    ? colors[categories[article.categoryName].color]
    : 'black'

  return {
    props: {
      categoriesInfo,
      categoryColor,
      article
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allArticlesIds = F.pipe(
    categories,
    RE.values,
    A.chain(F.flow(R.prop('articles'), A.map(R.prop('id'))))
  )

  return {
    paths: allArticlesIds.map(id => ({ params: { id } })),
    fallback: false
  }
}
