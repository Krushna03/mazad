import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Bookmark, ChevronRight } from "lucide-react"

const products = [
  {
    id: 1,
    image: "/products/product-1.jpeg",
    title: "Roberto Coin Princess Flower",
    price: 2185,
    text: "price",
    currency: "BHD",
    isNew: true,
  },
  {
    id: 2,
    image: "/products/product-2.jpeg",
    title: "Roberto Coin Diamond Necklace",
    price: 3250,
    currency: "BHD",
    text: "price",
    isNew: false,
  },
  {
    id: 3,
    image: "/products/product-3.jpeg",
    title: "Cartier Love Bracelet",
    price: 4950,
    currency: "BHD",
    text: "price",
    isNew: true,
  },
  {
    id: 5,
    image: "/products/product-5.jpeg",
    title: "Tiffany & Co. Diamond Stud Earrings",
    price: 2890,
    currency: "BHD",
    text: "price",
    isNew: false,
  },
  {
    id: 6,
    image: "/products/product-6.jpeg",
    title: "Bvlgari Serpenti Watch",
    price: 9800,
    text: "price",
    currency: "BHD",
    isNew: false,
  },
  {
    id: 7,
    image: "/products/product-7.jpeg",
    title: "Chopard Happy Hearts Bracelet",
    price: 4100,
    currency: "BHD",
    text: "price",
    isNew: true,
  },
  {
    id: 8,
    image: "/products/product-8.jpeg",
    title: "Gucci Icon Ring",
    price: 1200,
    currency: "BHD",
    text: "price",
    isNew: false,
  },
  {
    id: 9,
    image: "/products/product-9.svg",
    title: "Hermès Kelly Bag Charm",
    price: 850,
    currency: "BHD",
    text: "price",
    isNew: true,
  },
]

export function Products() {
  return (
    <div className="md:max-w-7xl mx-auto mt-10 md:mt-20 p-4 sm:p-2">
      {/* Header */}
      <div className="flex items-center justify-between px-4">
        <h1 className="text-2xl sm:text-[26px] font-bold text-gray-700 cursor-pointer select-none text-wrap">Don't wait, Buy now</h1>
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
              className="pl-1 md:basis-1/3 lg:basis-1/4"
            >
              <Card className="flex border-none flex-col select-none relative">
                <CardContent className="flex flex-col">
                  {/* Whole container with border */}
                  <div className="relative border rounded-lg overflow-hidden p-2">
                    {/* NEW badge */}
                    {product.isNew && (
                      <div className="absolute left-2 top-2 shadow-lg bg-red-500 px-2 py-1 rounded-lg text-xs text-white font-semibold">
                        NEW
                      </div>
                    )}

                    {/* Bookmark top-right */}
                    <div className="absolute top-2 right-2 shadow-lg bg-gray-50 p-2 rounded-lg">
                      <Bookmark className="w-5 h-5 text-gray-700" />
                    </div>

                    {/* Image */}
                    <div className="w-full h-[200px] flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="object-contain max-h-[180px] w-full"
                      />
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="mt-3 space-y-1 text-left">
                    <h2 className="text-base text-gray-800 font-medium line-clamp-2">
                      {product.title}
                    </h2>
                    <div className="flex flex-col items-start gap-2">
                      <span className="font-medium text-sm text-gray-500">
                        {product.text}
                      </span>
                      <span className="font-bold text-base text-gray-700">
                        {product.currency + " " + product.price}
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
