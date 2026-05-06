import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
})

const BASE_URL = 'https://maccariengenharia.pt'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Maccari Engenharia | Engenheiro Eletrotécnico DGEG — Cascais, São Domingos de Rana',
  description:
    'Engenheiro Eletrotécnico credenciado DGEG 82284. Loteamentos, edifícios, indústria, domótica, aumento de potência E-Redes, WallBox e fotovoltaico. São Domingos de Rana, Cascais e Lisboa. Orçamento gratuito: +351 913 973 551.',
  keywords: [
    'engenheiro eletrotécnico Cascais',
    'engenheiro eletrotécnico São Domingos de Rana',
    'aumento de potência E-Redes Cascais',
    'projeto elétrico loteamento Portugal',
    'instalação elétrica edifício Lisboa',
    'instalação elétrica industrial Cascais',
    'domótica casa alto padrão Cascais',
    'instalação WallBox carregador elétrico',
    'painéis fotovoltaicos instalação Cascais',
    'projeto ITED telecomunicações',
    'certificação instalação elétrica DGEG',
    'coluna montante edifício',
    'legalização instalação elétrica',
    'eletricista São Domingos de Rana',
    'CCTV videovigilância instalação',
    'projeto elétrico loteamento Oeiras Sintra',
    'engenharia eletrotécnica Lisboa',
  ],
  authors: [{ name: 'Evandro Maccari', url: BASE_URL }],
  creator: 'Maccari Engenharia & Instalações',
  publisher: 'Maccari Engenharia & Instalações',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: 'Maccari Engenharia — Loteamentos, Edifícios, Domótica, Aumento de Potência | Cascais',
    description:
      'Engenheiro Eletrotécnico DGEG 82284. Projetos elétricos de grande escala — loteamentos, edifícios, indústria, domótica, WallBox e fotovoltaico. Cascais e Área Metropolitana de Lisboa.',
    locale: 'pt_PT',
    type: 'website',
    url: BASE_URL,
    siteName: 'Maccari Engenharia & Instalações',
  },
  alternates: { canonical: BASE_URL },
  other: {
    'geo.region': 'PT-11',
    'geo.placename': 'São Domingos de Rana, Cascais',
    'geo.position': '38.7009;-9.3225',
    'ICBM': '38.7009, -9.3225',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0E17',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': `${BASE_URL}/#business`,
      name: 'Maccari Engenharia & Instalações',
      alternateName: 'Maccari Engenharia',
      description: 'Engenheiro Eletrotécnico credenciado DGEG e membro da Ordem dos Engenheiros. Projetos elétricos para loteamentos, edifícios, indústria e casas de alto padrão com domótica. Aumento de potência E-Redes, WallBox, fotovoltaico, ITED e certificações.',
      url: BASE_URL,
      telephone: '+351913973551',
      email: 'geral@maccariengenharia.pt',
      logo: `${BASE_URL}/logo.png`,
      image: [
        `${BASE_URL}/quadro-eletrico-knx-domotica.jpg`,
        `${BASE_URL}/iluminacao-sanca-cascais.jpg`,
        `${BASE_URL}/iluminacao-led-embebida-roupeiro.jpg`,
      ],
      sameAs: [
        'https://share.google/eL9dpEfRTT1Ft8Buw',
        'https://www.racius.com/maccari-engenharia-instalacoes-unipessoal-lda/',
        'https://www.pai.pt/paginas/533528-maccari-engenharia-instalacoes-unipessoal-lda',
        'https://www.einforma.pt/servlet/app/portal/ENTP/prod/ETIQUETA_EMPRESA_CONTRIBUINTE/nif/516571435/contribuinte/516571435/',
      ],
      vatID: 'PT516571435',
      taxID: '516571435',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Av. Francisca Lindoso, 44 2D',
        addressLocality: 'São Domingos de Rana',
        postalCode: '2785-451',
        addressRegion: 'Cascais',
        addressCountry: 'PT',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 38.7009,
        longitude: -9.3225,
      },
      areaServed: [
        'São Domingos de Rana', 'Cascais', 'Estoril', 'Oeiras',
        'Sintra', 'Lisboa', 'Almada', 'Amadora', 'Odivelas',
      ],
      serviceType: [
        'Projeto Elétrico para Loteamentos',
        'Instalação Elétrica de Edifícios',
        'Domótica e Automação Residencial',
        'Aumento de Potência E-Redes',
        'Instalação WallBox',
        'Sistemas Fotovoltaicos',
        'Projeto ITED',
        'Certificação de Instalações Elétricas',
      ],
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', name: 'DGEG 82284' },
        { '@type': 'EducationalOccupationalCredential', name: 'Ordem dos Engenheiros 84420' },
        { '@type': 'EducationalOccupationalCredential', name: 'ANACOM 84420' },
        { '@type': 'EducationalOccupationalCredential', name: 'IMPIC 117918-PUB' },
      ],
      priceRange: '€€',
      currenciesAccepted: 'EUR',
      paymentAccepted: 'Transferência bancária, MB Way',
      founder: { '@id': `${BASE_URL}/#person` },
    },
    {
      '@type': 'Person',
      '@id': `${BASE_URL}/#person`,
      name: 'Evandro Maccari',
      jobTitle: 'Engenheiro Eletrotécnico',
      worksFor: { '@id': `${BASE_URL}/#business` },
      hasCredential: 'DGEG 82284 · Ordem dos Engenheiros 84420',
      knowsAbout: ['Engenharia Elétrica', 'Domótica', 'Sistemas Fotovoltaicos', 'Loteamentos', 'ITED'],
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'Maccari Engenharia & Instalações',
      publisher: { '@id': `${BASE_URL}/#business` },
      inLanguage: 'pt-PT',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-night text-[#F8FAFC] font-inter antialiased">
        {children}
      </body>
    </html>
  )
}
