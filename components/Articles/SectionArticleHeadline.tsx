import { Article } from '../../domain/Article'
import { Filter } from '../Filters/Filter'
import Image from 'next/image'
import tw, { css } from 'twin.macro'

interface SectionArticleHeadlineProps {
  article: Article
  categoryColor: string
}

export const SectionArticleHeadline = ({ article, categoryColor }: SectionArticleHeadlineProps): JSX.Element => (
  <div
    tw='relative h-128 w-full text-white'
    css={{ boxShadow: `0px 4px 0px ${categoryColor}`, borderColor: categoryColor }}
  >
    <a href={`/articles/${article.id}`}>
      <Image
        src={`/.images/${article.id}.jpg`}
        tw='object-center object-cover z-0'
        layout='fill'
        alt={article.title}
      />
      <Filter color={categoryColor} tw='opacity-50'/>
      <Filter color='black' tw='opacity-60' />
      <div tw='p-4 absolute flex flex-col justify-end h-full w-full font-caps'>
        <span tw='text-5xl hover:underline'>{article.title.toUpperCase()}</span>
      </div>
    </a>
  </div>
)
