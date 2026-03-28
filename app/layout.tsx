import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./components/Providers"; // O que criamos acima

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cadê meu Dinheiro? | Financial Intelligence",
  description: "Análise inteligente de extratos bancários com IA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Deixamos o h-full e o antialiased aqui
    <html lang="pt-br" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-background transition-colors duration-300">
        <Providers>
          {/* O conteúdo das páginas entra aqui */}
          {children}
        </Providers>
      </body>
    </html>
  );
}