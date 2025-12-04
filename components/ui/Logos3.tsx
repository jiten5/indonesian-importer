"use client"

import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const logos = [
  { name: "DHL", color: "text-red-600" },
  { name: "Maersk", color: "text-blue-600" },
  { name: "FedEx", color: "text-purple-600" },
  { name: "UPS", color: "text-yellow-600" },
  { name: "DB Schenker", color: "text-red-500" },
  { name: "COSCO", color: "text-blue-700" },
  { name: "MSC", color: "text-blue-800" },
  { name: "Evergreen", color: "text-green-600" },
  { name: "CMA CGM", color: "text-blue-500" },
  { name: "Hapag-Lloyd", color: "text-orange-600" },
]

export default function Logos3() {
  return (
    <section className="py-14">
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              {logos.map((logo, index) => (
                <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                  <div className="flex items-center justify-center p-6">
                    <div className="px-8 py-4 bg-white dark:bg-neutral-800 rounded-lg shadow-md border border-neutral-200 dark:border-neutral-700 hover:shadow-xl hover:scale-105 transition-all duration-300">
                      <span className={`text-xl font-bold ${logo.color} dark:opacity-90`}>
                        {logo.name}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
