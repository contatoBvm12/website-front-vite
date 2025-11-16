import React from 'react';
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

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
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

          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 space-y-4 text-center lg:text-left">
              <span className="text-sm font-semibold text-secondary tracking-wide uppercase">
                Atualizações B3G
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
                Notícias, dados e visão do mercado verde
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto lg:mx-0">
                Acompanhe as principais movimentações de mercado ESG, índices proprietários e análises da BVM12 em um só
                lugar.
              </p>
            </div>
            <div className="w-full max-w-md bg-white shadow rounded-lg p-6">
              <dl className="divide-y divide-gray-200">
                <div className="flex justify-between pb-4">
                  <dt className="font-medium text-gray-600">BVM12 ESG</dt>
                  <dd className="text-right">
                    <div className="text-lg font-semibold text-primary">1.352,7</div>
                    <div className="text-sm text-green-600">+12,3%</div>
                  </dd>
                </div>
                <div className="flex justify-between py-4">
                  <dt className="font-medium text-gray-600">Green Term (B3G)</dt>
                  <dd className="text-right">
                    <div className="text-lg font-semibold text-primary">+12,3%</div>
                  </dd>
                </div>
                <div className="flex justify-between pt-4">
                  <dt className="font-medium text-gray-600">Preço do Carbono</dt>
                  <dd className="text-right">
                    <div className="text-lg font-semibold text-primary">US$ 89,51</div>
                  </dd>
                </div>
              </dl>
              <p className="mt-4 text-xs text-gray-500">Dados fictícios e variações nas cotações.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="produtos" className="scroll-mt-20">
        <Ticker />
      </section>
      <section id="metodologias" className="max-w-7xl mx-auto px-4 py-8 scroll-mt-20">
        <h2 className="text-2xl font-semibold mb-6 text-primary">Notícias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <NewsCard key={index} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
