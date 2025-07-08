import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Crypto Commons Gathering 2025",
  description:
    "The fifth edition brings together hackers, builders, visionaries, and artists to imagine desired futures, probe regenerative forms of living, and playfully explore commons practices.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
