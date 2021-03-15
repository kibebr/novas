import tw, { styled } from 'twin.macro'

export const DarkenFilter = styled.div`
  ${tw`bg-black opacity-60`}
`

export const AbsoluteDarkenFilter = styled(DarkenFilter)`
  ${tw`w-full h-full absolute`}
`
