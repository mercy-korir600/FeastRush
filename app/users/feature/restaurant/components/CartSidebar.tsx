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

  // Add quantity
  const handleIncrease = (id: number) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Reduce quantity
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
      className={`fixed top-0 right-0 h-full bg-card shadow-2xl z-50 w-[36rem] transform transition-transform duration-300 ${
        cartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Your Cart</h2>
          <button
            onClick={() => setCartOpen(false)}
            className="text-muted-foreground hover:text-foreground transition text-lg"
          >
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 space-y-4 overflow-y-auto pr-2">
          {cart.length === 0 && (
            <p className="text-muted-foreground text-center mt-10">
              Your cart is empty 🛒
            </p>
          )}

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-muted border border-border rounded-xl hover:bg-secondary transition"
            >
              
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
                  <p className="text-sm font-bold text-primary">
                    KSh {item.price * item.quantity}
                  </p>
                </div>
              </div>

              
              <div className="flex items-center gap-2">
                {/* Decrease */}
                <button
                  onClick={() => handleDecrease(item.id)}
                  className="w-7 h-7 flex items-center justify-center bg-secondary text-foreground rounded-full hover:bg-muted transition"
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
                  className="w-7 h-7 flex items-center justify-center bg-primary text-primary-foreground rounded-full hover:opacity-90 transition"
                >
                  +
                </button>

                {/* Delete */}
                <button
                  onClick={() => handleDelete(item.id)}
                  className="w-7 h-7 flex items-center justify-center bg-secondary text-destructive rounded-full hover:opacity-80 transition"
                >
                  <FaTrash className="text-sm" />
                </button>
              </div>
            </div>
          ))}
        </div>

        
        <div className="border-t pt-6 space-y-3">
          <div className="flex justify-between text-muted-foreground">
            <span>Subtotal</span>
            <span>KSh {subtotal}</span>
          </div>

          <div className="flex justify-between text-muted-foreground">
            <span>Delivery Fee</span>
            <span>KSh {delivery}</span>
          </div>

          <div className="flex justify-between font-bold text-xl">
            <span>Total</span>
            <span className="text-primary">
              KSh {total}
            </span>
          </div>

          
          <button className="w-full mt-4 bg-primary text-primary-foreground py-3 rounded-xl hover:opacity-90 transition font-semibold">
            Place Order - KSh {total}
          </button>

        
          <button
            onClick={() => setCart([])}
            className="w-full mt-2 bg-card text-muted-foreground py-3 rounded-xl border border-border hover:text-primary transition"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}