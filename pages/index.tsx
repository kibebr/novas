import { GetStaticProps } from 'next'
import { Header } from '../components/Header'
import { ArticleCard } from '../components/ArticleCard'
import { ArticleTopCard } from '../components/ArticleTopCard'
import { CovidArticleCard } from '../components/CovidArticleCard'
import { Headline } from '../components/Headline'
import { NavbarCategoryItem } from '../components/NavbarCategoryItem'
import { Footer } from '../components/Footer'
import { FilterProvider } from '../components/filters/FilterProvider'
import { Slider } from '../components/Slider'
import { Navbar } from '../components/Navbar'
import { Article, isCoronaRelated } from '../domain/Article'
import { CategoryInfo } from '../domain/Category'
import { randomElements, unsafeHead } from '../utils/Array'
import * as A from 'fp-ts/Array'
import * as F from 'fp-ts/function'
import * as R from 'fp-ts/Record'
import { prop } from 'fp-ts-ramda'
import { values } from 'fp-ts-std/Record'
import ArrowRight from '../public/icons/arrow-right.svg'

interface HomeProps {
  categoriesInfo: Record<string, CategoryInfo>
  headline: Article
  topArticles: Article[]
  covidArticles: Article[]
  entertainmentArticles: Article[]
  moreArticles: Article[]
}

export default function Home ({
  categoriesInfo,
  headline,
  topArticles,
  covidArticles,
  entertainmentArticles,
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
          <section className='mt-10 max-w-screen-lg m-0 m-auto px-4 z-0'>
            <Headline article={headline} />
          </section>

          <section className='flex flex-col items-start mt-24 max-w-screen-lg m-0 m-auto px-4'>

            <h2 className='font-bold text-xl mt-0 m-auto md:text-2xl font-caps border-purple-600 border p-2'>
              TOP STORIES
            </h2>

            <div className='mt-8'>
              <ul className='flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-4'>
                {topArticles.map((a) => (
                  <a href='' className='flex'>
                    <ArticleTopCard article={a} categoryColor={categoriesInfo[a.categoryName].color} />
                  </a>
                ))}
              </ul>
            </div>
          </section>

          <section className='mt-24'>
            <div className='px-4 flex justify-between items-end flex-row max-w-screen-lg m-0 m-auto'>
              <h2 className='font-caps text-2xl md:text-5xl font-bold mr-2'>ENTERTAINMENT</h2>
              <div className='flex justify-start md:justify-end border-b border-red-600 w-full'>
                <a href='#' className='text-gray-600 py-1 font-bold text-sm tracking-wider hover:underline'>SEE MORE ENTERTAINMENT →</a>
              </div>
            </div>

            <div className='bg-black h-96 mt-5'>
            </div>
          </section>

          <section className='flex flex-col bg-yellow-500 mt-24 p-4 text-center space-y-2'>
            <h2 className='font-bold font-caps text-white tracking-widest text-7xl md:text-9xl'>COVID-19</h2>

            <div className='p-2 w-full transform -translate-y-8'>
              <Slider classesChildren='space-x-4 flex-no-wrap' classesContainer='p-1'>
                {covidArticles.map((a) => (
                  <CovidArticleCard article={a} />
                ))}
              </Slider>
            </div>

            <a href='#' className='flex flex-col items-center text-center space-y-2'>
              <div className='rounded-full relative bg-white p-2 w-14 h-14'>
                <ArrowRight className='absolute inset-center text-black w-12 h-12' />
              </div>
              <span className='font-mono text-sm'>
                READ MORE
                <span className='text-white'> COVID-19</span>
              </span>
            </a>

          </section>

          <section className='flex flex-col items-start items-center max-w-screen-lg m-0 m-auto mt-5 px-4'>
            <h2 className='font-bold text-xl md:text-2xl font-caps border-purple-600 border p-2'>
              THE LATEST
            </h2>
            <ul className='mt-5 space-y-8'>
              {moreArticles.map((a) => (
                <>
                  <ArticleCard article={a} categoryColor={categoriesInfo[a.categoryName].color} />
                  <div className='border border-gray-100 h-px w-full'></div>
                </>
              ))}
            </ul>
          </section>
        </main>

        <div className='flex-shrink-0 mt-10'>
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

  const covidArticles = categories.health.articles.filter(isCoronaRelated)

  const entertainmentArticles = categories.entertainment.articles

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
      moreArticles
    }
  }
}
