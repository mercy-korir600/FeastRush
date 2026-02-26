"use client";

import { MapPin, ShoppingBag, Search, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [totalItems, setTotalItems] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-lg">
              
            </span>
          </div>
          <span className="font-display font-bold text-xl text-primary">
            FeastRush
          </span>
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex items-center gap-2  bg-secondary rounded-full px-4 py-2 flex-1 max-w-md mx-8">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Kakamega, Kenya</span>
          <span className="text-border mx-2">|</span>
          <Search className="w-4 h-4 text-primary" />
          <input
            type="text"
            placeholder="Search restaurants or dishes..."
            className="bg-transparent text-sm outline-none flex-1 text-foreground placeholder:text-muted-foreground"
          />
        </div>

        {/* User & Cart */}
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors">
            <User className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-10 h-10 rounded-full gradient-primary flex items-center justify-center hover:opacity-90 transition-opacity"
          >
            <ShoppingBag className="w-5 h-5 text-primary-foreground" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
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