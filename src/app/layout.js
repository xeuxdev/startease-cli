import SiteHeader from "@/layout/siteHeader"
import "./globals.css"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "StartEase ",
  description:
    "StartEase is a command-line interface (CLI) tool designed to make project setup a breeze.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background`}>
        <SiteHeader />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
