import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studio Legale Pinna Spada | Oristano dal 1934",
  description: "Studio Legale Pinna Spada a Oristano dal 1934. Assistenza e difesa in materia civile e penale, contenzioso e domiciliazioni.",
  icons: { icon: "/favicon.svg" },
  openGraph: { title: "Studio Legale Pinna Spada | Oristano", description: "La tutela dei vostri diritti, da oltre novant’anni.", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "Studio Legale Pinna Spada | Oristano", description: "La tutela dei vostri diritti, da oltre novant’anni.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="it"><body>{children}</body></html>;
}
