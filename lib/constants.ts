export const BRAND = {
  name: 'Maccari Engenharia & Instalações',
  shortName: 'Maccari',
  tagline: 'A sua instalação elétrica nas mãos de um engenheiro.',
  subtitle: 'Engenheiro Eletrotécnico · São Domingos de Rana',
  phone: '+351 913 973 551',
  phoneRaw: '351913973551',
  whatsappBase: 'https://wa.me/351913973551',
  location: 'São Domingos de Rana, Portugal',
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
    title: 'Certificação com Nome e Número',
    description: 'Profissional credenciado pela DGEG e membro ativo da Ordem dos Engenheiros. Trabalha com responsabilidade técnica formal — não apenas como prestador de serviços, mas como engenheiro eletrotécnico inscrito.',
    icon: 'award',
  },
  {
    title: '20 Anos de Casos Reais',
    description: 'Duas décadas de trabalho em instalações residenciais, comerciais e industriais em Portugal. Experiência que resolve o que outros não conseguem diagnosticar.',
    icon: 'calendar',
  },
  {
    title: 'Tecnologia e Inovação Energética',
    description: 'Do carregamento de veículos elétricos à otimização de sistemas fotovoltaicos — acompanha as exigências técnicas de 2026 sem abdicar do rigor que sempre caracterizou o seu trabalho.',
    icon: 'zap-circle',
  },
  {
    title: 'Disponível Quando Precisa',
    description: 'Emergências elétricas não escolhem hora. Por isso, o atendimento é disponível 24 horas por dia. Resposta rápida, deslocação eficiente, resolução no próprio dia sempre que possível.',
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
