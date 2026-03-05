"use client";

import { useState } from "react";
import MenuItem from "@users/feature/restaurant/components/MenuItem";
import CartSidebar from "@users/feature/restaurant/components/CartSidebar";
import Overlay from "@users/feature/restaurant/components/Overlay";

import { menu, categories } from "@users/feature/restaurant/data/menuData";
import { useCart } from "@users/feature/restaurant/hooks/useCart";

type MenuItemType = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
};

export default function RestaurantPage() {
  const [categoryFilter, setCategoryFilter] = useState("All");

  const { cart, setCart, cartOpen, setCartOpen, addToCart } = useCart();

  const filteredMenu =
    categoryFilter === "All"
      ? menu
      : menu.filter((item: MenuItemType) => item.category === categoryFilter);

  return (
    <div className="relative bg-gray-50 min-h-screen">

      {/* Page Content */}
      <div className={`transition-all duration-300 ${cartOpen ? "blur-sm brightness-75" : ""}`}>

        {/* Restaurant Hero */}
        <div className="relative w-full h-64 md:h-96">

          {/* Background Image */}
          <img
            src="/restaurant.jpeg"
            alt="Restaurant"
            className="w-full h-full object-cover opacity-85"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Back Button */}
          <button className="absolute top-6 left-6 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-md hover:bg-white transition">
            ←
          </button>

        </div>

        {/* Restaurant Info */}
        <div className="max-w-5xl mx-auto px-4">

          {/* Floating Info Card */}
          <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4 -mt-16 relative z-10 mb-8">

            <div>
              <h1 className="text-3xl font-bold">Bella Napoli</h1>
              <p className="text-sm text-gray-500 mt-1">Italian · $$</p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">

              <div className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                ⭐ 4.8 (382)
              </div>

              <div className="flex items-center gap-1">
                ⏰ 25–35 min
              </div>

              <div className="flex items-center gap-1">
                🛵 KSh 299
              </div>

            </div>
          </div>

          {/* Menu Title */}
          <h2 className="text-2xl font-semibold mb-4">Menu</h2>

          {/* Category Filters */}
          <div className="flex gap-3 mb-6 flex-wrap">
            {categories.map((cat: string) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-4 py-2 rounded-full border transition ${
                  categoryFilter === cat
                    ? "bg-orange-600 text-white border-orange-600"
                    : "bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10">
            {filteredMenu.map((item: MenuItemType) => (
              <MenuItem
                key={item.id}
                item={item}
                addToCart={addToCart}
              />
            ))}
          </div>

        </div>
      </div>

      {/* Overlay */}
      {cartOpen && (
        <Overlay onClose={() => setCartOpen(false)} />
      )}

      {/* Cart Sidebar */}
      <CartSidebar
        cart={cart}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        setCart={setCart}
      />

    </div>
  );
}