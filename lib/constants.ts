export const BRAND = {
  name: 'Maccari Engenharia & Instalações',
  shortName: 'Maccari',
  tagline: 'Engenharia elétrica para projetos que exigem mais.',
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
  general: 'Olá, gostaria de pedir um orçamento para o meu projeto. Pode ajudar?',
  loteamento: 'Olá, tenho interesse em projeto e execução de instalações elétricas para um loteamento/urbanização. Pode enviar informações e agendar uma reunião técnica?',
  edificio: 'Bom dia, preciso de um orçamento para instalação elétrica de edifício/espaço industrial. Quando pode fazer uma visita técnica?',
  domotica: 'Olá, gostaria de informações sobre domótica e automação residencial para uma casa de alto padrão. Pode apresentar soluções?',
  potencia: 'Olá, preciso de aumento de potência junto à E-Redes. Pode ajudar com o processo e instalação?',
  wallbox: 'Olá, tenho interesse na instalação de um WallBox para carregamento do meu veículo elétrico. Pode enviar informações e valores?',
  solar: 'Bom dia, gostaria de um orçamento para instalação de sistema fotovoltaico. Qual a disponibilidade?',
  telecom: 'Olá, preciso de projeto ITED / instalação de segurança (CCTV, alarme). Pode apresentar uma proposta?',
  certificacao: 'Olá, preciso de certificação de instalação elétrica / termo de responsabilidade / declaração de conformidade. Pode ajudar?',
  repair: 'Olá, preciso de ajuda com uma avaria elétrica. Pode indicar disponibilidade?',
}

export function waLink(message: string): string {
  return `https://wa.me/351913973551?text=${encodeURIComponent(message)}`
}

export const SERVICES = [
  {
    id: 'loteamentos',
    title: 'Loteamentos & Urbanizações',
    description: 'Projeto e execução de redes elétricas para loteamentos e urbanizações completas. Infraestrutura de média e baixa tensão, postos de transformação, iluminação pública e coordenação com distribuidoras.',
    cta: 'Pedir proposta',
    waMessage: WA_MESSAGES.loteamento,
    icon: 'building',
    color: 'amber',
  },
  {
    id: 'edificios',
    title: 'Edifícios & Indústria',
    description: 'Projetos elétricos para edifícios residenciais, comerciais e industriais. Colunas montantes, quadros elétricos, redes de distribuição AT/BT, clínicas, armazéns e espaços comerciais.',
    cta: 'Solicitar reunião técnica',
    waMessage: WA_MESSAGES.edificio,
    icon: 'cpu',
    color: 'amber',
  },
  {
    id: 'domotica',
    title: 'Alto Padrão & Domótica',
    description: 'Soluções de automação residencial para casas de alto padrão. Iluminação inteligente, controlo centralizado, climatização integrada, sistemas de áudio e segurança — tudo num único projeto de engenharia.',
    cta: 'Ver soluções',
    waMessage: WA_MESSAGES.domotica,
    icon: 'home-auto',
    color: 'cyan',
  },
  {
    id: 'potencia',
    title: 'Aumento de Potência',
    description: 'Processo completo junto à E-Redes: pedido de aumento de potência, adequação do ramal, atualização do quadro elétrico e certificação. Ideal para moradias, comércios e instalações com novas necessidades energéticas.',
    cta: 'Iniciar processo',
    waMessage: WA_MESSAGES.potencia,
    icon: 'power-up',
    color: 'amber',
  },
  {
    id: 'wallbox',
    title: 'Mobilidade Elétrica',
    description: 'Fornecimento e instalação de carregadores WallBox para veículos elétricos. Estudo do circuito dedicado, dimensionamento de proteções e instalação certificada em moradias, condomínios e empresas.',
    cta: 'Saber mais',
    waMessage: WA_MESSAGES.wallbox,
    icon: 'battery',
    color: 'cyan',
  },
  {
    id: 'fotovoltaico',
    title: 'Geração Fotovoltaica',
    description: 'Projeto e instalação de sistemas solares fotovoltaicos para autoconsumo. Dimensionamento técnico, integração com rede, monitorização e manutenção. Reduza a fatura energética com retorno garantido.',
    cta: 'Pedir orçamento solar',
    waMessage: WA_MESSAGES.solar,
    icon: 'sun',
    color: 'cyan',
  },
  {
    id: 'telecom-seguranca',
    title: 'Telecomunicações & Segurança',
    description: 'Projetos ITED (redes de cobre, fibra ótica, coaxial), vídeo porteiro, CCTV, deteção de intrusão e deteção de incêndio. Infraestrutura completa de telecomunicações e segurança eletrónica.',
    cta: 'Pedir proposta',
    waMessage: WA_MESSAGES.telecom,
    icon: 'lock',
    color: 'green',
  },
  {
    id: 'certificacoes',
    title: 'Certificações & Legalizações',
    description: 'Certificação de instalações elétricas, termos de responsabilidade, declarações de conformidade, licenciamento junto à DGEG e processos de legalização. Documentação técnica com assinatura de engenheiro.',
    cta: 'Iniciar certificação',
    waMessage: WA_MESSAGES.certificacao,
    icon: 'certificate',
    color: 'green',
  },
]

export const TRUST_ITEMS = [
  { label: 'DGEG 82284', sub: 'Credenciado' },
  { label: 'Até 10MW', sub: 'Experiência Comprovada' },
  { label: 'Loteamentos', sub: 'Projeto Completo' },
  { label: '24 Horas', sub: 'Disponível' },
  { label: 'Aumento Potência', sub: 'Processo E-Redes' },
]

export const PILLARS = [
  {
    title: 'Projetos de Grande Escala',
    description: 'Experiência internacional em centrais hidroelétricas, parques eólicos e solares, subestações e linhas de transmissão. Capacidade técnica para loteamentos, edifícios e instalações industriais completas.',
    icon: 'award',
  },
  {
    title: 'Credenciado DGEG n.º 82284',
    description: 'Autorização formal da Direção-Geral de Energia e Geologia. Membro da Ordem dos Engenheiros n.º 84420. ANACOM n.º 84420. Certificação UE E1937120. IMPIC 117918-PUB.',
    icon: 'calendar',
  },
  {
    title: 'Domótica & Inovação Energética',
    description: 'Automação residencial de alto padrão, carregamento de veículos elétricos, geração fotovoltaica e infraestruturas ITED — soluções completas com conformidade europeia.',
    icon: 'zap-circle',
  },
  {
    title: 'Disponível 24 Horas',
    description: 'Emergências elétricas não escolhem hora. Atendimento 24 horas, deslocação rápida na Área Metropolitana de Lisboa. Sem filas de espera, sem burocracia.',
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
  { value: 500, suffix: '+', label: 'Projetos realizados' },
  { value: 24, suffix: 'H', label: 'Disponibilidade diária' },
  { value: 100, suffix: '%', label: 'Trabalho certificado' },
]
