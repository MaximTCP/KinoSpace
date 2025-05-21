import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ClientBody } from "./ClientBody";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nunflix - Watch Movies & TV Shows Online",
  description: "Welcome to Nunflix! Discover trending movies, popular TV shows, and more for a seamless streaming experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
