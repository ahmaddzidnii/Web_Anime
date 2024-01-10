"use client";

import { useEffect, useState } from "react";

import { ModalSearch } from "@/components/modal/modal-search";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ModalSearch />
    </>
  );
};
