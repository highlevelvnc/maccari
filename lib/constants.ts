export const BRAND = {
  name: 'Maccari Engenharia & Instalações',
  shortName: 'Maccari',
  tagline: 'A sua instalação elétrica nas mãos de um engenheiro.',
  subtitle: 'Engenheiro Eletrotécnico · São Domingos de Rana',
  phone: '+351 913 973 551',
  phoneRaw: '351913973551',
  whatsappBase: 'https://wa.me/351913973551',
  email: 'geral@maccariengenharia.pt',
  location: 'São Domingos de Rana, Portugal',
  address: 'Av. Francisca Lindoso, 44 2D',
  addressFull: 'Av. Francisca Lindoso, 44 2D, São Domingos de Rana, 2785-451 Cascais',
  founder: 'Evandro Maccari',
}

export const CREDENTIALS = {
  oe: { label: 'Ordem dos Engenheiros', number: '84420' },
  dgeg: { label: 'DGEG', number: '82284' },
  anacom: { label: 'ANACOM', number: '84420' },
  eu: { label: 'Certificação UE', number: 'E1937120' },
  impic: { label: 'IMPIC', number: '117918-PUB' },
}

export const WA_MESSAGES = {
  general: 'Olá, gostaria de pedir um orçamento gratuito. Pode ajudar?',
  repair: 'Olá, preciso de ajuda com uma avaria elétrica. Pode indicar disponibilidade e deslocação?',
  installation: 'Bom dia, gostaria de pedir um orçamento para instalação elétrica. Quando pode fazer uma visita técnica?',
  wallbox: 'Olá, tenho interesse na instalação de um WallBox para carregamento do meu veículo elétrico em casa. Pode enviar informações e valores?',
  solar: 'Bom dia, gostaria de agendar uma manutenção técnica ao meu sistema fotovoltaico. Qual a disponibilidade?',
  efficiency: 'Olá, quero perceber como posso reduzir a minha fatura de eletricidade. Têm serviço de auditoria energética? Gostaria de saber mais.',
  maintenance: 'Olá, gostaria de agendar uma manutenção elétrica. Qual a disponibilidade?',
}

export function waLink(message: string): string {
  return `https://wa.me/351913973551?text=${encodeURIComponent(message)}`
}

export const SERVICES = [
  {
    id: 'reparacoes',
    title: 'Reparações Elétricas',
    description: 'Avaria no quadro elétrico, curto-circuito, tomadas sem tensão ou disjuntores que saltam com frequência. Diagnóstico preciso, solução definitiva — não remendos.',
    cta: 'Resolver agora',
    waMessage: WA_MESSAGES.repair,
    icon: 'zap',
    color: 'amber',
  },
  {
    id: 'instalacoes',
    title: 'Instalações Elétricas',
    description: 'Instalações novas, ampliações de circuitos, substituição de instalações antigas e adequação às normas técnicas em vigor. Projeto e execução com responsabilidade de engenheiro.',
    cta: 'Pedir orçamento',
    waMessage: WA_MESSAGES.installation,
    icon: 'cpu',
    color: 'amber',
  },
  {
    id: 'manutencao',
    title: 'Manutenção Elétrica',
    description: 'Inspeções preventivas, verificação de quadros elétricos, testes de isolamento e manutenção programada para habitações, escritórios e instalações industriais.',
    cta: 'Agendar visita',
    waMessage: WA_MESSAGES.maintenance,
    icon: 'shield',
    color: 'amber',
  },
  {
    id: 'wallbox',
    title: 'Instalação de WallBox',
    description: 'Carregamento doméstico para veículo elétrico com instalação técnica certificada. Aconselhamento sobre o equipamento certo para o seu caso, instalação segura e homologada.',
    cta: 'Saber mais',
    waMessage: WA_MESSAGES.wallbox,
    icon: 'battery',
    color: 'cyan',
  },
  {
    id: 'fotovoltaico',
    title: 'Painéis Fotovoltaicos',
    description: 'Inspeção, limpeza técnica, diagnóstico de falhas e manutenção preventiva do seu sistema fotovoltaico. Garanta que a sua produção de energia está sempre no máximo.',
    cta: 'Agendar manutenção',
    waMessage: WA_MESSAGES.solar,
    icon: 'sun',
    color: 'cyan',
  },
  {
    id: 'eficiencia',
    title: 'Eficiência Energética',
    description: 'Auditoria ao consumo da sua instalação, identificação de desperdícios e implementação de melhorias reais. Pague menos na fatura sem abrir mão do conforto.',
    cta: 'Reduzir a minha fatura',
    waMessage: WA_MESSAGES.efficiency,
    icon: 'trending',
    color: 'green',
  },
]

export const TRUST_ITEMS = [
  { label: '20 Anos', sub: 'de Experiência' },
  { label: 'DGEG', sub: 'Credenciado' },
  { label: 'Ordem Eng.', sub: 'Membro Certificado' },
  { label: '24 Horas', sub: 'Disponível' },
  { label: 'Resposta Rápida', sub: 'Mesmo Dia' },
]

export const PILLARS = [
  {
    title: 'Credenciado DGEG n.º 82284',
    description: 'Autorização formal da Direção-Geral de Energia e Geologia para execução de instalações elétricas em Portugal. Responsabilidade técnica e civil em cada projeto assinado.',
    icon: 'award',
  },
  {
    title: 'Ordem dos Engenheiros n.º 84420',
    description: 'Inscrição ativa na Ordem dos Engenheiros — formação contínua, ética profissional e responsabilidade técnica garantida em cada intervenção residencial, comercial ou industrial.',
    icon: 'calendar',
  },
  {
    title: 'Tecnologia e Inovação Energética',
    description: 'Do carregamento de veículos elétricos (WallBox) à geração fotovoltaica e infraestruturas ITED — soluções completas com rigor de engenharia e conformidade com as normas europeias.',
    icon: 'zap-circle',
  },
  {
    title: 'Disponível 24 Horas — Resposta Imediata',
    description: 'Emergências elétricas não escolhem hora. Atendimento disponível 24h, deslocação rápida e resolução no próprio dia sempre que possível. Sem filas de espera.',
    icon: 'clock',
  },
]

export const TESTIMONIALS = [
  {
    text: 'Tive um problema grave no quadro elétrico de madrugada e o engenheiro Maccari atendeu de imediato. Chegou em menos de uma hora, diagnosticou o problema com precisão e ficou tudo resolvido ainda durante a noite. Profissionalismo que raramente se encontra.',
    name: 'Ricardo F.',
    location: 'Cascais',
    service: 'Reparação de emergência · Quadro elétrico',
    rating: 5,
  },
  {
    text: 'Fizemos uma remodelação completa da instalação elétrica da nossa casa e a diferença é enorme. Tudo documentado, tudo certificado, sem surpresas no final da obra. Finalmente percebemos o que significa ter um engenheiro a fazer este trabalho, e não apenas um técnico.',
    name: 'Ana & Nuno S.',
    location: 'Oeiras',
    service: 'Instalação elétrica completa · Habitação',
    rating: 5,
  },
  {
    text: 'Instalação do WallBox feita de forma impecável. Explicou-nos tudo sobre o circuito, os consumos e como aproveitar melhor o carregamento fora das horas de ponta. Não esperávamos este nível de detalhe e dedicação. Recomendamos sem hesitar.',
    name: 'Margarida T.',
    location: 'São Domingos de Rana',
    service: 'Fornecimento e instalação de WallBox',
    rating: 5,
  },
]

export const COVERAGE_ZONES = [
  'São Domingos de Rana', 'Cascais', 'Estoril', 'Parede',
  'Carcavelos', 'Oeiras', 'Sintra', 'Lisboa',
  'Almada', 'Amadora', 'Odivelas', 'Loures',
]

export const COUNTERS = [
  { value: 20, suffix: '+', label: 'Anos de experiência' },
  { value: 500, suffix: '+', label: 'Instalações realizadas' },
  { value: 24, suffix: 'H', label: 'Disponibilidade diária' },
  { value: 100, suffix: '%', label: 'Trabalho certificado' },
]
