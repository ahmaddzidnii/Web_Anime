"use client";

import { ClerkLoading, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { Skeleton } from "../ui/skeleton";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const ProfileUser = () => {
  const pathname = usePathname();

  return (
    <>
      <ClerkLoading>
        <Skeleton className="h-[1.5rem] w-[1.5rem] rounded-full bg-slate-300 md:h-7 md:w-7" />
      </ClerkLoading>
      <SignedIn>
        <UserButton
          afterSignOutUrl="/auth/login?redirect_url=/anime"
          appearance={{
            elements: {
              userButtonAvatarBox: "h-[1.5rem] w-[1.5rem] md:w-7 md:h-7",
            },
          }}
        />
      </SignedIn>
      <SignedOut>
        <Link
          href={{
            pathname: "/auth/login",
            query: {
              redirect_url: pathname,
            },
          }}
        >
          <Button variant="outline">Login</Button>
        </Link>
      </SignedOut>
    </>
  );
};
