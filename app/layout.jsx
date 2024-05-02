import { Poppins } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { Suspense } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";

import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ModalProvider } from "@/providers/modal-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { ClerkCustomProvider } from "@/providers/clerk-provider";
import { TanstackProvider } from "@/providers/tanstack-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: {
    template: "%s | Animefy",
    default: "Animefy",
  },
};

export default function RootLayout({ children }) {
  return (
    <html className="min-w-[300px]" suppressHydrationWarning={true}>
      <body className={poppins.className} suppressHydrationWarning={true}>
        <Suspense fallback={<></>}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="theme"
          >
            <NextTopLoader showSpinner={false} height={4} />
            <ClerkCustomProvider>
              <TanstackProvider>
                <ModalProvider />
                <Toaster />
                {children}
              </TanstackProvider>
            </ClerkCustomProvider>
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
