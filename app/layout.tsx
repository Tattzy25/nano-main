import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Suspense } from "react"
import { Analytics } from "@vercel/analytics/react"
import { ErrorBoundary } from "@/components/error-boundary"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "TaTTTy Playground - Powered by Vercel AI Gateway",
  description:
    "TaTTTy: Google's newest AI image generation model. Create and edit stunning images with advanced AI capabilities through Vercel AI Gateway.",
  keywords: [
    "tattty",
    "tattty app",
    "AI image generation",
    "AI image editor",
    "Google AI",
    "text to image",
    "AI art generator",
    "image editing AI",
    "Google image generation",
    "v0 tattty",
    "Vercel AI Gateway",
  ],
  authors: [{ name: "v0" }],
  creator: "v0",
  publisher: "v0",
  generator: "v0.app",
  metadataBase: new URL("https://v0nanobananapro.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://v0nanobananapro.vercel.app",
    title: "TaTTTy Playground - Powered by Vercel AI Gateway",
    description:
      "TaTTTy: Google's newest AI image generation model. Create and edit stunning images with advanced AI.",
    siteName: "TaTTTy",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TaTTTy Playground - AI Image Generation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TaTTTy Playground - Powered by Vercel AI Gateway",
    description:
      "TaTTTy: Google's newest AI image generation model. Create and edit stunning images with advanced AI.",
    creator: "@vercel",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
}

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
      style={{ backgroundColor: "#000000" }}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-mono antialiased" style={{ backgroundColor: "#000000" }}>
        <ErrorBoundary>
          <Suspense fallback={null}>{children}</Suspense>
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  )
}
