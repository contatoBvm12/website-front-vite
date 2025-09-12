import React from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input type="email" className="w-full border rounded p-2" placeholder="Digite seu email" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Senha</label>
          <input type="password" className="w-full border rounded p-2" placeholder="Digite sua senha" />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Entrar</button>
      </form>
      <div className="mt-4 text-center">
        <p>
          Não tem uma conta?{' '}
          <Link to="/register-user" className="text-blue-600 underline">Cadastrar Usuário</Link>
          {' '}ou{' '}
          <Link to="/register-company" className="text-blue-600 underline">Cadastrar Empresa</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
