/*
 * Notícias da home, reunidas em 17/10/2026. Os resumos são da BVM12; os fatos e números vêm das matérias citadas em
 * `sources` (link para o original). As imagens são fotoilustrações geradas para a BVM12 (deliverables/bvm12-site),
 * objetos no campo de cor — nunca a simulação de uma foto do fato. Não há CMS: para trocar, edite esta lista.
 *
 * Numa fileira da home, as manchetes ocupam o mesmo número de linhas, e os resumos também (o tamanho do texto segue
 * a largura do cartão, então as quebras valem para qualquer tela). Ao trocar um texto, mantenha o comprimento perto
 * do dos vizinhos — hoje: manchetes de 46–60 caracteres (2 linhas), resumos de 205–213 na fileira de dois (3 linhas)
 * e de 220–232 na de três (5 linhas), legendas da faixa de até 31 na fileira de três — e confira na tela.
 * `\u00a0` (espaço que não quebra) prende a moeda ao número e o número à grandeza: "€\u00a010\u00a0trilhões".
 */

export interface NewsSource {
  name: string;
  url: string;
}

import { materias, type Bloco } from './materias';

/** Um bloco do corpo da matéria: parágrafo, intertítulo, citação literal da fonte, lista ou faixa de números. */
export type { Bloco };

export interface NewsItem {
  id: string;
  section: string;
  date: string;
  dateLabel: string;
  title: string;
  summary: string;
  aside?: string;
  figure: { outline?: string; solid: string; caption: string };
  /** Fotoilustração da matéria (gerada para a BVM12, não é foto do fato) e o texto alternativo dela. */
  image: string;
  imageAlt: string;
  /** Cor da faixa do número: a oposta ao fundo da imagem. */
  field: 'marinho' | 'verde';
  sources: NewsSource[];
  /** A matéria completa (/noticias/:id): linha fina, tempo de leitura e corpo. */
  dek?: string;
  minutos?: number;
  corpo?: Bloco[];
}

/** Junta ao cartão a matéria completa (materias.ts). */
const comMateria = (n: NewsItem): NewsItem => ({ ...n, ...materias[n.id] });

export const featured: NewsItem = comMateria({
  id: 'desmatamento-inpe-2026',
  section: 'Floresta',
  date: '2026-10-16',
  dateLabel: '16 out 2026',
  title: 'Desmatamento na Amazônia cai 41,8% e chega ao menor nível desde 1988',
  summary:
    'Entre agosto de 2025 e julho de 2026, a área desmatada na Amazônia caiu de 5.731\u00a0km² para 3.335\u00a0km², segundo o monitoramento do Inpe divulgado pelo governo federal. No Cerrado, a queda foi de 23,8%, para 5.516,69\u00a0km², a menor área desde 2001.',
  aside:
    'No mesmo dia, Manaus amanheceu com o pior ar entre as capitais do país, coberta pela fumaça das queimadas no interior do Amazonas.',
  figure: { outline: '−41', solid: ',8%', caption: 'Desmatamento na Amazônia, ago/2025 a jul/2026, sobre um ano antes' },
  image: '/fotos/noticia-desmatamento.jpg',
  imageAlt: 'Fatia de tronco de árvore com uma muda brotando do centro, sobre fundo verde',
  field: 'marinho',
  sources: [
    {
      name: 'Agência Brasil',
      url: 'https://agenciabrasil.ebc.com.br/meio-ambiente/noticia/2026-10/desmatamento-caiu-418-na-amazonia-e-238-no-cerrado-em-um-ano',
    },
  ],
});

const cartoes: NewsItem[] = [
  {
    id: 'manaus-ar-queimadas',
    section: 'Manaus',
    date: '2026-10-16',
    dateLabel: '16 out 2026',
    title: 'Fumaça das queimadas dá a Manaus o pior ar entre as capitais',
    summary:
      'O índice da IQAir chegou a 167, nível insalubre, na sexta (16), e a rede municipal suspendeu as aulas presenciais. O Ibama informou ter extinguido 303\u00a0focos de incêndio no Amazonas desde o início das operações.',
    figure: { solid: '167', caption: 'Índice de qualidade do ar (IQAir) em Manaus: insalubre' },
    image: '/fotos/noticia-manaus-ar.jpg',
    imageAlt: 'Máscara respiratória branca coberta de cinza, sobre fundo marinho',
    field: 'verde',
    sources: [
      {
        name: 'Agência Brasil',
        url: 'https://agenciabrasil.ebc.com.br/meio-ambiente/noticia/2026-10/manaus-e-capital-com-maior-poluicao-atmosferica-do-pais-nesta-sexta',
      },
    ],
  },
  {
    id: 'tfff-7-3-bi',
    section: 'Finanças climáticas',
    date: '2026-10-16',
    dateLabel: '16 out 2026',
    title: 'Com US$\u00a07,3\u00a0bilhões, fundo de florestas corre contra o prazo',
    summary:
      'Com £\u00a0400\u00a0milhões britânicos, o TFFF se aproxima dos US$\u00a010\u00a0bilhões que precisa até 31 de dezembro para operar. Na quinta (15), investidores com €\u00a010\u00a0trilhões em ativos declararam apoio, sem prometer aporte.',
    figure: { outline: 'US$ ', solid: '7,3 bi', caption: 'Em compromissos; a meta é US$\u00a010\u00a0bi até 31 de dezembro' },
    image: '/fotos/noticia-tfff.jpg',
    imageAlt: 'Ouriço de castanha-do-pará aberto, com as castanhas dentro, sobre fundo verde',
    field: 'marinho',
    sources: [
      { name: 'Poder360', url: 'https://www.poder360.com.br/poder-governo/fundo-de-florestas-de-lula-bate-us-73-bi-com-aporte-britanico/' },
      { name: 'Capital Reset', url: 'https://capitalreset.uol.com.br/financas/investidores-com-e-10-trilhoes-em-ativos-declaram-apoio-ao-tfff/' },
    ],
  },
  {
    id: 'eco-invest-5-leilao',
    section: 'Mercado',
    date: '2026-10-07',
    dateLabel: '7 out 2026',
    title: 'Leilão do Eco Invest atrai quase R$\u00a050\u00a0bilhões',
    summary:
      'Bradesco, Itaú, Santander e HSBC vão estruturar fundos e operações em seis cadeias, de fertilizantes verdes a biometano. A demanda dos bancos somou R$\u00a0181,3\u00a0bilhões, e cada R$\u00a01 do Tesouro deve mobilizar R$\u00a03,8 em recursos privados.',
    figure: { outline: 'R$ ', solid: '49,95 bi', caption: 'Em propostas no 5º leilão' },
    image: '/fotos/noticia-eco-invest.jpg',
    imageAlt: 'Frasco de laboratório com líquido verde e uma muda saindo do gargalo, sobre fundo marinho',
    field: 'verde',
    sources: [
      {
        name: 'Agência Brasil',
        url: 'https://agenciabrasil.ebc.com.br/meio-ambiente/noticia/2026-10/5o-leilao-do-eco-invest-atrai-quase-r-50-bi-para-investimentos-verdes',
      },
    ],
  },
  {
    id: 'cbam-preco-carbono',
    section: 'Análise',
    date: '2026-10-15',
    dateLabel: '15 out 2026',
    title: 'Na fronteira europeia, a tonelada de carbono já tem preço',
    summary:
      'O CBAM, em fase definitiva desde janeiro, cobra pelas emissões embutidas no aço e no alumínio que entram na União Europeia; os certificados são comprados a partir de fevereiro de 2027. O Brasil ainda regulamenta o próprio mercado.',
    figure: { outline: '€ ', solid: '82,32', caption: 'Por tCO₂e, 3º trimestre de 2026' },
    image: '/fotos/noticia-cbam.jpg',
    imageAlt: 'Balança antiga com um lingote de aço de um lado e carvão do outro, sobre fundo verde',
    field: 'marinho',
    sources: [
      {
        name: 'CNN Brasil',
        url: 'https://www.cnnbrasil.com.br/blogs/pedro-cortes/economia/money/macroeconomia/analise-mercado-de-carbono-expoe-desafio-brasileiro/',
      },
    ],
  },
  {
    id: 'cop31-antalya',
    section: 'Clima',
    date: '2026-10-15',
    dateLabel: '15 out 2026',
    title: 'COP31 abre em 9 de novembro com a liderança dividida',
    summary:
      'Em Antalya, a Turquia preside a conferência e a Austrália conduz as negociações; a cúpula de líderes está marcada para 11 e 12 de novembro. O Pavilhão do Brasil terá 114\u00a0eventos, escolhidos entre as 780 propostas inscritas.',
    figure: { solid: '114', caption: 'Eventos no Pavilhão do Brasil' },
    image: '/fotos/noticia-cop31.jpg',
    imageAlt: 'Crachá em branco, fones de tradução simultânea e um ramo de oliveira, sobre fundo marinho',
    field: 'verde',
    sources: [
      { name: 'MediaTalks/UOL', url: 'https://mediatalks.uol.com.br/2026/10/15/cop31-turquia-quando-sera-o-que-esperar/' },
      {
        name: 'MMA',
        url: 'https://www.gov.br/mma/pt-br/noticias-defeso-eleitoral/resultado-da-selecao-para-eventos-no-pavilhao-brasil-na-cop31-e-divulgado',
      },
    ],
  },
];

export const news: NewsItem[] = cartoes.map(comMateria);

/** Matérias da redação que continuam no ar (os links já circularam). */
export const archive = [
  { to: '/noticias/cop30', dateLabel: 'Nov 2025', title: 'COP30 transforma Belém em vitrine da Amazônia' },
  { to: '/noticias/gomoov-99food', dateLabel: 'Out 2025', title: 'GoMoov e 99Food levam bicicletas elétricas para entregadores em Goiânia' },
];

/** Todas as matérias da redação, a de destaque primeiro. */
export const todas: NewsItem[] = [featured, ...news];
export const noticiaPorId = (id?: string) => todas.find((n) => n.id === id);
