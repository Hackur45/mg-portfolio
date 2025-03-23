import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import { Toaster } from "@/components/ui/toaster"


const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <footer className="py-6 border-t">
            <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Mandar Gurjar. All rights reserved.
            </div>
          </footer>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

