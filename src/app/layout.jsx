import { Providers } from "@/containers/common";
import "./globals.css";

export const metadata = {
  title: "StartEase | Command-line interface (CLI) tool",
  description:
    "StartEase is a command-line interface (CLI) tool designed to make project setup a breeze.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light scroll-smooth bg-background">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

