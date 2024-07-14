import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Providers from "@/providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Arsalan",
   description: "Technology of coffee & tea",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" className="scroll-smooth">
         <body className={inter.className}>
            <Providers>
               <Header />
               <main>{children}</main>
            </Providers>
            <Footer />
         </body>
      </html>
   );
}
