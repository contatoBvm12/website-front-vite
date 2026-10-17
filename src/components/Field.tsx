import React from 'react';

export const inputClass =
  'mt-2 block h-12 w-full border border-marinho/30 bg-white px-4 text-[16px] text-marinho placeholder:text-ardosia/50 transition-colors hover:border-marinho/60 focus:border-marinho focus:outline-none focus:ring-2 focus:ring-marinho/20';

/** Campo de formulário: rótulo em mono, caixa branca de canto reto sobre a névoa. */
const Field: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label: string; id: string; children?: React.ReactNode }> = ({
  label,
  id,
  children,
  ...input
}) => (
  <div>
    <label htmlFor={id} className="olho text-ardosia">
      {label}
    </label>
    <div className="relative">
      <input id={id} className={inputClass} {...input} />
      {children}
    </div>
  </div>
);

export default Field;
