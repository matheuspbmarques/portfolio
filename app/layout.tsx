import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";

const baiJamjuree200 = Bai_Jamjuree({ weight: "200", subsets: ["latin"] });
const baiJamjuree300 = Bai_Jamjuree({ weight: "300", subsets: ["latin"] });
const baiJamjuree400 = Bai_Jamjuree({ weight: "400", subsets: ["latin"] });
const baiJamjuree500 = Bai_Jamjuree({ weight: "500", subsets: ["latin"] });
const baiJamjuree600 = Bai_Jamjuree({ weight: "600", subsets: ["latin"] });
const baiJamjuree700 = Bai_Jamjuree({ weight: "700", subsets: ["latin"] });

const baiJamjuree = {
  200: baiJamjuree200.className,
  300: baiJamjuree300.className,
  400: baiJamjuree400.className,
  500: baiJamjuree500.className,
  600: baiJamjuree600.className,
  700: baiJamjuree700.className,
};

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
  return (
    <html lang="pt-br">
      <body className={baiJamjuree[400]}>{children}</body>
    </html>
  );
}
