import { ReactNode, FunctionComponent } from 'react'

interface SliderProps {
  classesChildren?: string
  classesContainer?: string
  children: ReactNode
}
export const Slider: FunctionComponent<SliderProps> = ({ classesContainer, classesChildren, children }) => (
  <div className={`flex overflow-y-hidden overflow-x-scroll no-scrollbar ${classesContainer as string}`}>
    <div className='flex-1'></div>
    <div className={`flex ${classesChildren as string}`}>
      {children}
    </div>
    <div className='flex-1'></div>
  </div>
)
