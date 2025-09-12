import React from 'react';

const RegisterCompany: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white shadow rounded-lg p-6">
          <p className="text-sm text-gray-500">Empresas cadastradas</p>
          <p className="mt-2 text-2xl font-semibold">
            1 <span className="text-sm font-normal text-gray-500">cadastradas</span>
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <p className="text-sm text-gray-500">Novas</p>
          <p className="mt-2 text-2xl font-semibold">
            1 <span className="text-sm font-normal text-gray-500">mês</span>
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <p className="text-sm text-gray-500">Documentação</p>
          <p className="mt-2 text-2xl font-semibold">Em dia</p>
        </div>
      </div>

      {/* Formulário */}
      <div className="bg-white shadow rounded-lg">
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-xl font-semibold">Cadastro de Empresa</h2>
          <span className="text-sm text-gray-500">Dados básicos</span>
        </div>
        <form className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Nome da empresa</label>
              <input
                type="text"
                className="mt-1 px-3 py-2 border rounded-md"
                placeholder="Digite nome da empresa"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Nome fantasia</label>
              <input
                type="text"
                className="mt-1 px-3 py-2 border rounded-md"
                placeholder="Digite nome fantasia"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">CNPJ</label>
              <input
                type="text"
                className="mt-1 px-3 py-2 border rounded-md"
                placeholder="Digite cnpj"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Endereço</label>
              <input
                type="text"
                className="mt-1 px-3 py-2 border rounded-md"
                placeholder="Digite endereço"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Responsável</label>
              <input
                type="text"
                className="mt-1 px-3 py-2 border rounded-md"
                placeholder="Digite responsável pela empresa"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">E-mail</label>
              <input
                type="email"
                className="mt-1 px-3 py-2 border rounded-md"
                placeholder="Digite e-mail"
              />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="reset"
              className="px-4 py-2 border rounded-md text-gray-700"
            >
              Limpar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-md"
            >
              Salvar empresa
            </button>
          </div>
        </form>
      </div>

      {/* Lista */}
      <div className="bg-white shadow rounded-lg">
        <div className="border-b px-6 py-4">
          <h3 className="text-lg font-semibold">Lista de Empresas</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left font-medium text-gray-500">Razão social</th>
                <th className="px-6 py-3 text-left font-medium text-gray-500">Nome fantasia</th>
                <th className="px-6 py-3 text-left font-medium text-gray-500">CNPJ</th>
                <th className="px-6 py-3 text-left font-medium text-gray-500">Endereço</th>
                <th className="px-6 py-3 text-left font-medium text-gray-500">E-mail</th>
                <th className="px-6 py-3 text-left font-medium text-gray-500">Responsável</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4">BMR12 S.A.</td>
                <td className="px-6 py-4">BMR12</td>
                <td className="px-6 py-4">00.000.000/0001-00</td>
                <td className="px-6 py-4">Av. Paulista, 1000 - São Paulo - SP</td>
                <td className="px-6 py-4">contato@bmr12.com</td>
                <td className="px-6 py-4">André Albuquerque</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RegisterCompany;

