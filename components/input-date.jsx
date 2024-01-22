"use client";

import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const InputDate = ({ children, onSelect, value = null }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleSelect = (date) => {
    onSelect(date);
    setIsPopoverOpen(false);
  };

  return (
    <Popover
      open={isPopoverOpen}
      onOpenChange={setIsPopoverOpen}
    >
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full pl-3 text-left font-normal",
            !value && "text-muted-foreground"
          )}
          onClick={() => setIsPopoverOpen(!isPopoverOpen)}
        >
          {value ? format(value, "MMMM dd, y") : <span>{children}</span>}
          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto p-0"
        align="start"
        offset={[0, 8]}
      >
        <Calendar
          mode="single"
          selected={value}
          onSelect={handleSelect}
          disabled={(date) =>
            date > new Date() || date < new Date("1970-01-01")
          }
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
