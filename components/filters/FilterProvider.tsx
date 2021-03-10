import { FunctionComponent } from 'react'
import { DarkGoldFilter } from './DarkGoldFilter'

export const FilterProvider: FunctionComponent = ({ children }) => (
  <div>
    <div className='hidden'>
      <DarkGoldFilter />
    </div>
    <div>
      {children}
    </div>
  </div>
)
