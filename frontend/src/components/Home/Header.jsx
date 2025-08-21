import { Search, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  
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
      {/* Main header section */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-[#1f0e56d9] font-bold">
              <div className="text-3xl leading-tight text-center">مزاد</div>
              <div className="text-3xl font-bold">mazad</div>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-3xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/4 transform -translate-y-1/2 text-gray-400 h-6 w-7" />
              <Input
                type="text"
                placeholder="What are you looking for?"
                className="w-full h-13 md:text-base md:font-gray-500 pl-12 pr-4 py-2 bg-gray-100 border-gray-200 rounded-lg focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ShoppingCart className="h-6 w-6 text-gray-600" />
            </button>
            <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-5 rounded-3xl font-medium">Sign In</Button>
          </div>
        </div>
      </div>

      {/* Navigation menu */}
      <div className="border-gray-100">
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
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors underline">
              Sell With Us
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
