const Headline = ({ title, category, date, imgUrl }) => {
  
  const style = {
    backgroundImage: `url(${imgUrl})`
  }

  return (
    <div style={style} className='flex hover:bg-contain bg-cover text-white headline-h h-600px md:h-96 rounded w-full'>
      <div className='self-end bg-gradient-to-t from-black w-full p-7'>
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
