import { Header } from '../../components/Header.js'
import { Footer } from '../../components/Footer.js'
import { Container } from '../../components/Container.js'
import { ArticleCard } from '../../components/ArticleCard.js'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

interface Article {
  title: string
}

const findArticles = (): Article[] => [{ title: 'article' }, { title: 'article2' }]

export default function Search (): JSX.Element {
  const router = useRouter()
  const { q } = router.query
  const [foundArticles, setFoundArticles] = useState<Article[]>([])
  const [query, setQuery] = useState<string | undefined>('')

  useEffect(() => {
    if (query === undefined) {
      console.warn('no query')
    } else {
      setFoundArticles(findArticles())
    }
  }, [])

  useEffect(() => {
    console.log('query changed: ', query)
  }, [query])

  const search = (query: string): void => {

  }

  return (
    <div>
      <Header borderColor='border-blue-600' />
      <main className='min-h-screen'>
        <Container>
          <div className='px-4'>
            <div className='mt-10'></div>

            <div className='text-center'>
              <input
                placeholder='Search for articles'
                className='text-center font-bold text-5xl md:text-6xl w-full'
                onChange={(e): void => setQuery(e.target.value)}
                
              />

              {foundArticles.length !== 0 && (
                <p className='mt-3 text-md md:text-lg tracking-widest'>SEARCH RESULTS</p>
              )}
            </div>

            <ul className='mt-10'>
              {foundArticles.map((article) => (
                <li>
                  <ArticleCard />
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </main>

      <div className='mt-10'></div>

      <Footer />
    </div>
  )
}
