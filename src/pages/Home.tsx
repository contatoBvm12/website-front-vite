import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Ticker from '../components/Ticker';
import NewsCard from '../components/NewsCard';
import type { Post } from '../components/NewsCard';

const featuredPost = {
  tag: 'COP30 em foco',
  title: 'COP30 transforma Belém em vitrine da Amazônia',
  summary:
    'Belém vive o maior teste logístico e reputacional de sua história para sustentar o discurso brasileiro de liderança climática.',
  image: '/cop30.png',
  to: '/noticias/cop30'
};

const posts: Post[] = [
  {
    tag: 'COP30',
    time: '10 nov 2025',
    title: 'COP30 transforma Belém em vitrine da Amazônia',
    image: '/cop30.png',
    to: '/noticias/cop30'
  },
  {
    tag: 'Mobilidade',
    time: 'ha 1h',
    title: 'GoMoov e 99Food levam bicicletas eletricas para entregadores em Goiania',
    image: '/gomoov-99food.png',
    to: '/noticias/gomoov-99food'
  },
  {
    tag: 'Mercado',
    time: 'há 2h',
    title: 'Mercado reage às notícias do dia',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
  },
  {
    tag: 'ESG',
    time: 'ontem',
    title: 'Sustentabilidade nas empresas: tendências',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'
  }
];

const videos = [
  {
    title: 'Horizonte de Altitude',
    year: 2024,
    genres: 'Drama · Ação',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=500&q=80'
  },
  {
    title: 'Neon sobre Areia',
    year: 2023,
    genres: 'Comédia · Romance',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=500&q=80'
  },
  {
    title: 'Orquestra de Aço',
    year: 2022,
    genres: 'Ação · Sci-Fi',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80'
  },
  {
    title: 'Avenida do Tempo',
    year: 2024,
    genres: 'Drama',
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1482192597420-4817fdd7e8b0?auto=format&fit=crop&w=500&q=80'
  },
  {
    title: 'Céus Elétricos',
    year: 2021,
    genres: 'Sci-Fi · Suspense',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=500&q=80'
  }
];

const recipes = [
  {
    title: 'Peru assado com alho dourado',
    duration: '3h 15min',
    category: 'Principal',
    rating: '4.5 (120)',
    image: 'https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?auto=format&fit=crop&w=700&q=80'
  },
  {
    title: 'Batatas doces recheadas',
    duration: '1h 40min',
    category: 'Acompanhamento',
    rating: '4.0 (62)',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80'
  },
  {
    title: 'Couve refogada com páprica',
    duration: '1h 15min',
    category: 'Veggie',
    rating: '4.1 (31)',
    image: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=700&q=80'
  },
  {
    title: 'Pie de nozes e manteiga',
    duration: '1h 30min',
    category: 'Sobremesa',
    rating: '3.9 (143)',
    image: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=700&q=80'
  }
];

const streamingCollection = [
  {
    id: 1,
    platform: 'Apple TV+',
    type: 'Série',
    title: 'The Wild Ones',
    description: 'Conservação de espécies ameaçadas e proteção da vida selvagem.',
    image: '/imagem01.png'
  },
  {
    id: 2,
    platform: 'Netflix',
    type: 'Filme',
    title: "Don't Look Up",
    description: 'Sátira sobre crise climática, negação científica e inação corporativa.',
    image: '/imagem02.png'
  },
  {
    id: 3,
    platform: 'Prime Video',
    type: 'Série',
    title: 'Climate Next',
    description: 'Histórias, ideias e tecnologias que constroem um futuro de baixo carbono.',
    image: '/imagem03.png'
  },
  {
    id: 4,
    platform: 'Disney+',
    type: 'Filme',
    title: 'Before the Flood',
    description: 'Leonardo DiCaprio viaja o mundo mostrando os impactos do aquecimento.',
    image: '/imagem04.png'
  },
  {
    id: 5,
    platform: 'Apple TV+',
    type: 'Filme',
    title: 'The Year Earth Changed',
    description: 'Como a natureza respondeu durante os lockdowns globais.',
    image: 'https://images.unsplash.com/photo-1482192597420-4817fdd7e8b0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    platform: 'Netflix',
    type: 'Série',
    title: 'Our Planet',
    description: 'Série documental sobre biodiversidade e transformação climática.',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 7,
    platform: 'Prime Video',
    type: 'Filme',
    title: 'Sustainable',
    description: 'Agricultura regenerativa, solo, água e cadeias de alimentos resilientes.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 8,
    platform: 'Disney+',
    type: 'Série',
    title: 'Secrets of the Penguins',
    description: 'Espécies de pinguins, seus habitats e ameaças do clima.',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80'
  }
];

const marketStats = [
  { label: 'Taxa DI 14/11', value: '14,90%' },
  { label: 'Índice DI 17/11', value: '53.363,71' },
  { label: 'S&P/B3 IBO VIX', value: '17,67', change: '+0,4%' }
];

const staticMovers = [
  { code: 'MPA', label: 'Árvores Plantadas (MPA)', value: '2.345.890', change: '+3,1%', positive: true }
];

const Home: React.FC = () => {
  const [usdRate, setUsdRate] = useState<string>('Carregando...');
  const [usdNumeric, setUsdNumeric] = useState<number | null>(null);
  const [eurRate, setEurRate] = useState<string>('Carregando...');
  const [eurNumeric, setEurNumeric] = useState<number | null>(null);
  const [usdChange, setUsdChange] = useState<string>('');
  const [eurChange, setEurChange] = useState<string>('');
  const [plfValue, setPlfValue] = useState<number | null>(null);
  const [plfChange, setPlfChange] = useState<string>('');
  const [plfHistory, setPlfHistory] = useState<Array<{ time: number; value: number }>>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = localStorage.getItem('plfHistory');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setPlfHistory(parsed);
          if (parsed.length) {
            setPlfValue(parsed[parsed.length - 1].value);
          }
        }
      } catch {
    localStorage.removeItem('plfHistory');
      }
    }
  }, []);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL');
        const data = await response.json();
        const usdValue = Number(data?.USDBRL?.bid);
        const eurValue = Number(data?.EURBRL?.bid);

        if (!Number.isNaN(usdValue)) {
          setUsdNumeric(usdValue);
          setUsdRate(`R$ ${usdValue.toFixed(2)}`);
          const variation = Number(data.USDBRL.pctChange);
          setUsdChange(`${variation > 0 ? '+' : ''}${variation.toFixed(2)}%`);
        }
        if (!Number.isNaN(eurValue)) {
          setEurNumeric(eurValue);
          setEurRate(`R$ ${eurValue.toFixed(2)}`);
          const variation = Number(data.EURBRL.pctChange);
          setEurChange(`${variation > 0 ? '+' : ''}${variation.toFixed(2)}%`);
        }

        if (!Number.isNaN(usdValue) && !Number.isNaN(eurValue)) {
          const carbon = usdValue * 12;
          const plf = 0.5 * usdValue + 0.35 * eurValue + 0.15 * carbon;
          setPlfValue(plf);
          setPlfHistory((prev) => {
            const entry = { time: Date.now(), value: Number(plf.toFixed(6)) };
            let base = prev;
            if (!base.length) {
              const start = entry.time - 19 * 60 * 1000;
              base = Array.from({ length: 20 }, (_, i) => ({
                time: start + i * 60 * 1000,
                value: entry.value
              }));
            }
            const seed = [...base, entry];
            const trimmed = seed.slice(-120);
            localStorage.setItem('plfHistory', JSON.stringify(trimmed));
            return trimmed;
          });
        }
      } catch (error) {
        setUsdRate('Indisponível');
        setEurRate('Indisponível');
      }
    };

    fetchRates();
    const interval = setInterval(fetchRates, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (plfHistory.length < 2) return;
    const first = plfHistory[0].value;
    const last = plfHistory[plfHistory.length - 1].value;
    const change = ((last / first) - 1) * 100;
    setPlfChange(`${change > 0 ? '+' : ''}${change.toFixed(2)}%`);
  }, [plfHistory]);

  const graphValues = React.useMemo(() => plfHistory.map((point) => point.value), [plfHistory]);

  const graphPath = React.useMemo(() => {
    if (plfHistory.length < 2) return 'M0,150 L600,150';
    const width = 600;
    const height = 150;
    const max = Math.max(...graphValues);
    const min = Math.min(...graphValues);
    const range = max - min || 1;

    return plfHistory
      .map((value, index) => {
        const x = (index / (plfHistory.length - 1)) * width;
        const y = height - (((value.value - min) / range) * height);
        return `${index === 0 ? 'M' : 'L'}${x},${y}`;
      })
      .join(' ');
  }, [plfHistory, graphValues]);

  const yTicks = React.useMemo(() => {
    if (!graphValues.length) return ['R$ 0,00', 'R$ 0,00', 'R$ 0,00', 'R$ 0,00', 'R$ 0,00'];
    const max = Math.max(...graphValues);
    const min = Math.min(...graphValues);
    const range = max - min || 0.1;
    return Array.from({ length: 5 }, (_, i) => `R$ ${(max - (range * i) / 4).toFixed(2)}`);
  }, [graphValues]);

  const timeLabels = React.useMemo(() => {
    const count = 12;
    const step = 5 * 60 * 1000;
    const reference = plfHistory.length
      ? new Date(plfHistory[plfHistory.length - 1].time)
      : new Date();
    reference.setSeconds(0, 0);
    const remainder = reference.getMinutes() % 5;
    if (remainder !== 0) {
      reference.setMinutes(reference.getMinutes() - remainder);
    }
    return Array.from({ length: count }, (_, index) => {
      const timestamp = reference.getTime() - (count - 1 - index) * step;
      return new Date(timestamp).toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit'
      });
    });
  }, [plfHistory]);

  const movers = [
    { code: 'USD', label: 'Dólar', value: usdRate, change: usdChange || '+0,00%', positive: !usdChange.includes('-') },
    { code: 'EUR', label: 'Euro', value: eurRate, change: eurChange || '+0,00%', positive: !eurChange.includes('-') },
    {
      code: 'VE',
      label: 'Crédito de Carbono VE',
      value: usdNumeric ? `R$ ${(usdNumeric * 12).toFixed(2)}` : 'Calculando...',
      change: usdChange || '+0,00%',
      positive: !(usdChange || '').includes('-')
    },
    ...staticMovers
  ];

  return (
    <div className="space-y-2 md:space-y-2.5">
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <Ticker />
        </div>
      </section>
      <section id="sobre-nos" className="bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-10">
          <Link
            to={featuredPost.to}
            className="relative block rounded-2xl overflow-hidden shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-72 sm:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 text-white space-y-3">
              <span className="text-xs uppercase tracking-widest font-semibold text-green-300">
                {featuredPost.tag}
              </span>
              <h1 className="text-2xl sm:text-4xl font-bold leading-tight">{featuredPost.title}</h1>
              <p className="max-w-3xl text-sm sm:text-base text-white/90">{featuredPost.summary}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold">
                Leia a matéria
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 12a.75.75 0 0 1 .75-.75h12.19l-3.22-3.22a.75.75 0 1 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H5.25A.75.75 0 0 1 4.5 12Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="w-full bg-[#162c4e] text-white rounded-2xl px-6 py-8 shadow-lg space-y-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-sm text-white/70">Índice PLF • Palafita</p>
                <div className="text-3xl md:text-4xl font-bold">
                  {plfValue ? `R$ ${plfValue.toFixed(2)}` : 'Carregando...'}
                </div>
                <p className={`text-sm font-semibold ${plfChange.includes('-') ? 'text-red-400' : 'text-green-400'}`}>
                  {plfChange || '0,00%'} • 1 dia
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 text-sm">
                {marketStats.map((item) => (
                  <div key={item.label}>
                    <p className="text-white/60">{item.label}</p>
                    <p className="font-semibold">
                      {item.value}{' '}
                      {item.change && (
                        <span className="text-green-400 text-xs font-medium">{item.change}</span>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 lg:items-stretch">
              <div className="flex-1 space-y-6 lg:flex lg:flex-col">
                <div className="flex gap-3 text-xs uppercase tracking-wide text-white/70">
                  {['1D', '1M', '3M', '1A', '5A', 'Todos'].map((period) => (
                    <button
                      key={period}
                      className={`px-3 py-1 rounded-full border border-white/10 ${
                        period === '1D' ? 'bg-white text-primary font-semibold' : 'hover:bg-white/10'
                      }`}
                    >
                      {period}
                    </button>
                  ))}
                </div>

                <div className="relative h-64 lg:flex-1 bg-gradient-to-b from-emerald-400/40 to-transparent rounded-3xl overflow-hidden">
                  <div className="absolute inset-y-0 left-0 right-20 px-6">
                    <svg viewBox="0 0 600 200" preserveAspectRatio="none" className="w-full h-full">
                      <path
                        d={graphPath}
                        fill="none"
                        stroke="#34d399"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute left-6 right-6 bottom-2 flex justify-between text-xs text-white/70 pointer-events-none">
                      {timeLabels.map((label, idx) => (
                        <span key={`${label}-${idx}`}>{label}</span>
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-y-6 right-3 flex flex-col justify-between text-xs text-white/70 text-right pointer-events-none">
                    {yTicks.map((tick, idx) => (
                      <span key={`${tick}-${idx}`}>{tick}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:w-[35%] grid gap-3">
                {movers.map((item) => (
                  <div key={item.code} className="flex items-center gap-3 bg-white/5 rounded-2xl px-4 py-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-semibold">
                      {item.code}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-white/70">{item.label}</p>
                      <p className="font-semibold text-white">{item.value}</p>
                    </div>
                    <span
                      className={`text-sm font-semibold ${
                        item.positive ? 'text-green-400' : 'text-red-400'
                      }`}
                    >
                      {item.change}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="metodologias" className="max-w-7xl mx-auto px-4 pt-6 pb-4 scroll-mt-20 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-primary">Notícias</h2>
          <div className="flex gap-2">
            <button
              type="button"
              className="h-8 w-8 flex items-center justify-center rounded-full border border-primary/20 text-primary/70 hover:text-primary hover:border-primary transition"
              onClick={() => {
                const container = document.getElementById('news-carousel');
                if (container) container.scrollBy({ left: -320, behavior: 'smooth' });
              }}
              aria-label="Ver notícias anteriores"
            >
              ‹
            </button>
            <button
              type="button"
              className="h-8 w-8 flex items-center justify-center rounded-full border border-primary/20 text-primary/70 hover:text-primary hover:border-primary transition"
              onClick={() => {
                const container = document.getElementById('news-carousel');
                if (container) container.scrollBy({ left: 320, behavior: 'smooth' });
              }}
              aria-label="Ver próximas notícias"
            >
              ›
            </button>
          </div>
        </div>
        <div id="news-carousel" className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
          {posts.map((post, index) => (
            <div key={index} className="min-w-[18rem] w-72 flex-shrink-0">
              <NewsCard post={post} />
            </div>
          ))}
        </div>
      </section>

      


      <section className="bg-[#eeeee] text-white py-6">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Filmes e Séries</h2>
            <div className="flex gap-2">
              <button
                type="button"
                className="h-8 w-8 flex items-center justify-center rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/50 transition"
                onClick={() => {
                  const container = document.getElementById('streaming-carousel');
                  if (container) container.scrollBy({ left: -300, behavior: 'smooth' });
                }}
                aria-label="Ver títulos anteriores"
              >
                ‹
              </button>
              <button
                type="button"
                className="h-8 w-8 flex items-center justify-center rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/50 transition"
                onClick={() => {
                  const container = document.getElementById('streaming-carousel');
                  if (container) container.scrollBy({ left: 300, behavior: 'smooth' });
                }}
                aria-label="Ver próximos títulos"
              >
                ›
              </button>
            </div>
          </div>
          <div id="streaming-carousel" className="flex gap-5 overflow-x-auto hide-scrollbar pb-2">
            {streamingCollection.map((item) => (
              <article
                key={item.id}
                className="bg-[#101a2c] border border-white/5 rounded-3xl shadow-lg overflow-hidden flex flex-col min-w-[18rem] w-72"
              >
                <div
                  className="h-[30rem] bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${item.image})` }}
                  role="img"
                  aria-label={`Poster de ${item.title} em ${item.platform}`}
                >
                  <span className="absolute bottom-2 left-2 text-[11px] bg-black/50 text-white/75 px-2 py-1 rounded-full">
                    {item.platform} · {item.type}
                  </span>
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.description}</p>
                  <button className="text-sm text-primary hover:underline">Saiba mais</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f4f6] text-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold flex items-center gap-2">
                Receitas <span className="text-lg">›</span>
              </h2>
              <p className="text-sm text-gray-500">Planeje seu banquete ESG com opções equilibradas.</p>
            </div>
            <div className="w-full md:w-auto flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex items-center bg-black/40 rounded-lg px-3 py-2 w-full sm:w-72 border border-white/10">
                <input
                  type="text"
                  placeholder="Encontre uma receita"
                  className="bg-transparent text-sm flex-1 outline-none placeholder:text-gray-300 text-white"
                />
                <span>🔍</span>
              </div>
              <div className="flex gap-2 self-end sm:self-auto">
                <button
                  type="button"
                  className="h-8 w-8 flex items-center justify-center rounded-full border border-primary/20 text-primary/70 hover:text-primary hover:border-primary transition"
                  onClick={() => {
                    const container = document.getElementById('recipes-carousel');
                    if (container) container.scrollBy({ left: -320, behavior: 'smooth' });
                  }}
                  aria-label="Ver receitas anteriores"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="h-8 w-8 flex items-center justify-center rounded-full border border-primary/20 text-primary/70 hover:text-primary hover:border-primary transition"
                  onClick={() => {
                    const container = document.getElementById('recipes-carousel');
                    if (container) container.scrollBy({ left: 320, behavior: 'smooth' });
                  }}
                  aria-label="Ver próximas receitas"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
          <div id="recipes-carousel" className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
            {recipes.map((recipe, index) => (
              <article
                key={index}
                className="min-w-[17rem] w-72 flex-shrink-0 rounded-2xl overflow-hidden bg-black/50 border border-white/5 text-white"
              >
                <img src={recipe.image} alt={recipe.title} className="h-40 w-full object-cover" />
                <div className="p-4 space-y-2">
                  <h3 className="font-semibold">{recipe.title}</h3>
                  <div className="text-xs text-gray-300 flex items-center gap-2">
                    <span>{recipe.duration}</span>
                    <span>|</span>
                    <span>{recipe.category}</span>
                    <span>|</span>
                    <span>⭐ {recipe.rating}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;

