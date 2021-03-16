import { FunctionComponent } from 'react'
import { Article } from '../../domain/Article'
import { Filter } from '../Filters/Filter'
import Image from 'next/image'
import tw from 'twin.macro'

interface CovidArticleCardProps {
  article: Article
}

export const CovidArticleCard: FunctionComponent<CovidArticleCardProps> = ({ article }) => (
  <div tw='relative flex flex-shrink-0 flex-col w-72 h-72 md:h-112 md:w-112 border border-black shadow-side-black'>
    <Image
      tw='object-center object-cover z-0'
      css={{ filter: 'url(#gold-sunset)' }}
      src={`/.images/${article.id}.jpg`}
      layout='fill'
      alt={article.title}
    />
    <Filter color='black' tw='opacity-60' />
    <div tw='w-full h-full z-50 flex flex-col justify-evenly p-2 text-white'>
      <div tw='font-mono text-sm'>
        YESTERDAY
      </div>
      <div tw='font-caps text-4xl tracking-tight'>
        {article.title.toUpperCase()}
      </div>
      <a href='#' tw='font-mono text-sm hover:underline'>
        READ THE FULL STORY
      </a>
    </div>
  </div>
)
