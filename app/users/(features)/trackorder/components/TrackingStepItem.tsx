"use client";

import { Clock } from "lucide-react";
import { TrackingStepItemProps } from "@users/(features)/trackorder/types/orderTrackingTypes";

export default function TrackingStepItem({
  step,
  index,
  currentStep,
  isLast,
}: TrackingStepItemProps) {
  const isCompleted = index < currentStep;
  const isActive = index === currentStep;
  const Icon = step.icon;

  return (
    <div className="flex items-start gap-4">
      <div className="flex flex-col items-center">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
            isCompleted
              ? "bg-green text-secondary"
              : isActive
              ? "bg-primary text-secondary animate-pulse"
              : "bg-gray text-muted-foreground"
          }`}
        >
          <Icon className="w-5 h-5" />
        </div>

        {!isLast && (
          <div
            className={`w-0.5 h-10 mt-1 ${
              isCompleted ? "bg-green" : "bg-gray-300"
            }`}
          />
        )}
      </div>

      <div className="pt-2">
        <p
          className={`font-semibold ${
            isCompleted || isActive ? "text-black" : "text-muted-foreground"
          }`}
        >
          {step.label}
        </p>

        {isActive && (
          <p className="text-sm text-primary mt-0.5 flex items-center gap-1">
            <Clock className="w-3 h-3" /> In progress...
          </p>
        )}

        {isCompleted && (
          <p className="text-sm text-green mt-0.5">Completed</p>
        )}
      </div>
    </div>
  );
}