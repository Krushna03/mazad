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
    price: 1200,
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
    price: 1200,
    text: "Current Bid",
    timeLeft: "7d 20h",
    bids: 27,
  },
  {
    id: 4,
    image: "/products/product-4.jpeg",
    title: "Plate: 2025",
    currentBid: 2200,
    currency: "BHD",
    isNew: true,
    price: 1200,
    text: "Current Bid",
    timeLeft: "7d 20h",
    bids: 27,
  },
  {
    id: 5,
    image: "/products/product-5.jpeg",
    title: "Plate: 4444",
    currentBid: 750,
    currency: "BHD",
    isNew: false,
    price: 1200,
    text: "Current Bid",
    timeLeft: "7d 20h",
    bids: 27,
  },
  {
    id: 6,
    image: "/products/product-6.jpeg",
    title: "Plate: 707070",
    currentBid: 5100,
    currency: "BHD",
    isNew: false,
    price: 1200,
    text: "Current Bid",
    timeLeft: "7d 20h",
    bids: 27,
  },
  {
    id: 7,
    image: "/products/product-7.jpeg",
    title: "Plate: 1111",
    currentBid: 1450,
    currency: "BHD",
    isNew: true,
    price: 1200,
    text: "Current Bid",
    timeLeft: "7d 20h",
    bids: 27,
  },
  {
    id: 8,
    image: "/products/product-8.jpeg",
    title: "Plate: 77777",
    currentBid: 8900,
    currency: "BHD",
    isNew: false,
    price: 1200,
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
    price: 1200,
    text: "Current Bid",
    timeLeft: "7d 20h",
    bids: 27,
  },
]

export function TrendingAuctions() {
  return (
    <div className="md:max-w-7xl mx-auto p-2">
      {/* Header */}
      <div className="flex items-center justify-between px-3">
        <h1 className="text-[26px] font-bold text-gray-800 cursor-pointer select-none">Trending Auctions</h1>
        <h1 className="flex gap-1 items-center text-base text-gray-600 cursor-pointer select-none">
          View all
          <ChevronRight className="text-gray-600 h-5 w-5" />
        </h1>
      </div>

      {/* Carousel */}
      <Carousel className="mt-5">
        <CarouselContent className="-ml-1">
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="pl-1 md:basis-1/2 lg:basis-1/4"
            >
              <Card className="flex flex-col select-none relative">
                <CardContent className="p-4 flex flex-col">
                  
                  <div className="absolute top-2 right-2 shadow-lg bg-gray-50 p-2 rounded-lg">
                    <Bookmark className="w-5 h-5 text-gray-700" />
                  </div>

                  {/* Image */}
                  <div className="relative w-full h-[200px] flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="object-contain max-h-[200px] w-full"
                    />
                  </div>

                  <div className="absolute top-[55%] right-2 flex items-center gap-1 bg-gray-800 text-white text-xs px-2 py-1 rounded-full shadow-md">
                      <Clock className="w-4 h-4" />
                      <span>{product.timeLeft}</span>
                      <span className="w-px h-4 bg-white/40"></span>
                      <Gavel className="w-4 h-4" />
                      <span>{product.bids}</span>
                    </div>

                  {/* Product Info */}
                  <div className="mt-6 space-y-1 text-left">
                    <h2 className="text-base text-gray-900 font-semibold line-clamp-2">
                      {product.title}
                    </h2>
                    <div className="flex flex-col items-start gap-2">
                      <span className="font-medium text-sm text-gray-600 ">
                        {product.text}
                      </span>
                      <span className="font-semibold text-lg">
                        {product.currency + ", " + product.price}
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
