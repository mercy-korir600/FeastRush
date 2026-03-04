import {Item} from "@users/(features)/trackorder/types/orderTrackingTypes"

export const sampleItems: Item[] = [
  { id: 1, name: "Burger", price: 250, quantity: 2 },
  { id: 2, name: "Fries", price: 100, quantity: 1 },
  { id: 3, name: "Soda", price: 50, quantity: 3 },
];

export const calculateTotal = (items: Item[]) =>
  items.reduce((sum, item) => sum + item.price * item.quantity, 0);
