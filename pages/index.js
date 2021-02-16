import NewsAPI from 'newsapi'
import Navbar from '../components/Navbar.js'
import Headline from '../components/Headline.js'
import HugeHeadline from '../components/HugeHeadline.js'
import MediumArticleBox from '../components/MediumArticleBox.js'
import SmallArticleBox from '../components/SmallArticleBox.js'
import Footer from '../components/Footer.js'
import Section from '../components/Section.js'
import CategoryCard from '../components/CategoryCard.js'
import articles from '../fetchers/articles.preval'

const Home = () => {
  return (
  <div>
    <Navbar />
    <div className='flex p-5 gap-5 justify-center flex-wrap flex-row'>
      <CategoryCard title='Technology' classes='text-white bg-red'/>
      <CategoryCard title='Health' classes='text-white bg-green-400'/>
      <CategoryCard title='COVID' classes='text-white bg-black'/>
      <CategoryCard title='Entertainment' classes='text-blue-400'/>
    </div>
    <Section title='Latest'>
      <div className='gap-5'>
        <a href={`/articles/${articles.latest[0].id}`} className='w-full'>
          <Headline
            title={articles.latest[0].title} 
            category={articles.latest[0].category} 
            date={articles.latest[0].date}
            imgUrl={articles.latest[0].imgUrl}
          />
        </a>
        <div className='flex flex-wrap gap-5 mt-5'>
          {
            articles.latest
              .slice(1, 3)
              .map(a => (
                  <MediumArticleBox title={a.title} category={a.category} date={a.date} imgUrl={a.imgUrl} />
              ))
          }
        </div>
        <div className='flex flex-wrap justify-center mt-5 gap-5'>
          {
            articles.latest
              .slice(3, 6)
              .map(a => <SmallArticleBox title={a.title} category={a.category} date={a.date} imgUrl={a.imgUrl} />)
          }
        </div>
      </div>
    </Section>
    <Section title='COVID-19' classes='bg-black text-white'>
      <HugeHeadline 
        title={articles.covid[0].title} 
        date={articles.covid[0].date}
        imgUrl={articles.covid[0].imgUrl}
      />
        <div className='flex flex-wrap gap-5 mt-5'>
          {
            articles.covid
              .slice(1, 3)
              .map(a => (
                  <MediumArticleBox title={a.title} category={a.category} date={a.date} imgUrl={a.imgUrl} />
              ))
          }
        </div>
    </Section>
    <Section title='Entertainment' classes='bg-blue-300'>
        <HugeHeadline 
          title={articles.entertainment[0].title} 
          date={articles.entertainment[0].date}
          imgUrl={articles.entertainment[0].imgUrl}
        />
        <div className='flex flex-wrap gap-5 mt-5'>
          {
            articles.entertainment
              .slice(1, 3)
              .map(a => (
                  <MediumArticleBox title={a.title} category={a.category} date={a.date} imgUrl={a.imgUrl} />
              ))
          }
        </div>
    </Section>
    <Footer />
  </div>
  )
}

export default Home
