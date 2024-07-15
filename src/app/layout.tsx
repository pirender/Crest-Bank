import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Providers from "./Provider";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crest Bank | We Present Crest Bank",
  description: "make money online, portfolio management stock, forex, cryptocurrency, savings, money transfer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
