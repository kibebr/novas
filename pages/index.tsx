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
import ArrowRight from '../public/icons/arrow-right.svg'
import categories from '../fetchers/categories.preval'

export default function Home (): JSX.Element {
  return (
    <FilterProvider>
      <div>
        <Header borderColor='border-black' categories={Object.values(categories)} />

        <Navbar>
          {Object.values(categories).map((c) => (
            <NavbarCategoryItem category={c} />
          ))}
        </Navbar>

        <main>
          <section className='mt-10 max-w-screen-lg m-0 m-auto px-4 z-0'>
            <Headline article={categories.general.articles[0]} />
          </section>

          <section className='flex flex-col mt-24 max-w-screen-lg m-0 m-auto px-4'>

            <div className='flex flex-row items-center justify-center'>
              <div className='h-px w-full bg-black'></div>
              <h2 className='font-bold text-2xl flex-shrink-0 font-caps'>
                TOP STORIES
              </h2>
              <div className='h-px w-full bg-black'></div>
            </div>

            <div className='mt-8'>
              <ul className='flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-4'>
                {[categories.general.articles[0], categories.general.articles[1], categories.general.articles[2]].map((article) => (
                  <a href='' className='flex'>
                    <ArticleTopCard article={article} />
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

          <section className='flex flex-col bg-yellow-500 mt-24 p-4 text-center space-y-8'>
            <h2 className='font-bold font-caps text-7xl md:text-8xl transform translate-y-10'>COVID-19</h2>

            <div className='p-2 ml-4 w-full'>
              <Slider classesChildren='space-x-4 flex-no-wrap' classesContainer='ml-4 p-1'>
                <CovidArticleCard article={categories.health.articles[0]} />
                <CovidArticleCard article={categories.health.articles[1]} />
                <CovidArticleCard article={categories.health.articles[2]} />
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

          <section className='max-w-screen-lg m-0 m-auto mt-24 px-4'>
            <div className='flex flex-row items-center justify-center'>
              <div className='h-1 w-full bg-black'></div>
              <h2 className='font-bold text-2xl flex-shrink-0 font-caps'>
                THE LATEST
              </h2>
              <div className='h-px w-full bg-black'></div>
            </div>
            <ul className='mt-5 space-y-4'>
              {[categories.business.articles[0]].map((article) => (
                <ArticleCard article={article} />
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
