import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Header component with the BVM12 logo, title and navigation links.
 */
const Header: React.FC = () => {
  return (
    <header className="bg-primary text-white p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center space-x-3 mb-2 sm:mb-0">
          <img src="/logo.png" alt="BVM12 Logo" className="h-8 w-8" />
          <div>
            <h1 className="text-xl font-bold leading-tight">BVM12</h1>
            <p className="text-xs sm:text-sm">ESG • Mercado & Notícias</p>
          </div>
        </div>
        <nav className="flex gap-4 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-1 rounded ${isActive ? 'bg-white text-primary' : 'hover:bg-white/20'}`
            }
          >
            Início
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `px-3 py-1 rounded ${isActive ? 'bg-white text-primary' : 'hover:bg-white/20'}`
            }
          >
            Área do Cliente
          </NavLink>
          <NavLink
            to="/register-user"
            className={({ isActive }) =>
              `px-3 py-1 rounded ${isActive ? 'bg-white text-primary' : 'hover:bg-white/20'}`
            }
          >
            Cadastro de Usuário
          </NavLink>
          <NavLink
            to="/register-company"
            className={({ isActive }) =>
              `px-3 py-1 rounded ${isActive ? 'bg-white text-primary' : 'hover:bg-white/20'}`
            }
          >
            Cadastro de Empresa
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
