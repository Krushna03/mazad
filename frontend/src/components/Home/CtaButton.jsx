import React from 'react'

const CtaButton = () => {
  return (
    <div className='md:max-w-7xl mx-auto md:py-8'>
      <div className='md:h-[240px]  bg-gradient-to-r from-blue-950 via-blue-950 to-gray-900 rounded-2xl flex flex-col justify-center items-center gap-5'>
        <h1 className='text-white text-[26px] font-semibold'>
          Selling is Simple, Start With Us <span className='text-yellow-500'>Today!</span>
        </h1>

        <button className='mt-1 p-3 px-10 text-[#182336] bg-white text text-base border rounded-3xl font-semibold'>
          Sell Now
        </button>
      </div>
    </div>
  )
}

export default CtaButton