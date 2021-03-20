import tw, { styled } from 'twin.macro'

interface ArticleTapeProps {
  color: string
}

export const ArticleTape = styled.div<ArticleTapeProps>`
  ${tw`absolute w-2 h-4/5`}
  background-color: ${({ color }) => color ?? 'black'}
`
