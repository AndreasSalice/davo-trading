import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DAVO Trading",
  description:
    "Davo Trading - Conseiller financier spécialisé sur l'or (XAU/USD).Expert du marché de l'or, j'accompagne les traders et investisseurs dans leurs décisions grâce à des analyses précises et une stratégie éprouvée.",
  icons: {
    icon: "/davo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
