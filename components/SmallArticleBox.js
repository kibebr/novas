const SmallArticleBox = ({ title, category, date }) => {
  return (
    <div className='flex flex-col h-96 bg-blue-300 rounded'>
      <img className='' src='https://wow.olympus.eu/webfile/img/1632/oly_testwow_stage.jpg?x=1024' />
      <div className='flex self-end flex-grow h-2/5 w-full p-7 bg-white'>
        <div className='self-center'>
          <span className='font-bold text-gray-500 text-sm'>COVID-19</span>
          <h2 className='font-bold text-xl'>Hotel quarantine to come into force in UK</h2>
          <span className='font-bold text-gray-500 text-sm'>February 19, 2021</span>
        </div>
      </div>
    </div>
  )
}

export default SmallArticleBox
