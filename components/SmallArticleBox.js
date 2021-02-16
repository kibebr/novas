const SmallArticleBox = ({ title, category, date, imgUrl }) => {
  return (
    <div className='flex flex-col h-80 sm:w-full md:w-80 bg-blue-300 rounded'>
      <img className='w-full h-40' src={imgUrl} />
      <div className='flex self-end flex-grow h-2/5 w-full p-7 bg-white'>
        <div className='flex flex-col'>
          <span className='font-bold text-gray-500 text-xs'>{category}</span>
          <h2 className='font-bold text-lg'>{title}</h2>
          <span className='font-bold text-gray-500 text-xs'>{date}</span>
        </div>
      </div>
    </div>
  )
}

export default SmallArticleBox
