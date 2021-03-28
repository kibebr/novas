import { GetStaticProps } from 'next'
import { Header } from '../components/Header/Header'
import { ArticleCard } from '../components/Articles/ArticleCard'
import { ArticleTopCard } from '../components/Articles/ArticleTopCard'
import { CovidArticleCard } from '../components/Articles/CovidArticleCard'
import { RectangularCard } from '../components/RectangularCard'
import { Headline } from '../components/Articles/Headline'
import { NavbarCategoryItem } from '../components/Navbar/NavbarCategoryItem'
import { SectionArticleHeadline } from '../components/Articles/SectionArticleHeadline'
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
import { RGB, hexToRgb } from '../utils/Color'
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
        <Header accentColor='black' categories={categoriesInfo} />

        <Navbar>
          {Object.values(categoriesInfo).map((c) => (
            <NavbarCategoryItem key={c.name} category={c} />
          ))}
        </Navbar>

        <main>
          <section tw='mt-10 px-4 z-0'>
            <Container>
              <Headline
                article={scienceArticles[0]}
                filterColor={colors[categoriesInfo.science.color]}
              />
            </Container>
          </section>

          <section tw='mt-20 px-4'>
            <Container tw='flex flex-col items-center'>
              <h2 tw='font-bold text-xl mt-0 m-auto md:text-2xl font-caps border-purple-600 border p-2'>
                TOP STORIES
              </h2>

              <div tw='mt-8'>
                <ul tw='flex flex-col space-y-8 md:(flex-row space-y-0 space-x-4)'>
                  {topArticles.map((a) => (
                    <a href='' tw='flex flex-1'>
                      <ArticleTopCard article={a} categoryColor={colors[categoriesInfo[a.categoryName].color]} />
                    </a>
                  ))}
                </ul>
              </div>
            </Container>
          </section>

          <section tw='mt-24 bg-yellow-500 py-10 text-center space-y-2'>
            <h2 tw='font-bold font-caps text-white tracking-widest text-7xl md:text-9xl'>COVID-19</h2>

            <div tw='pl-2 w-full transform -translate-y-8'>
              <Slider classesChildren={tw`space-x-4 flex-nowrap`} classesContainer={tw`p-1`}>
                {covidArticles.map((a) => (
                  <CovidArticleCard article={a} />
                ))}
              </Slider>
            </div>

            <div tw='flex justify-center mt-5'>
              <div tw='flex flex-col items-center space-y-2'>
                <div tw='text-white bg-black p-2 rounded-full'>
                  <ArrowRight tw='w-10 h-10'/>
                </div>
                <span tw='font-mono font-light'>
                  READ MORE
                  <span tw='text-white'> COVID</span>
                </span>
              </div>
            </div>
          </section>

          <section tw='bg-black py-10 text-white'>
            <Container>
              <div tw='sm:px-4 flex justify-between items-end flex-row'>
                <h2 tw='font-caps text-2xl md:text-5xl font-bold mr-2'>SCIENCE</h2>
                <div tw='flex justify-start md:justify-end border-b w-full' css={{ borderColor: colors.blue }}>
                  <a href='#' tw='text-gray-300 py-1 font-caps text-sm tracking-wider hover:underline'>SEE MORE SCIENCE →</a>
                </div>
              </div>
            </Container>

            <Container tw='mt-5'>
              <SectionArticleHeadline
                article={scienceArticles[0]}
                categoryColor={colors[categoriesInfo.science.color]}
              />
            </Container>

            <div tw='mt-5 flex'>
              <Slider classesChildren={tw`space-x-8`} classesContainer={tw`p-4`}>
                {scienceArticles.slice(1).map((a) => (
                  <RectangularCard
                    color={hexToRgb(colors[categoriesInfo.science.color]) as string & RGB}
                    tw='relative'
                  >
                    <a href={`/articles/${a.id}`}>
                      <Image
                        tw='object-center object-cover z-0'
                        src={`/.images/${a.id}.jpg`}
                        layout='fill'
                        alt={a.title}
                      />
                      <Filter color={colors[categoriesInfo.science.color]} />
                      <Filter color='black' tw='opacity-60' />
                      <div tw='font-caps absolute p-5 h-full flex flex-col justify-between z-10'>
                        <div tw='text-2xl'>
                          {a.title.toUpperCase()}
                        </div>
                        <div tw='flex flex-row justify-between items-end font-light'>
                          <span>{a.date.toUpperCase()}</span>
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

            <div tw='flex justify-center mt-5'>
              <div tw='flex flex-col items-center space-y-2'>
                <div tw='text-black bg-white p-2 rounded-full'>
                  <ArrowRight tw='w-10 h-10'/>
                </div>
                <span tw='font-caps font-light'>READ MORE SCIENCE</span>
              </div>
            </div>
          </section>

          <section tw='bg-red-100 py-10 text-black'>
            <Container>
              <div tw='px-4 flex justify-between items-end flex-row'>
                <h2 tw='font-caps text-2xl md:text-5xl font-bold mr-2'>TECHNOLOGY</h2>
                <div tw='flex justify-start md:justify-end border-b w-full' css={{ borderColor: colors.red }}>
                  <a href='#' tw='text-gray-900 py-1 font-caps text-sm tracking-wider hover:underline'>SEE MORE TECHNOLOGY →</a>
                </div>
              </div>
            </Container>

            <Container tw='mt-5'>
              <SectionArticleHeadline
                article={technologyArticles[0]}
                categoryColor={colors[categoriesInfo.technology.color]}
              />
            </Container>

            <div tw='mt-5 flex'>
              <Slider classesChildren={tw`space-x-8`} classesContainer={tw`p-4`}>
                {technologyArticles.slice(1).map((a) => (
                  <RectangularCard
                    color={hexToRgb(colors[categoriesInfo.technology.color]) as string & RGB}
                    tw='relative'
                  >
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
                          <span>{a.date.toUpperCase()}</span>
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

            <div tw='flex justify-center mt-5'>
              <div tw='flex flex-col items-center space-y-2'>
                <div tw='text-white bg-black p-2 rounded-full'>
                  <ArrowRight tw='w-10 h-10'/>
                </div>
                <span tw='font-caps font-light'>READ MORE TECHNOLOGY</span>
              </div>
            </div>
          </section>

          <section tw='mt-5 px-4'>
            <Container tw='flex flex-col items-start items-center'>
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

              <div tw='mt-5' />

              <div tw='flex flex-col items-center space-y-2'>
                <div tw='text-white bg-black p-2 rounded-full'>
                  <ArrowRight tw='w-10 h-10'/>
                </div>
                <span tw='font-caps font-light'>SEE LATEST</span>
              </div>

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

  const covidArticles: Article[] = F.pipe(
    categories,
    prop('health'),
    prop('articles'),
    A.filter(isCoronaRelated),
    A.takeLeft(5)
  )

  const entertainmentArticles: Article[] = F.pipe(
    categories,
    prop('entertainment'),
    prop('articles'),
    A.takeLeft(10)
  )

  const technologyArticles: Article[] = F.pipe(
    categories,
    prop('technology'),
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
      technologyArticles,
      scienceArticles,
      moreArticles
    }
  }
}
