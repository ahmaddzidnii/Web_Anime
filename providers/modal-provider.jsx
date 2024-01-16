"use client";

import { useEffect, useState } from "react";

import { ModalSearch } from "@/components/modal/modal-search";
import { ModalAddList } from "@/components/modal/modal-add-list";
import { ModalEditList } from "@/components/modal/modal-edit-list";

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
      <ModalAddList />
      <ModalEditList />
    </>
  );
};
