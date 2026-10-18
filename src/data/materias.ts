/*
 * As matérias completas da Redação BVM12 (/noticias/:id), escritas em 17/10/2026 a partir das fontes listadas em
 * news.ts (os fatos e números vêm delas; a citação, quando há, é literal). O cartão da home e o catálogo usam o título
 * e o resumo de news.ts; a página usa a linha fina, o tempo de leitura e o corpo daqui.
 */
export type Bloco =
  | { p: string }
  | { h2: string }
  | { citacao: string; autor: string }
  | { lista: string[] }
  | { numeros: Array<{ valor: string; legenda: string }> };

export const materias: Record<string, { dek: string; minutos: number; corpo: Bloco[] }> = {
  'desmatamento-inpe-2026': {
    dek: 'Amazônia e Cerrado registram as menores áreas desmatadas de suas séries históricas. O governo atribui a queda à fiscalização e à cooperação com estados e municípios.',
    minutos: 2,
    corpo: [
      {
        p: 'A área desmatada na Amazônia caiu 41,8% entre agosto de 2025 e julho de 2026, na comparação com os 12 meses anteriores. Passou de 5.731\u00a0km² para 3.335\u00a0km², a menor extensão desde 1988. Os dados vêm do monitoramento do Instituto Nacional de Pesquisas Espaciais (Inpe) e foram divulgados pelo governo federal na sexta-feira (16).',
      },
      {
        p: 'O Cerrado também recuou. No mesmo período, o desmatamento no bioma diminuiu 23,8%, de 7.235,27\u00a0km² para 5.516,69\u00a0km², a menor área registrada desde 2001. Com o resultado, os dois biomas chegaram às menores extensões desmatadas em um ano de suas séries históricas.',
      },
      {
        numeros: [
          { valor: '3.335\u00a0km²', legenda: 'Área desmatada na Amazônia, ago/2025 a jul/2026' },
          { valor: '−41,8%', legenda: 'Queda na Amazônia sobre os 12 meses anteriores' },
          { valor: '−23,8%', legenda: 'Queda no Cerrado, para 5.516,69\u00a0km²' },
        ],
      },
      { h2: 'O que explica a queda' },
      {
        p: 'O ministro do Meio Ambiente e Mudança do Clima, João Paulo Capobianco, comemorou os números. Para ele, os resultados concretos nos dois biomas respondem a quem repete que o desmatamento zero é impossível.',
      },
      {
        p: 'Para o ministro, a redução gradual, ano a ano, se apoia em três pilares. O primeiro é seguir a ciência, com respeito aos dados e aos estudos. O segundo é a democracia, com a sociedade chamada a participar dos debates em conselhos estaduais e municipais. O terceiro é o pacto federativo: prefeitos e governadores aderem ao plano de combate ao desmatamento, sejam da oposição, sejam da base do governo federal.',
      },
      {
        p: 'A ministra da Casa Civil, Miriam Belchior, atribuiu o resultado à coordenação entre ministérios, à cooperação com estados e municípios e à participação da sociedade.',
      },
      {
        p: 'O governo federal listou as ações que, na sua avaliação, contribuíram para a queda. A Polícia Federal reforçou as operações e instaurou quase 8\u00a0mil inquéritos sobre crimes ambientais entre 2023 e 2026. Citou ainda o aumento do investimento no Instituto Chico Mendes de Conservação da Biodiversidade (ICMBio), a criação de 18 unidades de conservação e a homologação de 20 terras indígenas.',
      },
      { h2: 'O peso nas exportações' },
      {
        p: 'Para o ministro da Agricultura e Pecuária, André de Paula, o maior beneficiário da redução é o agronegócio exportador. Ele observou que países e blocos comerciais exigem cada vez mais de seus parceiros uma agricultura sustentável. Citou como exemplo a União Europeia, que proíbe a entrada de produtos vindos de áreas desmatadas.',
      },
      {
        citacao:
          'Esse é um passaporte para entregar os produtos brasileiros. Sem esses números, seria muito difícil comercializar os produtos brasileiros no mundo',
        autor: 'André de Paula, ministro da Agricultura e Pecuária',
      },
      {
        p: 'Segundo André de Paula, o Brasil ultrapassou os Estados Unidos em 2026 e se tornou o maior exportador de alimentos do mundo.',
      },
    ],
  },

  'manaus-ar-queimadas': {
    dek: 'A rede municipal e a Universidade do Estado do Amazonas suspenderam as aulas presenciais. O Ministério da Saúde já identificou 12 municípios que precisam de apoio.',
    minutos: 2,
    corpo: [
      {
        p: 'Manaus voltou a ter o ar mais poluído entre as capitais brasileiras na manhã de sexta-feira (16). Por volta das 6h, a plataforma internacional IQAir registrou na cidade índice de qualidade do ar de 167, nível classificado como insalubre. A causa é a fumaça das queimadas. A capital amazonense retomou o topo do ranking depois de ter registrado melhora na véspera.',
      },
      {
        p: 'O sistema eletrônico de vigilância ambiental da Universidade do Estado do Amazonas também registrou piora. Na maior parte da cidade, a qualidade do ar ficou entre muito ruim e péssima. No Aleixo, bairro da zona centro-sul, a concentração de partículas chegou a 139,6\u00a0microgramas por metro cúbico, faixa considerada péssima. No Tarumã, na zona oeste, a medição foi de 39\u00a0microgramas por metro cúbico, nível moderado.',
      },
      {
        numeros: [
          { valor: '167', legenda: 'Índice da IQAir em Manaus, por volta das 6h: insalubre' },
          { valor: '139,6\u00a0µg/m³', legenda: 'Partículas no Aleixo, zona centro-sul: péssimo' },
          { valor: '303', legenda: 'Focos de incêndio extintos pelo Ibama no Amazonas' },
        ],
      },
      { h2: 'Aulas suspensas' },
      {
        p: 'As aulas presenciais da rede municipal de ensino foram suspensas na sexta-feira. A medida é preventiva e busca reduzir a exposição de alunos e profissionais da educação à fumaça.',
      },
      {
        p: 'A Universidade do Estado do Amazonas também suspendeu as aulas e as demais atividades acadêmicas presenciais nos três turnos, em todas as unidades, na capital e no interior. Parte do trabalho administrativo passou a ser feita a distância.',
      },
      { h2: 'De onde vem a fumaça' },
      {
        p: 'A fumaça que chega a Manaus vem de queimadas no interior do Amazonas e em estados vizinhos, como Rondônia, Pará e Mato Grosso. As partículas liberadas pelo fogo podem ficar suspensas no ar por vários dias e ser levadas pelo vento a longas distâncias. A falta de chuva ajuda a manter os poluentes na atmosfera.',
      },
      {
        p: 'Crianças, idosos, gestantes e pessoas com doenças preexistentes estão entre os grupos que pedem mais atenção. Nelas, a exposição à fumaça pode agravar problemas respiratórios e cardiovasculares.',
      },
      { h2: 'Saúde e combate ao fogo' },
      {
        p: 'O governo federal reforçou o monitoramento dos efeitos das queimadas sobre a saúde da população do estado. Segundo o Ministério da Saúde, 12 municípios precisam de algum tipo de apoio nos serviços de saúde. Equipes da Força Nacional do SUS fazem, com as autoridades sanitárias do estado e dos municípios, um diagnóstico da rede de atendimento. O ministério também avalia o consumo e a capacidade de fornecimento de oxigênio nas unidades de saúde, inclusive nos distritos sanitários especiais indígenas, para preparar a rede para emergências.',
      },
      {
        p: 'O Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis (Ibama) informou ter extinguido 303 focos de incêndio no Amazonas desde o início das operações. Onze aeronaves foram postas à disposição, entre aviões de combate direto ao fogo, helicópteros e um avião de apoio logístico. Entre elas estão seis aviões Air Tractor e um KC-390, mobilizado pelo Ministério da Defesa para lançar grandes volumes de água.',
      },
      {
        p: 'Em 10 de outubro, o governo do Amazonas decretou situação de emergência em cerca de 36 municípios por causa das queimadas.',
      },
    ],
  },

  'tfff-7-3-bi': {
    dek: 'A Noruega, maior doadora, condiciona seus US$\u00a03\u00a0bilhões à meta mínima. Investidores com €\u00a010\u00a0trilhões em ativos declararam apoio, mas sem compromisso de aporte.',
    minutos: 3,
    corpo: [
      {
        p: 'O Fundo Florestas Tropicais para Sempre (TFFF) soma cerca de US$\u00a07,3\u00a0bilhões em compromissos anunciados, depois que o Reino Unido formalizou um investimento de £\u00a0400\u00a0milhões, o equivalente a cerca de US$\u00a0540\u00a0milhões. Para começar a operar, o fundo precisa reunir US$\u00a010\u00a0bilhões em capital público até 31 de dezembro.',
      },
      {
        p: 'O aporte britânico foi apresentado na Semana do Clima de Nova York, evento paralelo à Assembleia Geral da ONU. Quem o anunciou foi a ministra para a Transição Climática do Reino Unido, Katie White, ao lado do ministro do Meio Ambiente e Mudança do Clima, João Paulo Capobianco.',
      },
      {
        numeros: [
          { valor: 'US$\u00a07,3\u00a0bi', legenda: 'Em compromissos anunciados ao fundo' },
          { valor: 'US$\u00a010\u00a0bi', legenda: 'Mínimo para operar, até 31 de dezembro' },
          { valor: '€\u00a010\u00a0tri', legenda: 'Em ativos dos investidores que declararam apoio' },
        ],
      },
      { h2: 'O prazo da Noruega' },
      {
        p: 'A data-limite é uma condição imposta pela Noruega, maior doadora do fundo, com US$\u00a03\u00a0bilhões. Se o TFFF não chegar a US$\u00a010\u00a0bilhões em compromissos até o fim do ano, o investimento norueguês fica comprometido. Alcançar esse patamar funciona como gatilho contratual para ativar o fundo.',
      },
      {
        p: 'O Brasil prometeu US$\u00a01\u00a0bilhão. O anúncio foi feito pelo presidente Luiz Inácio Lula da Silva em 23 de setembro de 2025, na Assembleia Geral da ONU daquele ano. Indonésia, Alemanha, França, Holanda, Portugal e Luxemburgo também já anunciaram recursos.',
      },
      { h2: 'O apoio dos investidores' },
      {
        p: 'Na quinta-feira (15), investidores institucionais que somam cerca de €\u00a010\u00a0trilhões em ativos sob gestão assinaram uma declaração de apoio ao fundo. O documento, chamado Rotterdam Statement of Support, foi organizado pela Finance for Biodiversity Foundation e lançado em Amsterdã, durante a conferência PRI in Person 2026.',
      },
      {
        p: 'São 29 signatários. Entre eles estão a alemã Allianz Global Investors, a francesa Amundi, o banco alemão Deutsche Bank, o grupo suíço Pictet, a americana Pimco e a brasileira Régia Capital, joint venture do Banco do Brasil com a JGP. Outras cinco organizações aderiram como apoiadoras: o banco britânico Barclays, a Igreja da Suécia, a Bolsa de Valores de Luxemburgo, a gestora dinamarquesa de fundos de pensão Sampension e a consultoria Sustainable Investment Management (SIM).',
      },
      {
        p: 'A declaração não traz promessa de dinheiro. Ela sinaliza interesse em colaborar e tem o objetivo de aumentar a confiança do mercado no mecanismo. As instituições dizem que pretendem buscar formas de contribuir para o sucesso da iniciativa, inclusive com participação no mercado, e ajudar a fortalecer a confiança no desenho financeiro e na governança do fundo. O texto continua aberto a novas adesões.',
      },
      {
        citacao:
          'Esse modelo só funciona em grande escala. A ambição, portanto, não é opcional; ela está incorporada ao próprio projeto.',
        autor: 'Fernando Simas Magalhães, embaixador do Brasil na Holanda',
      },
      { h2: 'Como o fundo funciona' },
      {
        p: 'Idealizado pelo Brasil e lançado na COP30, em Belém, o TFFF foi criado para remunerar países em desenvolvimento que preservam florestas tropicais, com repasses anuais baseados em monitoramento por satélite. O fundo pretende captar recursos no mercado e direcionar os rendimentos aos países. Pelas regras, ao menos 20% dos pagamentos devem ir diretamente a povos indígenas e comunidades locais.',
      },
      {
        p: 'A meta de longo prazo é montar uma estrutura de US$\u00a0125\u00a0bilhões. Desse total, US$\u00a025\u00a0bilhões viriam de países e instituições filantrópicas, os patrocinadores, que aceitam correr mais risco e esperar mais pelo retorno. Esse capital serviria de alavanca para atrair outros US$\u00a0100\u00a0bilhões do setor privado.',
      },
      {
        p: 'A expectativa é chegar aos US$\u00a010\u00a0bilhões até a COP31, em novembro. Pelo menos cinco países, no entanto, aguardam o resultado da eleição presidencial no Brasil para anunciar seus compromissos.',
      },
    ],
  },

  'eco-invest-5-leilao': {
    dek: 'O Bradesco ficou com a maior parte, R$\u00a028,5\u00a0bilhões em potencial de investimentos. A rodada usa R$\u00a013,2\u00a0bilhões de capital público para atrair dinheiro privado.',
    minutos: 3,
    corpo: [
      {
        p: 'O quinto leilão do Eco Invest Brasil terminou com R$\u00a049,95\u00a0bilhões em propostas homologadas para investimentos em seis cadeias produtivas ligadas à inovação e à transformação ecológica. A demanda total chegou a R$\u00a0181,3\u00a0bilhões, apresentada por seis instituições financeiras. O resultado foi homologado na quarta-feira (7) pelo Comitê Executivo do programa, formado por representantes dos ministérios da Fazenda e do Meio Ambiente e Mudança do Clima.',
      },
      {
        p: 'O dinheiro vai para fundos de inovação, crédito corporativo e projetos de pesquisa aplicada e de empreendedorismo de base tecnológica.',
      },
      {
        numeros: [
          { valor: 'R$\u00a049,95\u00a0bi', legenda: 'Em propostas homologadas no 5º leilão' },
          { valor: 'R$\u00a0181,3\u00a0bi', legenda: 'Demanda apresentada pelos bancos' },
          { valor: '3,8\u00a0vezes', legenda: 'Alavancagem do capital público na rodada' },
        ],
      },
      { h2: 'Quem levou cada cadeia' },
      {
        p: 'Disputaram a rodada Banco do Brasil, Bradesco, Citibank, HSBC, Itaú e Santander. Quatro foram escolhidos para estruturar os fundos e as operações. Pelo modelo, cada instituição atua em uma ou mais cadeias, de acordo com sua capacidade de mobilizar capital privado:',
      },
      {
        lista: [
          'Bradesco: circularidade de resíduos minerais, fertilizantes verdes e química verde, com R$\u00a028,5\u00a0bilhões em potencial de investimentos',
          'Itaú: automação e inteligência artificial, com R$\u00a09,75\u00a0bilhões',
          'Santander: minerais críticos, baterias e mobilidade elétrica, com R$\u00a06,5\u00a0bilhões',
          'HSBC: combustíveis verdes avançados, biogás e biometano, com R$\u00a05,2\u00a0bilhões',
        ],
      },
      {
        p: 'A cadeia de circularidade de resíduos minerais e industriais concentrou o maior potencial, com R$\u00a011\u00a0bilhões. A de fertilizantes verdes, bioinsumos e proteínas alternativas somou R$\u00a09\u00a0bilhões. Entre as atividades indicadas pelos bancos, reciclagem e valorização de resíduos reúnem R$\u00a08,8\u00a0bilhões, e automação, robótica e manufatura inteligente, cerca de R$\u00a08,11\u00a0bilhões. Biofertilizantes, bioinsumos e biodefensivos respondem por R$\u00a07,2\u00a0bilhões, e baterias e sistemas de armazenamento de energia, por R$\u00a04,55\u00a0bilhões.',
      },
      { h2: 'Dinheiro público como alavanca' },
      {
        p: 'A rodada conta com R$\u00a013,2\u00a0bilhões de capital público catalítico, o dinheiro que serve para mobilizar outros recursos. Desse valor, R$\u00a09\u00a0bilhões vão para os fundos de inovação e R$\u00a04,2\u00a0bilhões para o crédito corporativo. A estrutura, chamada de blended finance, usa recursos públicos para reduzir riscos e atrair capital privado, sem fazer do dinheiro público a fonte principal de rentabilidade dos bancos.',
      },
      {
        p: 'A alavancagem do leilão ficou em cerca de 3,8\u00a0vezes. Na prática, cada R$\u00a01 aportado pelo Tesouro deve gerar R$\u00a03,8 em recursos privados.',
      },
      {
        p: 'Os bancos selecionados também terão de destinar recursos não reembolsáveis à pesquisa aplicada e ao empreendedorismo de base tecnológica. A previsão é de pelo menos R$\u00a0250\u00a0milhões em doações no primeiro ano para universidades e instituições científicas, tecnológicas e de inovação. O objetivo é aproximar empresas, centros de pesquisa, startups e investidores e ajudar novas tecnologias a passar do desenvolvimento à produção em escala.',
      },
      {
        p: 'Os critérios do leilão deram peso maior a propostas com participação de capital estrangeiro, a projetos feitos em parceria com universidades e instituições de pesquisa e aos voltados à aquisição e à internalização de tecnologias estrangeiras.',
      },
      { h2: 'Perto de R$\u00a0200\u00a0bilhões' },
      {
        p: 'Criado no Plano de Transformação Ecológica, o Eco Invest Brasil busca atrair investimento privado, inclusive estrangeiro, para projetos de transição ecológica e desenvolvimento sustentável. Os quatro primeiros leilões haviam mobilizado mais de R$\u00a0140\u00a0bilhões. Com a quinta rodada, o volume acumulado se aproxima de R$\u00a0200\u00a0bilhões.',
      },
    ],
  },

  'cbam-preco-carbono': {
    dek: 'Na análise de Pedro Côrtes, professor da USP, a regra europeia endurece em 2030, e as cotas gratuitas do futuro mercado brasileiro não servirão para abater a cobrança.',
    minutos: 3,
    corpo: [
      {
        p: 'Importadores europeus de aço e alumínio terão de pagar, a partir de fevereiro de 2027, pelas emissões de gases de efeito estufa geradas na fabricação do que compraram fora da União Europeia em 2026. Pagarão com certificados cujo preço segue o mercado regulado de carbono do bloco: €\u00a082,32 por tonelada no terceiro trimestre de 2026. Na análise de Pedro Côrtes, professor titular da Universidade de São Paulo (USP), a cobrança expõe um desafio para o Brasil, que ainda regulamenta o próprio mercado de carbono, criado por lei em 2024.',
      },
      {
        p: 'O Mecanismo de Ajuste de Carbono na Fronteira (CBAM) entrou na fase definitiva em janeiro de 2026. Cada certificado, comprado das autoridades europeias, corresponde a uma tonelada de dióxido de carbono equivalente (CO₂e). Côrtes lembra que o mecanismo não é formalmente um imposto de importação e que os certificados não são créditos do mercado voluntário.',
      },
      {
        numeros: [
          { valor: '€\u00a082,32', legenda: 'Preço por tCO₂e no 3º trimestre de 2026' },
          { valor: '51,5%', legenda: 'Permissões gratuitas à indústria europeia em 2030' },
          { valor: '25\u00a0mil\u00a0t', legenda: 'Por ano; acima disso, o SBCE exigirá cotas ou certificados' },
        ],
      },
      { h2: 'Por que a conta sobe' },
      {
        p: 'Segundo o analista, a cobrança vai crescer aos poucos porque a União Europeia está reduzindo as permissões gratuitas de emissão dadas às suas próprias indústrias. Em 2029, os setores cobertos pelo CBAM ainda receberão de graça 77,5% das permissões calculadas pelos critérios do bloco. Em 2030, a fatia cai para 51,5%. O corte no benefício passa de 22,5% para 48,5% de um ano para o outro.',
      },
      {
        p: 'O mesmo corte entra no cálculo sobre os importados, para que fabricantes europeus e estrangeiros paguem pelo carbono em condições equivalentes. Côrtes ressalva que isso não quer dizer que o importador pagará sobre 48,5% das emissões de cada produto: o desconto é calculado sobre parâmetros de referência europeus, e não sobre as emissões reais. Quanto mais o produto emitir acima desses parâmetros, maior será a cobrança.',
      },
      { h2: 'O descompasso brasileiro' },
      {
        p: 'O artigo 9º do CBAM permite reduzir a cobrança quando o importador comprova que já houve pagamento pelas emissões no país de origem. Na leitura de Côrtes, esse caminho não se abre de imediato para o Brasil. A Lei nº 15.042/2024 determina que, no primeiro ciclo do Sistema Brasileiro de Comércio de Emissões (SBCE), as empresas recebam de graça as cotas que autorizam suas emissões. Sem pagamento, não há o que descontar da obrigação europeia.',
      },
      {
        p: 'O artigo 11 da mesma lei vincula o início da cobrança pelas cotas às fases de implementação do sistema, depois do primeiro ciclo de alocação gratuita. Por isso, avalia o professor, mesmo que o mercado brasileiro comece a operar por volta de 2030, o reconhecimento de pagamentos brasileiros no CBAM não virá automaticamente.',
      },
      {
        p: 'O SBCE ainda está em regulamentação. Pela lei, empresas dos setores abrangidos que emitam mais de 10\u00a0mil\u00a0toneladas de CO₂e por ano terão de informar suas emissões ao governo. Acima de 25\u00a0mil\u00a0toneladas, precisarão também comprovar que têm cotas ou certificados reconhecidos em quantidade suficiente. Essa obrigação ainda não vigora. Em julho, consulta pública do Ministério da Fazenda propôs iniciar o monitoramento gradual das emissões em 2027, ainda sem exigir compra de cotas.',
      },
      {
        p: 'A Secretaria Extraordinária do Mercado de Carbono previa para junho a definição dos setores regulados e a criação da Câmara de Assuntos Regulatórios (CAREG), onde as atividades reguladas discutirão as regras do mercado. Segundo a ata da reunião do comitê consultivo de 30 de junho, a câmara só será constituída depois da definição dos setores. O governo anunciou a intenção de concluir a regulamentação até dezembro de 2026.',
      },
      {
        p: 'Para Côrtes, as prioridades são definir os setores, constituir a CAREG, divulgar um calendário consistente para o primeiro Plano Nacional de Alocação e explicar como as cotas gratuitas darão lugar, aos poucos, a uma precificação efetiva. A indústria, argumenta, precisa conhecer essa trajetória antes de investir em instalações e tecnologias que seguirão em operação muito além de 2030.',
      },
    ],
  },

  'cop31-antalya': {
    dek: 'A presidência turca chama o encontro de “COP da implementação”. O Brasil leva a Antalya um roteiro de transição para longe dos combustíveis fósseis e 114 eventos.',
    minutos: 3,
    corpo: [
      {
        p: 'A COP31, conferência do clima das Nações Unidas, será realizada de 9 a 20 de novembro em Antalya, destino turístico do Mediterrâneo, no sul da Turquia. A organização é incomum: a Turquia ocupa a presidência da conferência, e a Austrália conduz as negociações entre os países. A Cúpula de Líderes Mundiais, com chefes de Estado e de governo, está prevista para 11 e 12 de novembro.',
      },
      { h2: 'Duas presidências' },
      {
        p: 'A divisão surgiu de uma disputa entre os dois países para sediar o encontro, resolvida com um acordo fechado durante a COP30, em Belém. A presidência formal fica com o ministro turco do Meio Ambiente, Urbanização e Mudança Climática, Murat Kurum, responsável pela organização e pela agenda de ação. O ministro australiano de Mudança Climática e Energia, Chris Bowen, presidirá as negociações. Segundo o governo australiano, o arranjo também pretende dar mais participação aos países do Pacífico, vulneráveis à elevação do nível do mar e a eventos extremos.',
      },
      { h2: 'A pauta em Antalya' },
      {
        p: 'Entre 5 e 8 de outubro, representantes de mais de 50 países participaram de reuniões preparatórias em Fiji e Tuvalu. Ao fim dos encontros, a Climate Action Network (CAN), rede internacional de organizações da sociedade civil, avaliou que o reconhecimento da vulnerabilidade da região não veio acompanhado de compromissos ambiciosos o bastante.',
      },
      {
        p: 'Os temas centrais serão financiamento climático, adaptação, redução das emissões e transição energética. A presidência turca propôs ampliar a participação da eletricidade no consumo mundial de energia, com fontes de baixa emissão. A inteligência artificial também entra na pauta, com uma proposta de compromisso internacional sobre o consumo de energia dos data centers. A CAN defende três prioridades: mais financiamento para adaptação, avanço no mecanismo de transição justa discutido em Belém e um programa confiável de financiamento climático.',
      },
      {
        numeros: [
          { valor: '9 a 20 nov', legenda: 'Período da COP31 em Antalya, na Turquia' },
          { valor: '114', legenda: 'Eventos selecionados para o Pavilhão do Brasil' },
          { valor: '780', legenda: 'Propostas inscritas na seleção do pavilhão' },
        ],
      },
      { h2: 'O papel do Brasil' },
      {
        p: 'O Brasil, que presidiu a COP30, segue nas articulações. Segundo a ONU, as presidências brasileira e turca vêm preparando as negociações em conjunto. Uma das principais contribuições brasileiras será um roteiro para a transição para longe dos combustíveis fósseis. Em Belém, a proposta teve apoio de vários governos, mas enfrentou resistência e ficou fora do acordo final. O documento não terá caráter obrigatório nem fixará metas iguais para todos os países.',
      },
      {
        p: 'Um segundo roteiro deve orientar os esforços internacionais para deter e reverter o desmatamento e a degradação florestal até 2030. Segundo a presidência brasileira da COP30, os dois documentos estão entre as prioridades de 2026, ao lado do financiamento climático, da adaptação e da aceleração das ações para cumprir o Acordo de Paris.',
      },
      {
        p: 'O país terá também um pavilhão na Zona Azul da conferência. Segundo o Ministério do Meio Ambiente e Mudança do Clima, o edital para a programação recebeu 780 propostas, das quais 114 foram selecionadas para os auditórios Belém e Mutirão Global. O resultado saiu em 5 de outubro. A escolha coube a um comitê formado pelo ministério, pela Presidência da COP30 e pela Agência Brasileira de Promoção de Exportações e Investimentos (ApexBrasil).',
      },
      {
        p: 'O Auditório Belém receberá atividades sobre experiências nacionais na agenda climática. O Mutirão Global reunirá eventos ligados à Agenda Global de Ação Climática. As sessões ocorrem das 9h às 18h45, no horário local, e duram no máximo uma hora. Entre os selecionados estão um evento do Ibama e do ministério sobre o caminho para o desmatamento zero em 2030 e outro sobre mercados de carbono, o Artigo 6 e o CORSIA.',
      },
    ],
  },
};
