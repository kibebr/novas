import { FunctionComponent, useState } from 'react'
import { CategoryInfo } from '../domain/Category'
import { HeaderMenu } from './HeaderMenu'
import TabsIcon from '../public/icons/menu.svg'
import SearchIcon from '../public/icons/search.svg'

interface HeaderProps {
  borderColor: string
  categories: Record<string, CategoryInfo>
}

export const Header: FunctionComponent<HeaderProps> = ({ borderColor, categories }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <header className={`relative flex flex-row sticky p-2 md:px-4 md:py-8 max-w-screen-lg m-0 m-auto justify-between items-center border-b ${borderColor} z-50`}>
      <div className='relative'>
        <HeaderMenu show={isMenuOpen} categories={categories} onClose={(): void => setIsMenuOpen(false)}/>
        <button onClick={(): void => setIsMenuOpen(true)} className='w-7 h-7 rounded-full bg-black text-white flex items-center justify-center'>
          <TabsIcon className='fill-current w-3 h-3' />
        </button>
      </div>
      <a href='/#' className='flex flex-col items-center'>
        <h1 className='font-medium text-5xl md:text-8xl font-caps italic bg-black text-white'>NOVAS</h1>
      </a>
      <a href='/search'className='w-7 h-7 rounded-full text-black'>
        <SearchIcon className='fill-current w-5 h-5 m-0 m-auto' />
      </a>
    </header>
  )
}
