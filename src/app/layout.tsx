import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";
import { Analytics } from "@/components/Analytics";
import { siteConfig } from "@/lib/site";
import { inter, IranSans } from "@/constants/localFont";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name, template: `%s | ${siteConfig.shortName}` },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    locale: "fa_IR",
    type: "website",
    images: [
      {
        url: "/parsian-logo-2k.png",
        width: 2048,
        height: 2048,
        alt: "لوگوی بیمه پارسیان",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/parsian-logo-2k.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/parsian-logo-2k.png`,
  };

  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${IranSans.className} ${inter.className}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
