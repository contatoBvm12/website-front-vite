import React from 'react';
import { Link, NavLink } from 'react-router-dom';

/**
 * Header component with the BVM12 logo, title and navigation links.
 */
const Header: React.FC = () => {
  return (
    <header className="bg-primary text-white p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center mb-2 sm:mb-0">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="BVM12 Logo" className="h-7 w-auto" />
          </Link>
        </div>
        <nav className="flex gap-4 text-sm">
          <Link to="/sobre" className="px-3 py-1 rounded hover:bg-white/20 transition-colors">
            Sobre Nós
          </Link>
          <Link to="/#produtos" className="px-3 py-1 rounded hover:bg-white/20 transition-colors">
            Produtos
          </Link>
          <Link to="/#metodologias" className="px-3 py-1 rounded hover:bg-white/20 transition-colors">
            Metodologias
          </Link>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `px-3 py-1 rounded ${isActive ? 'bg-white text-primary' : 'hover:bg-white/20'}`
            }
          >
            Área do Cliente
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
