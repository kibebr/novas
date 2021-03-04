import { Header } from '../components/Header'
import { ArticleCard } from '../components/ArticleCard'
import { ArticleTopCard } from '../components/ArticleTopCard'
import { CovidArticleCard } from '../components/CovidArticleCard'
import { Headline } from '../components/Headline'
import { Footer } from '../components/Footer'
import { DarkGoldFilter } from '../components/filters/DarkGoldFiter'
import ArrowRight from '../public/icons/arrow-right.svg'
import categories from '../fetchers/categories.preval'

export interface Article {
  id: string
  title: string
  date: string
  imgUrl: string
  description: string
  categoryName: string
}

export interface Category {
  id: string
  name: string
  accentColor: string
  articles: Article[]
}

export default function Home (): JSX.Element {
  return (
    <div>
      <DarkGoldFilter />

      <Header borderColor={'border-black'} />

      <nav className='flex justify-center mt-2 flex-row flex-no-wrap items-center text-sm last:hidden tracking-wide font-bold font-caps overflow-auto'>
        <a className='flex flex-row items-center px-2 flex-shrink-0 border-r border-black'>
          <div className='w-2 h-2 mr-2 rounded-full bg-red-500'></div>
          ENTERTAINMENT
        </a>
        <a className='flex flex-row items-center px-2 flex-shrink-0 border-r border-black'>
          <div className='w-2 h-2 mr-2 rounded-full bg-black'></div>
          COVID-19
        </a>
        <a className='flex flex-row items-center px-2 flex-shrink-0 border-r border-black'>
          <div className='w-2 h-2 mr-2 rounded-full bg-purple-700'></div>
          TECHNOLOGY
        </a>
        <a className='flex flex-row items-center px-2 flex-shrink-0 border-r border-black'>
          <div className='w-2 h-2 mr-2 rounded-full bg-purple-700'></div>
          BUSINESS
        </a>
        <a className='flex flex-row items-center px-2 flex-shrink-0 border-r border-black'>
          <div className='w-2 h-2 mr-2 rounded-full bg-green-700'></div>
          HEALTH
        </a>
        <a className='flex flex-row items-center px-2 flex-shrink-0'>
          <div className='w-2 h-2 mr-2 rounded-full bg-yellow-500'></div>
          SCIENCE
        </a>
      </nav>

      <main>
        <section className='mt-10 max-w-screen-lg m-0 m-auto px-4'>
          <Headline article={categories[0].articles[0]} />
        </section>

        <section className='flex flex-col mt-24 max-w-screen-lg m-0 m-auto px-4'>

          <div className='flex flex-row justify-center'>
            <div className='h-1 w-full bg-purple-600'></div>
            <h2 className='font-bold p-2 text-2xl flex-shrink-0 font-caps'>
              <span className='text-purple-600'>TOP</span> STORIES
            </h2>
            <div className='h-px w-full bg-black'></div>
          </div>

          <div className='mt-3'>
            <ul className='flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4'>
              {[categories[0].articles[1], categories[0].articles[2], categories[0].articles[3]].map((article) => (
                <li className='flex flex-1'>
                  <a href=''>
                    <ArticleTopCard article={article} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className='mt-24'>
          <div className='px-4 flex justify-between items-end flex-row max-w-screen-lg m-0 m-auto'>
            <h2 className='font-serif text-2xl md:text-5xl font-bold mr-2'>Entertainment</h2>
            <div className='flex justify-start md:justify-end border-b border-red-600 w-full'>
              <a href='#' className='text-gray-600 py-1 font-bold text-sm tracking-wider hover:underline'>SEE MORE ENTERTAINMENT</a>
            </div>
          </div>

          <div className='bg-black h-96 mt-5'>
          </div>
        </section>

        <section className='relative bg-yellow-500 h-screen mt-24 pl-4'>
          <div className='flex w-full overflow-x-scroll no-scrollbar'>
            <div className='flex flex-no-wrap items-center space-x-4 m-5'>
              <CovidArticleCard article={categories[3].articles[1]} />
              <CovidArticleCard article={categories[3].articles[2]} />
              <CovidArticleCard article={categories[3].articles[3]} />
            </div>
          </div>
          <div className='justify-center self-center'>
            <ArrowRight className='w-14 h-14 text-white' />
          </div>
        </section>

        <section className='max-w-screen-lg m-0 m-auto mt-24 px-4'>
          <div className='flex flex-row justify-center'>
            <div className='h-1 w-full bg-blue-600'></div>
            <h2 className='font-bold p-2 text-2xl flex-shrink-0 font-caps'>
              <span className='text-blue-600'>THE</span> LATEST
            </h2>
            <div className='h-px w-full bg-black'></div>
          </div>
          <ul className='mt-5'>
            <li className='mb-5'>
              <ArticleCard />
            </li>
            <li className='mb-5'>
              <ArticleCard />
            </li>
            <li className='mb-5'>
              <ArticleCard />
            </li>
            <li className='mb-5'>
              <ArticleCard />
            </li>
            <li className='mb-5'>
              <ArticleCard />
            </li>
            <li className='mb-5'>
              <ArticleCard />
            </li>
            <li>
              <ArticleCard />
            </li>
          </ul>
        </section>
      </main>

      <div className='flex-shrink-0 mt-10'>
        <Footer />
      </div>
    </div>
  )
}
