import tw, { styled } from 'twin.macro'
import { Filter } from './Filter'

export const DarkenFilter = styled(Filter)`
  ${tw`bg-black opacity-70`}
`

export const AbsoluteDarkenFilter = styled(DarkenFilter)`
  ${tw`w-full h-full absolute`}
`
