export default function handler(req, res) {
  // List all your pages here
  const pages = [
    "/index",
    "/about",
    "/contact",
    "/Resume",
    "/Services",
    "/Portfolio"
    // add more pages as your site grows
  ];

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
    .map(
      (page) => `
  <url>
    <loc>https://myfirstfolio.vercel.app${page}</loc>
    <lastmod>2026-01-14</lastmod>
    <priority>0.8</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  // Set header so Google reads it correctly
  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(sitemap);
}
