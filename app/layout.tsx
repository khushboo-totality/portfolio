import type { Metadata } from "next";
import "./globals.css";
import Preloader from "@/components/Preloader";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.intro,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Switzer isn't on Google Fonts — served from Fontshare. */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=switzer@300,400,500,600,700,301,401,501&display=swap"
        />
      </head>
      <body className="grain">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
