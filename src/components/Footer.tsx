import {
  Facebook,
  Twitter,
  Instagram,
  PinIcon as Pinterest,
  Youtube,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const categories = [
  { name: "Sofa", href: "#" },
  { name: "Armchair", href: "#" },
  { name: "Wing Chair", href: "#" },
  { name: "Desk Chair", href: "#" },
  { name: "wooden Chair", href: "#" },
  { name: "Park Bench", href: "#" },
];

const support = [
  { name: "Help & Support", href: "#" },
  { name: "Terms & Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Help", href: "#" },
];

const socialLinks = [
  { Icon: Facebook, href: "#" },
  { Icon: Twitter, href: "#" },
  { Icon: Instagram, href: "#" },
  { Icon: Pinterest, href: "#" },
  { Icon: Youtube, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative h-8 w-8 text-primary">
                {/* Replace with your actual logo */}
                <Image src="/Logo Icon.png" alt="Logo" fill className="object-contain" />
              </div>
              <h1 className="text-xl font-bold text-teal-500">Comforty</h1>
            </div>
            <p className="text-sm text-gray-500">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis
              interdum. Cras egestas purus
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="text-gray-400 hover:text-gray-900 hover:font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              CATEGORY
            </h3>
            <ul className="mt-4 space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <a
                    href={category.href}
                    className="text-sm text-gray-500 hover:text-teal-500 hover:font-bold"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              SUPPORT
            </h3>
            <ul className="mt-4 space-y-3">
              {support.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-500 hover:text-teal-500 hover:font-bold"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 hover:text-gray-900 hover:font-bold">
              NEWSLETTER
            </h3>
            <p className="mt-4 text-sm text-gray-500 hover:text-teal-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim
            </p>
            <form className="mt-4">
              <div className=" max-w-md gap-x-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 min-w-0"
                />
                <Button type="submit" className="mt-3 bg-teal-500">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
