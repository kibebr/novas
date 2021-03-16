import tw, { styled } from 'twin.macro'
import { pipe } from 'fp-ts/function'
import { hexToRgb, showRGBWithA } from '../utils/Color'

interface RectangularCardProps {
  color: string
}

export const RectangularCard = styled.div<RectangularCardProps>`
  ${tw`w-72 h-112 text-white bg-purple-500`}
  box-shadow: ${({ color }) => `
    ${pipe(color, hexToRgb, showRGBWithA(0.4))} -5px 5px, 
    ${pipe(color, hexToRgb, showRGBWithA(0.3))} -10px 10px, 
    ${pipe(color, hexToRgb, showRGBWithA(0.2))} -15px 15px, 
    ${pipe(color, hexToRgb, showRGBWithA(0.1))} -20px 20px, 
    ${pipe(color, hexToRgb, showRGBWithA(0.05))} -25px 25px;
  `}
`
