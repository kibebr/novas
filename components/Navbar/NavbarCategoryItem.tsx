import { CategoryInfo } from '../../domain/Category'
import tw from 'twin.macro'

interface NavbarCategoryItemProps {
  category: CategoryInfo
}

export const NavbarCategoryItem = ({ category }: NavbarCategoryItemProps): JSX.Element => (
  <a
    href={`categories/${category.name}`}
    tw='flex flex-row items-center px-2 flex-shrink-0 border-r border-black border-purple-600 underline font-light'
  >
    {category.name.toUpperCase()}
  </a>
)
