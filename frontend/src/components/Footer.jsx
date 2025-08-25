import { Gem, Handshake, ShieldCheck, Twitter } from 'lucide-react'
import React from 'react'
import { FaApple, FaInstagram, FaLinkedin, FaYoutube, FaAndroid } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='md:py-10'>

      {/* Branding */}
      <div className='w-full mx-auto flex flex-col md:flex-row justify-between lg:px-28 bg-[#252c32] text-white px-3'>
        <h1 className='flex items-center gap-2 md:gap-3 p-4 md:p-9 text-[14px] md:text-[16px] text-center md:text-left'>
          <ShieldCheck /> Every listing is verified
        </h1>
        <h1 className='flex items-center gap-2 md:gap-3 p-4 md:p-9 text-[14px] md:text-[16px] text-center md:text-left'>
          <Handshake /> Trusted by thousands of verified buyers 
        </h1>
        <h1 className='flex items-center gap-2 md:gap-3 p-4 md:p-9 text-[14px] md:text-[16px] text-center md:text-left'>
          <Gem /> Secure and flexible payments
        </h1>
      </div>

      {/* Footer */}
      <div className="md:max-w-7xl mx-auto pt-12 p-4 flex flex-col md:flex-row justify-between gap-10 md:gap-0">
        
        {/* Links Section */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:flex gap-8 sm:gap-16 md:gap-20 w-full'>
          <div>
            <h1 className='text-base font-semibold text-[#2c2929] mb-4'>Buy on Auction</h1>
            <ul className='flex flex-col gap-3 text-sm'>
              <li>Luxury Bags</li>
              <li>Car Plates</li>
              <li>Watches</li>
              <li>Court Properties</li>
              <li>Vehicles</li>
              <li>Machinery</li>
              <li>Industrial</li>
              <li>Jewellery</li>
              <li>Properties</li>
            </ul>
          </div>

          <div>
            <h1 className='text-base font-semibold text-[#2c2929] mb-4'>Buy Now</h1>
            <ul className='flex flex-col gap-3 text-sm'>
              <li>Car Plates</li>
              <li>Watches</li>
              <li>Vehicles</li>
            </ul>
            <div className='mt-6'>
              <h1 className='text-base font-semibold text-[#2c2929] mb-4'>Sell With Us</h1>
              <ul className='flex flex-col gap-3 text-sm'>
                <li>How to Sell</li>
                <li>Seller Terms</li>
              </ul>
            </div>
          </div>

          <div>
            <h1 className='text-base font-semibold text-[#2c2929] mb-4'>Support</h1>
            <ul className='flex flex-col gap-3 text-sm'>
              <li>Help Center</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h1 className='text-base font-semibold text-[#2c2929] mb-4'>About Mazad</h1>
            <ul className='flex flex-col gap-3 text-sm'>
              <li>About the App</li>
              <li>Our People</li>
              <li>Our Culture</li>
              <li>Careers</li>
              <li>News & Media</li>
            </ul>
          </div>
        </div>
        
        {/* Download App */}
        <div className='mt-5 md:mt-0'>
          <h1 className='text-lg font-medium text-[#1b2d3f]'>Download the App</h1>
          <div className='flex flex-col sm:flex-row gap-3 mt-3'>
            <button className='bg-[#07142a] flex items-center justify-center gap-2 text-white p-2 px-4 rounded-2xl text-sm'>
              <FaAndroid /> Android
            </button>
            <button className='bg-[#07142a] flex items-center justify-center gap-2 text-white p-2 px-4 rounded-2xl text-sm'>
              <FaApple /> iOS
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-200 pt-6 text-sm text-gray-700 px-6 md:px-32 gap-4 md:gap-0 text-center md:text-left mb-10 sm:mb-0">
        {/* Left Section */}
        <div className="flex flex-col md:flex-row gap-2 md:space-x-4">
          <span>© 2025 Mazad W.L.L</span>
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Cookie Policy</a>
        </div>

        {/* Right Section (Icons) */}
        <div className="flex items-center justify-center space-x-4 text-xl">
          <a href="#" className="hover:text-gray-900"><Twitter /></a>
          <a href="#" className="hover:text-gray-900"><FaInstagram /></a>
          <a href="#" className="hover:text-gray-900"><FaYoutube /></a>
          <a href="#" className="hover:text-gray-900"><FaLinkedin /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
