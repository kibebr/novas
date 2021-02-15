const Headline = ({ title, category, date }) => {
  
  const style = {
    backgroundImage: `url(https://i.gadgets360cdn.com/large/dogecoin_bloomberg_1613366194851.jpg)`
  }

  return (
    <div style={style} className='flex bg-cover text-white headline-h h-500px md:h-96 rounded w-full'>
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
