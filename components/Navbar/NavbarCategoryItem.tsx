import { CategoryInfo } from '../../domain/Category'
import tw from 'twin.macro'

interface NavbarCategoryItemProps {
  category: CategoryInfo
}

export const NavbarCategoryItem = ({ category }: NavbarCategoryItemProps): JSX.Element => (
  <a
    href={`category/${category.name}`}
    tw='px-2 border-r border-black font-barlow font-medium border-purple-600 text-lg hover:underline'
  >
    {category.name.toUpperCase()}
  </a>
)
