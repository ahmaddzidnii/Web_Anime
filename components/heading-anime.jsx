import Link from "next/link";
import { MoveRight } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const HeadingAnime = ({ title, href }) => {
  return (
    <div className="flex flex-row  justify-between items-center  mb-5">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold  tracking-wide">
        {title}
      </h1>

      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href={href}
              className="font-bold"
            >
              <MoveRight />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Lihat Semua</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
