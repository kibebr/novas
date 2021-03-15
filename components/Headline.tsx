import { FunctionComponent } from 'react'
import Image from 'next/image'
import { Article } from '../domain/Article'
import tw from 'twin.macro'

interface HeadlineProps {
  article: Article
}

export const Headline: FunctionComponent<HeadlineProps> = ({ article }) => {
  return (
    <div tw='relative h-128 w-full'>
      <a href={`/articles/${article.id}`}>
        <Image
          tw='object-center object-cover z-0'
          src={`/.images/${article.id}.jpg`}
          layout='fill'
          alt={article.title}
        />
        <div tw='absolute bg-black opacity-60 w-full h-full'>
        </div>
        <div tw='px-20 relative flex items-center text-center text-white font-bold flex-col h-full justify-evenly'>
          <span tw='text-xs tracking-widest'>{article.categoryName.toUpperCase()} | FEB, 19TH</span>
          <h2 tw='text-3xl leading-loose md:leading-normal md:text-5xl font-serif hover:underline'>{article.title}</h2>
        </div>
      </a>
    </div>
  )
}
