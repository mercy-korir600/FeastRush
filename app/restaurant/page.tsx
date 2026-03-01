
"use client";

import { useState } from "react";
import MenuItem from "../components/MenuItem";
import CartSidebar from "../components/CartSidebar";
import Overlay from "../components/Overlay";

export default function RestaurantPage() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<any[]>([]);
  const [categoryFilter, setCategoryFilter] = useState("All");

  const menu = [
    {
      id: 1,
      name: "Margherita Pizza",
      description: "Fresh mozzarella, tomato sauce, basil on hand-tossed dough",
      price: 1499,
      category: "Pizza",
      image: "/pizza1.jpg",
    },
    {
      id: 2,
      name: "Pepperoni Pizza",
      description: "Classic Pepperoni with mozzarella and marinara",
      price: 1699,
      category: "Pizza",
      image: "/pizza2.jpg",
    },
    {
      id: 3,
      name: "Caesar Salad",
      description: "Romaine, croutons, parmesan, Caesar dressing",
      price: 899,
      category: "Salads",
      image: "/salad1.jpg",
    },
    {
      id: 4,
      name: "Tiramisu",
      description: "Classic Italian coffee-flavored dessert",
      price: 599,
      category: "Desserts",
      image: "/dessert1.jpg",
    },
  ];

  const categories = ["All", "Pizza", "Pasta", "Salads", "Desserts"];

  const addToCart = (item: any) => {
    setCartOpen(true);

    const existing = cart.find((i) => i.id === item.id);

    if (existing) {
      setCart(
        cart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  // Filtered menu based on category
  const filteredMenu =
    categoryFilter === "All"
      ? menu
      : menu.filter((item) => item.category === categoryFilter);

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Page Content */}
      <div
        className={`transition-all duration-300 ${
          cartOpen ? "blur-sm brightness-75" : ""
        }`}
      >
        <div className="max-w-5xl mx-auto py-10 px-4">

          {/* Restaurant Header Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold">Bella Napoli</h1>
              <p className="text-sm text-gray-500 mt-1">Italian $$</p>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-md">
                ⭐ 4.8 (382)
              </div>
              <div className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-md">
                ⏰ 25-35 min
              </div>
              <div className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-md">
                Ksh 299
              </div>
              <div className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-md">
                🛵
              </div>
            </div>
          </div>

          {/* Menu Title */}
          <h2 className="text-2xl font-semibold mb-4">Menu</h2>

          {/* Category Filter Buttons */}
          <div className="flex gap-3 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-4 py-2 rounded-full border ${
                  categoryFilter === cat
                    ? "bg-orange-600 text-white border-blue-600"
                    : "bg-gray-200 text-gray-700 border-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="space-y-4">
            {filteredMenu.map((item) => (
              <MenuItem key={item.id} item={item} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </div>

      {/* Dark Overlay */}
      {cartOpen && <Overlay onClose={() => setCartOpen(false)} />}

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