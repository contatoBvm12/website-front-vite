import React from 'react';
import Ticker from '../components/Ticker';
import NewsCard from '../components/NewsCard';
import type { Post } from '../components/NewsCard';

const posts: Post[] = [
  {
    tag: 'Tempo Real',
    time: 'agora',
    title: 'BVM12 fecha parceria estratégica com a Vammo para acelerar a mobilidade elétrica',
    image: 'https://media.licdn.com/dms/image/v2/D4D22AQHE3qWW-3SGpw/feedshare-shrink_800/feedshare-shrink_800/0/1725295932621?e=2147483647&v=beta&t=l_fLG7BlZ5xvlB3bYZ9AQJcHOyN3lABp6exs_FafqFE'
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
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1 space-y-4 text-center lg:text-left">
            <span className="text-sm font-semibold text-secondary tracking-wide uppercase">
              Atualizações ESG
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
              Notícias, dados e visão do mercado verde
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto lg:mx-0">
              Acompanhe os principais movimentações de mercado ESG, índices proprietários e análises da BVM12 em um só lugar.
            </p>
          </div>
          <div className="w-full max-w-sm bg-white shadow rounded-lg p-6">
            <dl className="space-y-4">
              <div className="flex justify-between">
                <dt className="font-medium text-gray-600">BVM12</dt>
                <dd className="text-right">
                  <div className="text-lg font-semibold text-primary">1.352,7</div>
                  <div className="text-sm text-green-600">+12,3%</div>
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-medium text-gray-600">ESG</dt>
                <dd className="text-right">
                  <div className="text-lg font-semibold text-primary">US$ 89,51</div>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      <Ticker />
      <section className="max-w-7xl mx-auto px-4 py-8">
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
