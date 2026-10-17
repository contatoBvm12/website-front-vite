import React from 'react';
import FormPage from '../components/FormPage';

const RegisterCompany: React.FC = () => (
  <FormPage
    eyebrow="Cadastro"
    title="Cadastro de Empresa"
    intro="Dados básicos da empresa que vai operar com a BVM12."
    submitLabel="Salvar empresa"
    fields={[
      { id: 'empresa', label: 'Nome da empresa', placeholder: 'Digite nome da empresa', autoComplete: 'organization' },
      { id: 'fantasia', label: 'Nome fantasia', placeholder: 'Digite nome fantasia' },
      { id: 'cnpj', label: 'CNPJ', placeholder: 'Digite CNPJ' },
      { id: 'endereco', label: 'Endereço', placeholder: 'Digite endereço', autoComplete: 'street-address' },
      { id: 'responsavel', label: 'Responsável', placeholder: 'Digite responsável pela empresa', autoComplete: 'name' },
      { id: 'email', label: 'E-mail', type: 'email', placeholder: 'Digite e-mail', autoComplete: 'email' },
    ]}
  />
);

export default RegisterCompany;
