import { env } from "@/utils/load-env";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/list",
    },
    sitemap: `${env("NEXT_PUBLIC_BASE_URL")}/sitemap.xml`,
  };
}
