"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { animeStatusListTwo } from "@/constant/data-anime";

export const FilterListAnime = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const status = !searchParams.get("status")
    ? "ALL"
    : searchParams.get("status");

  const handleValueChange = (value) => {
    router.push(`${pathname}?${createQueryString("status", value)}`);
  };
  return (
    <div className="my-5">
      <Select
        onValueChange={handleValueChange}
        defaultValue={status}
      >
        <SelectTrigger className="w-[280px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {animeStatusListTwo.map((item, index) => (
            <SelectItem
              key={index}
              value={item.value}
            >
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
