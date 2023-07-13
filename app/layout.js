import './globals.css'
import { Inter } from 'next/font/google'
import { LanguageProvider } from './context/languageContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DK Glass',
  description: 'Design and installation solutions for custom work.',
}

export default function RootLayout({ children }) {
  return (
    <LanguageProvider>
      <html lang="es">
        <body className={inter.className}>{children}</body>
      </html>
    </LanguageProvider>
  )
}
