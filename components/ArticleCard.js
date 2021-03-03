import React from 'react'

export const ArticleCard = ({ article }) => {
  return (
    <div className='flex flex-row'>
      <div className='w-56 h-40 border border-purple-700 mr-4'>
      </div>
      <div className='flex flex-col'>
        <span className='font-bold text-sm tracking-wider mb-3'>
          <span className='text-red-600'>TECHNOLOGY</span>
            <span className='font-serif italic text-xs'>&nbsp; on &nbsp;</span>
          <span className='text-gray-700'>FEB 19TH</span>
        </span>
        <h2 className='font-serif font-semibold tracking-tight cursor-pointer text-lg md:text-3xl hover:underline'>This Delicious Sleep Aid Helps You Rest Without Sedatives</h2>
      </div>
    </div>
  )
}

