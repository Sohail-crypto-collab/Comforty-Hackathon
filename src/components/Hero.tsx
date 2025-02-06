import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between py-12 lg:py-24 min-h-[80vh]">
          <div className="flex flex-col space-y-4 lg:space-y-6 max-w-[500px]">
            <span className="text-sm lg:text-base font-medium tracking-wider text-muted-foreground">
              WELCOME TO CHAIRY
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-primary">
              Best Furniture Collection For Your Interior.
            </h1>
            <Button 
              className="group w-fit bg-teal-500 hover:bg-teal-600"
            >
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="mt-8 lg:mt-0 w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-[280px] sm:w-[350px] lg:w-[450px] aspect-square transition duration-300 transform hover:scale-105">
              <Image
                src="/hero.png"
                alt="Modern accent chair"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
