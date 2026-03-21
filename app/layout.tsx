import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ME } from "@/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matheus Marques",
  description:
    "Desenvolvedor FullStack autodidata com mais de 4 anos de experiência",
  authors: [
    {
      name: "Matheus Marques",
      url: ME.LINKEDIN,
    },
  ],
  creator: "Matheus Marques",
  keywords: [
    "Desenvolvedor",
    "Developer",
    "FullStack",
    "Matheus",
    "Marques",
    "Web",
    "Pará",
    "Brasil",
    "Brazil",
    "Norte",
    "North",
    "Autodidata",
    "Software",
    "ReactJS",
    "React",
    "NextJS",
    "Next",
    "NodeJS",
    "Python",
    "Node",
    "Express",
    "AdonisJS",
    "PHP",
    "Laravel",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
