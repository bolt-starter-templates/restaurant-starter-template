import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'The Cozy Corner',
  description: 'A warm and inviting local restaurant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans flex flex-col min-h-screen`}>
  <header className="bg-primary text-primary-foreground">
    <nav className="container mx-auto px-4 py-6">
      <h1 className="restaurant-name text-3xl font-bold mb-4">The Cozy Corner</h1>
      <ul className="flex space-x-4">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/menu" className="hover:underline">Menu</a></li>
        <li><a href="/contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  </header>
  <main className="container mx-auto px-4 py-8 flex-grow">
    {children}
  </main>
  <footer className="bg-muted text-muted-foreground mt-auto">
    <div className="container mx-auto px-4 py-6 text-center">
      © 2024 The Cozy Corner. All rights reserved.
    </div>
  </footer>
  <Toaster />
</body>
    </html>
  )
}

