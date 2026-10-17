import React from 'react';
import { Link } from 'react-router-dom';
import Field from './Field';

export interface FormField {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}

/** Página de cadastro: título em Archivo, campos em duas colunas sobre a névoa, Limpar e Salvar. */
const FormPage: React.FC<{ eyebrow: string; title: string; intro: string; fields: FormField[]; submitLabel: string }> = ({
  eyebrow,
  title,
  intro,
  fields,
  submitLabel,
}) => (
  <main className="bg-nevoa">
    <div className="contenedor py-16 md:py-24">
      <Link to="/login" className="olho text-ardosia hover:text-marinho">
        ← Área do Cliente
      </Link>
      <div className="mt-10 grid gap-x-16 gap-y-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="olho text-ardosia">{eyebrow}</p>
          <h1 className="titulo mt-4 text-[clamp(38px,4.4vw,62px)]">{title}</h1>
          <p className="mt-5 max-w-[32ch] font-serif text-[19px] leading-snug text-ardosia">{intro}</p>
        </div>
        <form className="lg:col-span-8">
          <div className="grid gap-x-6 gap-y-6 border-t border-marinho/25 pt-8 md:grid-cols-2">
            {fields.map((f) => (
              <Field key={f.id} id={f.id} name={f.id} label={f.label} type={f.type ?? 'text'} placeholder={f.placeholder} autoComplete={f.autoComplete} />
            ))}
          </div>
          <div className="mt-10 flex justify-end gap-3">
            <button type="reset" className="h-12 border border-marinho/40 px-6 font-semibold transition-colors hover:border-marinho">
              Limpar
            </button>
            <button type="submit" className="h-12 bg-marinho px-7 font-semibold text-white transition-colors hover:bg-[#0d1e37]">
              {submitLabel}
            </button>
          </div>
        </form>
      </div>
    </div>
  </main>
);

export default FormPage;
