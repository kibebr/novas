import { FunctionComponent } from 'react'
import { Slider } from '../Slider'
import tw from 'twin.macro'

export const Navbar: FunctionComponent = ({ children }) => (
  <nav tw='mt-4 tracking-wide font-bold font-caps'>
    <Slider>
      {children}
    </Slider>
  </nav>
)
