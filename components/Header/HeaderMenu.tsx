import { CategoryInfo } from '../../domain/Category'
import { MouseEventHandler } from 'react'
import { capitalize } from '../../utils/String'
import { colors } from '../colors'
import tw from 'twin.macro'
import XIcon from '../../public/icons/x.svg'

interface HeaderMenuProps {
  show: boolean
  categories: Record<string, CategoryInfo>
  onClose: MouseEventHandler<HTMLButtonElement>
}

export const HeaderMenu = ({ show, onClose, categories }: HeaderMenuProps): JSX.Element => (
  <div
    tw='border w-screen h-screen top-0 md:(h-auto -m-2 w-96 absolute) flex flex-col p-2 font-bold fixed overflow-y-scroll -mx-2 z-50 bg-white text-black'
    css={[!show && tw`hidden`]}
  >
    <button tw='flex items-center justify-center rounded-full bg-purple-500 w-7 h-7' onClick={onClose}>
      <XIcon tw='text-white w-5 h-5' />
    </button>
    <div tw='p-2 flex flex-col space-y-2'>
      {Object.values(categories).map(({ color, name }) => (
        <a href={`/category/${name}`} tw='font-bold text-3xl flex flex-row space-x-3'>
          <span css={{ color: colors[color] }}>/</span>
          <span tw='underline'>{capitalize(name)}</span>
        </a>
      ))}
    </div>
  </div>
)
