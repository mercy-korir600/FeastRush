
interface MenuItemProps {
  item: any;
  addToCart: (item: any) => void;
}

export default function MenuItem({ item, addToCart }: MenuItemProps) {
  return (
    <div className="flex justify-between items-center bg-card p-4 rounded-xl shadow-sm">

      
      <div className="flex-1">
        <h2 className="font-semibold text-lg">{item.name}</h2>
        <p className="text-muted-foreground text-sm">{item.description}</p>
        <p className="text-primary font-bold mt-2">
          KSh {item.price}
        </p>
      </div>

      
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
          className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-xl hover:opacity-90 transition"
        >
          +
        </button>
      </div>

    </div>
  );
}


