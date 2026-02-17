import React from "react"
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'

import './globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: "Flair Technologies | Build With Flair. Scale With Confidence.",
  description:
    "Enterprise-grade digital solutions. We design and engineer production-ready digital products and scalable systems for enterprise-class operations.",
  keywords: [
    "Flair Technologies",
    "flairtech",
    "tech solutions",
    "innovative technology",
    "digital transformation",
    "groundbreaking innovations",
    "future technology",
  ],
  authors: [{ name: "Flair Technologies LTD" }],
  // metadataBase: new URL("https://flairtechlabs.com"),
  icons: {
    icon: "/assets/logo/logo-short.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
