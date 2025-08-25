import { Card, CardContent } from "@/components/ui/card"
import React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const Hero = () => {
  const images = [
    "/banner/banner-img-1.svg",
    "/banner/banner-img-2.svg",
    "/banner/banner-img-3.svg"
  ]
  
  const smallImages = [
    "/small-banner/banner-1.webp",
    "/small-banner/banner-2.webp",
    "/small-banner/banner-3.webp"
  ]

  return (
    <div className="md:max-w-7xl mx-auto">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="p-0"
      >
        <CarouselContent>
        {images.map((bannerImage, index) => (
          <CarouselItem key={index}>
            <div className="mt-6 md:mt-14">
              <Card className="p-0 border-0 px-0">
                <CardContent className="flex items-center justify-center">
                  {/* Desktop Image */}
                  <img 
                    src={bannerImage} 
                    alt={`banner-${index}`}  
                    width={1300}
                    className="hidden md:block object-cover rounded-md" 
                  />
                  {/* Mobile Image */}
                  <img 
                    src={smallImages[index]} 
                    alt={`small-banner-${index}`}  
                    width={1300}
                    className="block md:hidden object-cover rounded-md" 
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}

        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default Hero
