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
  description:
    "Fresh mozzarella, tomato sauce, basil on hand-tossed dough",
  price: 1499,
  category: "Pizza",
  image: "/pizza1.jpg",
},
    {
      id: 2,
      name: "Pepperoni Pizza",
      description:
        "Classic Pepperoni with mozzarella and marinara",
      price: 1699,
      category: "Pizza",
      image: "/pizza2.jpg",
    },
{
  id: 3,
  name: "Caesar Salad",
  description:
    "Romaine, croutons, parmesan, Caesar dressing",
  price: 899,
  category: "Salads",
  image: "/salad1.jpg",
},
{
  id: 4,
  name: "Tiramisu",
  description:
    "Classic Italian coffee-flavored dessert",
  price: 599,
  category: "Desserts",
  image: "/dessert1.webp",
},
    {
      id: 5,
      name: "Chocolate Cake",
      description:
        " chocolate-flavored dessert",
      price: 668,
      category: "Desserts",
      image: "/dessert1.webp",
    },
  ];

  const categories = ["All", "Pizza", "Pasta", "Salads", "Desserts"];

  const addToCart = (item: any) => {
    setCartOpen(true);

    const existing = cart.find((i) => i.id === item.id);

    if (existing) {
      setCart(
        cart.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const filteredMenu =
    categoryFilter === "All"
      ? menu
      : menu.filter(
          (item) => item.category === categoryFilter
        );

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Page Content */}
      <div
        className={`transition-all duration-300 ${
          cartOpen ? "blur-sm brightness-75" : ""
        }`}
      >
        
        <div className="relative w-full h-72 md:h-96">

          {/* Background Image */}
          <img
            src="/restaurant.jpeg"  
            alt="Restaurant"
            className="w-full h-full object-cover opacity-85"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Back button */}
          <button className="absolute top-6 left-6 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-md hover:bg-white transition">
            ←
          </button>
        </div>

       
        <div className="max-w-5xl mx-auto px-4">

          {/* Floating Header Card */}
          <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4 -mt-16 relative z-10 mb-8">

            <div>
              <h1 className="text-3xl font-bold">
                Bella Napoli
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Italian · $$
              </p>
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

         
          <h2 className="text-2xl font-semibold mb-4">
            Menu
          </h2>

          {/* Category Filters */}
          <div className="flex gap-3 mb-6 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() =>
                  setCategoryFilter(cat)
                }
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

          {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10">
  {filteredMenu.map((item) => (
    <MenuItem
      key={item.id}
      item={item}
      addToCart={addToCart}
    />
  ))}
</div>
        </div>
</div>

{/* Dark Overlay */}
{cartOpen && (
  <Overlay
    onClose={() => setCartOpen(false)}
  />
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