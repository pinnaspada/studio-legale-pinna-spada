import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studio Legale Pinna Spada | Oristano dal 1934",
  description: "Assistenza legale civile e penale, consulenza e domiciliazioni a Oristano e Cagliari. Studio Legale Pinna Spada, dal 1934.",
  icons: { icon: "/favicon.svg" },
  openGraph: { title: "Studio Legale Pinna Spada", description: "La tradizione incontra il diritto di oggi. Dal 1934 a Oristano.", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "Studio Legale Pinna Spada", description: "La tradizione incontra il diritto di oggi.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="it"><body>{children}</body></html>;
}
