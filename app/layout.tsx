import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matheus Marques - Portfólio",
  description:
    "Este é o portfólio do Matheus Marques, um desenvolvedor FullStack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <html lang="pt-br">{children}</html>;
}
