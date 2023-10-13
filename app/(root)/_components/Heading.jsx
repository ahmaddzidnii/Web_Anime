"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Temukan anime favorit Anda, Welcome to <span className="font-bold">ahmadzidni.site</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        ahmadzidni.site menggunakan API dari
        <a className="underline ml-1" href="https://jikan.moe/" target="_blank">
          Jikan API
        </a>
      </h3>

      <div className="flex justify-center gap-5">
        <Button>
          <Link href="/anime">Temukan Sekarang</Link>
          <ArrowRight className="w-4 h-5 ml-2" />
        </Button>
        <Button variant="outline">
          <a target="_blank" href="https://docs.api.jikan.moe/">
            Jikan API v4
          </a>
          <ArrowRight className="w-4 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default Heading;
