import { GetStaticProps, GetStaticPaths } from 'next'
import * as R from 'fp-ts/Record'
import * as F from 'fp-ts/function'
import { colors } from '../../components/colors'
import { values } from 'fp-ts-std/Record'
import { prop } from 'fp-ts-ramda'
import { Category, CategoryInfo } from '../../domain/Category'
import { Header } from '../../components/Header/Header'
import { Container } from '../../components/Container'
import { Footer } from '../../components/Footer'
import { Filter } from '../../components/Filters/Filter'
import Image from 'next/image'
import tw from 'twin.macro'
import categories from '../../fetchers/categories.preval'
import Zig from '../../public/icons/zig.svg'
import { ArticleCard } from '../../components/Articles/ArticleCard'
import { capitalize } from '../../utils/String'

interface CategoryProps {
  categoriesInfo: Record<string, CategoryInfo>
  category: Category
}

export default function CategoryComp ({ categoriesInfo, category }: CategoryProps): JSX.Element {
  return (
    <div>
      <Header accentColor='blue' categories={categoriesInfo} />

      <div tw='my-14' />

      <Container>
        <div tw='px-4'>
          <div tw='flex flex-col space-y-2 items-center'>
            <h1 tw='text-5xl md:text-6xl font-bold'>
              {capitalize(category.name)}
            </h1>
            {/* <Zig tw='w-10 h-10 text-red-400' /> */}
            <h2 tw='font-caps font-light text-2xl tracking-wide'>LATEST STORIES</h2>
          </div>

          <div tw='h-px w-full my-14 bg-gray-100' />

          <section tw='flex flex-col items-center space-y-8'>
            <ul tw='flex flex-col space-y-8'>
              {category.articles.map((a) => (
                <li key={a.id}>
                  <ArticleCard
                    article={a}
                    categoryColor={colors[category.color]}
                  />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Container>

      <div tw='my-14' />

      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = F.pipe(
    categories,
    prop(params?.name as string)
  )

  const categoriesInfo = F.pipe(
    categories,
    R.map(({ name, color }) => ({ name, color }))
  )

  return {
    props: {
      categoriesInfo,
      category
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = F.pipe(
    categories,
    R.map(({ name }) => ({ params: { name } })),
    values
  )

  return {
    paths,
    fallback: false
  }
}
