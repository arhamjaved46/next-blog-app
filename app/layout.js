import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arham's Blog",
  description: "This is a Next 13 blog app, created by arhamjaved46",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Navbar />
          <div className="max-w-[1024px] mx-auto p-8">
          {children}
          <Analytics />
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
