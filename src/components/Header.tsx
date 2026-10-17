import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const LINKS = [
  { to: '/#indice', label: 'Índice' },
  { to: '/#noticias', label: 'Notícias' },
  { to: '/sobre', label: 'Sobre' },
];

/** Barra marinho fina: a assinatura à esquerda, as salas à direita e a Área do Cliente em verde. */
const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();
  useEffect(() => setOpen(false), [pathname, hash]);

  return (
    <header className="campo-marinho sticky top-0 z-50 bg-marinho text-white">
      <div className="contenedor flex h-16 items-center justify-between gap-6">
        <Link to="/" aria-label="BVM12, página inicial" className="shrink-0">
          <img src="/marca/assinatura-branca.svg" alt="" width={172} height={28} className="h-7 w-auto" />
        </Link>
        <nav aria-label="Principal" className="hidden items-center gap-9 text-[15px] md:flex">
          {LINKS.map((l) => (
            <Link key={l.to} to={l.to} className="text-white/75 transition-colors hover:text-white">
              {l.label}
            </Link>
          ))}
          <NavLink to="/login" className="bg-verde px-4 py-2 font-semibold text-marinho transition-colors hover:bg-white">
            Área do Cliente
          </NavLink>
        </nav>
        <button
          type="button"
          className="olho -mr-2 px-2 py-2 md:hidden"
          aria-expanded={open}
          aria-controls="menu-movel"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Fechar' : 'Menu'}
        </button>
      </div>
      {open && (
        <nav id="menu-movel" aria-label="Principal" className="border-t border-white/10 md:hidden">
          <div className="contenedor flex flex-col py-2">
            {[...LINKS, { to: '/login', label: 'Área do Cliente' }].map((l) => (
              <Link key={l.to} to={l.to} className="border-b border-white/10 py-4 text-lg last:border-0">
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
