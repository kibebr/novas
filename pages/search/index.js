import { Header } from '../../components/Header.js'
import { Footer } from '../../components/Footer.js'
import { Container } from '../../components/Container.js'
import { ArticleCard } from '../../components/ArticleCard.js'
import { useRouter } from 'next/router'

export default function Search () {
  const router = useRouter()
  const { query } = router.query

  return (
    <div>
      <Header borderColor='border-blue-600' />
      <Container>
        <div className='mt-10'></div>

        <div className='text-center'>
          <h1 contentEditable={true} className='font-bold text-7xl'>"Test"</h1>
          <p className='mt-3 tracking-widest'>SEARCH RESULTS:</p>
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
      </Container>

      <div className='mt-10'></div>

      <Footer />
    </div>
  )
}
