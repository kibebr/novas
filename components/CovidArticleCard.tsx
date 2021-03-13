import { FunctionComponent } from 'react'
import { Article } from '../domain/interfaces'
import Image from 'next/image'

interface CovidArticleCardProps {
  article: Article
}

export const CovidArticleCard: FunctionComponent<CovidArticleCardProps> = ({ article }) => (
  <div className='relative flex flex-shrink-0 flex-col w-72 h-72 md:h-112 md:w-112 border border-black shadow-side-black'>
    <Image
      className='object-center object-cover z-0 gold-filter'
      src={`/.images/${article.id}.jpg`}
      layout='fill'
      alt={article.title}
    />
    <div className='absolute w-full h-full bg-black z-1 opacity-50'></div>
    <div className='w-full h-full z-50 flex flex-col justify-evenly p-2 text-white'>
      <div className='font-mono text-sm'>
        YESTERDAY
      </div>
      <div className='font-caps text-3xl'>
        {article.title.toUpperCase()}
      </div>
      <a href='#' className='font-mono text-sm hover:underline'>
        READ THE FULL STORY
      </a>
    </div>
  </div>
)
