import type { Metadata } from 'next'
import { Lora, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Clase Gratis de Inglés para el Trabajo',
  description:
    'Aprende a sonar profesional en reuniones, correos y calls en inglés. Clase gratuita en vivo para profesionales en Caracas.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${lora.variable} ${jakarta.variable}`}>
      <body className="font-sans bg-cream text-[#1a1a1a] antialiased">{children}</body>
    </html>
  )
}
