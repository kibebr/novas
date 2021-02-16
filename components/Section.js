import CenteredContainer from '../components/CenteredContainer.js'

const Section = ({ title, classes, children }) => {
  return (
    <section className={`m-0auto px-5 py-10 ${classes}`}>
      <CenteredContainer>
        <div className='flex justify-between flex-row mb-5'>
          <h2 className='font-bold text-4xl'>{title}</h2>
          <a href='#' className='font-bold text-blue-500 hover:text-blue-700 self-end'>See more</a>
        </div>
        <div>
          {children}
        </div>
      </CenteredContainer>
    </section>
  )
}

export default Section
