import { FunctionComponent } from 'react'
import { Article } from '../pages/index'
import Zig from '../public/icons/zig.svg'

interface ArticleTopCardProps {
  article: Article
}

export const ArticleTopCard: FunctionComponent<ArticleTopCardProps> = ({ article }) => (
  <div className='text-center space-y-4 mx-auto flex max-w-xs flex-col'>
    <span className='flex justify-center text-sm tracking-wider font-bold'>{article.categoryName.toUpperCase()}</span>
    <div className='pb-4 text-lg md:text-xl leading-tight text-center font-serif font-bold hover:underline underline-wavy'>
      {article.title}
    </div>
    <div className='flex flex-row justify-center' style={{ marginTop: 'auto' }}>
      <Zig className='h-2 w-7' />
      <Zig className='h-2 w-7' />
    </div>
  </div>
)
