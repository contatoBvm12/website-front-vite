/*
 * Séries e filmes sobre clima, floresta e o que fazemos com eles. Títulos conferidos em 17/10/2026 nas páginas oficiais
 * brasileiras (Disney+, Apple TV, Netflix, Prime Video); imagens de divulgação das plataformas, com crédito. Os nomes
 * são os da arte oficial no Brasil.
 *
 * Na fileira da home, todo título cabe numa linha e toda descrição ocupa três: mantenha `description` com 121–128
 * caracteres. O resto alimenta a página de cada título (/series-e-filmes/:id).
 */

export interface Titulo {
  id: string;
  platform: string;
  type: 'Filme' | 'Série';
  title: string;
  /** O texto do cartão (121–128 caracteres). */
  description: string;
  image: string;
  originalTitle: string;
  year: string;
  /** Linha fina da página. */
  dek: string;
  sinopse: string[];
  /** O que a obra diz sobre floresta, clima ou economia verde. */
  porQueVer: string;
  /** Ficha técnica: só o que está confirmado. */
  ficha: Array<{ rotulo: string; valor: string }>;
}

type Cartao = Pick<Titulo, 'id' | 'platform' | 'type' | 'title' | 'description' | 'image'>;

const cartoes: Cartao[] = [
  { id: 'territorio', platform: 'Disney+', type: 'Filme', title: 'O Território', description: 'O povo Uru-eu-wau-wau enfrenta invasores e desmatamento na Amazônia; boa parte das imagens foi filmada pelos próprios indígenas.', image: '/fotos/assistir-territorio.jpg' },
  { id: 'extrapolations', platform: 'Apple TV+', type: 'Série', title: 'Extrapolations: Um Futuro Inquietante', description: 'Oito histórias interligadas, ao longo de 33 anos, mostram como a mudança do clima vai mexer com a família, o trabalho e a fé.', image: '/fotos/assistir-extrapolations.jpg' },
  { id: 'attenborough', platform: 'Netflix', type: 'Filme', title: 'David Attenborough e Nosso Planeta', description: 'O naturalista revê a própria carreira, o que viu a natureza perder ao longo de uma vida e como ela ainda pode se recuperar.', image: '/fotos/assistir-attenborough.jpg' },
  { id: 'seremos-historia', platform: 'Disney+', type: 'Filme', title: 'Seremos História?', description: 'Leonardo DiCaprio percorre o mundo na linha de frente da crise do clima e conversa com cientistas e líderes no centro da causa.', image: '/fotos/assistir-before-the-flood.jpg' },
  { id: 'ano-terra', platform: 'Apple TV+', type: 'Filme', title: 'O Ano em que a Terra Mudou', description: 'Com narração de David Attenborough, o filme mostra como a natureza reagiu quando o mundo parou durante a pandemia de 2020.', image: '/fotos/assistir-ano-terra.jpg' },
  { id: 'solo-fertil', platform: 'Prime Video', type: 'Filme', title: 'Solo Fértil', description: 'Cientistas, agricultores e ativistas defendem a recuperação do solo como uma ferramenta poderosa contra a mudança do clima.', image: '/fotos/assistir-solo-fertil.jpg' },
  { id: 'artico', platform: 'Disney+', type: 'Filme', title: 'Ártico Ameaçado', description: 'Com o gelo do Ártico derretendo, os povos indígenas da região lutam pela terra e pelo mar de que sempre dependeram para viver.', image: '/fotos/assistir-last-ice.jpg' },
  { id: 'curta-essa', platform: 'Netflix', type: 'Série', title: 'Curta Essa com Zac Efron', description: 'Zac Efron e o especialista em bem-estar Darin Olien rodam o mundo atrás de jeitos mais saudáveis e sustentáveis de viver.', image: '/fotos/assistir-zac-efron.jpg' },
];

/*
 * O conteúdo das páginas. Fichas conferidas na Wikipédia em inglês e no TMDB em 17/10/2026; o que não se confirmou
 * ficou fora. A conferir: o ano do primeiro contato com os Uru-eu-wau-wau ("por volta de 1980"; há fontes com 1981) e
 * o subtítulo da 2ª temporada de Curta Essa na Netflix Brasil.
 */
const paginas: Array<Omit<Titulo, keyof Cartao> & { id: string }> = [
  {
    id: 'territorio',
    originalTitle: 'The Territory',
    year: '2022',
    dek: 'Em Rondônia, os Uru-eu-wau-wau vigiam a própria terra contra invasores e passam a registrar a disputa com as próprias câmeras.',
    sinopse: [
      'A Terra Indígena Uru-eu-wau-wau fica em Rondônia, num dos trechos da Amazônia mais pressionados pelo desmatamento. O povo que lhe dá nome teve o primeiro contato com o governo brasileiro por volta de 1980 e hoje soma poucas centenas de pessoas. O filme acompanha Bitaté, escolhido líder aos 18 anos para coordenar a defesa do território, e a ativista Neidinha Bandeira, que trabalha há décadas ao lado do povo e vive sob ameaça de morte.',
      'Do outro lado estão os colonos. O diretor Alex Pritz passa tempo com agricultores que se organizam para ocupar partes da floresta e que acreditam, com sinceridade, ter direito a ela. O filme os ouve sem lhes dar razão, e quanto mais tempo passa com eles, mais clara fica a distância entre as duas visões de terra. As filmagens vão de 2018 a 2020, período em que as invasões de terras indígenas ganham fôlego depois da eleição de Jair Bolsonaro.',
      'A ameaça de violência ronda cada cena. Na metade do filme, Ari Uru-eu-wau-wau, um dos responsáveis pelas patrulhas no território, é encontrado morto à beira de uma estrada. Pouco depois, a covid-19 chega às aldeias e a equipe não consegue mais viajar. Os próprios indígenas assumem então as câmeras e os drones: aprendem a registrar as invasões e a vigiar os limites da terra, e Tangãi Uru-eu-wau-wau divide com Pritz a direção de fotografia.',
      'O resultado é um filme de denúncia que não esconde o lado que escolheu, mas deixa o espectador ver com os próprios olhos como uma clareira se abre na mata: a derrubada, o fogo, a demarcação improvisada do lote.',
    ],
    porQueVer:
      'Mostra de perto o mecanismo que move boa parte do desmatamento na Amazônia: a ocupação ilegal que se apresenta como fato consumado e espera ser regularizada. Mostra também quem mantém a floresta em pé, com patrulhas, drones e câmeras, numa terra que caberia ao Estado proteger.',
    ficha: [
      { rotulo: 'Ano', valor: '2022' },
      { rotulo: 'Duração', valor: '1\u00a0h 25\u00a0min' },
      { rotulo: 'Direção', valor: 'Alex Pritz' },
      { rotulo: 'Com', valor: 'Bitaté Uru-eu-wau-wau, Neidinha Bandeira' },
      { rotulo: 'Onde ver', valor: 'Disney+' },
    ],
  },
  {
    id: 'extrapolations',
    originalTitle: 'Extrapolations',
    year: '2023',
    dek: 'Série de ficção em oito episódios acompanha a mudança do clima de 2037 a 2070, na vida de gente comum e de quem decide por ela.',
    sinopse: [
      'Extrapolations é uma minissérie de ficção em oito episódios, cada um ambientado num ano entre 2037 e 2070. As histórias se cruzam: personagens de um capítulo reaparecem, mais velhos, em outro, e o pano de fundo piora a cada salto no tempo. O criador, Scott Z. Burns, roteirista de Contágio, trata a mudança do clima menos como espetáculo de catástrofe e mais como uma pressão contínua sobre a vida comum.',
      'O primeiro episódio, em 2037, gira em torno de uma decisão: conter ou não o aquecimento global abaixo de 2\u00a0°C, com protestos, governos e empresas puxando para lados diferentes. Ali aparece Nick Bilton, um bilionário da tecnologia vivido por Kit Harington, que volta ao longo da série. Em 2046, uma cientista interpretada por Sienna Miller usa uma tecnologia nova para se comunicar com uma baleia-jubarte. Em 2047, um rabino de Miami, papel de Daveed Diggs, tenta manter a sinagoga, prepara uma menina para o bat mitzvah e espera a chegada de uma tempestade.',
      'Os capítulos seguintes passam por Mumbai, por uma crise de geoengenharia em que aviões ameaçam espalhar carbonato de cálcio na atmosfera, por uma festa de ano-novo em que a pegada de carbono entra na conversa e, por fim, por um julgamento por ecocídio no Tribunal Penal Internacional, em Haia.',
      'Meryl Streep, Edward Norton, Marion Cotillard, Forest Whitaker e Tobey Maguire também estão no elenco, que reúne nomes conhecidos em papéis às vezes breves. O formato de antologia permite que cada episódio seja visto quase por conta própria, mas a série ganha peso quando vista em ordem.',
    ],
    porQueVer:
      'A série leva para o cotidiano o que os relatórios do clima descrevem em gráficos: calor, água, migração, trabalho. E faz uma pergunta que interessa a quem acompanha a economia verde: quem responde, e diante de que tribunal, pelos danos de décadas de emissões.',
    ficha: [
      { rotulo: 'Ano', valor: '2023' },
      { rotulo: 'Temporadas', valor: '1 (minissérie de 8 episódios)' },
      { rotulo: 'Criação', valor: 'Scott Z. Burns' },
      { rotulo: 'Com', valor: 'Meryl Streep, Sienna Miller, Kit Harington' },
      { rotulo: 'Onde ver', valor: 'Apple TV+' },
    ],
  },
  {
    id: 'attenborough',
    originalTitle: 'David Attenborough: A Life on Our Planet',
    year: '2020',
    dek: 'Aos 93 anos, o naturalista britânico apresenta o que chama de seu depoimento de testemunha: o que a natureza perdeu em uma vida e como recuperá-la.',
    sinopse: [
      'O filme começa em Pripyat, a cidade ucraniana abandonada depois do acidente nuclear de Chernobyl, em 1986. Diante dos prédios vazios, David Attenborough propõe a comparação que organiza tudo o que vem depois: a perda de natureza que ele testemunhou ao longo da vida é um desastre tão grave quanto aquele, só que mais lento e quase invisível no dia a dia.',
      'Dali, ele refaz a própria carreira, iniciada na BBC nos anos 1950. As imagens de arquivo mostram expedições a florestas, savanas e recifes, e a cada marco a tela registra três números: a população mundial, o carbono na atmosfera e a parcela do planeta que ainda era natureza intacta. Os dois primeiros sobem década após década; o terceiro cai.',
      'Na segunda parte, ele projeta o que pode acontecer ao longo de mais uma vida humana se nada mudar: a Amazônia degradada a ponto de virar savana, um Ártico sem gelo no verão, recifes de coral mortos, solos esgotados a ponto de provocar crises de alimentos.',
      'Em seguida, apresenta o que considera a saída, resumida numa frase: para devolver estabilidade ao planeta, é preciso devolver a ele a biodiversidade que foi retirada. Isso passa por deixar a natureza retomar espaço em terra e no mar, com áreas protegidas e zonas sem pesca, por energia renovável, por menos carne no prato e por uma população que cresça menos graças à redução da pobreza, à saúde pública e à educação das meninas.',
    ],
    porQueVer:
      'Para quem vive na Amazônia, a passagem mais direta é a que trata da floresta virando savana, um risco que cientistas brasileiros estudam há décadas. O filme tem a autoridade de quem viu a mudança acontecer e trata a recuperação como possível, mas condicionada a escolhas que ainda não foram feitas.',
    ficha: [
      { rotulo: 'Ano', valor: '2020' },
      { rotulo: 'Duração', valor: '1\u00a0h 23\u00a0min' },
      { rotulo: 'Direção', valor: 'Alastair Fothergill, Jonnie Hughes e Keith Scholey' },
      { rotulo: 'Com', valor: 'David Attenborough' },
      { rotulo: 'Onde ver', valor: 'Netflix' },
    ],
  },
  {
    id: 'seremos-historia',
    originalTitle: 'Before the Flood',
    year: '2016',
    dek: 'Leonardo DiCaprio passa três anos em lugares onde a mudança do clima já é visível e pergunta a cientistas e governantes o que ainda pode ser feito.',
    sinopse: [
      'Em 2014, Leonardo DiCaprio foi nomeado mensageiro da paz da ONU para o clima. O documentário parte daí. Ao longo de três anos, com o diretor Fisher Stevens, o ator percorre o mundo para ver o problema de perto, e a narração em primeira pessoa costura os encontros.',
      'O roteiro passa pelas areias betuminosas do Canadá, de onde se extrai petróleo pesado; pelo gelo da Groenlândia, que derrete; por Miami, que já convive com ruas alagadas na maré alta; e pela Indonésia, onde florestas de Sumatra queimam para abrir plantações de dendê. Na Índia, a ambientalista Sunita Narain lembra quanto um americano médio consome de energia em comparação com um indiano e cobra dos países ricos a conta das emissões históricas.',
      'DiCaprio conversa com Barack Obama, com o papa Francisco, com o então secretário-geral da ONU, Ban Ki-moon, e com Elon Musk, que mostra uma fábrica de baterias. Ouve também Piers Sellers, astronauta e cientista da NASA, que falava sobre o clima sabendo que tinha pouco tempo de vida. Entre uma viagem e outra, o filme discute a negação da ciência do clima por políticos e lobistas nos Estados Unidos.',
      'O fio que amarra o percurso é um quadro que ficava pendurado sobre o berço do ator, O Jardim das Delícias, de Hieronymus Bosch. DiCaprio volta a ele várias vezes: o painel da esquerda mostra o paraíso; o da direita, um mundo em ruínas. A pergunta do filme é em que ponto desse caminho estamos.',
    ],
    porQueVer:
      'É um documentário de grande público que defende com clareza um imposto sobre o carbono e ouve sobre o tema o economista Greg Mankiw, que presidiu o conselho econômico de um governo republicano. A própria produção compensou suas emissões com uma taxa voluntária. Para quem acompanha mercados de carbono, é um bom ponto de partida sobre como pôr preço na poluição.',
    ficha: [
      { rotulo: 'Ano', valor: '2016' },
      { rotulo: 'Duração', valor: '1\u00a0h 36\u00a0min' },
      { rotulo: 'Direção', valor: 'Fisher Stevens' },
      { rotulo: 'Com', valor: 'Leonardo DiCaprio, Barack Obama, papa Francisco' },
      { rotulo: 'Onde ver', valor: 'Disney+' },
    ],
  },
  {
    id: 'ano-terra',
    originalTitle: 'The Year Earth Changed',
    year: '2021',
    dek: 'Com o mundo em confinamento, cientistas registraram como baleias, aves e grandes felinos reagiram a menos gente, menos barulho e menos poluição.',
    sinopse: [
      'Nos primeiros meses de 2020, boa parte da humanidade ficou em casa. O filme, produzido pela unidade de história natural da BBC e narrado por David Attenborough, reúne imagens e pesquisas feitas nesse intervalo raro, em que o ruído, o tráfego e o turismo caíram quase ao mesmo tempo em todo o planeta.',
      'A primeira parte trata do ar e do som. Em Jalandhar, no norte da Índia, moradores veem o Himalaia no horizonte pela primeira vez em décadas. Em São Francisco, à sombra da ponte Golden Gate, pássaros mudam o canto quando o barulho da cidade diminui. No Alasca, sem navios de cruzeiro, baleias-jubarte passam a se ouvir com mais facilidade, e as mães deixam os filhotes sozinhos por mais tempo para caçar.',
      'Depois vêm os animais que ocupam espaços deixados pelas pessoas: chacais em Tel Aviv, um puma em Santiago, capivaras em Buenos Aires, cervos que voltam a pastar nos antigos campos de Nara, no Japão. Tartarugas-cabeçudas desovam em praias vazias da Flórida, e pinguins voltam à areia em plena luz do dia na Cidade do Cabo. No Quênia, mães guepardo conseguem se comunicar melhor com os filhotes sem os veículos de safári por perto.',
      'O filme termina com um exemplo do que pode ficar dessa pausa. No estado indiano de Assam, moradores que estavam em casa por causa do confinamento plantam arroz para os elefantes selvagens, para reduzir as incursões dos animais nas lavouras e nas aldeias. A pergunta final é se é possível manter parte desses ganhos sem que o mundo precise parar.',
    ],
    porQueVer:
      'É um experimento involuntário filmado em tempo real: retira-se parte da pressão humana e a resposta da natureza aparece em semanas. O filme não promete que o efeito dure, e por isso funciona como argumento a favor de mudanças permanentes no turismo, na navegação e no barulho das cidades.',
    ficha: [
      { rotulo: 'Ano', valor: '2021' },
      { rotulo: 'Duração', valor: '48\u00a0min' },
      { rotulo: 'Direção', valor: 'Tom Beard' },
      { rotulo: 'Narração', valor: 'David Attenborough' },
      { rotulo: 'Onde ver', valor: 'Apple TV+' },
    ],
  },
  {
    id: 'solo-fertil',
    originalTitle: 'Kiss the Ground',
    year: '2020',
    dek: 'O documentário defende a agricultura regenerativa e o solo vivo como forma de produzir alimento e, ao mesmo tempo, tirar carbono da atmosfera.',
    sinopse: [
      'Solo Fértil parte de uma ideia simples: o solo é um grande depósito de carbono, e o modo de plantar pode enchê-lo ou esvaziá-lo. Narrado por Woody Harrelson, o filme culpa a agricultura convencional, com aração intensiva e uso pesado de agrotóxicos, pela erosão e pela perda de matéria orgânica, e apresenta a agricultura regenerativa como alternativa.',
      'O argumento é conduzido por agricultores e cientistas. Produtores dos Estados Unidos contam como deixaram de revolver a terra, passaram a mantê-la sempre coberta por plantas e voltaram a integrar o gado à lavoura. Pesquisadores explicam como raízes, fungos e microrganismos guardam no solo o carbono que as plantas tiram do ar, e como esse solo passa a reter mais água.',
      'A história recua até o Dust Bowl, as tempestades de poeira que devastaram as planícies americanas nos anos 1930, depois de décadas de solo arado e exposto. E avança até iniciativas recentes, como a compostagem de restos de comida e a proposta francesa, levada à conferência do clima de Paris em 2015 pelo então ministro da Agricultura, Stéphane Le Foll, de aumentar a cada ano o carbono armazenado nos solos agrícolas.',
      'Gisele Bündchen, Tom Brady, Jason Mraz e Patricia Arquette aparecem em depoimentos. O tom é de campanha, otimista e às vezes simplificador. Cientistas de solo e organizações agrícolas criticaram o filme por prometer demais e por dividir os agricultores entre bons e maus, sem discutir as políticas públicas que poderiam ajudar na transição.',
    ],
    porQueVer:
      'O solo é o ativo menos visível da economia verde, e o filme ajuda a entender por que créditos de carbono ligados à agricultura regenerativa atraem tanto interesse. Convém assistir com senso crítico: medir quanto carbono o solo guarda, e por quanto tempo, ainda é uma questão em aberto.',
    ficha: [
      { rotulo: 'Ano', valor: '2020' },
      { rotulo: 'Duração', valor: '1\u00a0h 24\u00a0min' },
      { rotulo: 'Direção', valor: 'Josh Tickell e Rebecca Harrell Tickell' },
      { rotulo: 'Narração', valor: 'Woody Harrelson' },
      { rotulo: 'Onde ver', valor: 'Prime Video' },
    ],
  },
  {
    id: 'artico',
    originalTitle: 'The Last Ice',
    year: '2020',
    dek: 'Com o gelo marinho entre o Canadá e a Groenlândia derretendo, os inuítes dos dois lados da fronteira se unem para decidir o futuro do mar de que vivem.',
    sinopse: [
      'Há séculos os inuítes vivem sobre o oceano congelado e em torno dele. O gelo é caminho, território de caça e parte da cultura. O Ártico esquenta mais depressa que a média do planeta, e o gelo marinho recua rápido no mar entre o Canadá e a Groenlândia. O documentário da National Geographic, dirigido por Scott Ressler, acompanha o que isso significa para as comunidades da região.',
      'Para o resto do mundo, o degelo abre oportunidades: petróleo e gás no fundo do mar, rotas de navegação mais curtas, turismo e pesca comercial em águas que antes ficavam fechadas pelo gelo durante a maior parte do ano. Cada uma dessas frentes traz dinheiro e promessa de emprego. Para os inuítes, o que está em jogo é um modo de vida inteiro, que depende do equilíbrio entre as comunidades, a terra e os animais.',
      'O filme dá a palavra a líderes inuítes, caçadores e ativistas, e não trata a crise do clima como assunto apenas científico. Recupera a história da colonização, que separou famílias e comunidades dos dois lados da fronteira e impôs décadas de dificuldades, e mostra como os inuítes do Canadá e da Groenlândia voltam a se organizar juntos para proteger o que resta do seu mundo.',
      'A pergunta que atravessa o documentário é se os governos, as empresas e o público vão ouvir quem vive no Ártico antes de decidir o que fazer com ele.',
    ],
    porQueVer:
      'O Ártico costuma aparecer no noticiário como paisagem ou como rota comercial. Aqui ele aparece como a casa de alguém, e a disputa sobre quem decide o uso de um mar que se abre lembra, em outra latitude, as discussões sobre a Amazônia e os povos que vivem nela.',
    ficha: [
      { rotulo: 'Ano', valor: '2020' },
      { rotulo: 'Direção', valor: 'Scott Ressler' },
      { rotulo: 'Onde ver', valor: 'Disney+' },
    ],
  },
  {
    id: 'curta-essa',
    originalTitle: 'Down to Earth with Zac Efron',
    year: '2020',
    dek: 'Zac Efron e Darin Olien viajam atrás de energia limpa, água, comida e longevidade; a segunda temporada se passa inteira na Austrália.',
    sinopse: [
      'Em 2020, o ator Zac Efron e o especialista em bem-estar Darin Olien estrearam na Netflix uma série de viagens com um propósito declarado: descobrir como se vive de forma mais saudável e sustentável em diferentes partes do mundo. Cada episódio é um destino, e o tom é de conversa entre amigos, leve e bem-humorado.',
      'A primeira temporada começa na Islândia, onde a dupla conhece de perto o uso de energia renovável, e segue por Paris, para entender o sistema de água da cidade; pela Costa Rica, numa ecovila; pela Sardenha, ilha conhecida pelo número de centenários; por Porto Rico, ainda se reconstruindo depois do furacão Maria; e por Londres, com suas iniciativas contra a poluição. No Peru, os dois visitam um centro que conserva variedades de batata congeladas e discutem biopirataria. A temporada termina em Iquitos, na Amazônia peruana, onde sobem numa árvore da floresta e conhecem o turismo da ayahuasca.',
      'A segunda temporada, de 2022, se passa inteira na Austrália. Os episódios tratam de conservação de habitats, agricultura regenerativa, restauração de corais na Grande Barreira, subida do mar nas ilhas do Estreito de Torres, lixo, recuperação depois dos incêndios florestais e do conhecimento dos povos aborígenes sobre o cuidado com a terra.',
      'A série é mais vitrine de ideias que investigação. Críticos apontaram conselhos de saúde sem base científica sólida, mas os episódios sobre energia, água e comida funcionam como uma introdução acessível a esses temas.',
    ],
    porQueVer:
      'Para quem nunca se interessou pelo tema, é uma porta de entrada sem jargão. O episódio na Amazônia peruana e o de agricultura regenerativa na Austrália mostram, na escala de uma visita, a floresta e o campo como parte da solução.',
    ficha: [
      { rotulo: 'Ano', valor: '2020' },
      { rotulo: 'Temporadas', valor: '2' },
      { rotulo: 'Com', valor: 'Zac Efron, Darin Olien' },
      { rotulo: 'Onde ver', valor: 'Netflix' },
    ],
  },
];

export const titulos: Titulo[] = cartoes.map((c) => {
  const pagina = paginas.find((x) => x.id === c.id);
  if (!pagina) throw new Error(`Falta a página do título ${c.id}`);
  return { ...c, ...pagina };
});

export const tituloPorId = (id?: string) => titulos.find((t) => t.id === id);
