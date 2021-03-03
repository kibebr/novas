import { Header } from '../../components/Header.js'
import { Footer } from '../../components/Footer.js'
import { Container } from '../../components/Container.js'
import { ArticleCard } from '../../components/ArticleCard.js'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Search () {
  const [foundArticles, setFoundArticles] = useState([])
  const router = useRouter()
  const { query } = router.query

  useEffect(() => {
    if (query === undefined) {
      console.warn('no query')
    }

    console.log('no articles')
  }, [])

  return (
    <div>
      <Header borderColor='border-blue-600' />
      <Container>
        <div className=''>
          <div className='mt-10'></div>

          <div className='text-center'>
            <input placeholder='Search for articles' className='text-center font-bold text-5xl md:text-7xl' />
            <p className='mt-3 text-md md:text-lg tracking-widest'>SEARCH RESULTS:</p>
          </div>

          <ul className='mt-10'>
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
        </div>
      </Container>

      <div className='mt-10'></div>

      <Footer />
    </div>
  )
}
