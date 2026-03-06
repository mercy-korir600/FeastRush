"use client";

import OrderHeader from "./OrderHeader";
import TrackingSteps from "./TrackingSteps";
import OrderSummary from "./OrderSummary";
import { steps, orderItems, calculateTotal } from "@users/(features)/trackorder/data/orderTrackingData";
import { useOrderTracking } from   "@users/(features)/trackorder/hooks/useOrderTracking";

export default function OrderTrackingPage() {
  const { currentStep } = useOrderTracking(steps);
  const total = calculateTotal(orderItems);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <OrderHeader />
        <TrackingSteps steps={steps} currentStep={currentStep} />
        <OrderSummary items={orderItems} total={total} />
      </div>
    </div>
  );
}