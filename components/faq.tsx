'use client'

import { useState } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

const FAQS = [
  {
    q: 'Quanto custa um aumento de potência da E-Redes em Cascais?',
    a: 'O pedido formal à E-Redes tem um custo regulado pela ERSE. O orçamento total depende do que precisa ser actualizado: substituição de disjuntor geral e diferenciais (€80–€250 cada), eventual reforço da coluna montante em edifícios e termo de responsabilidade técnica (€150–€450). Em moradias unifamiliares onde apenas o limitador é alterado, o investimento total fica tipicamente entre €350 e €900. Faço orçamento gratuito após vistoria.',
  },
  {
    q: 'É obrigatório ter engenheiro para instalações eléctricas em Portugal?',
    a: 'Sim. Pelo RTIEBT (Decreto-Lei 226/2005), instalações novas ou alterações significativas exigem projecto e termo de responsabilidade assinado por técnico responsável credenciado pela DGEG. Para potências acima dos limites de manutenção, ou para loteamentos, edifícios e instalações industriais, é obrigatório engenheiro eletrotécnico inscrito na Ordem dos Engenheiros. Estou credenciado DGEG n.º 82284 e Ordem dos Engenheiros n.º 84420.',
  },
  {
    q: 'Quanto tempo demora um projecto eléctrico para um loteamento?',
    a: 'Depende da dimensão e complexidade. Para um loteamento com 8 a 20 lotes, o projecto eléctrico (rede de distribuição BT, postos de transformação se aplicável, iluminação pública e infraestruturas de telecomunicações ITUR) demora tipicamente 4 a 8 semanas em fase de licenciamento. A execução em obra varia entre 3 e 6 meses, com coordenação directa com a E-Redes. Posso elaborar o cronograma detalhado após análise do plano urbanístico.',
  },
  {
    q: 'Domótica KNX ou Loxone — qual escolher?',
    a: 'Para moradias unifamiliares de 200–600m² com curva de aprendizagem rápida e excelente relação qualidade/preço, Loxone é normalmente a escolha mais eficiente (€18.000–€32.000 chave-na-mão). Para projectos médios e grandes, ou quando se valoriza independência de fabricante e durabilidade de 20+ anos, KNX é o padrão europeu (€30.000–€55.000). Faço o estudo de protocolo na fase de projecto, antes do gesso fechar — é a altura certa para esta decisão.',
  },
  {
    q: 'Quem é responsável pela coluna montante de um edifício?',
    a: 'A coluna montante é parte comum do edifício e propriedade do condomínio. O ramal e a portinhola pertencem à E-Redes; a instalação interior de cada fracção pertence ao proprietário. Quando há sintomas (aquecimento na portinhola, pedidos de aumento de potência negados, secção desadequada), a intervenção tem de ser deliberada em assembleia. Posso elaborar relatório técnico para apresentação em assembleia e, se aprovado, executar o projecto chave-na-mão.',
  },
  {
    q: 'Que zonas servem? Fazem deslocações em toda a região de Lisboa?',
    a: 'Trabalho a partir de São Domingos de Rana, em Cascais, e cubro toda a Área Metropolitana de Lisboa: Cascais, Estoril, Parede, Carcavelos, Oeiras, Sintra, Lisboa, Almada, Amadora, Odivelas e Loures. Para projectos de loteamento e edifícios industriais aceito também trabalhos em todo o território nacional, mediante avaliação prévia.',
  },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true })

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <section id="faq" className="bg-night py-20 md:py-28 relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(245,158,11,0.05) 0%, transparent 70%)' }} />

      <div ref={ref as React.RefObject<HTMLDivElement>} className="relative max-w-[860px] mx-auto px-5 md:px-10">
        <div className={`text-center mb-12 fade-up ${isVisible ? 'visible' : ''}`}>
          <div className="section-label justify-center">Perguntas Frequentes</div>
          <h2
            className="text-[#F8FAFC] font-black mt-3 mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', letterSpacing: '-0.035em', lineHeight: 1.1 }}
          >
            As dúvidas que aparecem <span className="text-amber-gradient">antes do orçamento.</span>
          </h2>
          <p className="text-[#94A3B8] max-w-[55ch] mx-auto" style={{ lineHeight: 1.7 }}>
            Respondidas com base em 20 anos de projectos eléctricos. Se a sua dúvida não estiver aqui, fale comigo no WhatsApp.
          </p>
        </div>

        <div className={`flex flex-col gap-3 fade-up delay-1 ${isVisible ? 'visible' : ''}`}>
          {FAQS.map((faq, i) => {
            const open = openIdx === i
            return (
              <div
                key={faq.q}
                className="rounded-2xl overflow-hidden transition-all duration-200"
                style={{
                  background: open ? 'rgba(245,158,11,0.04)' : 'rgba(17,24,39,0.4)',
                  border: `1px solid ${open ? 'rgba(245,158,11,0.2)' : 'rgba(255,255,255,0.06)'}`,
                  backdropFilter: 'blur(8px)',
                }}
              >
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors"
                  aria-expanded={open}
                >
                  <span className="text-[#F8FAFC] font-semibold text-base md:text-[1.02rem]" style={{ letterSpacing: '-0.01em', lineHeight: 1.4 }}>
                    {faq.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300"
                    style={{
                      background: open ? 'rgba(245,158,11,0.18)' : 'rgba(255,255,255,0.05)',
                      transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                    aria-hidden="true"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={open ? '#F59E0B' : '#94A3B8'} strokeWidth="2.5" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>

                <div
                  className="overflow-hidden"
                  style={{
                    maxHeight: open ? 600 : 0,
                    opacity: open ? 1 : 0,
                    transition: open
                      ? 'max-height 0.5s cubic-bezier(0.34, 1.2, 0.64, 1), opacity 0.3s ease 0.05s'
                      : 'max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease',
                  }}
                >
                  <p className="px-6 pb-5 text-[#94A3B8] text-sm md:text-[15px]" style={{ lineHeight: 1.75 }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
