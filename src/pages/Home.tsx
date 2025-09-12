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
    <div className="space-y-8">
      <Ticker />
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Notícias</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <NewsCard key={index} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
