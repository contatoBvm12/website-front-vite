import React from 'react';

const RegisterUser: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white shadow rounded-lg p-6">
          <p className="text-sm text-gray-500">Usuários cadastrados</p>
          <p className="mt-2 text-2xl font-semibold">
            1 <span className="text-sm font-normal text-gray-500">cadastrados</span>
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <p className="text-sm text-gray-500">Novos</p>
          <p className="mt-2 text-2xl font-semibold">
            1 <span className="text-sm font-normal text-gray-500">mês</span>
          </p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <p className="text-sm text-gray-500">Atividade</p>
          <p className="mt-2 text-2xl font-semibold">Estável</p>
        </div>
      </div>

      {/* Formulário */}
      <div className="bg-white shadow rounded-lg">
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-xl font-semibold">Cadastro de Usuário</h2>
          <span className="text-sm text-gray-500">Dados básicos</span>
        </div>
        <form className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Nome</label>
              <input
                type="text"
                className="mt-1 px-3 py-2 border rounded-md"
                placeholder="Digite nome"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Sobrenome</label>
              <input
                type="text"
                className="mt-1 px-3 py-2 border rounded-md"
                placeholder="Digite sobrenome"
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
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">CPF</label>
              <input
                type="text"
                className="mt-1 px-3 py-2 border rounded-md"
                placeholder="Digite cpf"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Telefone</label>
              <input
                type="text"
                className="mt-1 px-3 py-2 border rounded-md"
                placeholder="Digite telefone"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Senha</label>
              <input
                type="password"
                className="mt-1 px-3 py-2 border rounded-md"
                placeholder="Digite senha"
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
              Salvar usuário
            </button>
          </div>
        </form>
      </div>

      {/* Lista */}
      <div className="bg-white shadow rounded-lg">
        <div className="border-b px-6 py-4">
          <h3 className="text-lg font-semibold">Lista de Usuários</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left font-medium text-gray-500">Nome</th>
                <th className="px-6 py-3 text-left font-medium text-gray-500">Sobrenome</th>
                <th className="px-6 py-3 text-left font-medium text-gray-500">E-mail</th>
                <th className="px-6 py-3 text-left font-medium text-gray-500">CPF</th>
                <th className="px-6 py-3 text-left font-medium text-gray-500">Telefone</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4">Ana</td>
                <td className="px-6 py-4">Silva</td>
                <td className="px-6 py-4">ana@bmr2.com</td>
                <td className="px-6 py-4">123.456.789-01</td>
                <td className="px-6 py-4">(99) 99999-1111</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;

