"use client";

import TrackingStepItem from "./TrackingStepItem";

interface Step {
  label: string;
  icon: any;
  duration: number;
}

interface Props {
  steps: Step[];
  currentStep: number;
}

export default function TrackingSteps({ steps, currentStep }: Props) {
  return (
    <div className="bg-card rounded-2xl border border-border p-6 mb-8">
      <div className="flex flex-col gap-6">
        {steps.map((step, i) => (
          <TrackingStepItem
            key={step.label}
            step={step}
            index={i}
            currentStep={currentStep}
            isLast={i === steps.length - 1}
          />
        ))}
      </div>
    </div>
  );
}