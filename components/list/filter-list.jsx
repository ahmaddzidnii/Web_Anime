"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IoOptionsSharp } from "react-icons/io5";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { animeStatusListTwo } from "@/constant/data-anime";
import { daftarStatus } from "@/utils/enum-status";
import { Button } from "@/components/ui/button";
import { SelectWrapper, SelectItem } from "@/components/select-wrapper";

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
    [searchParams],
  );

  const deleteQueryString = useCallback(
    (name) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(name);

      return params.toString();
    },
    [searchParams],
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

  const byLastUpdate = () => {
    router.push(`${pathname}?${deleteQueryString("orderBy")}`);
  };

  const byScore = () => {
    router.push(`${pathname}?${createQueryString("orderBy", "score")}`);
  };

  return (
    <div className="my-5 flex items-center justify-between">
      <SelectWrapper defaultValue={status} onValueChange={handleValueChange}>
        {animeStatusListTwo.map((item, index) => (
          <SelectItem key={index} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectWrapper>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              <IoOptionsSharp className="h-7 w-7" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Filter By</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={byLastUpdate}>
              Last Update
            </DropdownMenuItem>
            <DropdownMenuItem onClick={byScore}>Score</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
