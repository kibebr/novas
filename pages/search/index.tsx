import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Container } from '../../components/Container'
import { ArticleCard } from '../../components/ArticleCard'
import { Article } from '../../domain/interfaces'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const findArticles = (): Article[] => [{
  id: '123',
  title: 'Testing this because this looks really cool',
  date: 'FEB 19',
  imgUrl: 'a.png',
  description: 'okay',
  categoryName: 'ENTERTAINMENT'
}, {
  id: '1234',
  title: 'This is another article which is a really nice article i made',
  date: 'FEB 19',
  imgUrl: 'a.png',
  description: 'okay',
  categoryName: 'BUSINESS'
}]

export default function Search (): JSX.Element {
  const router = useRouter()
  const [foundArticles, setFoundArticles] = useState<Article[]>([])
  const [query, setQuery] = useState<string | undefined>(undefined)

  useEffect(() => {
    console.log('query now is: ', query)
    if (query !== undefined) {
      setFoundArticles(findArticles())
    }
  }, [query])

  useEffect((): void => {
    const { q } = router.query
    setQuery(q as string)
  }, [router])

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

            <ul className='mt-10 space-y-8'>
              {foundArticles.map((article) => (
                <li>
                  <ArticleCard article={article} />
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
