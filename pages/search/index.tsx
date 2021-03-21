import * as A from 'fp-ts/Array'
import * as F from 'fp-ts/function'
import * as RE from 'fp-ts/Record'
import * as STDRE from 'fp-ts-std/Record'
import { colors } from '../../components/colors'
import { GetStaticProps } from 'next'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer'
import { Container } from '../../components/Container'
import { ArticleCard } from '../../components/Articles/ArticleCard'
import { Article } from '../../domain/Article'
import { CategoryInfo } from '../../domain/Category'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import tw from 'twin.macro'
import useSWR from 'swr'

interface SearchProps {
  categoriesInfo: Record<string, CategoryInfo>
}

export default function Search ({ categoriesInfo }: SearchProps): JSX.Element {
  const router = useRouter()
  const [foundArticles, setFoundArticles] = useState<Article[]>([])
  const [searchTerm, setSearchTerm] = useState<string | null>(null)
  const [query, setQuery] = useState<string | undefined>(undefined)
  const { data } = useSWR(
    query !== '' && query !== undefined ? `/api/articles/${encodeURIComponent(query)}` : null,
    fetch
  )

  useEffect((): void => {
    const { q } = router.query
    setQuery(q as string)
  }, [router])

  useEffect((): void => {
    data?.json()
      .then(articles => setFoundArticles(articles))
      .catch((err) => console.error(err))
  }, [data])

  useEffect((): () => void => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm !== null) {
        setQuery(searchTerm)
      }
    }, 500)

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm])

  return (
    <div>
      <Header accentColor='blue' categories={categoriesInfo} />

      <main tw='min-h-screen'>
        <Container>
          <div tw='px-4'>
            <div tw='mt-14'></div>

            <div tw='text-center'>
              <input
                placeholder='Search for articles'
                tw='text-center font-bold text-5xl md:text-6xl w-full'
                onChange={({ target }): void => setSearchTerm(target.value)}
              />

              {foundArticles.length !== 0 && (
                <p tw='mt-3 md:text-lg tracking-widest'>SEARCH RESULTS</p>
              )}
            </div>

            <ul tw='mt-10 space-y-8'>
              {foundArticles.map((a) => (
                <li key={a.id}>
                  <ArticleCard article={a} categoryColor={colors[categoriesInfo[a.categoryName].color]} />
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </main>

      <div tw='mt-10'></div>

      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { default: categories } = await import ('../../fetchers/categories.preval')

  return {
    props: {
      categoriesInfo: F.pipe(
        categories,
        RE.map(STDRE.pick<CategoryInfo>()(['name', 'color']))
      )
    }
  }
}
