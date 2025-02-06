import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';

const TopHeader = () => {
  return (
    <section className="w-full bg-[#272343] py-2 sm:py-3">
      <div className="max-w-[1100px] mx-auto px-4 flex flex-row items-center justify-between">
        <div className="flex items-center gap-2 opacity-70">
          <Image src="/checkmark.png" alt="" width={12} height={12} className="hidden sm:block" />
          <p className="hidden xl:block text-white text-sm font-normal">
            Summer Sale Free Express Delivery
          </p>
          <p className="hidden lg:block xl:hidden text-white text-sm">
            Summer Sale Free Express Delivery
          </p>
          <p className="hidden md:block lg:hidden text-white text-sm">Summer Sale - OFF 50%</p>
          <p className="block md:hidden text-white text-xs">Sale</p>
          <Link
            href="#"
            className="text-xs sm:text-sm font-semibold hover:underline text-white"
          >
            ShopNow
          </Link>
        </div>
        <div className="flex items-center gap-4 sm:gap-6 opacity-70">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="link"
                className="h-auto p-0 text-white text-xs sm:text-sm"
              >
                English
                <ChevronDown className="w-4 h-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Français</DropdownMenuItem>
              <DropdownMenuItem>Español</DropdownMenuItem>
              <DropdownMenuItem>Deutsch</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/FaqSection"
            className="text-white text-xs sm:text-sm"
          >
            Faqs
          </Link>
          <Link
            href="/ContactForm"
            className="hidden md:block text-white text-sm"
          >
            Help
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopHeader;
