import React from 'react';
import FormPage from '../components/FormPage';

const RegisterUser: React.FC = () => (
  <FormPage
    eyebrow="Cadastro"
    title="Cadastro de Usuário"
    intro="Dados básicos para entrar na rede da BVM12."
    submitLabel="Salvar usuário"
    fields={[
      { id: 'nome', label: 'Nome', placeholder: 'Digite nome', autoComplete: 'given-name' },
      { id: 'sobrenome', label: 'Sobrenome', placeholder: 'Digite sobrenome', autoComplete: 'family-name' },
      { id: 'email', label: 'E-mail', type: 'email', placeholder: 'Digite e-mail', autoComplete: 'email' },
      { id: 'cpf', label: 'CPF', placeholder: 'Digite CPF' },
      { id: 'telefone', label: 'Telefone', type: 'tel', placeholder: 'Digite telefone', autoComplete: 'tel' },
      { id: 'senha', label: 'Senha', type: 'password', placeholder: 'Digite senha', autoComplete: 'new-password' },
    ]}
  />
);

export default RegisterUser;
