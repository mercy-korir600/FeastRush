
import { useEffect, useState } from "react";
import { Step } from  "@users/(features)/trackorder/types/orderTrackingTypes";
export function useOrderTracking(steps: Step[]) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep >= steps.length - 1) return;

    const timer = setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
    }, steps[currentStep].duration);

    return () => clearTimeout(timer);
  }, [currentStep, steps]);

  return { currentStep };
}