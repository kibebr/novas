const MediumArticleBox = ({ title, category, date, imgUrl }) => {
  return (
    <div className='flex sm:w-full min-w-64 md:w-96 flex-1 flex-col bg-blue-300 rounded'>
      <img className='h-60 w-full object-cover' src={imgUrl} />
      <div className='flex self-end h-full w-full p-7 bg-white'>
        <div className='self-center'>
          <span className='font-bold text-gray-500 text-sm'>{category}</span>
          <h2 className='font-bold text-black text-xl'>{title}</h2>
          <span className='font-bold text-gray-500 text-sm'>{date}</span>
        </div>
      </div>
    </div>
  )
}

export default MediumArticleBox
