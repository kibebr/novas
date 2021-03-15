import { FunctionComponent } from 'react'
import { Container } from './Container'
import tw from 'twin.macro'

export const Footer: FunctionComponent = () => (
  <footer tw='h-auto bg-purple-700 text-white p-8'>
    <Container>
      <div tw='flex flex-col items-center space-y-4'>
        <span tw='font-caps bg-black text-white text-5xl font-bold italic'>NOVAS</span>
        <div>Novas was made with Next.js and is open-source.</div>
      </div>
    </Container>
  </footer>
)
