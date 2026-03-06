import { useState } from "react";
import { CartItemType, MenuItemType } from "../types/restaurant.types";

export function useCart() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItemType[]>([]);

  const addToCart = (item: MenuItemType) => {
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

  return {
    cart,
    setCart,
    cartOpen,
    setCartOpen,
    addToCart,
  };
}