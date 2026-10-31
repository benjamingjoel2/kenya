import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { site } from "@/config/site";
import { locale } from "@/lib/locale";
import { OG_LOCALES } from "@/lib/i18n-paths";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PlannerProvider } from "@/components/planner/PlannerProvider";
import { RevealObserver } from "@/components/layout/RevealObserver";

const inter = localFont({ src: "../fonts/inter-latin.woff2", variable: "--font-inter", display: "swap", weight: "300 700" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} · ${site.tagline}`, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  openGraph: { siteName: site.name, locale: OG_LOCALES[locale], type: "website" },
  keywords: ["Kenya safari", "tailor-made safari", "Masai Mara safari", "Great Migration", "Kenya bush and beach", "luxury Kenya safari", "Kenya safari specialist"],
  formatDetection: { telephone: false, email: false, address: false },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
};

export const viewport: Viewport = { themeColor: "#1e1c1a" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={locale} className={inter.variable}>
      <head>
        <noscript>
          <style>{"[data-rv],[data-rv-item]{opacity:1!important;transform:none!important}"}</style>
        </noscript>
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-charcoal focus:px-5 focus:py-3 focus:text-cream"
        >
          Skip to content
        </a>
            <PlannerProvider>
              <Header />
              <main id="main">{children}</main>
              <Footer />
            </PlannerProvider>
            <RevealObserver />
      </body>
    </html>
  );
}
