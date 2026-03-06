import { ComponentType, SVGProps } from "react";

export interface Step {
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>; 
  duration: number; 
}

export interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface TrackingStepItemProps {
  step: Step;
  index: number;
  currentStep: number;
  isLast: boolean;
}

// export interface Item {
//   id: number;
//   name: string;
//   price: number;
//   quantity: number;
// }

export interface OrderSummaryProps {
  items: Item[];
  total: number;
}