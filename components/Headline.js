const Headline = ({ title, category, date }) => {
  
  return (
    <div className='flex p-7 bg-red-200 headline-h h-500px md:h-96 rounded w-full'>
      <div className='self-end'>
        <span className='font-bold text-sm'>
          {category}
        </span>
        <h2 className='font-bold text-2xl'>
          {title}
        </h2>
        <span className='font-bold text-sm'>
          {date}
        </span>
      </div>
    </div>
  )
}

export default Headline
