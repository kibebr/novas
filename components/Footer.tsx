import { FunctionComponent } from 'react'
import { Container } from './Container'

export const Footer: FunctionComponent = () => (
  <footer className='h-24 bg-purple-700 text-white p-4'>
    <Container>
      <div>
        <span className='font-caps bg-black text-white font-bold italic'>NOVAS</span> was made with Next.js and is open-source.
      </div>
    </Container>
  </footer>
)
