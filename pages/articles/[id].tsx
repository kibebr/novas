import {
  GetStaticProps,
  GetStaticPaths
} from 'next'
import { Header } from '../../components/Header.js'
import Image from 'next/image'
import articles from '../../fetchers/articles.preval'

export default function Article ({ article }): JSX.Element {
  return (
    <div className='py-16'>
      <Header borderColor='border-purple-700' />
      <div className='max-w-screen-lg m-0 m-auto px-4 mt-5'>
        <div className='text-sm font-bold'>
          <span className='text-purple-700 border-r border-purple-700 pr-2'>ENTERTAINMENT</span>
          <span className='pl-2 text-gray-700'>FEB, 19TH <span className='font-serif italic text-xs'>&nbsp; by &nbsp;</span> TONY LAZUDO</span>
        </div>
        <div className='flex flex-col border-b'>
          <h1 className='font-serif font-bold text-3xl md:text-5xl mt-8'>
            This Delicious Sleep Aid Helps You Rest Without Sedatives
          </h1>
          <p className='py-3 font-bold text-2xl'>
            Som Sleep is a delicious berry-flavored drink that’s powerful but not habit-forming.
          </p>
        </div>

        <article className='mt-5'>
          <div>
            <Image
              src='https://futurism.com/_next/image?url=https%3A%2F%2Fwp-assets.futurism.com%2F2020%2F06%2Fsom-sleep-aid-drink.jpg&w=1080&q=75'
              width='1080'
              height='600'
              layout='responsive'
            />
          </div>
          <div className='font-serif text-lg mt-10 text-gray-900 tracking-wide'>
            <p>
              Sometimes it seems like we’re facing an epidemic of sleep troubles. The modern era just wasn’t engineered with the goal of everybody getting a decent shut eye, and as a result, many of us are suffering on a nightly (and daily) basis. That means it’s up to us to try and take control of our own sleep habits.  And for many, Som Sleep is a sleep aid that might just be the perfect solution.

              It’s not unusual to worry about using a powerful prescription sedative for fear of becoming addicted, not to mention all the other potentially dangerous side-effects you might have to worry about. But Som Sleep was created to give users a good night’s rest with minimal side-effects, all in the form of a delicious berry-flavored drink that’s effective without being habit-forming. This is accomplished by way of the Original Som Sleep Formula, or “Som Stack,” which combines natural ingredients with green tea to give your body the nutritional building blocks of a good night’s sleep.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      article: params?.id === undefined ? null : articles.all.find(({ id }) => id === params.id)
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allArticlesIds = Object
    .values(articles.all)
    .map(({ id }) => id)

  return {
    paths: allArticlesIds.map(id => ({ params: { id } })),
    fallback: false
  }
}
