import { FunctionComponent } from 'react'
import Image from 'next/image'
import { Article } from '../domain/interfaces'

interface HeadlineProps {
  article: Article
}

export const Headline: FunctionComponent<HeadlineProps> = ({ article }) => {
  return (
    <div className='relative h-128 w-full'>
      <a href={`/articles/${article.id}`}>
        <Image
          className='object-center object-cover z-0'
          src={`/.images/${article.id}.jpg`}
          layout='fill'
          alt={article.title}
        />
        <div className='absolute bg-black opacity-60 w-full h-full'>
        </div>
        <div className='px-20 relative flex items-center text-center text-white font-bold flex-col h-full justify-evenly'>
          <span className='text-xs tracking-widest'>{article.categoryName.toUpperCase()} | FEB, 19TH</span>
          <h2 className='text-3xl leading-loose md:leading-normal md:text-5xl font-serif hover:underline'>{article.title}</h2>
        </div>
      </a>
    </div>
  )
}
