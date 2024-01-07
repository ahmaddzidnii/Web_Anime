"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";
import { useTheme } from "next-themes";

export const ClerkCustomProvider = ({ children, ...props }) => {
  const { theme } = useTheme();

  return (
    <ClerkProvider
      {...props}
      
      appearance={{ baseTheme: theme === "dark" ? shadesOfPurple : null }}
    >
      {children}
    </ClerkProvider>
  );
};
