import { BRAND } from './constants'

export type BlogPost = {
  slug: string
  title: string
  description: string
  date: string
  dateISO: string
  readTime: number
  tags: string[]
  category: string
  body: string // HTML
}

const author = BRAND.founder
const orgName = BRAND.name

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'aumento-de-potencia-e-redes-cascais-guia',
    title: 'Aumento de Potência E-Redes em Cascais: guia prático passo a passo',
    description:
      'Como pedir aumento de potência à E-Redes em Cascais e Lisboa: prazos, custos típicos, adequação do quadro elétrico e quando precisa de termo de responsabilidade de engenheiro.',
    date: '15 Abril 2026',
    dateISO: '2026-04-15',
    readTime: 7,
    tags: ['Aumento de Potência', 'E-Redes', 'Cascais', 'Quadro Elétrico'],
    category: 'Energia',
    body: `
<p class="lead">Pedir aumento de potência parece simples — abrir o site da E-Redes, escolher o novo escalão e esperar. Na prática, há três pontos onde quase toda a gente perde tempo (e dinheiro): a adequação do ramal, a actualização do quadro elétrico e a certificação técnica. Este é o passo a passo que recomendo aos meus clientes em Cascais e Lisboa.</p>

<h2>1. Avaliar a potência actualmente contratada</h2>
<p>O primeiro erro é pedir o escalão errado. Antes de tudo, vale a pena olhar para a factura — a potência está expressa em kVA (1.15, 2.3, 3.45, 4.6, 5.75, 6.9, 10.35, 13.8, 17.25, 20.7…). Subir um escalão custa mais por mês na taxa de potência, e não há forma simples de descer mais tarde sem voltar a fazer todo o processo.</p>
<p>Na prática, faz sentido aumentar quando:</p>
<ul>
  <li>Disjuntor principal dispara com regularidade ao ligar AC + máquina de lavar + indução</li>
  <li>Pretende instalar um <strong>WallBox</strong> de 7.4kW ou 11kW</li>
  <li>Vai instalar bomba de calor / piso radiante / piscina aquecida</li>
  <li>Está a remodelar e prevê adicionar circuitos novos</li>
</ul>

<h2>2. O processo formal junto à E-Redes</h2>
<p>O pedido faz-se na E-Redes (não no comercializador — confusão comum). Pode ser feito online no portal da E-Redes ou através do engenheiro responsável. Há três cenários:</p>
<ul>
  <li><strong>Aumento dentro do escalão de baixa tensão normal (BTN, até 41.4kVA)</strong> — geralmente sem necessidade de ramal novo. Prazo típico: 5 a 15 dias úteis.</li>
  <li><strong>Aumento que exige reforço de ramal</strong> — quando a coluna montante ou o ramal subterrâneo não suporta a nova potência. Aqui o prazo pode ir a 30-60 dias e há custos de obra adicionais.</li>
  <li><strong>Passagem para BT especial (BTE)</strong> — acima de 41.4kVA. Implica posto de transformação e projecto formal.</li>
</ul>

<h2>3. Adequação do quadro elétrico (a parte que ninguém te diz)</h2>
<p>A E-Redes só altera o limitador no contador. Tudo o que está a jusante — disjuntor geral, diferenciais, secções de cabo, terra — fica do lado do cliente. Em quase 8 em cada 10 instalações antigas que vejo em Cascais e Estoril, o quadro elétrico não está dimensionado para a nova potência. Subir o limitador sem rever o quadro é uma armadilha: o sistema "funciona", mas perde-se a função de protecção.</p>
<p>O que tem de ser revisto:</p>
<ol>
  <li>Disjuntor geral — secção e calibração compatíveis com a nova potência</li>
  <li>Diferenciais — RCD de 30mA por circuito (obrigatório RTIEBT)</li>
  <li>Secção dos cabos da entrada e dos circuitos terminais</li>
  <li>Estado da ligação à terra (medição)</li>
  <li>Coluna montante (em edifícios) — secção mínima de 16mm² para BTN normal</li>
</ol>

<h2>4. Certificação e termo de responsabilidade</h2>
<p>Sempre que se altera potência contratada acima dos limites de manutenção, ou quando se faz alteração ao quadro, é necessário <strong>termo de responsabilidade</strong> assinado por engenheiro eletrotécnico credenciado pela DGEG. Sem este documento, a E-Redes pode recusar a ligação, e qualquer sinistro futuro fica sem cobertura de seguro.</p>

<h2>5. Quanto custa, em prática</h2>
<p>O pedido em si tem um valor regulado pela ERSE. O que faz a diferença no orçamento final é:</p>
<ul>
  <li>Substituição de disjuntor geral e diferenciais (€80–€250 por elemento)</li>
  <li>Reforço de coluna montante em edifícios (custo partilhado pelo condomínio)</li>
  <li>Termo de responsabilidade + projecto técnico (€150–€450 conforme complexidade)</li>
</ul>

<h2>Resumo</h2>
<p>Aumento de potência não é só clicar no portal — é avaliar o ramal, dimensionar o quadro e certificar com responsabilidade técnica. Se está em Cascais, São Domingos de Rana, Estoril, Oeiras ou Lisboa e quer fazer este processo de forma limpa, falo consigo no WhatsApp e fazemos a vistoria gratuita.</p>
`.trim(),
  },
  {
    slug: 'domotica-casa-alto-padrao-cascais',
    title: 'Domótica para casas de alto padrão em Cascais: o que decidir antes da obra',
    description:
      'Decisões críticas de domótica que devem ser tomadas antes da empreitada elétrica numa casa de alto padrão. Protocolos, infraestrutura de cabos e integração com climatização e segurança.',
    date: '22 Março 2026',
    dateISO: '2026-03-22',
    readTime: 9,
    tags: ['Domótica', 'Alto Padrão', 'Cascais', 'Automação'],
    category: 'Domótica',
    body: `
<p class="lead">A pior altura para decidir domótica é depois de a obra ter fechado as paredes. A segunda pior é durante a obra. A altura certa é antes — e é aí que a maior parte dos clientes em Cascais perde a oportunidade de ter uma casa verdadeiramente integrada sem custos absurdos.</p>

<h2>1. Protocolo: KNX, Loxone ou um sistema de retalho?</h2>
<p>É a primeira decisão estratégica e a que mais condiciona o projecto.</p>
<ul>
  <li><strong>KNX</strong> — padrão europeu aberto, fiável, muitos fabricantes. Ideal para projectos médios e grandes onde se pretende independência de marca. Custo médio-alto, mas durabilidade de 20+ anos.</li>
  <li><strong>Loxone</strong> — sistema fechado mas extremamente bem integrado. Ótima relação qualidade/preço para moradias unifamiliares de 200–600m². Curva de aprendizagem curta.</li>
  <li><strong>Sistemas de retalho (Shelly, Tuya, Apple Home)</strong> — bons para uso pontual, não para automação séria de casa de alto padrão. Falham em integração de climatização e segurança.</li>
</ul>

<h2>2. Infraestrutura de cabos — o que tem de passar nas paredes</h2>
<p>Antes do gesso fechar, esta é a checklist mínima:</p>
<ul>
  <li>Cabo bus KNX ou Cat6/Cat6A em estrela até cada ponto de comando</li>
  <li>Cat6A para cada televisão, ponto de áudio multi-room e câmara</li>
  <li>Cabo de áudio dedicado para colunas embebidas em tecto</li>
  <li>Cabos de alimentação dedicados para estores motorizados</li>
  <li>Tubagem livre entre quadro e cada divisão para reforços futuros</li>
</ul>
<p>Esquecer um destes itens significa abrir paredes mais tarde. Custo de "esquecer um cabo Cat6": tipicamente €400–€1.200 em obra de retoque.</p>

<h2>3. Iluminação — circuitos DALI, dimmers ou comutados?</h2>
<p>Numa moradia de alto padrão, a iluminação é metade da experiência de domótica. As três opções têm peso muito diferente:</p>
<ul>
  <li><strong>Comutado clássico</strong> — uso só em zonas técnicas (lavandaria, garagem, dispensa). Não é "alto padrão".</li>
  <li><strong>Dimmer universal por circuito</strong> — bom para divisões pontuais. Limita cenas e cores.</li>
  <li><strong>DALI ou DMX</strong> — controlo individual de cada luminária, com cenas, temperatura de cor e curvas circadianas. É o padrão actual em alto padrão internacional.</li>
</ul>

<h2>4. Climatização integrada (a integração que mais falha)</h2>
<p>VRV/VRF da Daikin, Mitsubishi e LG têm gateways KNX disponíveis. Bombas de calor para piso radiante (Vaillant, Viessmann) também. O erro frequente é encomendar o equipamento sem validar o gateway — depois o instalador térmico não tem com que falar com o sistema de domótica e a "casa inteligente" fica com termostatos manuais nas paredes.</p>

<h2>5. Segurança e CCTV no mesmo projecto</h2>
<p>Numa casa de alto padrão, segurança não é um sistema separado. Deve falar com a domótica para:</p>
<ul>
  <li>Cenas de "ausente" que armam alarme + descem estores + reduzem AVAC</li>
  <li>Detectores de presença que servem alarme E iluminação</li>
  <li>Câmaras com integração de notificação no painel central</li>
  <li>Vídeo porteiro IP integrado em qualquer ponto da casa</li>
</ul>

<h2>6. Quanto custa, ordem de grandeza</h2>
<p>Para uma moradia de 350m² em Cascais com 4 quartos, sala dupla, cozinha + ilha, escritório, lavandaria e exterior com iluminação cénica:</p>
<ul>
  <li>Domótica KNX completa com iluminação DALI, AVAC, estores, cenas: €30.000–€55.000 chave-na-mão</li>
  <li>Loxone equivalente: €18.000–€32.000</li>
  <li>Sistemas de retalho a tentar replicar isto: imprevisível, geralmente fracassa em 2 anos</li>
</ul>

<h2>Resumo</h2>
<p>A domótica de alto padrão decide-se em projecto, não em obra. Se está a planear uma moradia em Cascais, Estoril, Quinta da Marinha ou Birre e quer um projecto eléctrico que já contempla domótica, falo consigo. Antes do gesso, ainda há tempo de fazer tudo bem.</p>
`.trim(),
  },
  {
    slug: 'coluna-montante-edificio-responsabilidade-portugal',
    title: 'Coluna montante de edifício: quem é o responsável e quando precisa de ser substituída',
    description:
      'Coluna montante em edifícios antigos: a quem pertence a responsabilidade legal, quando deve ser substituída e como lidar com o aumento de potência num apartamento.',
    date: '4 Fevereiro 2026',
    dateISO: '2026-02-04',
    readTime: 6,
    tags: ['Coluna Montante', 'Edifícios', 'Condomínio', 'RTIEBT'],
    category: 'Edifícios',
    body: `
<p class="lead">A coluna montante é o cabo que sobe pela prumada do edifício e leva electricidade desde o quadro de colunas, no piso técnico, até ao contador de cada fracção. É também a maior fonte de problemas elétricos não resolvidos em edifícios construídos antes de 2006 em Lisboa, Cascais e arredores.</p>

<h2>De quem é a coluna montante?</h2>
<p>Esta é a primeira pergunta — e a mais mal interpretada. A resposta correcta:</p>
<ul>
  <li>O <strong>ramal e a portinhola</strong> são da E-Redes (concessionária de distribuição).</li>
  <li>A <strong>coluna montante</strong> é parte comum do edifício, propriedade do condomínio.</li>
  <li>O <strong>contador</strong> é da E-Redes mas responsabilidade de leitura passa pelo cliente.</li>
  <li>A <strong>instalação interior da fracção</strong> é responsabilidade do proprietário.</li>
</ul>
<p>Conclusão prática: quando há um problema na coluna, é o condomínio que tem de actuar — não cada vizinho individualmente, e a E-Redes só intervém se for ramal.</p>

<h2>Quando é que a coluna precisa de ser substituída?</h2>
<p>Há três indicadores comuns:</p>
<ol>
  <li><strong>Secção desadequada para os escalões actuais.</strong> Edifícios dos anos 70 e 80 têm frequentemente colunas de 6mm² ou 10mm² em alumínio. Para potências modernas (acima de 6.9kVA por fracção) isto é insuficiente.</li>
  <li><strong>Aquecimento perceptível na portinhola ou no quadro de colunas.</strong> Sintoma claro de sobrecarga ou ligações degradadas.</li>
  <li><strong>Pedidos sucessivos de aumento de potência negados pela E-Redes.</strong> Nestes casos a E-Redes informa que o reforço é pré-condição.</li>
</ol>

<h2>Quem assina o projecto de substituição?</h2>
<p>Substituir uma coluna montante é uma intervenção significativa que exige:</p>
<ul>
  <li>Projecto eléctrico assinado por engenheiro eletrotécnico credenciado pela DGEG</li>
  <li>Termo de responsabilidade técnica</li>
  <li>Coordenação com a E-Redes para corte e religação</li>
  <li>Em edifícios &gt; 4 pisos, pode ainda envolver projecto ITED para coluna de telecomunicações</li>
</ul>

<h2>Custo médio em Lisboa e Cascais</h2>
<p>Para um edifício de 4 andares com 8 fracções, substituição completa de coluna montante (BT) tipicamente situa-se entre <strong>€8.500 e €18.000</strong>, distribuído pelo condomínio. Inclui projecto, materiais (cabo XG ou H07V-K em secção adequada, calhas técnicas, quadro de colunas novo), mão-de-obra e certificação.</p>

<h2>E se eu sou só um proprietário e o condomínio não quer mexer?</h2>
<p>Situação comum. A lei do condomínio (Decreto-Lei 268/94 e alterações) permite ao proprietário individual:</p>
<ul>
  <li>Solicitar avaliação técnica formal e apresentá-la em assembleia</li>
  <li>Em caso de risco grave, requerer intervenção judicial</li>
  <li>Promover a substituição apenas da sua secção, se tecnicamente possível (raro)</li>
</ul>
<p>O caminho mais eficaz é apresentar à assembleia um relatório técnico assinado por engenheiro com diagnóstico, alternativas e orçamento. Em 9 em cada 10 condomínios que acompanho, o relatório formal desbloqueia a decisão.</p>

<h2>Resumo</h2>
<p>Coluna montante é responsabilidade do condomínio, mas é também o gargalo mais comum em pedidos de aumento de potência em edifícios antigos. Se está num edifício em Lisboa ou Cascais com este problema, posso fazer o relatório técnico para apresentar em assembleia e, se o condomínio aprovar, executar o projecto chave-na-mão.</p>
`.trim(),
  },
  {
    slug: 'wallbox-7kw-vs-11kw-qual-escolher',
    title: 'WallBox 7.4kW ou 11kW: qual o carregador certo para a sua moradia?',
    description:
      'Diferenças práticas entre WallBox monofásico de 7.4kW e trifásico de 11kW. Quando vale a pena o aumento de potência e como dimensionar para o veículo certo.',
    date: '12 Janeiro 2026',
    dateISO: '2026-01-12',
    readTime: 6,
    tags: ['WallBox', 'Veículos Elétricos', 'Mobilidade', 'Cascais'],
    category: 'Mobilidade',
    body: `
<p class="lead">Quando um cliente em Cascais ou Sintra me pede para instalar um WallBox, a primeira pergunta que faço é "qual o carro?" — e a segunda é "qual a potência contratada hoje?". Estas duas respostas determinam quase tudo o resto. Eis o que importa decidir.</p>

<h2>1. A diferença real entre 7.4kW e 11kW</h2>
<p>Em monofásico, o limite prático é 7.4kW (32A × 230V). Em trifásico, o WallBox carrega a 11kW (16A × 3 × 400V) ou até 22kW (32A × 3 × 400V). Em termos de tempo de carga numa bateria de 60kWh:</p>
<ul>
  <li><strong>7.4kW</strong> — carga completa de 0 a 100% em ~8h. Adequado a carregamento nocturno em casa.</li>
  <li><strong>11kW</strong> — carga completa em ~5.5h. Útil quando se precisa de "top-up" durante o dia.</li>
  <li><strong>22kW</strong> — carga completa em ~3h, mas <strong>quase nenhum carro elétrico vendido em 2026 aceita 22kW AC</strong> (Tesla Model S/X antigas, Renault Zoe são as excepções).</li>
</ul>

<h2>2. O ponto crítico: o seu carro suporta trifásico?</h2>
<p>Esta é a omissão mais frequente. Modelos populares com carregador AC limitado:</p>
<ul>
  <li>Tesla Model 3/Y (até 2024) — 11kW (mas limita a 7.4kW em algumas configurações)</li>
  <li>Hyundai Ioniq 5/6 — 11kW</li>
  <li>Kia EV6/EV9 — 11kW</li>
  <li>VW ID.3/ID.4 — 11kW (de série), 7.4kW em versões base</li>
  <li>Renault Megane E-Tech — 7.4kW (monofásico)</li>
  <li>Peugeot e-208 / Opel Corsa-e — 7.4kW (monofásico)</li>
</ul>
<p>Instalar um WallBox de 11kW para um carro que só aceita 7.4kW é desperdício de investimento (cabo trifásico, disjuntores trifásicos, eventual aumento de potência), sem benefício prático.</p>

<h2>3. Análise da potência contratada</h2>
<p>Para WallBox de 7.4kW é necessário um circuito dedicado de pelo menos 32A com diferencial RCD tipo A ou B. A potência contratada na E-Redes deve cobrir o WallBox <strong>mais</strong> os consumos simultâneos da casa:</p>
<ul>
  <li>WallBox 7.4kW + casa típica → recomendo 10.35kVA contratados (mínimo)</li>
  <li>WallBox 11kW + casa típica → recomendo 13.8kVA, em trifásico</li>
  <li>WallBox 22kW + casa → 17.25kVA trifásicos com gestão dinâmica de carga</li>
</ul>
<p>Em casas com 6.9kVA monofásicos a tentar instalar 7.4kW, dispara o disjuntor geral assim que liga o forno. Solução: aumento de potência (ou WallBox com gestão dinâmica que reduz a potência de carga em tempo real).</p>

<h2>4. Gestão dinâmica de carga (DLM) — vale a pena?</h2>
<p>Sim, em quase todos os casos. Um WallBox com DLM mede o consumo da casa em tempo real e ajusta a potência de carga do carro para nunca disparar o disjuntor geral. Custa €150–€350 a mais, mas evita aumentos de potência desnecessários e melhora a vida útil da instalação.</p>

<h2>5. Marcas que recomendo (em 2026)</h2>
<ul>
  <li><strong>Wallbox Pulsar Plus / Commander 2</strong> — referência do mercado em Portugal, gestão por app, suporte excelente.</li>
  <li><strong>EVlink Pro AC (Schneider)</strong> — escolha técnica, preferida em condomínios e edifícios comerciais.</li>
  <li><strong>Easee Home</strong> — modular, aceita "bandas" para condomínios partilhados, custo competitivo.</li>
</ul>
<p>Evitar: marcas no-name de marketplace sem certificação CE adequada, sem suporte local e sem gestão de carga.</p>

<h2>6. Custo total instalado em Cascais (2026)</h2>
<ul>
  <li>WallBox 7.4kW certificado, instalado em moradia, com circuito dedicado e diferencial: €950–€1.450</li>
  <li>WallBox 11kW trifásico instalado: €1.300–€1.900</li>
  <li>Aumento de potência associado (quando necessário): +€350–€900</li>
</ul>
<p>Faço orçamento gratuito após visita técnica de 30 minutos.</p>

<h2>Resumo</h2>
<p>Decisão entre 7.4kW e 11kW depende de três factores: o carro, a potência contratada e a sua rotina de utilização. Em 70% das moradias unifamiliares em Cascais, 7.4kW monofásico bem dimensionado com gestão dinâmica é a opção mais inteligente. Para condomínios e moradias com várias pessoas a carregar em simultâneo, trifásico passa a fazer sentido.</p>
`.trim(),
  },
  {
    slug: 'custo-instalacao-eletrica-moradia-cascais-2026',
    title: 'Quanto custa uma instalação eléctrica completa numa moradia em Cascais (2026)',
    description:
      'Análise detalhada de custos de instalação eléctrica para moradias em Cascais e arredores: do projecto à certificação, com escalões realistas para 200m², 350m² e 600m².',
    date: '8 Dezembro 2025',
    dateISO: '2025-12-08',
    readTime: 8,
    tags: ['Custo', 'Moradia', 'Cascais', 'Orçamento'],
    category: 'Edifícios',
    body: `
<p class="lead">"Quanto custa fazer a parte eléctrica de uma moradia?" é a pergunta mais frequente que recebo, e também aquela em que circulam mais valores fora da realidade. Vou dar números reais de mercado em Cascais, Estoril, Oeiras e Sintra para 2026, com base em projectos que assino regularmente.</p>

<h2>O que está incluído numa instalação eléctrica completa</h2>
<ul>
  <li>Projecto eléctrico assinado por engenheiro credenciado DGEG</li>
  <li>Quadro eléctrico técnico (disjuntor geral, diferenciais RCD, disjuntores por circuito)</li>
  <li>Circuitos terminais — iluminação, tomadas, cozinha, AVAC, exterior</li>
  <li>Caixas de derivação, tubos VD, fios H07V-K em secções adequadas</li>
  <li>Aparelhagem (interruptores, tomadas) — gama escolhida pelo cliente</li>
  <li>Ligação à terra (varetas, barramento, equipotenciais)</li>
  <li>Iluminação (corpos LED) — quando aplicável</li>
  <li>Termo de responsabilidade técnica + certificação para ligação E-Redes</li>
</ul>
<p>Não está incluído por defeito: domótica, fotovoltaico, WallBox, segurança/CCTV, ITED — todos custam à parte.</p>

<h2>Escalão 1 — Moradia 200m² (3 quartos, 2 wcs)</h2>
<p>Tipologia T3 simples, sem domótica, com aparelhagem standard (Schneider Asfora ou equivalente):</p>
<ul>
  <li>Projecto + termo de responsabilidade: €380–€520</li>
  <li>Quadro eléctrico técnico: €450–€700</li>
  <li>Cabos, tubos, caixas: €1.800–€2.600</li>
  <li>Mão-de-obra (cerca de 18–25 dias): €3.500–€5.200</li>
  <li>Aparelhagem standard (40–50 elementos): €600–€950</li>
  <li>Iluminação LED básica: €600–€1.100</li>
</ul>
<p><strong>Total chave-na-mão:</strong> €7.300–€11.000 (€36–€55/m²)</p>

<h2>Escalão 2 — Moradia 350m² (4–5 quartos, 4 wcs)</h2>
<p>Tipologia T4/T5 com cozinha aberta, escritório, lavandaria, exterior iluminado:</p>
<ul>
  <li>Projecto + termo: €550–€780</li>
  <li>Quadro técnico maior (mais circuitos): €800–€1.300</li>
  <li>Cabos, tubos, caixas: €3.500–€5.000</li>
  <li>Mão-de-obra (28–40 dias): €6.500–€9.500</li>
  <li>Aparelhagem média (Jung LS, Schneider Odace ou Niessen Zenit): €1.400–€2.300</li>
  <li>Iluminação LED de qualidade: €1.500–€2.800</li>
  <li>Iluminação cénica exterior: €700–€1.400</li>
</ul>
<p><strong>Total chave-na-mão:</strong> €15.000–€23.000 (€42–€66/m²)</p>

<h2>Escalão 3 — Moradia 600m² alto padrão</h2>
<p>Moradia premium com domótica integrada, climatização VRF, piscina exterior, cinema, adega climatizada:</p>
<ul>
  <li>Projecto eléctrico + projecto de domótica + ITED: €1.800–€2.800</li>
  <li>Quadro técnico industrial-grade (com automação KNX): €2.500–€4.500</li>
  <li>Cabos especiais (KNX bus, Cat6A, fibra, áudio): €7.000–€11.000</li>
  <li>Mão-de-obra especializada (60–90 dias): €13.000–€20.000</li>
  <li>Aparelhagem premium (Gira, Jung, Lithoss): €4.500–€8.500</li>
  <li>Iluminação cénica DALI completa: €6.000–€12.000</li>
  <li>Domótica chave-na-mão (KNX integrada): €18.000–€32.000</li>
</ul>
<p><strong>Total chave-na-mão (eléctrica + domótica):</strong> €52.000–€90.000 (€87–€150/m²)</p>

<h2>Os 5 pontos onde vale a pena gastar mais</h2>
<ol>
  <li><strong>Quadro técnico generoso</strong> — espaço para 30% de circuitos extra. Em 5 anos, todos quererão acrescentar circuitos.</li>
  <li><strong>Cabos de secção superior</strong> ao mínimo do RTIEBT. Reduz perdas, aquecimento e prepara aumento de potência futuro.</li>
  <li><strong>Tubagem livre extra</strong> — 1 tubo VD vazio por divisão entre quadro e tecto. Custa €40 em obra e poupa €1.500 em retoque futuro.</li>
  <li><strong>Diferenciais RCD por sector</strong> e não um único geral. Quando dispara, não fica a casa toda às escuras.</li>
  <li><strong>Iluminação LED de marcas profissionais</strong> (Erco, iGuzzini, Linea Light, Astro Lighting). LED chinês de marketplace começa a falhar aos 18 meses.</li>
</ol>

<h2>Os 3 pontos onde se pode poupar sem perder qualidade</h2>
<ol>
  <li><strong>Aparelhagem standard nas zonas técnicas</strong> (lavandaria, garagem, dispensas) — Schneider Asfora chega.</li>
  <li><strong>Iluminação básica em circulações</strong> reservando o investimento para zonas sociais.</li>
  <li><strong>Domótica faseada</strong> — cablar tudo na obra, mas instalar actuadores apenas onde há valor imediato. KNX é modular e cresce.</li>
</ol>

<h2>Resumo</h2>
<p>Custo médio de instalação eléctrica certificada em moradia em Cascais ronda os €40–€65/m² para projectos standard, e €85–€150/m² para alto padrão com domótica. A diferença não está no preço por metro, mas no nível de detalhe técnico. Faço orçamento gratuito após visita técnica.</p>
`.trim(),
  },
]

export const BLOG_AUTHOR = author
export const BLOG_PUBLISHER = orgName

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

export function getRelatedPosts(slug: string, limit = 2): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, limit)
}
