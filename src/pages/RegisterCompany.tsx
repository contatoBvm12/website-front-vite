import React from 'react';

const RegisterCompany: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Cadastro de Empresa</h2>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block mb-1">Razão social</label>
          <input type="text" className="w-full border rounded p-2" placeholder="Nome da empresa" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">CNPJ</label>
          <input type="text" className="w-full border rounded p-2" placeholder="00.000.000/0001-00" />
        </div>
        <div className="mb-4">
          <label className="block mb-1">E-mail</label>
          <input type="email" className="w-full border rounded p-2" placeholder="Digite o e-mail" />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Cadastrar Empresa</button>
      </form>
    </div>
  );
};

export default RegisterCompany;
