import React from 'react'

const CtaButton = () => {
  return (
    <div className='md:max-w-7xl mx-auto py-2 px-4 sm:px-4 lg:px-2 md:py-8'>
      <div className='h-[130px] md:h-[220px]  bg-gradient-to-r from-blue-950 via-blue-950 to-gray-900 rounded-3xl flex flex-col justify-center items-center gap-5'>
        <h1 className='text-white md:text-[25px] font-semibold'>
          Selling is Simple, Start With Us <span className='text-yellow-500'>Today!</span>
        </h1>

        <button className='md:mt-1 px-5 py-1 md:p-3 md:px-10 text-[#182336] bg-white text text-base border rounded-3xl font-semibold'>
          Sell Now
        </button>
      </div>
    </div>
  )
}

export default CtaButton