import { FunctionComponent } from 'react'
import { Filter } from '../Filters/Filter'
import Image from 'next/image'
import { Article } from '../../domain/Article'
import tw from 'twin.macro'

interface HeadlineProps {
  article: Article
  filterColor: string
}

export const Headline: FunctionComponent<HeadlineProps> = ({ article, filterColor }) => {
  return (
    <div tw='relative h-128 w-full'>
      <a href={`/articles/${article.id}`}>
        <Image
          tw='object-center object-cover z-0'
          src={`/.images/${article.id}.jpg`}
          layout='fill'
          alt={article.title}
        />
        <Filter color={filterColor} tw='opacity-30' />
        <Filter color='black' tw='opacity-60' />
        <div tw='md:px-20 px-2 py-20 relative flex items-center text-center text-white font-bold flex-col h-full justify-between'>
          <span tw='text-xs tracking-widest'>{article.categoryName.toUpperCase()} | FEB, 19TH</span>
          <h2 tw='text-3xl leading-normal md:(leading-none text-5xl) font-serif hover:underline' className='font-serif'>{article.title}</h2>
          <div />
        </div>
      </a>
    </div>
  )
}
