import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";

const inter = localFont({ src: "./fonts/inter-latin.woff2", variable: "--font-inter", display: "swap", weight: "300 700" });

export const metadata: Metadata = { title: "Not found · Safari Njema", robots: { index: false } };

/** Shown for URLs that match no page in any language (each language's own 404 handles missing slugs). */
export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <main id="main" className="container-x flex min-h-[80vh] flex-col justify-center py-24">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone">404</p>
          <h1 className="mt-4 text-h1 font-medium tracking-[-0.03em] text-charcoal">This trail has gone cold</h1>
          <p className="mt-4 max-w-xl text-lead text-stone">The page you were looking for has wandered off.</p>
          <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
            <Link href="/" lang="en" className="underline underline-offset-4">Back to home</Link>
            <Link href="/fr" lang="fr" className="underline underline-offset-4">Retour à l’accueil</Link>
            <Link href="/de" lang="de" className="underline underline-offset-4">Zur Startseite</Link>
            <Link href="/es" lang="es" className="underline underline-offset-4">Volver al inicio</Link>
          </p>
        </main>
      </body>
    </html>
  );
}
