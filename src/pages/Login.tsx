import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Field from '../components/Field';
import { Tela } from '../marca/Encontro';

/** Área do Cliente: a tela verde do encontro na parede marinho à esquerda, o formulário na névoa à direita. */
const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="grid min-h-[calc(100svh-64px)] lg:grid-cols-2">
      <section className="campo-marinho hidden flex-col justify-between bg-marinho px-[var(--margem)] py-14 text-white lg:flex">
        <p className="olho text-verde">Área do Cliente</p>
        <Tela fundo="#4ADE80" cor="#142B4D" className="pendurada block h-auto w-[min(28vw,360px,44svh)] self-center" />
        <p className="titulo max-w-[13ch] text-[clamp(32px,3vw,46px)]">Mercado verde, todo dia.</p>
      </section>

      <section className="flex items-center bg-nevoa px-[var(--margem)] py-16">
        <div className="mx-auto w-full max-w-[26rem]">
          <p className="olho text-ardosia lg:hidden">Área do Cliente</p>
          <h1 className="titulo mt-3 text-[clamp(40px,min(4.2vw,9svh),58px)] lg:mt-0">Entrar</h1>
          <p className="mt-3 font-serif text-[19px] text-ardosia">Faça seu login em nossa rede.</p>

          <form className="mt-10 space-y-6">
            <Field id="email" name="email" label="E-mail" type="email" placeholder="seu@email.com" autoComplete="email" />
            <Field
              id="senha"
              name="senha"
              label="Senha"
              type={showPassword ? 'text' : 'password'}
              placeholder="Digite sua senha"
              autoComplete="current-password"
              style={{ paddingRight: '6rem' }}
            >
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="olho absolute inset-y-0 right-3 my-auto h-8 px-2 text-marinho"
              >
                {showPassword ? 'Ocultar' : 'Mostrar'}
              </button>
            </Field>
            <div className="flex items-center justify-between text-[15px]">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 accent-marinho" />
                Lembrar-me
              </label>
              <a href="#" className="sublinhado">
                Esqueci minha senha
              </a>
            </div>
            <button type="submit" className="h-12 w-full bg-marinho font-semibold text-white transition-colors hover:bg-[#0d1e37]">
              Entrar
            </button>
          </form>

          <div className="mt-14 border-t border-marinho/25 pt-6">
            <p className="font-semibold">Ainda não tem conta?</p>
            <p className="mt-1 font-serif text-[17px] text-ardosia">Nossa rede apoia suas ações para empresa.</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Link to="/register-company" className="grid h-12 place-items-center bg-verde font-semibold text-marinho transition-colors hover:bg-esmeralda">
                Cadastro de Empresa
              </Link>
              <Link to="/register-user" className="grid h-12 place-items-center border border-marinho font-semibold transition-colors hover:bg-marinho hover:text-white">
                Cadastro de Usuário
              </Link>
            </div>
            <p className="mt-6 text-[13px] text-ardosia">
              Ao se cadastrar, você concorda com a nossa{' '}
              <a href="#" className="sublinhado">
                Política de Privacidade
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
