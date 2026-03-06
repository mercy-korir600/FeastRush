export interface MenuItemType {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export interface CartItemType extends MenuItemType {
  quantity: number;
}