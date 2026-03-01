interface Props {
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
}: Props) {
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const delivery = 299;
  const total = subtotal + delivery;

  return (
    <div
      className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
        cartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button onClick={() => setCartOpen(false)}>✕</button>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between">
              <div>
                <p>{item.name}</p>
                <p className="text-sm text-gray-500">
                  x{item.quantity}
                </p>
              </div>
              <p className="font-semibold">
                KSh {item.price * item.quantity}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t pt-4 space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>KSh {subtotal}</span>
          </div>

          <div className="flex justify-between">
            <span>Delivery</span>
            <span>KSh {delivery}</span>
          </div>

          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span className="text-orange-500">
              KSh {total}
            </span>
          </div>

          <button className="w-full mt-4 bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition">
            Place Order - KSh {total}
          </button>
          <button className="w-full mt-4 bg-white text-gray-500 py-3 rounded-xl  hover:text-orange-600 transition-colors">
             Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}
