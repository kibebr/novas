import { CategoryInfo } from '../domain/Category'
import { colors } from './colors'
import tw, { css, theme, TwStyle } from 'twin.macro'

interface NavbarCategoryItemProps {
  category: CategoryInfo
}

export const NavbarCategoryItem = ({ category }: NavbarCategoryItemProps): JSX.Element => (
  <a href={`categories/${category.name}`} tw='flex flex-row items-center px-2 flex-shrink-0 border-r border-black'>
    <div
      tw='w-2 h-2 mr-2 rounded-full'
      css={{ backgroundColor: colors[category.color] ?? 'black' }}
    />
    {category.name.toUpperCase()}
  </a>
)
