
interface MenuItemProps {
  item: any;
  addToCart: (item: any) => void;
}

export default function MenuItem({ item, addToCart }: MenuItemProps) {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm">

      {/* LEFT SIDE: Text */}
      <div className="flex-1">
        <h2 className="font-semibold text-lg">{item.name}</h2>
        <p className="text-gray-500 text-sm">{item.description}</p>
        <p className="text-orange-500 font-bold mt-2">
          KSh {item.price}
        </p>
      </div>

      {/* RIGHT SIDE: Image + Button */}
      <div className="flex items-center gap-4">
        
        {/* Image */}
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded-xl"
        />

        {/* Add Button */}
        <button
          onClick={() => addToCart(item)}
          className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl hover:bg-orange-600 transition"
        >
          +
        </button>
      </div>

    </div>
  );
}