import { Card, CardContent } from "@/components/ui/card"
import React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const Hero = () => {
  
  const images = ["/banner/banner-img-1.svg", "/banner/banner-img-2.svg", "/banner/banner-img-3.svg"]

  return (
    <div className="md:max-w-7xl mx-auto">
      <Carousel 
        className=""
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}   
      >
        <CarouselContent>
          {images.map((bannerImage, index) => (
            <CarouselItem key={index}>
              <div className="mt-6 md:mt-14">
                <Card className="p-0 border-0 px-0">
                  <CardContent className="flex items-center justify-center">
                    <img 
                      src={bannerImage} 
                      alt={bannerImage}  
                      width={1300}
                      // height={700}
                      className="object-cover rounded-md" 
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