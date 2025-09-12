import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 bg-gray-100 text-gray-700 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Páginas</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Início</Link></li>
            <li><Link to="/about" className="hover:underline">Sobre nós</Link></li>
            <li><Link to="/products" className="hover:underline">Produtos</Link></li>
            <li><Link to="/contact" className="hover:underline">Contato</Link></li>
            <li><Link to="/ecotrade" className="hover:underline">EcoTrade</Link></li>
            <li><Link to="/join" className="hover:underline">Junte-se ao nosso time</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Siga-nos</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://www.instagram.com/bvm12"
                className="flex items-center hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-4 w-4 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                </svg>
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/bvm12"
                className="flex items-center hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-4 w-4 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-14h4z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Entre em contato conosco</h3>
          <p className="text-sm">Envie-nos um e-mail: <a href="mailto:contato@bvm12.com.br" className="font-semibold text-primary hover:underline">contato@bvm12.com.br</a></p>
          <p className="text-sm">Envie-nos uma mensagem: <a href="https://wa.me/559231996289" className="font-semibold text-primary hover:underline" target="_blank" rel="noopener noreferrer">+55 92 3199-6289</a></p>
        </div>
      </div>
      <div className="bg-primary text-white mt-12 py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Mini BVM12 logo" className="h-6 w-6" />
            <span className="font-semibold">bvm 12</span>
          </div>
          <p className="text-center flex-1">
            Copyright © BVM12 - Bolsa Verde de Manaus Ltda. CNPJ 38.730.632/0001-83 | Designed by Fennec Developer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
