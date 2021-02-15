import NewsAPI from 'newsapi'
import Navbar from '../components/Navbar.js'
import Headline from '../components/Headline.js'
import MediumArticleBox from '../components/MediumArticleBox.js'
import { useEffect } from 'react'
import articles from '../fetchers/articles.preval'

const Home = () => {
  useEffect(() => {
    document.querySelector('body').classList.add('bg-gray-100')
  })

  return (
  <div>
    <Navbar />
    <section className='md:px-40 px-10 py-10'>
      <div className='max-w-screen-2xl m-0auto'>
        <h2 className='font-bold text-4xl mb-5'>Latest</h2>
        <div className='flex flex-wrap gap-5'>
          <Headline title='"Significant milestone" as 15m get Covid jab in UK' category='COVID-19' date='February 12, 2021' />
          <div className='w-96 flex-grow'>
            <MediumArticleBox title='Testando' category='HEALTH' date='a' />
          </div>
          <div className='w-96 flex-grow'>
            <MediumArticleBox title='Testando' category='HEALTH' date='a' />
          </div>
        </div>
      </div>
    </section>
    <section className='px-10 bg-red-500 md:px-40 py-10'>
      <div className='max-w-screen-2xl m-0auto'>
        <h2 className='font-bold text-4xl mb-5'>Entertainment</h2>
        <div className='flex'>
          test
        </div>
      </div>
    </section>
  </div>
  )
}

export default Home
