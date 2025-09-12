import React from 'react';
import { Link } from 'react-router-dom';

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
        <nav className="space-x-4 text-sm">
          <Link to="/" className="hover:underline">
            Início
          </Link>
          <Link to="/login" className="hover:underline">
            Área do Cliente
          </Link>
          <Link to="/register-user" className="hover:underline">
            Cadastro de Usuário
          </Link>
          <Link to="/register-company" className="hover:underline">
            Cadastro de Empresa
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
