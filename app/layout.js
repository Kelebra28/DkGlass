import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dk Glass & Velasco',
  description: 'What you imagine in glass',
  image: 'https://dk-glass.vercel.app/logo-full.svg'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
