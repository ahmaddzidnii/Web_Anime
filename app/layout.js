import { ThemeProvider } from "@/components/ui/providers/theme-provider";
import { Poppins } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";

import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700"] });

export const metadata = {
  title: {
    template: "%s | ahmadzidni.site",
    default: "ahmadzidni.site", // a default is required when creating a template
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange storageKey="this theme?">
          <NextTopLoader showSpinner={false} height={4} />
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
