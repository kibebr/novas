import { FunctionComponent, ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

export const Container: FunctionComponent<ContainerProps> = ({ children }) => (
  <div className='max-w-screen-lg m-0 m-auto'>
    {children}
  </div>
)
