import Navbar from '../components/Navbar.js'
import Section from '../components/Section.js'
import CenteredContainer from '../components/CenteredContainer.js'

const Category = () => {
  return (
    <div>
      <Navbar />
      <div className='px-5 bg-pink-shock'>
        <CenteredContainer>
          <div className='h-14 flex items-center'>
            <h2 className='font-bold text-3xl'>Entertainment</h2>
          </div>
        </CenteredContainer>
      </div>
    </div>
  )
}

export default Category
