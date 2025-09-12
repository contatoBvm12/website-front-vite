import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-primary mb-2">Área do Cliente</h2>
        <p className="text-sm text-gray-600 mb-6">Faça seu login em nossa rede.</p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="seu@email.com"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Digite sua senha"
                className="w-full border rounded-md p-2 pr-20 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-2 flex items-center text-sm text-gray-600"
              >
                {showPassword ? 'Ocultar' : 'Mostrar'}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Lembrar-me
            </label>
            <a href="#" className="text-primary hover:underline">Esqueci minha senha</a>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90"
          >
            Entrar
          </button>
        </form>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-primary mb-2">Ainda não tem conta?</h2>
        <p className="text-sm text-gray-600 mb-6">
          Nossa rede apoia suas ações para empresa.
        </p>
        <div className="space-y-3">
          <Link
            to="/register-company"
            className="block w-full text-center border border-primary text-primary rounded-md py-2 hover:bg-primary hover:text-white"
          >
            Cadastro de Empresa
          </Link>
          <Link
            to="/register-user"
            className="block w-full text-center border border-primary text-primary rounded-md py-2 hover:bg-primary hover:text-white"
          >
            Cadastro de Usuário
          </Link>
        </div>
        <p className="text-xs text-gray-500 mt-6">
          Ao se cadastrar, você concorda com a nossa{' '}
          <a href="#" className="text-primary underline">Política de Privacidade</a>.
        </p>
      </div>
    </div>
  );
};

export default Login;
