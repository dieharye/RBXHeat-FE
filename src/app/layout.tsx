import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/contexts/ModalProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Collin's Game",
  description: "kratos frontend testing",
  icons: {
    icon: "/favicon.ico",
    apple: "/android-chrome-192x192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
