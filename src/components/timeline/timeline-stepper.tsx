import { Button } from "@/components/ui/button";
import {
  Calendar,
  BarChart3,
  Mail,
  Check,
  Users,
  MoreHorizontal,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { TimelineStep } from "@/types/timeline";

interface TimelineStepperProps {
  steps: TimelineStep[];
  selectedStepId: string;
  onStepSelect: (stepId: string) => void;
}

const TimelineStepper = ({
  steps,
  selectedStepId,
  onStepSelect,
}: TimelineStepperProps) => {
  const getIcon = (iconType: string) => {
    const icons = {
      calendar: Calendar,
      "bar-chart": BarChart3,
      envelope: Mail,
      check: Check,
      users: Users,
    };
    return icons[iconType as keyof typeof icons];
  };

  const selectedIndex = steps.findIndex(step => step.id === selectedStepId);

  return (
    <div className="relative flex flex-col gap-10">
      {steps.map((step, index) => {
        const IconComponent = getIcon(step.icon);
        const isSelected = selectedStepId === step.id;
        const isClickable = step.hasPreview;
        const isLast = index === steps.length - 1;
        const isCompleted = index < selectedIndex;

        return (
          <div
            key={step.id}
            className={cn(
              "relative flex items-start gap-5 py-2 px-2 rounded-full group transition-all duration-200",
              isSelected && "bg-gray-50",
              isClickable && "cursor-pointer"
            )}
            onClick={() => isClickable && onStepSelect(step.id)}
          >
            {!isLast && (
              <div 
                className={`absolute left-7 h-9 w-1 ${isCompleted ? "bg-gray-900" : "bg-gray-200"} rounded-full z-0 translate-y-13`}
              />
            )}
            <div className="relative z-10 flex-shrink-0">
              {step.icon === "dot" ? (
                <div className={cn("flex items-center justify-center size-10", isCompleted && "bg-gray-900")}>
                  <div className="w-3 h-3 rounded-full bg-gray-400 mt-2" />
                </div>
              ) : (
                <div
                  className={cn(
                    "flex items-center justify-center size-10 rounded-full transition-all duration-200",
                    isSelected || isCompleted
                      ? "bg-gray-900 text-white shadow-sm"
                      : "bg-gray-100 text-gray-500 group-hover:bg-gray-150"
                  )}
                >
                  {IconComponent && <IconComponent className="w-5 h-5" />}
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-start">
                  <div className="text-sm text-gray-500">
                    {step.date}
                    {step.deadline && (
                      <span className="ml-1">({step.deadline})</span>
                    )}
                  </div>

                  <span className="text-sm font-medium text-gray-900 leading-tight">
                    {step.title}
                  </span>

                  {step.subtitle && (
                    <div className="text-sm text-gray-500 mt-0.5">
                      {step.subtitle}
                    </div>
                  )}
                </div>

                {isSelected && step.hasPreview && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0 text-gray-400 hover:text-gray-600 ml-2 flex-shrink-0"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TimelineStepper;
