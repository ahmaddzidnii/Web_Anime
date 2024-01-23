import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const SelectWrapper = ({
  children,
  className,
  defaultValue,
  onValueChange,
  placeholder,
  value,
}) => {
  return (
    <Select
      onValueChange={onValueChange}
      defaultValue={defaultValue}
      value={value}
    >
      <SelectTrigger className={cn("w-[150px]", className)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="overflow-y-scrol max-h-72 ">
        {children}
      </SelectContent>
    </Select>
  );
};

export { SelectItem, SelectWrapper };
