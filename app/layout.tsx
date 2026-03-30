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
  title: 'Maccari Engenharia & Instalações | Projetos Elétricos, Loteamentos, Domótica — Cascais',
  description:
    'Engenheiro Eletrotécnico DGEG 82284. Projetos elétricos para loteamentos, edifícios, indústria e casas de alto padrão com domótica. Aumento de potência E-Redes, WallBox, fotovoltaico, ITED e certificações em São Domingos de Rana, Cascais e Lisboa. +351 913 973 551.',
  keywords: [
    'aumento de potência E-Redes',
    'projeto elétrico loteamento',
    'instalação elétrica edifício',
    'instalação elétrica industrial',
    'domótica casa alto padrão',
    'automação residencial Portugal',
    'engenheiro eletrotécnico Cascais',
    'instalação WallBox carregador elétrico',
    'painéis fotovoltaicos instalação',
    'projeto ITED telecomunicações',
    'certificação instalação elétrica DGEG',
    'coluna montante edifício',
    'legalização instalação elétrica',
    'eletricista São Domingos de Rana',
    'engenheiro eletrotécnico Lisboa',
    'CCTV videovigilância instalação',
    'deteção incêndio Portugal',
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
    title: 'Maccari Engenharia — Projetos Elétricos, Loteamentos, Domótica, Aumento de Potência',
    description:
      'Engenheiro Eletrotécnico DGEG 82284. Loteamentos, edifícios, indústria, domótica, aumento de potência, WallBox e fotovoltaico. Cascais e Área Metropolitana de Lisboa.',
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
