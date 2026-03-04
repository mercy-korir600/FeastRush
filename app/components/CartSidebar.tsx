"use client";

import { FaTrash } from "react-icons/fa";

interface CartSidebarProps {
  cart: any[];
  cartOpen: boolean;
  setCartOpen: (val: boolean) => void;
  setCart: (val: any) => void;
}

export default function CartSidebar({
  cart,
  cartOpen,
  setCartOpen,
  setCart,
}: CartSidebarProps) {
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const delivery = 299;
  const total = subtotal + delivery;

  // Increase quantity
  const handleIncrease = (id: number) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const handleDecrease = (id: number) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Delete item
  const handleDelete = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white shadow-2xl z-50 w-[36rem] transform transition-transform duration-300 ${
        cartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Your Cart</h2>
          <button
            onClick={() => setCartOpen(false)}
            className="text-gray-500 hover:text-gray-800 transition text-lg"
          >
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 space-y-4 overflow-y-auto pr-2">
          {cart.length === 0 && (
            <p className="text-gray-400 text-center mt-10">
              Your cart is empty 🛒
            </p>
          )}

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 transition"
            >
              {/* LEFT: Image + Details */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg shadow-sm"
                />

                <div className="flex flex-col">
                  <p className="text-lg font-semibold">
                    {item.name}
                  </p>
                  <p className="text-sm font-bold text-orange-500">
                    KSh {item.price * item.quantity}
                  </p>
                </div>
              </div>

              {/* RIGHT: Controls */}
              <div className="flex items-center gap-2">
                {/* Decrease */}
                <button
                  onClick={() => handleDecrease(item.id)}
                  className="w-7 h-7 flex items-center justify-center bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition"
                >
                  −
                </button>

                {/* Quantity */}
                <span className="w-6 text-center font-medium">
                  {item.quantity}
                </span>

                {/* Increase */}
                <button
                  onClick={() => handleIncrease(item.id)}
                  className="w-7 h-7 flex items-center justify-center bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
                >
                  +
                </button>

                {/* Delete */}
                <button
                  onClick={() => handleDelete(item.id)}
                  className="w-7 h-7 flex items-center justify-center bg-gray-200 text-red-500 rounded-full hover:bg-red-100 transition"
                >
                  <FaTrash className="text-sm" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="border-t pt-6 space-y-3">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>KSh {subtotal}</span>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>Delivery Fee</span>
            <span>KSh {delivery}</span>
          </div>

          <div className="flex justify-between font-bold text-xl">
            <span>Total</span>
            <span className="text-orange-500">
              KSh {total}
            </span>
          </div>

          {/* Place Order */}
          <button className="w-full mt-4 bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition font-semibold">
            Place Order - KSh {total}
          </button>

          {/* Clear Cart */}
          <button
            onClick={() => setCart([])}
            className="w-full mt-2 bg-white text-gray-500 py-3 rounded-xl border border-gray-300 hover:text-orange-600 transition"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}