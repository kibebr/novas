const HugeHeadline = ({ title, date, imgUrl }) => {
  const style = {
    backgroundImage: `url(${imgUrl})`
  }

  return (
    <div style={style} className='flex bg-cover text-white headline-h h-500px rounded w-full'>
      <div className='self-end flex gap-3 flex-col bg-gradient-to-t from-black to-transparent w-full p-7'>
        <span className='font-bold text-2xl'>
          {title}
        </span>
        <span className='font-bold text-sm'>
          {date}
        </span>
      </div>
    </div>
  )
}

export default HugeHeadline
