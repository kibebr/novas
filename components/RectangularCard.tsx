import tw, { css, styled } from 'twin.macro'

export const RectangularCard = styled.div`
  ${tw`w-72 h-112 text-white bg-purple-500`}
  ${css({ boxShadow: 'rgba(37, 99, 235, 0.4) -5px 5px, rgba(37, 99, 235, 0.3) -10px 10px, rgba(37, 99, 235, 0.2) -15px 15px, rgba(37, 99, 235, 0.1) -20px 20px, rgba(37, 99, 235, 0.05) -25px 25px;' })}
`
