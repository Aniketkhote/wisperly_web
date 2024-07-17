import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "./(home)/components/Navbar";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wsiperly",
  description: "True Next Gen Professional Network",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
