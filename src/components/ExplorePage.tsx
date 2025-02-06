import React from 'react'
import Image from 'next/image'

const galleryImages = [
  {
    id: 1,
    src: "/item-category 1.png",
    alt: 'Orange modern chair',
    isFeatured: true
  },
  {
    id: 2,
    src: "/card.png",
    alt: 'White cushioned chair'
  },
  {
    id: 3,
    src:"/card3.png" ,
    alt: 'Classic white chair'
  },
  {
    id: 4,
    src: "/card2.png",
    alt: 'Grey upholstered chair'
  },
  {
    id: 5,
    src: "/card3.png",
    alt: 'White wooden chair'
  }
]

const ExplorePage = () => {
  return (

    <section className="w-full py-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex flex-col lg:flex-row gap-4">
            {/* Featured Image */}
            <div className="lg:w-1/2">
              {galleryImages.filter(img => img.isFeatured).map(image => (
                <div key={image.id} className="relative aspect-square w-full overflow-hidden rounded-lg transition duration-300 transform hover:scale-105">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              ))}
            </div>

            {/* Grid Images */}
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4 ">
                {galleryImages.filter(img => !img.isFeatured).map(image => (
                  <div key={image.id} className="relative aspect-square w-full overflow-hidden rounded-lg transition duration-300 transform hover:scale-105">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Explore Text Overlay */}
            <div className="absolute left-6 top-6 z-10">
              <div className="space-y-1">
                <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">
                  Explore
                </p>
                <h2 className="text-2xl font-semibold text-zinc-900">
                  New and Popular Styles
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
  )
}

export default ExplorePage