
import { Step, Item } from  "@users/(features)/trackorder/types/orderTrackingTypes";
import { CheckCircle2, ChefHat, Bike, Package } from "lucide-react";

export const steps: Step[] = [
  { label: "Order Confirmed", icon: CheckCircle2, duration: 3000 },
  { label: "Preparing", icon: ChefHat, duration: 5000 },
  { label: "On the Way", icon: Bike, duration: 7000 },
  { label: "Delivered", icon: Package, duration: 0 },
];

export const orderItems: Item[] = [
  { id: 1, name: "Chicken Burger", price: 450, quantity: 2 },
  { id: 2, name: "Fries", price: 250, quantity: 1 },
  { id: 3, name: "Soda", price: 120, quantity: 2 },
];

export const calculateTotal = (items: Item[]) =>
  items.reduce((acc, item) => acc + item.price * item.quantity, 0);