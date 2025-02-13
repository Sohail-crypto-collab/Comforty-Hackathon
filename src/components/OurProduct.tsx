"use client"
import { useCart } from "@/app/context/CartContext";
import Link from "next/link"
import { useEffect, useRef, useState } from "react";
import { BsCartDash } from "react-icons/bs"
import WishlistIcon from "./WishlistIcon";
import Image from "next/image";


const OurProduct = ({ Products }: { Products: any }) => {

  console.log("products data", Products)
  const { addToCart } = useCart();

  const handleAddToCart = (product: any) => {
    console.log("Product data:", product); // Log the entire product object
    addToCart({
      id: product.slug, // Just use product.slug if it's already the string value
      title: product.title,
      price: product.price,
      quantity: 1,
      imageUrl: product.imageUrl,
      color: ""
    });
    console.log("item added to cart with id:", product.slug);
  };

  const [animatedProjects, setAnimatedProjects] = useState<string[]>([]);
  const productRefs = useRef<(HTMLDivElement | null)[]>([]); // Ref to track elements

  useEffect(() => {
    // Creating Intersection Observer to watch elements
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const slug = entry.target.getAttribute("data-slug");
          if (slug) {
            setAnimatedProjects((prev) => [...prev, slug]); // Trigger animation
          }
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is in the viewport

    // Attach observer to each product
    productRefs.current.forEach((product) => {
      if (product) observer.observe(product);
    });

    return () => {
      observer.disconnect(); // Clean up observer on unmount
    };
  }, [Products]);

  return (
    <section className="py-12 w-full">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1100px]">
          <h2 className='text-2xl font-bold text-center mb-8  tracking-normal '>
            Our Products</h2>
          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {Products.map((prod: any, index: any) => {
              return (
                <Link href={`/products/${prod.slug}`}>
                  <div
                    key={prod.slug || `product-${index}`} // ✅ Ensures a unique key
                    ref={(el) => {
                      // Properly assigning the ref to each product element
                      if (el) productRefs.current[index] = el;
                    }}
                    data-slug={prod.slug}
                    className={`product mb-16 mt-5 hover:scale-105 transition-all duration-300  ${animatedProjects.includes(prod.slug) ? "visible" : ""
                      }`}
                  >
                    {/* Image  */}
                    <div className="relative img aspect-square">

                      <Image
                        src={prod.imageUrl}
                        alt={prod.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="hover:brightness-90 rounded-md object-cover"
                        priority={index < 4}
                      />


                      {prod.color && (
                        <span
                          className="top-2 left-4 absolute px-3 py-1 rounded-lg text-sm"
                          style={{ backgroundColor: prod.color, color: "white" }}
                        >
                          {prod.badge}
                        </span>
                      )}
                    </div>



                    {/* Price and Reviews */}
                    <div className="flex justify-between mt-3">
                      <div>
                        <h4 className="text-[#272343]">{prod.title}</h4>
                        <div>
                          <span className="text-[#272343] text-[18px] font-medium">{prod.priceWithoutDiscount}</span>
                          <del className="ml-1 text-[#9A9CAA]">{prod.price}</del>
                        </div>
                      </div>
                      <button
                        className="cart px-3 py-2 bg-[#F0F2F3] hover:bg-[#029FAE] text-[#272343] hover:text-white rounded-lg transition-colors duration-300"
                        onClick={(e) => {
                          e.preventDefault()
                          handleAddToCart(prod)
                        }}
                      >
                        <BsCartDash className="size-6" />
                      </button>
                    </div>




                    <div className="top-2 right-7 absolute rounded-lg size-4">
                      <WishlistIcon
                        product={{
                          ...prod,
                          id: prod.slug || "default-id",
                        }}
                      />
                    </div>




                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurProduct;
