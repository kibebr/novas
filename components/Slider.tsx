import { ReactNode, FunctionComponent } from 'react'
import tw, { TwStyle } from 'twin.macro'
import { NoScrollbar } from './css/NoScrollbar'

interface SliderProps {
  classesChildren?: TwStyle
  classesContainer?: TwStyle
  children: ReactNode
}

export const Slider: FunctionComponent<SliderProps> = ({ classesContainer, classesChildren, children }) => (
  <div tw='flex overflow-y-hidden overflow-x-scroll' css={[NoScrollbar, classesContainer]}>
    <div tw='flex-1'></div>
    <div tw='flex' css={[classesChildren]}>
      {children}
    </div>
    <div tw='flex-1'></div>
  </div>
)
