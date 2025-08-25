import { Search, ShoppingCart, Menu, Cross, X, ChevronRight, ChevronDown, ChevronUp, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { FaAndroid, FaApple } from "react-icons/fa";

export function Header() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [buyNowOpen, setBuyNowOpen] = useState(false);
  const [auctions, setAuctions] = useState(false);

  const navigationItems = [
    "Auctions",
    "Buy Now",
    "Luxury Bags",
    "Car Plates",
    "Watches",
    "Court Properties",
    "General Items",
  ]

  return (
    <header className="w-full bg-white border-b border-gray-200">
      {/* Top black bar */}
      <div className="bg-[#252c32] text-white p-2 text-[15px] justify-between px-4 md:px-14 lg:px-36 font-[400] hidden md:flex">
        <p>العربية</p>
        <p className="hidden md:block">Buy, Bid, & Sell All in One Platform.</p>
        <p className="flex items-center gap-4">
          Download App
          <FaApple />
          <FaAndroid />
        </p>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Menu + Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Show hamburger only on md and smaller */}
            <button 
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMenuOpen(true)}
            >
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
            <img src="logo.png" alt="mazad-logo" className="hidden lg:block h-10 md:h-12" />
            <img src="small-logo.png" alt="mazad-logo" className="block lg:hidden h-6 md:h-8" />
          </div>

          {/* Search Bar */}
          <div className="hidden sm:block flex-1 max-w-lg md:max-w-md lg:max-w-3xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/3 -translate-y-1/2 text-gray-700 h-5 w-5" />
              <Input
                type="text"
                placeholder="What are you looking for?"
                className="w-full h-11 pl-12 pr-4 bg-gray-100 border-none rounded-lg 
                           focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                           placeholder:text-gray-400 text-sm md:text-base"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3 md:gap-4">
            <button className="sm:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Search className="h-6 w-6 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ShoppingCart className="h-6 w-6 text-gray-600" />
            </button>
            <Button className="bg-red-500 hover:bg-red-600 text-white rounded-3xl hidden md:block font-medium">
              Sign In
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Menu (hidden on md, shown lg+) */}
      <div className=" border-gray-100 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <nav className="flex items-center gap-8">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-500 hover:text-gray-600 font-medium text-sm transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors underline"
            >
              Sell With Us
            </a>
          </div>
        </div>
      </div>

      {
        menuOpen && (
          <div className={`fixed inset-0 z-50 flex transition-opacity duration-500 ${
            open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}>
      
            {/* Drawer (left side) */}
            <div className="w-full md:w-1/2 h-full bg-white shadow-lg relative animate-slideIn">
              
              {/* Close button */}
              <div className="absolute top-6 right-6">
                <X
                  className="h-8 w-8 cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                />
              </div>

              {/* Menu content */}
              <div className="pt-20 px-6 flex flex-col gap-6">
                {/* Sell With Us */}
                <div className="w-full flex justify-between items-center text-lg font-medium">
                  <p className="underline text-gray-600">Sell With Us</p>
                  <div className="flex items-center gap-2">
                    <button className="bg-blue-50 text-blue-600 px-3 py-1 rounded-md text-sm font-medium">
                      Start earning now!
                    </button>
                    <ChevronRight 
                      className="text-gray-500 h-5 w-5" 
                    />
                  </div>
                </div>

                {/* Buy Now */}
                <div className="w-full flex justify-between items-center text-lg font-medium">
                  <p className="text-gray-600 text-lg">Buy Now</p>
                  {
                    buyNowOpen ? (
                      <ChevronUp
                        className="text-gray-500 h-5 w-5" 
                        onClick={() => setBuyNowOpen(prev => !prev)}
                      />
                    ) : (
                      <ChevronDown
                      className="text-gray-500 h-5 w-5" 
                      onClick={() => setBuyNowOpen(prev => !prev)}
                      />
                    )
                  }
                </div>

                {
                  buyNowOpen && (
                    <ul className="px-5 text-gray-500 font-medium">
                      <li className="p-2 -mt-2">Car Plates</li>
                      <li className="p-2">Taxi Plates</li>
                      <li className="p-2">Vehicles</li>
                      <li className="p-2">Properties</li>
                      <li className="p-2">Watches</li>
                      <li className="p-2 text-blue-500 underline flex items-center gap-2 font-normal">
                        View All Categories
                        <ArrowRight className="h-5 w-5" />
                      </li>
                    </ul>
                  )
                }
                
                {/* Auctions */}
                <div className="w-full flex justify-between items-center text-lg font-medium">
                  <p className="text-gray-600">Auctions</p>
                  {
                    auctions ? (
                      <ChevronUp 
                        onClick={() => setAuctions(prev => !prev)}
                        className="text-gray-500 h-5 w-5" 
                      />
                    ) : (
                      <ChevronDown 
                        onClick={() => setAuctions(prev => !prev)}
                        className="text-gray-500 h-5 w-5" 
                      />
                    )
                  }
                </div>

                {
                  auctions && (
                    <ul className="px-5 text-gray-500 font-medium">
                      <li className="p-2 -mt-2">Car Plates</li>
                      <li className="p-2 text-blue-500 underline flex items-center gap-2 font-normal">
                        View All Categories
                        <ArrowRight className="h-5 w-5" />
                      </li>
                    </ul>
                  )
                }

                {/* Divider */}
                <hr className="border-gray-200 my-2" />

                {/* Language */}
                <div className="w-full flex justify-between items-center text-lg font-medium">
                  <p className="text-gray-700 text-base">Language (اللغة)</p>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700 text-base">English</span>
                    <ChevronRight className="text-gray-500 h-5 w-5" />
                  </div>
                </div>

                {/* Sign In button */}
                <div className="pt-4">
                  <button className="w-full bg-red-600 text-white py-2 rounded-full font-semibold">
                    Sign In
                  </button>
                </div>
              </div>
            </div>

            {/* Backdrop (right side dark blur) */}
            <div 
              className="flex-1 bg-black/50 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)} // click outside closes
            />
          </div>
        )
      }
    </header>
  )
}
