"use client";

import { useEffect, useState } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import { Skeleton } from "@/components/ui/skeleton";

export const YtIframe = ({ id, title }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <Skeleton className="h-[200px] w-full" />;
  }
  return (
    <div className="overflow-hidden rounded-lg">
      <LiteYouTubeEmbed id={id} title={title} poster="maxresdefault" />
    </div>
  );
};
