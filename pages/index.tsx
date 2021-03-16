import { GetStaticProps } from 'next'
import { Header } from '../components/Header/Header'
import { ArticleCard } from '../components/Articles/ArticleCard'
import { ArticleTopCard } from '../components/Articles/ArticleTopCard'
import { CovidArticleCard } from '../components/Articles/CovidArticleCard'
import { RectangularCard } from '../components/RectangularCard'
import { Headline } from '../components/Articles/Headline'
import { NavbarCategoryItem } from '../components/Navbar/NavbarCategoryItem'
import { Footer } from '../components/Footer'
import { FilterProvider } from '../components/Filters/FilterProvider'
import { Slider } from '../components/Slider'
import { Navbar } from '../components/Navbar/Navbar'
import { Article, isCoronaRelated } from '../domain/Article'
import { CategoryInfo } from '../domain/Category'
import { randomElements, unsafeHead } from '../utils/Array'
import { Container } from '../components/Container'
import { colors } from '../components/colors'
import { Filter } from '../components/Filters/Filter'
import Image from 'next/image'
import * as A from 'fp-ts/Array'
import * as F from 'fp-ts/function'
import * as R from 'fp-ts/Record'
import { prop } from 'fp-ts-ramda'
import { values } from 'fp-ts-std/Record'
import tw, { css } from 'twin.macro'
import ArrowRight from '../public/icons/arrow-right.svg'

interface HomeProps {
  categoriesInfo: Record<string, CategoryInfo>
  headline: Article
  topArticles: Article[]
  covidArticles: Article[]
  entertainmentArticles: Article[]
  scienceArticles: Article[]
  technologyArticles: Article[]
  moreArticles: Article[]
}

const insetCenter = css`
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export default function Home ({
  categoriesInfo,
  headline,
  topArticles,
  covidArticles,
  entertainmentArticles,
  technologyArticles,
  scienceArticles,
  moreArticles
}: HomeProps): JSX.Element {
  return (
    <FilterProvider>
      <div>
        <Header borderColor='border-black' categories={categoriesInfo} />

        <Navbar>
          {Object.values(categoriesInfo).map((c) => (
            <NavbarCategoryItem category={c} />
          ))}
        </Navbar>

        <main>
          <section tw='mt-10 px-4 z-0'>
            <Container>
              <Headline article={headline} />
            </Container>
          </section>

          <section tw='flex flex-col items-start mt-20 px-4'>
            <Container>
              <h2 tw='font-bold text-xl mt-0 m-auto md:text-2xl font-caps border-purple-600 border p-2'>
                TOP STORIES
              </h2>

              <div tw='mt-8'>
                <ul tw='flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-4'>
                  {topArticles.map((a) => (
                    <a href='' tw='flex'>
                      <ArticleTopCard article={a} categoryColor={colors[categoriesInfo[a.categoryName].color]} />
                    </a>
                  ))}
                </ul>
              </div>
            </Container>
          </section>

          <section tw='mt-24 flex flex-col bg-yellow-500 p-4 text-center space-y-2'>
            <h2 tw='font-bold font-caps text-white tracking-widest text-7xl md:text-9xl'>COVID-19</h2>

            <div tw='p-2 w-full transform -translate-y-8'>
              <Slider classesChildren={tw`space-x-4 flex-nowrap`} classesContainer={tw`p-1`}>
                {covidArticles.map((a) => (
                  <CovidArticleCard article={a} />
                ))}
              </Slider>
            </div>

            <a href='#' tw='flex flex-col items-center text-center space-y-2'>
              <div tw='rounded-full relative bg-white p-2 w-14 h-14'>
                <ArrowRight tw='absolute text-black w-12 h-12' css={insetCenter} />
              </div>
              <span tw='font-mono text-sm'>
                READ MORE
                <span tw='text-white'> COVID-19</span>
              </span>
            </a>
          </section>

          <section tw='bg-black py-10 text-white'>
            <Container>
              <div tw='px-4 flex justify-between items-end flex-row'>
                <h2 tw='font-caps text-2xl md:text-5xl font-bold mr-2'>SCIENCE</h2>
                <div tw='flex justify-start md:justify-end border-b w-full' css={{ borderColor: colors.blue }}>
                  <a href='#' tw='text-gray-300 py-1 font-caps text-sm tracking-wider hover:underline'>SEE MORE SCIENCE →</a>
                </div>
              </div>
            </Container>

            <div tw='bg-black mt-5 flex'>
              <Slider classesChildren={tw`space-x-8`} classesContainer={tw`p-4`}>
                {scienceArticles.map((a) => (
                  <RectangularCard color={colors[categoriesInfo.science.color]} tw='relative'>
                    <a href={`/articles/${a.id}`}>
                      <Image
                        tw='object-center object-cover z-0'
                        src={`/.images/${a.id}.jpg`}
                        layout='fill'
                        alt={a.title}
                      />
                      <Filter color={colors[categoriesInfo.science.color]} tw='opacity-10' />
                      <Filter color='black' tw='opacity-50' />
                      <div tw='font-caps absolute p-5 h-full flex flex-col justify-between z-10'>
                        <div tw='text-2xl'>
                          {a.title.toUpperCase()}
                        </div>
                        <div tw='flex flex-row justify-between items-end font-light'>
                          <span>FEB 19TH</span>
                          <div tw='flex flex-col items-end'>
                            <ArrowRight tw='h-8 w-8' />
                            <span tw='text-sm'>READ MORE</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </RectangularCard>
                ))}
              </Slider>
            </div>
          </section>

          <section tw='bg-black py-10 text-white'>
            <Container>
              <div tw='px-4 flex justify-between items-end flex-row'>
                <h2 tw='font-caps text-2xl md:text-5xl font-bold mr-2'>TECHNOLOGY</h2>
                <div tw='flex justify-start md:justify-end border-b w-full' css={{ borderColor: colors.red }}>
                  <a href='#' tw='text-gray-300 py-1 font-caps text-sm tracking-wider hover:underline'>SEE MORE TECHNOLOGY →</a>
                </div>
              </div>
            </Container>

            <div tw='bg-black mt-5 flex'>
              <Slider classesChildren={tw`space-x-8`} classesContainer={tw`p-4`}>
                {scienceArticles.map((a) => (
                  <RectangularCard color={colors[categoriesInfo.technology.color]} tw='relative'>
                    <a href={`/articles/${a.id}`}>
                      <Image
                        tw='object-center object-cover z-0'
                        src={`/.images/${a.id}.jpg`}
                        layout='fill'
                        alt={a.title}
                      />
                      <Filter color={colors[categoriesInfo.technology.color]} />
                      <Filter color='black' tw='opacity-70' />
                      <div tw='font-caps absolute p-5 h-full flex flex-col justify-between z-10'>
                        <div tw='text-2xl'>
                          {a.title.toUpperCase()}
                        </div>
                        <div tw='flex flex-row justify-between items-end font-light'>
                          <span>FEB 19TH</span>
                          <div tw='flex flex-col items-end'>
                            <ArrowRight tw='h-8 w-8' />
                            <span tw='text-sm'>READ MORE</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </RectangularCard>
                ))}
              </Slider>
            </div>
          </section>

          <section tw='flex flex-col items-start items-center mt-5 px-4'>
            <Container>
              <h2 tw='font-bold text-xl md:text-2xl font-caps border-purple-600 border p-2'>
                THE LATEST
              </h2>
              <ul tw='mt-5 space-y-8'>
                {moreArticles.map((a) => (
                  <>
                    <ArticleCard article={a} categoryColor={categoriesInfo[a.categoryName].color} />
                    <div tw='border border-gray-100 h-px w-full'></div>
                  </>
                ))}
              </ul>
            </Container>
          </section>
        </main>

        <div tw='flex-shrink-0 mt-10'>
          <Footer />
        </div>
      </div>
    </FilterProvider>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { default: categories } = await import('../fetchers/categories.preval')

  const categoriesInfo: Record<string, CategoryInfo> = F.pipe(
    categories,
    R.map(({ name, color }) => ({ name, color }))
  )

  const headline: Article = categories.general.articles[0]

  const topArticles: Article[] = F.pipe(
    categories,
    values,
    randomElements(3),
    A.chain(F.flow(prop('articles'), unsafeHead, A.of))
  )

  const covidArticles: Article[] = categories.health.articles.filter(isCoronaRelated)

  const entertainmentArticles: Article[] = F.pipe(
    categories,
    prop('entertainment'),
    prop('articles'),
    A.takeLeft(10)
  )

  const scienceArticles: Article[] = F.pipe(
    categories,
    prop('science'),
    prop('articles'),
    A.takeLeft(10)
  )

  const moreArticles = F.pipe(
    categories,
    values,
    A.chain(prop('articles')),
    randomElements(10)
  )

  return {
    props: {
      categoriesInfo,
      headline,
      topArticles,
      covidArticles,
      entertainmentArticles,
      scienceArticles,
      moreArticles
    }
  }
}
