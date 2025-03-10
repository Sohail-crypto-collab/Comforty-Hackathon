import { MdOutlineFacebook } from "react-icons/md"
import { RiTwitterFill } from "react-icons/ri"
import { LiaInstagram } from "react-icons/lia"
import { AiFillPinterest } from "react-icons/ai"
import { BiLogoYoutube } from "react-icons/bi"
import Link from "next/link"
import { client } from "@/sanity/lib/client"

const Footer = async () => {
  const categories = await client.fetch(`
    *[_type == "categories"] {
      title,
      "imageUrl": image.asset->url, 
      products
    }
  `)

  return (
    <div className="w-full bg-white">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div className="flex flex-col gap-2 lg:gap-6 w-full">
            <div className="logo flex items-center gap-2">
              <img src="/Logo Icon.png" alt="Logo" className="sm:w-auto w-[30px]" />
              <span className="text-[#272343] md:text-[26px] text-xl font-medium">Comforty</span>
            </div>
            <p className="text-[#272343]/70 lg:text-base text-sm">
              Lorem ipsum dolor, mpora mollitia velit possimus harum eveniet debitis magni!
            </p>
            <div className="icons flex gap-1 text-[#636270]">
              <Link
                href="/"
                className="p-2 rounded-full border hover:text-[#007580] border-white hover:border-[#007580]"
              >
                <MdOutlineFacebook className="size-5" />
              </Link>
              <Link
                href="/"
                className="p-2 rounded-full border hover:text-[#007580] border-white hover:border-[#007580]"
              >
                <RiTwitterFill className="size-5" />
              </Link>
              <Link
                href="/"
                className="p-2 rounded-full border hover:text-[#007580] border-white hover:border-[#007580]"
              >
                <LiaInstagram className="size-5" />
              </Link>
              <Link
                href="/"
                className="p-2 rounded-full border hover:text-[#007580] border-white hover:border-[#007580]"
              >
                <AiFillPinterest className="size-5" />
              </Link>
              <Link
                href="/"
                className="p-2 rounded-full border hover:text-[#007580] border-white hover:border-[#007580]"
              >
                <BiLogoYoutube className="size-5" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:gap-8 w-full lg:col-span-2">
            {/* Category */}
            <div className="flex flex-col lg:gap-5 gap-2">
              <h6 className="text-[#9A9CAA] uppercase tracking-wider text-[14px] font-medium">Categories</h6>
              <ul className="flex flex-col text-sm md:text-[16px] space-y-1 lg:space-y-3 text-[#272343]">
                {categories.map((cat: any) => (
                  <li key={cat.title}>
                    <Link
                      href={`/categories/${encodeURIComponent(cat.title)}`}
                      className="hover:underline hover:underline-offset-4 hover:text-[#007580]"
                    >
                      {cat.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Support */}
            <div className="lg:space-y-5 space-y-2">
              <h6 className="text-[#9A9CAA] uppercase tracking-wider text-[14px] font-medium">Support</h6>
              <div className="flex flex-col text-sm md:text-[16px] space-y-1 lg:space-y-3 text-[#272343]">
                <Link href="/" className="hover:underline hover:underline-offset-4 hover:text-[#007580]">
                  Help & Support
                </Link>
                <Link href="/" className="hover:underline hover:underline-offset-4 hover:text-[#007580]">
                  Terms & Conditions
                </Link>
                <Link href="/" className="hover:underline hover:underline-offset-4 hover:text-[#007580]">
                  Privacy Policy
                </Link>
                <Link href="/" className="hover:underline hover:underline-offset-4 hover:text-[#007580]">
                  Help
                </Link>
              </div>
            </div>
          </div>
          {/* News Letter */}
          <div className="lg:space-y-5 space-y-2 text-[#9A9CAA] w-full">
            <h6 className="uppercase tracking-wider text-[14px] font-medium">Newsletter</h6>
            <div className="flex flex-wrap gap-2">
              <p className="border rounded-lg flex-grow">
                <input
                  type="email"
                  placeholder="Your email"
                  className="outline-none border-none lg:px-3 px-1 py-2 rounded-lg w-full"
                />
              </p>
              <button className="bg-[#007580] text-white py-2 rounded-lg px-1 lg:px-3">Subscribe</button>
            </div>
            <p className="lg:text-base text-sm text-[#272343]/70">
              Lorem ipsum dolor sit amet consectetur, adipisicing eleum hic dolores quae dolor qui.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

