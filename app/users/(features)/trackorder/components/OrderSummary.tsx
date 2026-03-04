"use client";

import { OrderSummaryProps } from "@users/(features)/trackorder/types/orderTrackingTypes"

export default function OrderSummary({ items, total }: OrderSummaryProps) {
  return (
    <div className="bg-card rounded-2xl border border-border p-6">
      <h3 className="font-semibold mb-4">Order Summary</h3>

      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between text-sm">
            <span className="text-muted-foreground">
              {item.quantity}x {item.name}
            </span>
            <span>KSh {item.price * item.quantity}</span>
          </div>
        ))}

        <div className="border-t pt-3 flex justify-between font-bold">
          <span>Total</span>
          <span className="text-primary">KSh {total}</span>
        </div>
      </div>
    </div>
  );
}