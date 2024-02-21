"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";

export const ProfileUser = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <Skeleton className="h-[1.5rem] w-[1.5rem] rounded-full bg-slate-300 md:h-7 md:w-7" />
    );
  }
  return (
    <>
      <SignedIn>
        <UserButton
          afterSignOutUrl="/anime"
          appearance={{
            elements: {
              userButtonAvatarBox: "h-[1.5rem] w-[1.5rem] md:w-7 md:h-7",
            },
          }}
        />
      </SignedIn>
      <SignedOut>
        <SignInButton>
          <Button variant="outline">Login</Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};
