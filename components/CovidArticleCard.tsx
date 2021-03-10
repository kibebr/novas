import { FunctionComponent } from 'react'
import { Article } from '../domain/interfaces'

interface CovidArticleCardProps {
  article: Article
}

export const CovidArticleCard: FunctionComponent<CovidArticleCardProps> = ({ article }) => (
  <div className='relative flex flex-shrink-0 flex-col text-white text-center justify-evenly w-72 h-72 md:h-112 md:w-112 border border-black shadow-side-black'>
    <div
      className='absolute bg-center bg-cover w-full h-full z-0'
      style={{
        backgroundImage: `url(${article.imgUrl})`,
        filter: 'url(#gold-sunset)'
      }}
    >
    </div>
    <div className='absolute w-full h-full bg-black z-1 opacity-50'>
    </div>
    <div className='w-full h-full z-50 flex flex-col justify-evenly p-2'>
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
