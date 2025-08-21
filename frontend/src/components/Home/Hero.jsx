import { ArrowRightIcon } from 'lucide-react'
import React from 'react'
import CircularGallery from './CircularGallery'

const Hero = () => {
  return (
    <div className='max-w-7xl mx-auto flex flex-col justify-center items-center'>
      <div className='mt-20'>
        <div className='text-base px-5 font-light border rounded-4xl p-2'>
          New Srping Collection 2025
        </div>
      </div>

      <div className='max-w-6xl mx-auto mt-6'>
        <div className='text-6xl text-center font-semibold leading-[67px] text-gray-100'>
          Where style meets expression, Trends inspire, and Fashion thrives
        </div>
      </div>

      <div className='max-w-2xl mx-auto mt-6'>
        <div className='text-xl font-light text-center text-gray-100'>
          Step into fashion heaven where the latest trends meet your unique style aspirations. Redefine your wardrobe with Desober today!
        </div>
      </div>
      
      <div className='max-w-2xl mt-8'>
        <button className='flex items-center gap-2 text-lg border p-2 px-6 rounded-3xl bg-white text-black'>
          New Collection <ArrowRightIcon />
        </button>
      </div>

      {/* <div style={{ height: '1100px', position: 'relative' }}> */}
      <div className='w-[700px] h-[400px]'>
        <CircularGallery bend={5} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
      </div>
      {/* </div> */}
    </div>
  )
}

export default Hero