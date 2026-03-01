"use client";

import { useState } from "react";
// import MenuItem from "@/app/components/MenuItem";
// import CartSidebar from "@/app/components/CartSidebar";
// import Overlay from "@/app/components/Overlay";
import MenuItem from "../components/MenuItem";
import CartSidebar from "../components/CartSidebar";
import Overlay from "../components/Overlay";

export default function RestaurantPage() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<any[]>([]);

  const menu = [
    {
      id: 1,
      name: "Margherita Pizza",
      description: "Fresh mozzarella, tomato sauce, basil",
      price: 1499,
      image: "/pizza1.jpg",
    },
    {
      id: 2,
      name: "Pepperoni Pizza",
      description: "Pepperoni with mozzarella",
      price: 1699,
      image: "/pizza2.jpg",
    },
  ];

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

  return (
    <div className="relative min-h-screen bg-gray-50">

      {/* Page Content */}
      <div
        className={`transition-all duration-300 ${
          cartOpen ? "blur-sm brightness-75" : ""
        }`}
      >
        <div className="max-w-5xl mx-auto py-10 px-4">
          <h1 className="text-3xl font-bold mb-6">Bella Napoli</h1>

          <div className="space-y-4">
            {menu.map((item) => (
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