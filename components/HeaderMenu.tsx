import { Category, CategoryInfo } from '../domain/interfaces'
import { MouseEventHandler } from 'react'
import { capitalize } from '../utils/String'
import XIcon from '../public/icons/x.svg'

interface HeaderMenuProps {
  show: boolean
  categories: CategoryInfo[]
  onClose: MouseEventHandler<HTMLButtonElement>
}

export const HeaderMenu = ({ show, onClose, categories }: HeaderMenuProps): JSX.Element => (
  <div
    className={`${show ? '' : 'hidden'} border w-screen h-screen top-0 md:h-auto flex flex-col p-2 font-bold fixed overflow-y-scroll -mx-2 md:absolute md:-m-2 md:w-96 z-50 bg-white text-black`}
  >
    <button className='flex items-center justify-center rounded-full bg-purple-500 w-7 h-7' onClick={onClose}>
      <XIcon className='text-white w-5 h-5' />
    </button>
    <div className='p-2 flex flex-col space-y-2'>
      {categories.map((c) => (
        <a href={`/categories/${c.name}`} className='font-bold text-3xl flex flex-row space-x-3'>
          <span className={`text-${c.color}`}>/</span>
          <span className='underline'>{capitalize(c.name)}</span>
        </a>
      ))}
    </div>
  </div>
)
