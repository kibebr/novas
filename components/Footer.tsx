import { FunctionComponent } from 'react'
import { Container } from './Container'

export const Footer: FunctionComponent = () => (
  <footer className='h-auto bg-purple-700 text-white p-8'>
    <Container>
      <div className='flex flex-col items-center space-y-4'>
        <span className='font-caps bg-black text-white text-5xl font-bold italic'>NOVAS</span>
        <div>Novas was made with Next.js and is open-source.</div>
      </div>
    </Container>
  </footer>
)
