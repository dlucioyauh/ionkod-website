import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Menu from "@/components/Menu"; // ✅ Importando o Menu

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "IonKod - Inovação com Propósito",
  description: "Tecnologia e espiritualidade unidas para transformar o futuro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Menu />  {/* ✅ Agora o menu aparece em todas as páginas */}
        {children}
      </body>
    </html>
  );
}
