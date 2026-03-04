
import { useState } from "react";
import {Item} from "@users/(features)/trackorder/types/orderTrackingTypes"
import { calculateTotal, sampleItems } from "@users/(features)/trackorder/data/sumarrydata"

export function useOrder() {
  const [items, setItems] = useState<Item[]>(sampleItems);
  const [total, setTotal] = useState<number>(calculateTotal(items));

  const addItem = (newItem: Item) => {
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    setTotal(calculateTotal(updatedItems));
  };

  return { items, total, addItem };
}