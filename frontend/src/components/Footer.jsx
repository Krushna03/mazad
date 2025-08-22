import { Gem, Handshake, ShieldCheck, Twitter } from 'lucide-react'
import React from 'react'
import { FaApple, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='py-14'>

      {/* Branding */}
      <div className='flex justify-between px-28 bg-[#071327] text-white'>
        <h1 className='flex items-center gap-3 p-9 text-[16px]'>
          <ShieldCheck /> Every listing is verified
        </h1>
        <h1 className='flex items-center gap-3 p-9 text-[16px]'>
          <Handshake /> Trusted by thousands of verified buyers 
        </h1>
        <h1 className='flex items-center gap-3 p-9 text-[16px]'>
          <Gem /> Secure and flexible payments
        </h1>
      </div>

      {/* footer */}
      <div className="md:max-w-7xl mx-auto pt-12 p-4 flex justify-between">
        <div className='flex gap-24'>
          <div className=''>
            <h1 className='text-base font-semibold text-[#2c2929] mb-4'>Buy on Auction</h1>
            <ul className='flex flex-col gap-5 tex text-sm'>
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

          <div className=''>
            <h1 className='text-base font-semibold text-[#2c2929] mb-4'>Buy Now</h1>
            <ul className='flex flex-col gap-5 tex text-sm'>
              <li>Car Plates</li>
              <li>Watches</li>
              <li>Vehicles</li>
            </ul>
            
            <div className='mt-10'>
              <h1 className='text-base font-semibold text-[#2c2929] mb-4'>Sell With Us</h1>
              <ul className='flex flex-col gap-5 tex text-sm'>
                <li>How to Sell</li>
                <li>Seller Terms</li>
              </ul>
            </div>
          </div>

          <div className=''>
            <h1 className='text-base font-semibold text-[#2c2929] mb-4'>Support</h1>
            <ul className='flex flex-col gap-5 tex text-sm'>
              <li>Help Center</li>
              <li>FAQs</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className=''>
            <h1 className='text-base font-semibold text-[#2c2929] mb-4'>About Mazad</h1>
            <ul className='flex flex-col gap-5 tex text-sm'>
              <li>About the App</li>
              <li>Our People</li>
              <li>Our Culture</li>
              <li>Careers</li>
              <li>News & Media</li>
            </ul>
          </div>
        </div>
      
        <div className='mr-8'>
          <h1 className='text-lg font-medium text-[#1b2d3f]'>Dowload the App</h1>
          <div className='flex gap-5 mt-3'>
            <button className='bg-[#07142a] flex items-center gap-2 text-white p-2 px-3 rounded-2xl'>
              <FaAndroid /> Android
            </button>
            <button className='bg-[#07142a] flex items-center gap-2 text-white p-2 px-5 rounded-2xl'>
              <FaApple /> IOS
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-gray-200 pt-6 text-sm text-gray-700 px-32">
        {/* Left Section */}
        <div className="space-x-4">
          <span>© 2025 Mazad W.L.L</span>
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Cookie Policy</a>
        </div>

        {/* Right Section (Icons) */}
        <div className="flex items-center space-x-4 text-xl">
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