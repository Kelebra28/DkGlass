import './globals.css'
import { Cinzel } from 'next/font/google'

const inter = Cinzel({ subsets: ['latin'], weight: "400"})

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