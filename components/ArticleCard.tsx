import { Article } from '../domain/Article'
import Image from 'next/image'
import tw from 'twin.macro'

interface ArticleCardProps {
  article: Article
  categoryColor: string
}

export const ArticleCard = ({ article, categoryColor }: ArticleCardProps): JSX.Element => {
  return (
    <div tw='relative flex flex-row space-x-4'>
      <div tw='relative w-1/4 h-28 md:h-40 flex-shrink-0 border'>
        <Image
          tw='object-center object-cover z-0'
          src={`/.images/${article.id}.jpg`}
          layout='fill'
          alt={article.title}
        />
      </div>
      <div tw='w-3/4'>
        <span tw='font-bold text-xs md:text-sm tracking-wider mb-3'>
          <a
            href={`categories/${article.categoryName}`}
            css={{ color: categoryColor }}
          >
            {article.categoryName.toUpperCase()}
          </a>
            <span tw='font-serif italic text-xs'>&nbsp; on &nbsp;</span>
          <span tw='text-gray-700'>FEB 19TH</span>
        </span>
        <a
          href={`/articles/${article.id}`}
          tw='block font-serif font-semibold tracking-tight cursor-pointer md:text-2xl lg:text-3xl hover:underline'
          css={{ textDecorationColor: `${categoryColor} !important` }}
        >
          {article.title}
        </a>
      </div>
    </div>
  )
}
