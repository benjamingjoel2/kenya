import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { PlannerProvider } from "@/components/planner/PlannerProvider";
import { MotionProvider } from "@/components/layout/MotionProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap", weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} · ${site.tagline}`, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  openGraph: { siteName: site.name, locale: site.locale, type: "website" },
};

export const viewport: Viewport = { themeColor: "#1e1c1a" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-charcoal focus:px-5 focus:py-3 focus:text-cream"
        >
          Skip to content
        </a>
        <MotionProvider>
            <PlannerProvider>
              <Header />
              <main id="main">{children}</main>
              <Footer />
              <WhatsAppFab />
            </PlannerProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
