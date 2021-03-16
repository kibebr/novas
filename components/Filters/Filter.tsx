import tw, { styled } from 'twin.macro'

interface FilterProps {
  color: string
}

export const Filter = styled.div<FilterProps>`
  ${tw`absolute w-full h-full opacity-30`}
  background-color: ${props => props.color ?? 'blue'}
`
