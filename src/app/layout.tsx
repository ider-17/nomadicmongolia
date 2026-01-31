// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner"; // ✅ Toast оруулж ирж байна
import { LanguageProvider } from "./context/LanguageContext"; // ✅ Language context оруулж ирэв

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nomadic khusug",
  description: "Nomadic khusug welcome to mongolia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Toaster */}
        <Toaster position="top-right" richColors />

        {/* LanguageProvider бүх site-д тархсан */}
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
