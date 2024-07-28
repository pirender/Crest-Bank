import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "./Provider";

const inter = Poppins({ weight: ["100",'200', '300', '400','500', '600', '700', '800', '900'], subsets: ['latin'] });

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
