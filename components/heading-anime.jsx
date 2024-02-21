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
    <div className="mb-5 flex  flex-row items-center  justify-between">
      <h1 className="text-sm font-bold tracking-wide sm:text-lg md:text-2xl  lg:text-3xl">
        {title}
      </h1>

      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href={href} className="font-bold">
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
