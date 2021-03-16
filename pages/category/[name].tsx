import { GetStaticProps, GetStaticPaths } from 'next'
import * as R from 'fp-ts/Record'
import * as F from 'fp-ts/function'
import { colors } from '../../components/colors'
import { values } from 'fp-ts-std/Record'
import { prop } from 'fp-ts-ramda'
import { Category, CategoryInfo } from '../../domain/Category'
import { Header } from '../../components/Header'
import categories from '../../fetchers/categories.preval'
import { Container } from '../../components/Container'
import { AbsoluteDarkenFilter } from '../../components/Filters/DarkenFilter'
import { Filter } from '../../components/Filters/Filter'
import Image from 'next/image'
import tw from 'twin.macro'

interface CategoryProps {
  categoriesInfo: Record<string, CategoryInfo>
  category: Category
}

export default function CategoryComp ({ categoriesInfo, category }: CategoryProps): JSX.Element {
  return (
    <div>
      <Header accentColor={colors[category.color]} bgColor='white' categories={categoriesInfo} />
      <Container>
        <div>
          <div tw='flex flex-col md:flex-row'>
            <div
              tw='relative w-full md:w-8/12 h-128'
            >
              <Image
                src={`/.images/${category.articles[0].id}.jpg`}
                tw='object-center object-cover z-0'
                layout='fill'
              />
              <Filter color={colors[category.color]} />
              <AbsoluteDarkenFilter />
            </div>
            <div tw='flex-1'>
            </div>
          </div>
        </div>
      </Container>
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

  console.log(paths)

  return {
    paths,
    fallback: false
  }
}
