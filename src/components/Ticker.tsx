import React from 'react';

// Valores fixos, os mesmos do site anterior: ainda não vêm de nenhuma fonte de cotação.
const ITEMS: Array<[string, string, string]> = [
  ['BVM12', '1.352,7', '+12,3%'],
  ['IBOVESPA', '128.000', '-0,5%'],
  ['DÓLAR', 'R$ 5,25', '-0,2%'],
  ['NASDAQ', '13.200', '+0,8%'],
];

/** A faixa de cotações, em Plex Mono sobre marinho: alta em verde, queda em vermelho (o único lugar dele). */
const Ticker: React.FC = () => {
  const row = ITEMS.map(([code, value, change]) => {
    const down = change.startsWith('-');
    return (
      <span key={code} className="flex items-baseline gap-2 pr-14">
        <span className="text-white/55">{code}</span>
        <span>{value}</span>
        <span className={down ? 'text-queda' : 'text-verde'}>
          {down ? '▼' : '▲'} {change.replace('-', '−')}
        </span>
      </span>
    );
  });

  return (
    <div className="campo-marinho overflow-hidden border-t border-white/10 bg-marinho font-mono text-[13px] text-white">
      <p className="sr-only">Cotações: {ITEMS.map((i) => i.join(' ')).join('; ')}.</p>
      <div className="correr py-2.5" aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex">
            {row}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
