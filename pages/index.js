import NewsAPI from 'newsapi'
import Navbar from '../components/Navbar.js'
import Headline from '../components/Headline.js'
import MediumArticleBox from '../components/MediumArticleBox.js'
import SmallArticleBox from '../components/SmallArticleBox.js'
import Section from '../components/Section.js'
import articles from '../fetchers/articles.preval'

const Home = () => {
  return (
  <div>
    <Navbar />
    <Section title='Latest'>
      <div className='flex flex-row flex-wrap items-stretch justify-center md:justify-between gap-5'>
        <a href={`/articles/${articles.headline.id}`} className='w-full'>
          <Headline title={articles.headline.title} category={articles.headline.category} date={articles.headline.date} />
        </a>
        <MediumArticleBox title='APADPADP' category='Covid-19' date='February 9, 2021' />
        <MediumArticleBox title='APADPADP' category='Covid-19' date='February 9, 2021' />
      </div>
    </Section>
    <Section title='Entertainment'>
      <div className='flex'>
        test
      </div>
    </Section>
  </div>
  )
}

export default Home
