import { Slider } from './Slider'

export const Navbar = (): JSX.Element => (
  <nav className='mt-2 text-sm tracking-wide font-bold font-caps'>
    <Slider>
      <a href='/category/entertainment' className='flex flex-row items-center px-2 flex-shrink-0 border-r border-black hover:underline line-red-500'>
        <div className='w-2 h-2 mr-2 rounded-full bg-red-500'></div>
        ENTERTAINMENT
      </a>
      <a className='flex flex-row items-center px-2 flex-shrink-0 border-r border-black'>
        <div className='w-2 h-2 mr-2 rounded-full bg-black'></div>
        COVID-19
      </a>
      <a className='flex flex-row items-center px-2 flex-shrink-0 border-r border-black'>
        <div className='w-2 h-2 mr-2 rounded-full bg-purple-700'></div>
        TECHNOLOGY
      </a>
      <a className='flex flex-row items-center px-2 flex-shrink-0 border-r border-black'>
        <div className='w-2 h-2 mr-2 rounded-full bg-purple-700'></div>
        BUSINESS
      </a>
      <a className='flex flex-row items-center px-2 flex-shrink-0 border-r border-black'>
        <div className='w-2 h-2 mr-2 rounded-full bg-green-700'></div>
        HEALTH
      </a>
      <a className='flex flex-row items-center px-2 flex-shrink-0'>
        <div className='w-2 h-2 mr-2 rounded-full bg-yellow-500'></div>
        SCIENCE
      </a>
    </Slider>
  </nav>
)
