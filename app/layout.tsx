import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/navigation";
import Footer from "@/components/footer/footer";

const roboto = Roboto({
 weight: "400",
 style: "normal",
 subsets: ["cyrillic"]
});

export const metadata: Metadata = {
 title: "Strefa menadżera"
};

export default function RootLayout({
 children
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en">
   <body className={roboto.className}>
    <header className="flex w-full fixed top-0">
     <Navigation />
    </header>
    <main className="w-full max-w-[1400px] min-h-screen p-4">
     {children}
    </main>
    <Footer />
   </body>
  </html>
 );
}
