import React from 'react';
import { Link } from 'react-router-dom';
import Encontro from '../marca/Encontro';

const PAGES = [
  { to: '/', label: 'Início' },
  { to: '/#indice', label: 'Índice' },
  { to: '/#noticias', label: 'Notícias' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/login', label: 'Área do Cliente' },
];

const Column: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className = '' }) => (
  <div className={className}>
    <p className="olho text-white/60">{title}</p>
    <ul className="mt-4 space-y-2.5 text-[15px]">{children}</ul>
  </div>
);

/** Saída da galeria: assinatura, páginas e contato, e o encontro das águas enorme, cortado pela borda de baixo. */
const Footer: React.FC = () => (
  <footer className="campo-marinho bg-marinho text-white">
    <div className="contenedor grid gap-x-10 gap-y-12 pb-12 pt-20 md:grid-cols-12">
      <div className="md:col-span-5">
        <img src="/marca/assinatura-branca.svg" alt="BVM12" width={221} height={36} className="h-9 w-auto" />
        <p className="titulo mt-8 max-w-[14ch] text-[clamp(30px,3.4vw,50px)]">Mercado verde, todo dia.</p>
      </div>
      <Column title="Páginas" className="md:col-span-2">
        {PAGES.map((p) => (
          <li key={p.to}>
            <Link to={p.to} className="text-white/80 hover:text-white">
              {p.label}
            </Link>
          </li>
        ))}
      </Column>
      <Column title="Siga" className="md:col-span-2">
        <li>
          <a href="https://www.instagram.com/bvm12" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
            Instagram
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/bvm12" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
            LinkedIn
          </a>
        </li>
      </Column>
      <Column title="Contato" className="md:col-span-3">
        <li>
          <a href="mailto:contato@bvm12.com.br" className="text-white/80 hover:text-white">
            contato@bvm12.com.br
          </a>
        </li>
        <li>
          <a href="https://wa.me/559231996289" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
            WhatsApp +55 92 3199-6289
          </a>
        </li>
      </Column>
    </div>
    <div className="contenedor border-t border-white/15 py-5 font-mono text-[12px] tracking-[0.04em] text-white/60">
      © BVM12 · Bolsa Verde de Manaus Ltda. · CNPJ 38.730.632/0001-83
    </div>
    <div className="aspect-square w-full sm:aspect-[16/7]">
      <Encontro largura={1600} altura={700} x={-30} y={-510} s={8.2} t={49} P={33} enquadrar="xMidYMax slice" className="block h-full w-full" />
    </div>
  </footer>
);

export default Footer;
