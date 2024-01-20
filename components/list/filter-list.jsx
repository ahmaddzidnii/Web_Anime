"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IoOptionsSharp } from "react-icons/io5";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { animeStatusListTwo } from "@/constant/data-anime";
import { daftarStatus } from "@/utils/enum-status";

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

  const deleteQueryString = useCallback(
    (name) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(name);

      return params.toString();
    },
    [searchParams]
  );

  let status = searchParams.get("status");

  if (!status) {
    status = "ALL";
  }

  const handleValueChange = async (value) => {
    if (!daftarStatus.includes(value)) {
      router.push(`${pathname}?${deleteQueryString("status")}`);
    } else {
      router.push(`${pathname}?${createQueryString("status", value)}`);
    }
  };
  return (
    <div className="my-5 flex justify-between items-center">
      <Select
        onValueChange={handleValueChange}
        defaultValue={status}
      >
        <SelectTrigger className="w-[150px]">
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
      <div>
        <IoOptionsSharp className="w-7 h-7" />
      </div>
    </div>
  );
};
