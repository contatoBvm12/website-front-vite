import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  <main className="bg-nevoa">
    <div className="contenedor flex min-h-[60svh] flex-col justify-center py-24">
      <p className="olho text-ardosia">Erro 404</p>
      <h1 className="titulo mt-4 text-[clamp(44px,6vw,96px)]">Esta sala está vazia.</h1>
      <p className="mt-6 font-serif text-[20px] text-ardosia">A página que você procura não existe ou mudou de lugar.</p>
      <Link to="/" className="olho mt-10 self-start border-b-2 border-marinho pb-1.5">
        Voltar à entrada
      </Link>
    </div>
  </main>
);

export default NotFound;
