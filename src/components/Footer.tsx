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
            <li><a href="https://www.instagram.com/bvm12" className="hover:underline" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.linkedin.com/company/bvm12" className="hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
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
            Copyright © BVM12 - Plataforma de Captação para Startups Ltda. CNPJ 38.730.632/0001-83 | Designed by Flying Kite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
