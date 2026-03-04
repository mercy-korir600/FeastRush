"use client";

import { MapPin, ShoppingBag, Search, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useCounty } from "@users/hooks/useCounty";

const Navbar = () => {
  const [totalItems] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const { counties, selectedCounty, handleCountyChange } = useCounty();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-secondary/70 border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
         
          <span className="font-bold text-xl text-primary">
            FeastRush
          </span>
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 flex-1 max-w-md mx-8">

          <MapPin className="w-4 h-4 text-primary" />

          <select
            value={selectedCounty.id}
            onChange={(e) => handleCountyChange(Number(e.target.value))}
            className="bg-transparent text-sm outline-none text-gray-600 cursor-pointer"
          >
            {counties.map((county) => (
              <option key={county.id} value={county.id}>
                {county.name}, Kenya
              </option>
            ))}
          </select>

          <span className="mx-2 text-gray-300">|</span>

          <Search className="w-4 h-4 text-primary" />

          <input
            type="text"
            placeholder="Search restaurants or dishes..."
            className="bg-transparent text-sm outline-none flex-1 text-gray-800 placeholder:text-gray-400"
          />
        </div>

        {/* User & Cart */}
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
            <User className="w-5 h-5 text-gray-700" />
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-10 h-10 rounded-full bg-primary flex items-center justify-center"
          >
            <ShoppingBag className="w-5 h-5 text-secondary" />

            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;