import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import WhatsappFab from '@/components/whatsapp-fab'
import { waLink, WA_MESSAGES, BRAND } from '@/lib/constants'

const BASE_URL = 'https://maccariengenharia.pt'
const PAGE_URL = `${BASE_URL}/servicos/aumento-de-potencia`

export const metadata: Metadata = {
  title: 'Aumento de Potência E-Redes em Cascais e Lisboa | Maccari Engenharia',
  description:
    'Engenheiro Eletrotécnico DGEG credenciado para pedidos de aumento de potência junto à E-Redes em Cascais, Estoril, Oeiras, Sintra e Lisboa. Vistoria gratuita, projecto, certificação e termo de responsabilidade. WhatsApp +351 913 973 551.',
  keywords: [
    'aumento de potência E-Redes Cascais',
    'aumento potência Lisboa',
    'aumento potência Oeiras',
    'aumento potência Sintra',
    'engenheiro aumento potência',
    'termo responsabilidade E-Redes',
    'pedido potência E-Redes preço',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Aumento de Potência E-Redes em Cascais — Engenheiro DGEG',
    description:
      'Processo completo de aumento de potência junto à E-Redes em Cascais, Lisboa e arredores. Vistoria gratuita, projecto e certificação.',
    url: PAGE_URL,
    locale: 'pt_PT',
    type: 'article',
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Aumento de Potência E-Redes',
  serviceType: 'Engenharia Eletrotécnica',
  provider: { '@id': `${BASE_URL}/#business` },
  areaServed: [
    { '@type': 'City', name: 'Cascais' },
    { '@type': 'City', name: 'Lisboa' },
    { '@type': 'City', name: 'Oeiras' },
    { '@type': 'City', name: 'Sintra' },
    { '@type': 'City', name: 'Estoril' },
  ],
  description:
    'Pedido formal de aumento de potência junto à E-Redes, adequação do quadro elétrico, projecto técnico, termo de responsabilidade DGEG e certificação para ligação.',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'EUR',
    priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'EUR', minPrice: 350 },
    availability: 'https://schema.org/InStock',
  },
  url: PAGE_URL,
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Serviços', item: `${BASE_URL}/#servicos` },
    { '@type': 'ListItem', position: 3, name: 'Aumento de Potência', item: PAGE_URL },
  ],
}

const STEPS = [
  { n: '01', title: 'Vistoria gratuita', text: 'Visita técnica de 30 minutos para avaliar quadro, ramal e necessidades reais.' },
  { n: '02', title: 'Pedido E-Redes', text: 'Submissão formal do pedido de aumento, com escolha correcta do escalão.' },
  { n: '03', title: 'Adequação do quadro', text: 'Substituição de disjuntor geral, diferenciais e secções de cabo conforme RTIEBT.' },
  { n: '04', title: 'Termo de responsabilidade', text: 'Documentação técnica assinada por engenheiro credenciado DGEG n.º 82284.' },
  { n: '05', title: 'Certificação & ligação', text: 'Coordenação com a E-Redes para inspecção, ligação e arranque.' },
]

export default function AumentoPotenciaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <Navbar />
      <WhatsappFab />

      <main className="bg-night min-h-screen pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(245,158,11,0.07) 0%, transparent 60%)' }} />

        <div className="relative max-w-[1080px] mx-auto px-5 md:px-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs mb-8" style={{ color: '#64748B' }} aria-label="breadcrumb">
            <Link href="/" className="hover:text-[#F8FAFC] transition-colors">Início</Link>
            <span>/</span>
            <Link href="/#servicos" className="hover:text-[#F8FAFC] transition-colors">Serviços</Link>
            <span>/</span>
            <span style={{ color: '#94A3B8' }}>Aumento de Potência</span>
          </nav>

          {/* Hero */}
          <header className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="section-label mb-3">Serviço · Energia</div>
              <h1
                className="text-[#F8FAFC] font-black mb-6"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', letterSpacing: '-0.035em', lineHeight: 1.05 }}
              >
                Aumento de Potência E-Redes <span className="text-amber-gradient">em Cascais e Lisboa.</span>
              </h1>
              <p className="text-[#94A3B8] text-lg mb-8" style={{ lineHeight: 1.7 }}>
                Processo completo, do pedido à certificação. Engenheiro Eletrotécnico credenciado DGEG n.º 82284 — termo de responsabilidade incluído. Vistoria gratuita.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a href={waLink(WA_MESSAGES.potencia)} target="_blank" rel="noopener noreferrer" className="hero-cta-wa">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  Pedir vistoria gratuita
                </a>
                <a href={`tel:${BRAND.phoneRaw}`} className="hero-cta-secondary">
                  Ligar: {BRAND.phone}
                </a>
              </div>

              {/* Trust micro */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                {['DGEG n.º 82284', 'Termo incluído', 'Orçamento gratuito'].map((t, i) => (
                  <span key={t} className="flex items-center gap-1.5 text-xs font-medium" style={{ color: '#64748B' }}>
                    {i > 0 && <span className="w-px h-3 bg-[#1E293B]" />}
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
              <Image
                src="/quadro-eletrico-knx-domotica.jpg"
                alt="Quadro elétrico técnico com automação para aumento de potência em moradia em Cascais"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,14,23,0.55) 0%, transparent 50%)' }} />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-[10px] font-bold uppercase tracking-[0.13em] px-2.5 py-1 rounded-md" style={{ background: 'rgba(245,158,11,0.18)', color: '#FCD34D', border: '1px solid rgba(245,158,11,0.3)' }}>
                  Quadro técnico — Cascais
                </span>
              </div>
            </div>
          </header>

          {/* Process */}
          <section className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-[#F8FAFC] font-black mb-3" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', letterSpacing: '-0.03em' }}>
                Processo em 5 passos
              </h2>
              <p className="text-[#94A3B8] max-w-[55ch] mx-auto">Do pedido inicial à ligação E-Redes. Sem surpresas, sem custos escondidos.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {STEPS.map((s) => (
                <div key={s.n} className="p-5 rounded-2xl flex flex-col" style={{ background: 'rgba(17,24,39,0.45)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <span className="text-[#F59E0B] font-black text-3xl mb-2" style={{ letterSpacing: '-0.05em' }}>{s.n}</span>
                  <h3 className="text-[#F8FAFC] font-bold text-sm mb-1.5">{s.title}</h3>
                  <p className="text-[#94A3B8] text-xs" style={{ lineHeight: 1.6 }}>{s.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* When you need it */}
          <section className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-[#F8FAFC] font-black mb-4" style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.1rem)', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
                Quando faz sentido pedir aumento
              </h2>
              <ul className="space-y-3">
                {[
                  'Disjuntor geral dispara ao ligar AC + máquina + indução',
                  'Vai instalar WallBox 7.4kW ou 11kW',
                  'Bomba de calor / piso radiante / piscina aquecida',
                  'Remodelação com novos circuitos e aparelhos',
                  'Comércio ou pequena indústria com nova linha',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[#CBD5E1]" style={{ lineHeight: 1.6 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 3 }}><polyline points="20 6 9 17 4 12" /></svg>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-[#F8FAFC] font-black mb-4" style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.1rem)', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
                Áreas de actuação
              </h2>
              <p className="text-[#94A3B8] mb-4" style={{ lineHeight: 1.7 }}>
                Trabalho em toda a Área Metropolitana de Lisboa, com base em São Domingos de Rana.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Cascais', 'Estoril', 'Parede', 'Carcavelos', 'Oeiras', 'Sintra', 'Lisboa', 'Almada', 'Amadora', 'Odivelas'].map((z) => (
                  <span key={z} className="badge-zone">{z}</span>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="p-8 md:p-10 rounded-2xl text-center" style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.2)' }}>
            <h2 className="text-[#F8FAFC] font-black mb-3" style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2rem)', letterSpacing: '-0.03em' }}>
              Pronto para iniciar o processo?
            </h2>
            <p className="text-[#94A3B8] mb-6 max-w-[50ch] mx-auto" style={{ lineHeight: 1.7 }}>
              Vistoria gratuita em Cascais, Lisboa e arredores. Resposta no WhatsApp e orçamento detalhado em 24h.
            </p>
            <a href={waLink(WA_MESSAGES.potencia)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-7 py-4 rounded-xl text-base font-bold text-white transition-all hover:opacity-90" style={{ background: '#25D366' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              Falar no WhatsApp
            </a>
            <p className="text-xs mt-4" style={{ color: '#64748B' }}>
              Ou ligue directo: <a href={`tel:${BRAND.phoneRaw}`} className="text-[#F59E0B] hover:underline">{BRAND.phone}</a>
            </p>
          </section>

          {/* Related blog */}
          <section className="mt-16">
            <h3 className="text-[#F8FAFC] font-bold text-lg mb-4" style={{ letterSpacing: '-0.02em' }}>Artigo relacionado</h3>
            <Link href="/blog/aumento-de-potencia-e-redes-cascais-guia" className="block p-6 rounded-xl transition-all hover:-translate-y-0.5" style={{ background: 'rgba(17,24,39,0.5)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <span className="text-[10px] font-bold uppercase tracking-[0.13em]" style={{ color: '#F59E0B' }}>Energia · Guia</span>
              <h4 className="text-[#F8FAFC] font-bold text-base mt-2 mb-1" style={{ letterSpacing: '-0.02em' }}>Aumento de Potência E-Redes em Cascais: guia prático passo a passo</h4>
              <p className="text-[#94A3B8] text-sm" style={{ lineHeight: 1.6 }}>Como pedir aumento de potência à E-Redes: prazos, custos típicos e adequação do quadro elétrico.</p>
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
