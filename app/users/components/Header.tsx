"use client";

import { MapPin, ShoppingBag, Search, User, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useCounty } from "@users/hooks/useCounty";
import { useSearch } from "@users/hooks/useSearch";

const Navbar = () => {
  const [totalItems] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const { counties, selectedCounty, handleCountyChange } = useCounty();
  const { query, setQuery, results } = useSearch(selectedCounty.name);

  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-secondary/70 border-b">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <Link href="/" className="font-bold text-xl text-primary">
            FeastRush
          </Link>

          {/* desktop search */}
          <div className="relative hidden md:flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 flex-1 max-w-md mx-8">
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
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search restaurants or dishes..."
              className="bg-transparent text-sm outline-none flex-1 text-gray-800 placeholder:text-gray-400"
            />

            {/* Desktop Results */}
            {query && (
              <div className="absolute top-14 left-0 w-full bg-secondary shadow-lg rounded-lg p-3 z-50 max-h-64 overflow-y-auto">
                {results.length > 0 ? (
                  results.map((restaurant) => (
                    <div
                      key={restaurant.id}
                      className="py-2 border-b last:border-none hover:bg-gray-100 px-2 rounded cursor-pointer"
                    >
                      <p className="font-semibold">{restaurant.name}</p>
                      <p className="text-sm text-gray-500">
                        {restaurant.menu.join(", ")}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500 py-2">Not Found</p>
                )}
              </div>
            )}
          </div>

          {/* right side */}
          <div className="flex items-center gap-3">
            {/* Mobile Search Button */}
            <button
              onClick={() => setMobileSearchOpen(true)}
              className="md:hidden w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
            >
              <Search className="w-5 h-5 text-gray-700" />
            </button>

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

      {/* mobile search */}
      {mobileSearchOpen && (
        <div className="fixed inset-0 bg-white z-50 p-4 md:hidden">
          {/* Top Bar */}
          <div className="flex items-center gap-3 mb-4">
            <button onClick={() => setMobileSearchOpen(false)}>
              <X className="w-6 h-6" />
            </button>

            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search restaurants or dishes..."
              className="flex-1 border rounded-lg px-3 py-2 outline-none"
            />
          </div>

          {/* County Selector */}
          <div className="mb-4 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <select
              value={selectedCounty.id}
              onChange={(e) => handleCountyChange(Number(e.target.value))}
              className="border rounded-lg px-3 py-2 w-full"
            >
              {counties.map((county) => (
                <option key={county.id} value={county.id}>
                  {county.name}, Kenya
                </option>
              ))}
            </select>
          </div>

          {/* Mobile Results */}
          {query && (
            <div className="bg-secondary rounded-lg p-3 max-h-[60vh] overflow-y-auto">
              {results.length > 0 ? (
                results.map((restaurant) => (
                  <div
                    key={restaurant.id}
                    className="py-2 border-b last:border-none"
                  >
                    <p className="font-semibold">{restaurant.name}</p>
                    <p className="text-sm text-gray-500">
                      {restaurant.menu.join(", ")}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 py-2">Not Found</p>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
