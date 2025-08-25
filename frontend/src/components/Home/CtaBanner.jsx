import React from 'react'

const CtaBanner = () => {
  return (
    <div className='md:max-w-7xl mx-auto py-6 md:py-0 md:px-4'>
      <img 
        src="cta-banner-1.svg" 
        alt="cta-banner" 
        className='hidden md:block max-w-full h-[500px]'  
      />
      <img 
        src="cta-small-banner-1.svg" 
        alt="cta-banner" 
        className='block md:hidden max-w-full mx-auto h-full'  
      />
    </div>
  )
}

export default CtaBanner