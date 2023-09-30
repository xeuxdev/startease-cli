import SiteHeader from "@/layout/siteHeader"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Project Starter Kit",
  description: "Start your projects ASAP with our project starter ",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background`}>
        <SiteHeader />
        {children}
      </body>
    </html>
  )
}
