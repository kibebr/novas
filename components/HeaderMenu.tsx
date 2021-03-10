import { Category } from '../domain/interfaces'
import { MouseEventHandler } from 'react'
import { capitalize } from '../utils/String'
import XIcon from '../public/icons/x.svg'

interface HeaderMenuProps {
  show: boolean
  categories: Category[]
  onClose: MouseEventHandler<HTMLButtonElement>
}

export const HeaderMenu = ({ show, onClose, categories }: HeaderMenuProps): JSX.Element => (
  <div
    className={`${show ? '' : 'hidden'} z-50 flex flex-col fixed md:absolute md:top-0 w-screen h-screen md:w-96 md:h-auto bg-white border border-purple-500 overflow-y-scroll text-black`}
  >
    <button className='flex items-center justify-center rounded-full bg-purple-500 w-7 h-7' onClick={onClose}>
      <XIcon className='text-white w-5 h-5' />
    </button>
    <div className='p-2 flex flex-col space-y-2'>
      {categories.map((c) => (
        <a href={`/categories/${c.name}`} className='font-bold text-3xl'>
          / <span className='underline'>{capitalize(c.name)}</span>
        </a>
      ))}
    </div>
  </div>
)
