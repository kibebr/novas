import { FunctionComponent } from 'react'
import Image from 'next/image'
import { Article } from '../domain/interfaces'

interface HeadlineProps {
  article: Article
}

export const Headline: FunctionComponent<HeadlineProps> = ({ article }) => {
  return (
    <a href={`/articles/${article.id}`} className='relative'>
      <div className='w-full h-128 bg-center bg-cover' style={{ backgroundImage: `url(${article.imgUrl})` }}>
        <div className='flex flex-col text-center items-center justify-evenly h-full w-full bg-opacity-60 bg-black p-4'>
          <span className='text-white text-xs font-bold tracking-widest'>{article.categoryName.toUpperCase()} | FEB, 19TH</span>
          <h2 className='text-white font-bold text-3xl md:text-5xl font-serif hover:underline'>{article.title}</h2>
          <span className='text-white font-bold text-xl md:text-2xl font-caps tracking-wide'>{article.description}</span>
        </div>
      </div>
    </a>
  )
}
