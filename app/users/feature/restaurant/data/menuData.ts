import { MenuItemType } from "../types/restaurant.types";

export const menu: MenuItemType[] = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Fresh mozzarella, tomato sauce, basil on hand-tossed dough",
    price: 1499,
    category: "Pizza",
    image: "/pizza1.jpg",
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    description: "Classic Pepperoni with mozzarella and marinara",
    price: 1699,
    category: "Pizza",
    image: "/pizza2.jpg",
  },
  {
    id: 3,
    name: "Caesar Salad",
    description: "Romaine, croutons, parmesan, Caesar dressing",
    price: 899,
    category: "Salads",
    image: "/salad1.jpg",
  },
  {
    id: 4,
    name: "Tiramisu",
    description: "Classic Italian coffee-flavored dessert",
    price: 599,
    category: "Desserts",
    image: "/dessert1.webp",
  },
  {
    id: 5,
    name: "Chocolate Cake",
    description: "Chocolate-flavored dessert",
    price: 668,
    category: "Desserts",
    image: "/dessert1.webp",
  },
];

export const categories = ["All", "Pizza", "Pasta", "Salads", "Desserts"];