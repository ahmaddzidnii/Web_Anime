"use client";

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export const ProgressComponent = ({ value, status, className }) => {
  let color;
  switch (status) {
    case "Completed":
      color = "bg-sky-500";
      break;
    case "Watching":
      color = "bg-green-500";
      break;
    case "PlanToWatch":
      color = "bg-secondary";
      break;
    case "OnHold":
      color = "bg-purple-500";
      break;
    case "Dropped":
      color = "bg-red-500";
      break;
  }
  return (
    <Progress
      value={value}
      color={color}
      className={cn("rounded-[1px]", className)}
    />
  );
};
