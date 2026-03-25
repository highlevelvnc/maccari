import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Maccari Engenharia & Instalações | Engenheiro Eletrotécnico — São Domingos de Rana, Cascais',
  description:
    'Engenheiro Eletrotécnico certificado pela DGEG e Ordem dos Engenheiros. Reparações elétricas, instalações, WallBox e painéis fotovoltaicos em São Domingos de Rana, Cascais, Oeiras e Lisboa. Disponível 24 horas. Ligue +351 913 973 551.',
  keywords: [
    'eletricista São Domingos de Rana',
    'engenheiro eletrotécnico Cascais',
    'instalação elétrica Oeiras',
    'reparação elétrica Lisboa',
    'instalação WallBox carregamento elétrico',
    'painéis fotovoltaicos manutenção',
    'DGEG credenciado',
    'Ordem dos Engenheiros Portugal',
    'eletricista 24 horas',
    'eficiência energética habitação',
    'quadro elétrico avaria',
    'eletricista Estoril Parede Carcavelos',
  ],
  authors: [{ name: 'Maccari Engenharia & Instalações' }],
  creator: 'Maccari Engenharia & Instalações',
  publisher: 'Maccari Engenharia & Instalações',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: 'Maccari Engenharia & Instalações | Engenheiro Eletrotécnico',
    description:
      'Engenheiro Eletrotécnico certificado DGEG. Reparações, instalações elétricas, WallBox e fotovoltaico em São Domingos de Rana e região. Disponível 24H.',
    locale: 'pt_PT',
    type: 'website',
  },
  alternates: {
    canonical: 'https://maccariengenharia.pt',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0E17',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className={inter.variable}>
      <body className="bg-night text-[#F8FAFC] font-inter antialiased">
        {children}
      </body>
    </html>
  )
}
