"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

export const ClerkCustomProvider = ({ children, ...props }) => {
  const { theme } = useTheme();

  return (
    <ClerkProvider
      {...props}
      appearance={{ baseTheme: theme === "dark" ? dark : null }}
    >
      {children}
    </ClerkProvider>
  );
};
