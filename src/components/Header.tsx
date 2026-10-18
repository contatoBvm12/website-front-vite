import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

// As três salas de conteúdo, o índice da home e o Sobre. A sala em que a pessoa está fica acesa.
const LINKS = [
  { to: '/noticias', label: 'Notícias' },
  { to: '/series-e-filmes', label: 'Séries e filmes' },
  { to: '/receitas', label: 'Receitas' },
  { to: '/#indice', label: 'Índice' },
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
        <nav aria-label="Principal" className="hidden items-center gap-7 text-[15px] lg:flex xl:gap-9">
          {LINKS.map((l) =>
            l.to.includes('#') ? (
              <Link key={l.to} to={l.to} className="text-white/75 transition-colors hover:text-white">
                {l.label}
              </Link>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `transition-colors hover:text-white ${isActive ? 'text-white underline decoration-verde decoration-2 underline-offset-[10px]' : 'text-white/75'}`
                }
              >
                {l.label}
              </NavLink>
            ),
          )}
          <NavLink to="/login" className="bg-verde px-4 py-2 font-semibold text-marinho transition-colors hover:bg-white">
            Área do Cliente
          </NavLink>
        </nav>
        <button
          type="button"
          className="olho -mr-2 px-2 py-2 lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movel"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Fechar' : 'Menu'}
        </button>
      </div>
      {open && (
        <nav id="menu-movel" aria-label="Principal" className="border-t border-white/10 lg:hidden">
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
