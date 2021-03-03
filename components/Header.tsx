import { FunctionComponent } from 'react'
import TabsIcon from '../public/icons/menu.svg'
import SearchIcon from '../public/icons/search.svg'

interface HeaderProps {
  borderColor: string
}

export const Header: FunctionComponent<HeaderProps> = ({ borderColor }) => (
  <header className={`flex flex-row sticky p-2 md:px-4 md:py-8 max-w-screen-lg m-0 m-auto justify-between items-center border-b ${borderColor}`}>
    <button className='w-7 h-7 rounded-full bg-black text-white'>
      <TabsIcon className='fill-current w-3 h-3 m-0 m-auto' />
    </button>
    <a href='/#'className='flex flex-col items-center'>
      <h1 className='font-medium text-5xl md:text-7xl font-serif'>Novas</h1>
    </a>
    <a href='/search'className='w-7 h-7 rounded-full text-black'>
      <SearchIcon className='fill-current w-5 h-5 m-0 m-auto' />
    </a>
  </header>
)
