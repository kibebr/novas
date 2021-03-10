import { FunctionComponent } from 'react'
import { Slider } from './Slider'

export const Navbar: FunctionComponent = ({ children }) => (
  <nav className='mt-2 text-sm tracking-wide font-bold font-caps'>
    <Slider>
      {children}
    </Slider>
  </nav>
)
