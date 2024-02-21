import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl">
        Temukan anime favorit Anda, Welcome to
        <span className="font-bold">ahmadzidni.site</span>
      </h1>
      <h3 className="text-base font-medium sm:text-xl md:text-2xl">
        ahmadzidni.site menggunakan API dari
        <a className="ml-1 underline" href="https://jikan.moe/" target="_blank">
          Jikan API
        </a>
      </h3>

      <div className="flex justify-center gap-5">
        <Button asChild>
          <Link href="/anime">Temukan Sekarang</Link>
        </Button>
        <Button variant="outline">
          <a target="_blank" href="https://docs.api.jikan.moe/">
            Jikan API v4
          </a>
          <ArrowRight className="ml-2 h-5 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Heading;
