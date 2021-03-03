import React from 'react'
import TabsIcon from '../public/icons/menu.svg'
import SearchIcon from '../public/icons/search.svg'

export const Header = ({ borderColor }) => (
  <header className={`flex flex-row sticky p-2 md:p-4 max-w-screen-lg m-0 m-auto justify-between items-center border-b ${borderColor}`}>
    <button className='w-6 h-6 rounded-full bg-black text-white'>
      <TabsIcon className='fill-current w-3 h-3 m-0 m-auto' />
    </button>
    <a href='/#'className='flex flex-col items-center'>
      <h1 className='font-bold text-5xl md:text-8xl font-serif'>Novas</h1>
    </a>
    <a href='/search'className='w-6 h-6 rounded-full text-black'>
      <SearchIcon className='fill-current w-5 h-5 m-0 m-auto' />
    </a>
  </header>
)
