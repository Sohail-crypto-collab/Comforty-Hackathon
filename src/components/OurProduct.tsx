"use client"
import { useCart } from "@/app/context/CartContext";
import Link from "next/link"
import { useEffect, useRef, useState } from "react";
import { BsCartDash } from "react-icons/bs"
import WishlistIcon from "./WishlistIcon";

const OurProduct = ({Products} : {Products : any}) => {

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
    <section>
    <div className='min-h-screen bg-gray-50 py-12'>
    <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
    <h2 className='text-[#272343] text-2xl font-bold text-center mb-8 text-center tracking-normal font-semibold'>
    Our Products</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Products.map((prod: any , index : any)=>{
           return(
            <div
            key={prod.slug}
            ref={(el) => {
              // Properly assigning the ref to each product element
              if (el) productRefs.current[index] = el;
            }}
            data-slug={prod.slug}
            className={`product  flex flex-col cursor-pointer hover:scale-105  ${
              animatedProjects.includes(prod.slug) ? "visible" : ""
            }`}
          >
            {/* Image  */}
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
              <Link href={`/products/${prod.slug}`}>
                <img
                  src={prod.imageUrl}
                  alt={prod.title}
                  className="object-cover hover:brightness-90"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </Link>
              {prod.color && (
                <span
                  className="absolute top-2 left-4 rounded-lg text-sm px-3 py-1"
                  style={{ backgroundColor: prod.color, color: "white" }}
                >
                  {prod.badge}
                </span>
              )}                 
            </div>
           {/* Price and Reviews */}
            <div className="flex items-center justify-between mt-3">
              <div className="text gap-[10px]">
                <h4 className="text-[#272343] text-xl font-semibold" 
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2, // Limit title to 2 lines
                    overflow: "hidden",
                  }}
                >{prod.title}</h4>
                <div>
                  <span className="text-[#272343] text-xl font-medium">${prod.price}</span>
                  {prod.priceWithoutDiscount && (
                    <del className="ml-1 text-lg text-[#9A9CAA]">${prod.priceWithoutDiscount}</del>
                  )}
                </div>
                <div>
                  Reviews
                </div>
              </div>
               <div className="absolute top-2 right-6 rounded-lg size-4 ">
                 <WishlistIcon product={{ ...prod, id: prod.slug || "default-id" }} />
               </div>
            </div>
             {/* Button */}
             <div className="mt-auto">
              <button className="cart mt-3 w-full flex gap-5 py-3 items-center justify-center bg-[#029FAE] hover:bg-[#272343] text-white rounded-lg" onClick={() => handleAddToCart(prod)}>
                <span className="text-lg">Add To Cart</span>
                <BsCartDash className="size-6" />
              </button>
             </div>

          </div>
            )
          })}
        </div>
    </div>
    </div>
    </section>
  )
}

export default OurProduct