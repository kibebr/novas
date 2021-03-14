import { GetStaticProps } from 'next'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Container } from '../../components/Container'
import { ArticleCard } from '../../components/ArticleCard'
import { Article } from '../../domain/Article'
import { CategoryInfo } from '../../domain/Category'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { values } from 'fp-ts-std/Record'
import { map } from 'fp-ts/Array'
import { pipe } from 'fp-ts/function'
import useSWR from 'swr'

interface SearchProps {
  categoriesInfo: Record<string, CategoryInfo>
}

export default function Search ({ categoriesInfo }: SearchProps): JSX.Element {
  const router = useRouter()
  const [foundArticles, setFoundArticles] = useState<Article[]>([])
  const [query, setQuery] = useState<string | undefined>(undefined)
  const { data } = useSWR(`/api/articles/${encodeURIComponent(query ?? '')}`, fetch)

  useEffect((): void => {
    const { q } = router.query
    setQuery(q as string)
  }, [router])

  useEffect((): void => {
    data?.json()
      .then(articles => setFoundArticles(articles))
      .catch((err) => console.error(err))
  }, [data])

  const search = (query: string): void => {

  }

  return (
    <div>
      <Header borderColor='border-blue-600' categories={categoriesInfo} />

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
              {foundArticles.map((a) => (
                <li>
                  <ArticleCard article={a} categoryColor={categoriesInfo[a.categoryName].color}/>
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

export const getStaticProps: GetStaticProps = async () => {
  const { default: categories } = await import ('../../fetchers/categories.preval')

  return {
    props: {
      categoriesInfo: pipe(categories, values, map((c) => ({ name: c.name, color: c.color })))
    }
  }
}
