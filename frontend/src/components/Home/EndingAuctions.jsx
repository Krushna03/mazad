import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Bookmark, ChevronRight, Clock, Gavel } from "lucide-react"

const products = [
  {
    id: 1,
    image: "/products/product-1.jpeg",
    title: "Exclusive: Plate 680006",
    currentBid: 1600,
    currency: "BHD",
    isNew: true,
    text: "Current Bid",
    timeLeft: "7d 20h",
    bids: 27,
  },
  {
    id: 2,
    image: "/products/product-2.jpeg",
    title: "Plate: 12345",
    currentBid: 980,
    currency: "BHD",
    isNew: false,
    text: "Current Bid",
    timeLeft: "2d 6h",
    bids: 12,
  },
  {
    id: 3,
    image: "/products/product-3.jpeg",
    title: "Plate: 99999",
    currentBid: 3500,
    currency: "BHD",
    isNew: true,
    text: "Current Bid",
    timeLeft: "6d 12h",
    bids: 22,
  },
  {
    id: 4,
    image: "/products/product-4.jpeg",
    title: "Plate: 2025",
    currentBid: 2200,
    currency: "BHD",
    isNew: false,
    text: "Current Bid",
    timeLeft: "1d 8h",
    bids: 5,
  },
  {
    id: 5,
    image: "/products/product-5.jpeg",
    title: "Plate: 4444",
    currentBid: 750,
    currency: "BHD",
    isNew: false,
    text: "Current Bid",
    timeLeft: "3d 4h",
    bids: 9,
  },
  {
    id: 6,
    image: "/products/product-6.jpeg",
    title: "Plate: 707070",
    currentBid: 5100,
    currency: "BHD",
    isNew: false,
    text: "Current Bid",
    timeLeft: "5d 10h",
    bids: 18,
  },
  {
    id: 7,
    image: "/products/product-7.jpeg",
    title: "Plate: 1111",
    currentBid: 1450,
    currency: "BHD",
    isNew: true,
    text: "Current Bid",
    timeLeft: "12h 45m",
    bids: 3,
  },
  {
    id: 8,
    image: "/products/product-8.jpeg",
    title: "Plate: 77777",
    currentBid: 8900,
    currency: "BHD",
    isNew: false,
    text: "Current Bid",
    timeLeft: "7d 20h",
    bids: 27,
  },
  {
    id: 9,
    image: "/products/product-9.svg",
    title: "Plate: 505050",
    currentBid: 3100,
    currency: "BHD",
    isNew: true,
    text: "Current Bid",
    timeLeft: "9h 15m",
    bids: 14,
  },
]

export function EndingAuctions() {
  return (
    <div className="md:max-w-7xl mx-auto p-4 sm:p-2 md:py-12">
      {/* Header */}
      <div className="flex items-center justify-between px-3">
        <h1 className="text-[23px] sm:text-[26px] font-bold text-gray-700 cursor-pointer select-none">
          Auctions Ending Soon
        </h1>
        <h1 className="flex sm:gap-1 items-center text-sm sm:text-base text-gray-600 cursor-pointer select-none">
          View all
          <ChevronRight className="text-gray-500 h-5 w-5" />
        </h1>
      </div>

      {/* Carousel */}
      <Carousel className="">
        <CarouselContent className="">
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="pl-1 md:basis-1/2 lg:basis-1/4"
            >
              <Card className="flex border-none flex-col select-none relative">
                <CardContent className="flex flex-col">
                  
                  {/* Whole bordered container */}
                  <div className="relative border rounded-lg overflow-hidden p-2">
                    {/* NEW badge if applicable */}
                    {product.isNew && (
                      <div className="absolute left-2 top-2 shadow-lg bg-red-500 px-2 py-1 rounded-lg text-xs text-white font-semibold z-10">
                        NEW
                      </div>
                    )}

                    {/* Bookmark */}
                    <div className="absolute top-2 right-2 shadow-lg bg-gray-50 p-2 rounded-lg z-10">
                      <Bookmark className="w-5 h-5 text-gray-700" />
                    </div>

                    {/* Image */}
                    <div className="relative w-full h-[200px] flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="object-contain max-h-[180px] w-full"
                      />
                    </div>

                    {/* Black badge with time + bids */}
                    <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-gray-800 text-white text-xs px-2 py-1 rounded-full shadow-md">
                      <Clock className="w-4 h-4" />
                      <span>{product.timeLeft}</span>
                      <span className="w-px h-4 bg-white/40"></span>
                      <Gavel className="w-4 h-4" />
                      <span>{product.bids}</span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="mt-3 space-y-1 text-left">
                    <h2 className="text-base text-gray-900 font-medium line-clamp-2">
                      {product.title}
                    </h2>
                    <div className="flex flex-col items-start gap-2">
                      <span className="font-medium text-sm text-gray-500">
                        {product.text}
                      </span>
                      <span className="font-bold text-base text-gray-700">
                        {product.currency} {product.currentBid.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
