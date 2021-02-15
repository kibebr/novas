const Section = ({ title, children }) => {
  return (
    <section className='m-0auto px-5 py-10'>
      <div className='max-w-screen-lg m-0auto'>
        <h2 className='font-bold text-4xl mb-5'>{title}</h2>
        <div>
          {children}
        </div>
      </div>
    </section>
  )
}

export default Section
