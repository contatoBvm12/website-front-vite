/*
 * Receitas sustentáveis: cozinhas que vivem da floresta em pé (Amazônia, Bacia do Congo) e da milpa mexicana. Fotos
 * geradas para a BVM12 no campo de cor da marca.
 *
 * Na fileira da home, `description` tem 86–93 caracteres: três linhas no desktop (quatro lado a lado) e duas no tablet
 * (duas lado a lado). O resto alimenta a página de cada receita (/receitas/:id).
 */

export interface Receita {
  id: string;
  title: string;
  place: string;
  /** O texto do cartão (86–93 caracteres). */
  description: string;
  image: string;
  dek: string;
  historia: string[];
  rende: string;
  tempo: string;
  ingredientes: Array<{ grupo?: string; itens: string[] }>;
  preparo: string[];
  sustentavel: string[];
  dica?: string;
}

type Cartao = Pick<Receita, 'id' | 'title' | 'place' | 'description' | 'image'>;

const cartoes: Cartao[] = [
  { id: 'tacaca', title: 'Tacacá', place: 'Amazônia brasileira', description: 'Caldo de tucupi com goma de tapioca, jambu e camarão seco, servido bem quente na cuia.', image: '/fotos/receita-tacaca.jpg' },
  { id: 'juane', title: 'Juane', place: 'Amazônia peruana', description: 'Arroz com cúrcuma, frango, ovo e azeitona, em folha de bijao; o prato da festa de San Juan.', image: '/fotos/receita-juane.jpg' },
  { id: 'liboke-de-peixe', title: 'Liboké de peixe', place: 'Bacia do Congo', description: 'Peixe de rio com tomate e pimenta, cozido em folhas, com chikwangue, o pão de mandioca.', image: '/fotos/receita-liboke.jpg' },
  { id: 'sopa-de-milpa', title: 'Sopa de milpa', place: 'México', description: 'Milho, abóbora e feijão, os frutos da milpa, o roçado que alimenta a Mesoamérica há milênios.', image: '/fotos/receita-milpa.jpg' },
];

/*
 * O conteúdo das páginas: receitas tradicionais, com quantidades para cozinhar de verdade. No tacacá, o tucupi é sempre
 * pronto, de procedência, e bem fervido (a manipueira é tóxica crua). A conferir: a proporção da goma do tacacá varia
 * com a marca (vale testar uma vez) e o sentido de "liboké" em lingala ("pacote").
 */
const paginas: Array<Omit<Receita, keyof Cartao> & { id: string }> = [
  {
    id: 'tacaca',
    dek: 'O caldo de fim de tarde de Belém e Manaus leva tucupi, goma de mandioca, jambu e camarão seco e é servido fervendo, numa cuia.',
    historia: [
      'O tacacá é comida de rua da Amazônia brasileira, sobretudo de Belém e de Manaus. As barracas abrem no fim da tarde, e as tacacazeiras servem o caldo fervendo numa cuia, mesmo nos dias mais quentes. Toma-se direto da cuia, e o jambu deixa a boca levemente dormente.',
      'Quase tudo vem da mandioca brava, base da roça indígena da região. A raiz é ralada e espremida no tipiti. O líquido que escorre, a manipueira, descansa até o amido assentar no fundo: esse amido vira a goma. O líquido, fermentado e cozido por horas para eliminar o ácido cianídrico natural da raiz, vira o tucupi. A massa que sobra no tipiti vira farinha.',
      'É uma herança indígena incorporada à vida da cidade. O mesmo tucupi tempera o pato no tucupi, prato do almoço do Círio de Nazaré, em outubro, em Belém. O tacacá, ao contrário, é coisa de todo dia, comido em pé na calçada ou num banquinho ao lado da barraca, a caminho de casa.',
    ],
    rende: '4 cuias',
    tempo: '1\u00a0h',
    ingredientes: [
      {
        grupo: 'Tucupi',
        itens: [
          '2\u00a0litros de tucupi pronto, de procedência (de produtor registrado, já fermentado e cozido)',
          '4 dentes de alho amassados',
          '1 maço pequeno de chicória-do-pará (coentro-de-caboclo)',
          '1 ramo de alfavaca',
          '2 pimentas-de-cheiro inteiras',
          'sal a gosto',
        ],
      },
      {
        grupo: 'Goma',
        itens: [
          '1 xícara (chá) de goma de tapioca hidratada (cerca de 150\u00a0g)',
          '3 xícaras (chá) de água fria (720\u00a0ml)',
          '1 pitada de sal',
        ],
      },
      {
        grupo: 'Para montar',
        itens: [
          '2 maços de jambu (cerca de 400\u00a0g)',
          '200\u00a0g de camarão seco regional, com casca',
          'pimenta-de-cheiro picada ou molho de pimenta no tucupi, a gosto',
        ],
      },
    ],
    preparo: [
      'Cubra o camarão com água fria e deixe de molho por 30 minutos para tirar o excesso de sal. Escorra e prove; se ainda estiver muito salgado, ferva por 3 minutos em água nova e escorra de novo.',
      'Ponha o tucupi numa panela grande com o alho, a chicória, a alfavaca e as pimentas-de-cheiro. Quando levantar fervura, baixe o fogo e deixe ferver sem parar por pelo menos 30 minutos, com a panela destampada. O tucupi vem da manipueira, que é tóxica crua: use só tucupi pronto de procedência e nunca pule essa fervura longa.',
      'Enquanto o tucupi ferve, lave o jambu e separe as folhas, as flores e os talos finos; descarte os talos grossos. Cozinhe em água fervente com sal por 3 a 5 minutos, até amaciar, e escorra.',
      'Dissolva a goma na água fria com o sal, sem deixar grumos. Leve ao fogo baixo, mexendo sem parar, até engrossar e ficar transparente, cerca de 10 minutos.',
      'Acerte o sal do tucupi e mantenha-o fervendo. Em cada cuia, ponha uma concha generosa de tucupi e, sobre ele, 2 ou 3 colheres (sopa) de goma.',
      'Junte um punhado de jambu e 5 ou 6 camarões por cuia. Tempere com pimenta a gosto e sirva em seguida, bem quente.',
    ],
    sustentavel: [
      'Tucupi e goma saem da mesma mandioca da roça amazônica: o líquido espremido vira tucupi, o amido que se deposita vira goma, e a massa vira farinha. Pouco se perde.',
      'O jambu é planta de quintal e de horta familiar, de ciclo curto, cultivada perto de casa.',
      'A cuia é feita do fruto da cuieira, árvore comum nos quintais da região, e dura anos.',
    ],
    dica: 'Longe do Norte, procure tucupi engarrafado de produtor registrado e jambu fresco ou congelado em lojas de produtos amazônicos. Sem jambu, o caldo ainda vale, mas perde o formigamento característico. Não tente fazer tucupi em casa a partir de mandioca brava.',
  },
  {
    id: 'juane',
    dek: 'Na selva peruana, o arroz com cúrcuma recheado de frango, ovo e azeitona vai embrulhado em folha de bijao e marca a festa de San Juan.',
    historia: [
      'O juane é o prato mais conhecido da Amazônia peruana, das regiões de Loreto, San Martín e Ucayali. É uma trouxa de arroz temperado com palillo, como os peruanos chamam a cúrcuma, recheada de frango, ovo cozido e azeitona, embrulhada em folhas de bijao e cozida em água.',
      'Está ligado à festa de San Juan, em 24 de junho, a mais importante da selva peruana. Na véspera, as famílias preparam juanes às dezenas, para comer em casa e dividir com parentes e vizinhos. Diz a tradição que o formato redondo lembra a cabeça de São João Batista e que o nome vem do santo.',
      'Fora da festa, o juane é vendido o ano inteiro em mercados e restaurantes de Iquitos, Tarapoto e Pucallpa. Bem fechado na folha, aguenta horas de viagem, e por isso acompanha quem sai de barco ou vai trabalhar na roça. Há versões feitas com mandioca no lugar do arroz e com peixe de rio no lugar do frango.',
    ],
    rende: '6 juanes',
    tempo: '2\u00a0h 15\u00a0min',
    ingredientes: [
      {
        grupo: 'Frango',
        itens: [
          '1 frango caipira de cerca de 1,5\u00a0kg, cortado em 6 pedaços (ou 6 sobrecoxas)',
          '6 dentes de alho amassados',
          '1 colher (chá) de cominho em pó',
          '1 cebola roxa picada',
          '1 colher (sopa) de cúrcuma em pó',
          '1 colher (chá) de orégano seco',
          '2 colheres (sopa) de óleo',
          'sal a gosto',
        ],
      },
      {
        grupo: 'Arroz',
        itens: [
          '3 xícaras (chá) de arroz branco (cerca de 600\u00a0g)',
          '5 xícaras (chá) do caldo do frango (1,2\u00a0litro)',
          '3 ovos crus',
          '4 folhas de sacha culantro (chicória-do-pará) picadas',
        ],
      },
      {
        grupo: 'Recheio e embrulho',
        itens: [
          '6 ovos cozidos e descascados',
          '12 azeitonas pretas',
          '12 a 18 folhas de bijao (2 ou 3 por juane)',
          'barbante de cozinha',
        ],
      },
      {
        grupo: 'Para servir',
        itens: ['banana-da-terra cozida', 'molho de cocona (o cubiu da Amazônia brasileira) com pimenta, a gosto'],
      },
    ],
    preparo: [
      'Tempere o frango com metade do alho, o cominho e sal e deixe descansar por 15 minutos.',
      'Aqueça o óleo numa panela larga e doure o frango. Junte a cebola e o restante do alho, refogue até murchar e acrescente a cúrcuma e o orégano. Cubra com 6 xícaras (1,4\u00a0litro) de água quente e cozinhe em fogo médio por 30 minutos, até o frango ficar macio; retire os pedaços e reserve o caldo.',
      'Leve 5 xícaras do caldo à fervura, junte o arroz e acerte o sal. Cozinhe com a panela tampada, em fogo baixo, por 18 a 20 minutos, até secar, e deixe amornar.',
      'Bata os ovos crus e misture ao arroz morno com o sacha culantro. É o ovo que dá liga e mantém o bolo de arroz inteiro dentro da folha.',
      'Passe as folhas de bijao rapidamente sobre a chama do fogão, até ficarem flexíveis, e limpe-as com um pano úmido.',
      'Cruze 2 ou 3 folhas, com o lado brilhante para cima, e ponha no centro cerca de 1 xícara de arroz. Afunde nele um pedaço de frango, um ovo cozido e 2 azeitonas e cubra com mais meia xícara de arroz. Junte as pontas das folhas numa trouxa redonda e amarre bem com barbante.',
      'Cozinhe os juanes numa panela grande, cobertos de água fervente com sal, por 40 minutos. Retire e deixe escorrer por alguns minutos.',
      'Sirva quente, aberto no prato sobre a própria folha, com banana-da-terra e molho de cocona.',
    ],
    sustentavel: [
      'A folha de bijao embala e perfuma o arroz, dispensa plástico e papel-alumínio e, depois de usada, volta à terra como matéria orgânica.',
      'Cúrcuma, sacha culantro e galinha caipira saem da chacra, a roça familiar da selva peruana, que mistura vários cultivos no mesmo terreno.',
    ],
    dica: 'Sem bijao, use folha de bananeira passada no fogo, em camada dupla, que fica flexível e não racha. O sacha culantro é a mesma planta que no Norte do Brasil se chama chicória-do-pará; na falta dela, use coentro. Cúrcuma fresca ralada substitui o pó, em dobro.',
  },
  {
    id: 'liboke-de-peixe',
    dek: 'Nas duas margens do rio Congo, o peixe vai à brasa embrulhado em folhas com tomate e pimenta e chega à mesa com chikwangue, o pão de mandioca.',
    historia: [
      'Na Bacia do Congo, liboké é o nome que se dá ao que se cozinha embrulhado em folhas. A palavra é do lingala, língua falada ao longo do rio, de Kinshasa a Brazzaville, e quer dizer pacote. Há liboké de frango, de carne e de cogumelos, mas o de peixe é o mais comum.',
      'Usa peixes do rio Congo e de seus afluentes, como tilápias e bagres, temperados com tomate, cebola, alho e pimenta e fechados em folhas de bananeira ou de outras plantas de folha larga. Os pacotes vão à brasa, e o peixe cozinha no próprio vapor e no caldo do tomate, sem perder suco.',
      'É comida de casa, de fim de semana e de festa, e também dos restaurantes populares das duas capitais. Chega à mesa com chikwangue, a mandioca deixada de molho até fermentar, pilada, embrulhada em folhas e cozida no vapor, que se corta em fatias como um pão e se conserva por dias.',
    ],
    rende: '4 porções',
    tempo: '1\u00a0h 15\u00a0min',
    ingredientes: [
      {
        grupo: 'Peixe',
        itens: [
          '4 peixes de rio inteiros de cerca de 350\u00a0g cada, limpos (tilápia é o mais comum), ou 4 postas grossas de bagre',
          'suco de 1 limão',
          '3 dentes de alho',
          '1 pedaço de gengibre de 2\u00a0cm',
          'sal a gosto',
        ],
      },
      {
        grupo: 'Molho',
        itens: [
          '3 tomates maduros picados',
          '1 cebola grande em rodelas finas',
          '1 ou 2 pimentas pili-pili ou malaguetas picadas',
          '2 colheres (sopa) de azeite de dendê ou de óleo vegetal',
        ],
      },
      {
        grupo: 'Embrulho e acompanhamento',
        itens: [
          '4 a 8 pedaços de folha de bananeira de cerca de 40\u00a0cm × 40\u00a0cm',
          'barbante de cozinha',
          '1 chikwangue de cerca de 500\u00a0g, ou 500\u00a0g de mandioca cozida',
        ],
      },
    ],
    preparo: [
      'Faça três cortes diagonais em cada lado dos peixes. Amasse o alho e o gengibre com sal, junte o suco de limão e esfregue o tempero por dentro e por fora. Deixe descansar por 20 minutos.',
      'Misture numa tigela o tomate, a cebola, a pimenta e o dendê, com uma pitada de sal.',
      'Passe as folhas de bananeira rapidamente sobre a chama, até ficarem brilhantes e flexíveis. Retire o talo central se estiver duro.',
      'Sobre cada folha, espalhe uma colher do molho, deite um peixe e cubra com a quarta parte do que sobrou. Feche a folha em pacote, dobrando as laterais, e amarre com barbante. Se a folha rasgar, embrulhe de novo com uma segunda por fora.',
      'Asse os pacotes sobre brasa média por 35 a 40 minutos, virando na metade do tempo; a folha de fora deve escurecer sem pegar fogo. Sem churrasqueira, asse numa assadeira em forno a 200\u00a0°C pelo mesmo tempo.',
      'Corte a chikwangue em fatias e aqueça no vapor por alguns minutos, ou sirva em temperatura ambiente.',
      'Leve os pacotes fechados à mesa e abra cada um no prato, para que o caldo do peixe e do tomate não se perca.',
    ],
    sustentavel: [
      'Peixe de rio cozido dentro de folha: a embalagem sai da planta e volta à terra depois da refeição.',
      'A chikwangue é feita de mandioca, alimento básico da Bacia do Congo, cultura que tolera solos pobres e, depois de pronta, se guarda por dias sem geladeira.',
    ],
    dica: 'Longe da África Central, troque a chikwangue por mandioca cozida. Na Amazônia, tucunaré ou matrinxã inteiros funcionam bem no lugar da tilápia. Sem folha de bananeira, embrulhe o peixe em papel-manteiga e depois em papel-alumínio.',
  },
  {
    id: 'sopa-de-milpa',
    dek: 'No centro do México, a estação das chuvas põe na mesma panela o que cresce junto no roçado: milho verde, abobrinha, feijão e flor de abóbora.',
    historia: [
      'Milpa, palavra de origem náuatle, é o roçado onde milho, feijão e abóbora crescem juntos, muitas vezes com pimentas e ervas que nascem sozinhas entre as fileiras. O sistema alimenta os povos da Mesoamérica há milênios e continua vivo nas lavouras familiares do México e da América Central.',
      'A sopa de milpa reúne o que esse roçado dá ao mesmo tempo, na estação das chuvas, que no centro do México vai mais ou menos de junho a outubro: milho verde, abobrinha tenra, flor de abóbora e, em algumas casas, huitlacoche, o fungo escuro que nasce na espiga e é tratado como iguaria. É comida de casa e de mercado, de Puebla à Cidade do México, servida muitas vezes como primeiro prato da comida, a refeição do meio do dia.',
      'Cada família tem a sua versão. Há quem faça a base com caldo de tomate, quem acrescente feijão ou vagem, quem troque o epazote por outra erva. O que não muda é a ideia de pôr na panela, junto, o que foi plantado junto.',
    ],
    rende: '4 porções',
    tempo: '50\u00a0min',
    ingredientes: [
      {
        itens: [
          '2 pimentas poblano (ou 1 pimentão verde e 1 pimenta dedo-de-moça sem sementes)',
          '2 colheres (sopa) de óleo de milho',
          '1 cebola branca média picada',
          '2 dentes de alho picados',
          '2 tomates maduros, sem pele, picados',
          '3 espigas de milho verde debulhadas (cerca de 2½ xícaras, 400\u00a0g)',
          '2 abobrinhas italianas pequenas em cubos (cerca de 300\u00a0g)',
          '1½ xícara (chá) de feijão-preto cozido e escorrido (cerca de 250\u00a0g)',
          '12 flores de abóbora, sem o talo e o pistilo, rasgadas em tiras',
          '1,5\u00a0litro de caldo de legumes ou de frango',
          '2 ramos de epazote',
          'sal a gosto',
        ],
      },
      {
        grupo: 'Para servir',
        itens: ['150\u00a0g de queijo fresco em cubos', '1 abacate em fatias', 'tortilhas de milho', 'limão em gomos'],
      },
    ],
    preparo: [
      'Asse as pimentas poblano direto na chama do fogão, virando, até a pele ficar preta por inteiro. Deixe-as numa tigela tampada por 10 minutos, tire a pele e as sementes e corte em tiras.',
      'Aqueça o óleo numa panela grande e refogue a cebola por 5 minutos, até ficar transparente. Junte o alho e, um minuto depois, o tomate, e cozinhe por mais 5 minutos, até desmanchar.',
      'Acrescente o milho e mexa por 2 ou 3 minutos. Despeje o caldo, junte o epazote e cozinhe em fogo médio por 10 minutos.',
      'Junte a abobrinha, o feijão e as tiras de pimenta. Cozinhe por mais 8 a 10 minutos, até a abobrinha ficar macia sem desmanchar.',
      'Desligue o fogo, junte as flores de abóbora e tampe a panela por 2 minutos; elas murcham com o calor do caldo. Retire os ramos de epazote e acerte o sal.',
      'Sirva em tigelas fundas com o queijo, o abacate e um pouco de limão, com tortilhas quentes ao lado.',
    ],
    sustentavel: [
      'Na milpa, o milho serve de apoio para o feijão subir, o feijão ajuda a fixar nitrogênio no solo e a abóbora cobre a terra, segura a umidade e abafa o mato.',
      'O roçado guarda variedades crioulas de milho, feijão e abóbora, selecionadas pelas famílias ao longo de gerações.',
      'A receita aproveita a flor da abóbora, parte da planta que muitas cozinhas descartam; em algumas casas, também o fungo do milho.',
    ],
    dica: 'Sem epazote, use coentro com uma pitada de orégano; o sabor muda, mas a sopa se sustenta. A abobrinha italiana faz as vezes da calabacita mexicana, e o queijo minas frescal, a do queso fresco. Sem flor de abóbora, aumente a abobrinha.',
  },
];

export const receitas: Receita[] = cartoes.map((c) => {
  const pagina = paginas.find((x) => x.id === c.id);
  if (!pagina) throw new Error(`Falta a página da receita ${c.id}`);
  return { ...c, ...pagina };
});

export const receitaPorId = (id?: string) => receitas.find((r) => r.id === id);
