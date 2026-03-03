"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-secondary/1000 border-b  border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
        <div className="relative w-44 h-16 sm:w-52 sm:h-20 md:w-60 md:h-24 cursor-pointer">
          <Image
            src="/logo.png" 
            alt="FeastRush Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </header>
  );
}