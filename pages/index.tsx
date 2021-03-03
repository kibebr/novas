import { Header } from '../components/Header'
import { ArticleCard } from '../components/ArticleCard'
import { Headline } from '../components/Headline'
import { Container } from '../components/Container'
import { Footer } from '../components/Footer'
import articles from '../fetchers/articles.preval'

export interface Article {
  id: string
  title: string
}

export default function Home (): JSX.Element {
  return (
    <div>
      <Header borderColor={'border-black'} />
      <nav className='flex justify-center mt-2 flex-row flex-no-wrap items-center text-sm last:hidden tracking-wide font-bold font-caps'>
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
        <a className='flex flex-row items-center px-2 flex-shrink-0'>
          <div className='w-2 h-2 mr-2 rounded-full bg-yellow-500'></div>
          SCIENCE
        </a>
      </nav>

      <main>
        <section className='mt-5 max-w-screen-lg m-0 m-auto px-4'>
          <Headline article={articles.latest[0]} />
        </section>

        <section className='mt-24 max-w-screen-lg m-0 m-auto px-4'>
          <div className='flex flex-row justify-center'>
            <div className='h-1 w-full bg-purple-600'></div>
            <h2 className='font-bold p-2 text-2xl flex-shrink-0 font-caps'>
              <span className='text-purple-600'>TOP</span> STORIES
            </h2>
            <div className='h-px w-full bg-black'></div>
          </div>
          <div className='mt-3'>
            <div className='flex flex-col md:flex-row h-auto md:h-36 items-start'>
              <div className='flex flex-1 flex-col text-center items-center'>
                <span className='tracking-wider text-sm text-yellow-500 mb-3'>ENTERTAINMENT</span>
                <a href='#' className='font-serif tracking-tight font-medium text-xl w-10/12 hover:underline'>{articles.latest[1].title}</a>
              </div>
              <div className='flex flex-1 flex-col text-center items-center'>
                <span className='tracking-wider text-sm mb-3'>COVID-19</span>
                <a href='#' className='font-serif tracking-tight font-medium text-xl w-10/12 hover:underline'>{articles.latest[2].title}</a>
              </div>
              <div className='flex flex-1 flex-col text-center items-center'>
                <span className='tracking-wider text-sm text-red-500 mb-3'>TECHNOLOGY</span>
                <a href='#' className='font-serif tracking-tight font-medium text-xl w-10/12 hover:underline'>{articles.latest[3].title}</a>
              </div>
            </div>
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
