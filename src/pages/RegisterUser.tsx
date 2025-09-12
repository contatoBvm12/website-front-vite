import React from 'react';

const RegisterUser: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Cadastro de Usuário</h2>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block mb-1">Nome</label>
          <input type="text" className="w-full border rounded p-2" placeholder="Nome completo" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">E-mail</label>
          <input type="email" className="w-full border rounded p-2" placeholder="Digite seu e-mail" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Senha</label>
          <input type="password" className="w-full border rounded p-2" placeholder="Crie uma senha" />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Cadastrar</button>
      </form>
    </div>
  );
};

export default RegisterUser;
