export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/list",
    },
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  };
}
