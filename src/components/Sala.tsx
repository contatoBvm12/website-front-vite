import React from 'react';
import { Link } from 'react-router-dom';
import type { Bloco } from '../data/news';

/*
 * Peças das salas de conteúdo (Notícias, Séries e filmes, Receitas sustentáveis). Cada sala é uma exposição com a
 * sua cor de parede: abre com um díptico (o título no campo de cor; no outro painel, o número de obras gigante, o
 * contexto em contorno e o destaque cheio, cortado pela borda de baixo) e segue com as obras e as etiquetas de parede.
 * O encontro das águas não entra aqui: ele já está no rodapé de toda página, e a regra da marca é um por peça.
 */

type Campo = 'nevoa' | 'marinho' | 'verde';

const FUNDO: Record<Campo, string> = { nevoa: 'bg-nevoa text-marinho', marinho: 'campo-marinho bg-marinho text-white', verde: 'bg-verde text-marinho' };
const FIO: Record<Campo, string> = { nevoa: 'border-marinho/20', marinho: 'border-white/20', verde: 'border-marinho/25' };
/** A cor forte sobre cada campo: verde sobre marinho, marinho sobre verde ou névoa (verde nunca é texto sobre névoa). */
export const FORTE: Record<Campo, string> = { nevoa: '#142B4D', marinho: '#4ADE80', verde: '#142B4D' };

/** Um número enorme: o contexto em contorno, o destaque cheio. */
export const NumeroHeroi: React.FC<{ contorno?: string; cheio: string; cor: string; className?: string; style?: React.CSSProperties }> = ({
  contorno = '',
  cheio,
  cor,
  className = '',
  style,
}) => (
  <span className={`titulo-largo whitespace-nowrap tabular-nums ${className}`} style={{ color: cor, ...style }}>
    {contorno && (
      <span className="contorno" style={{ WebkitTextStrokeColor: cor }}>
        {contorno}
      </span>
    )}
    {cheio}
  </span>
);

/**
 * A entrada da exposição. Cabe na tela abaixo do cabeçalho; no celular, o painel do número vem depois do texto.
 * `numero` tem dois algarismos: o primeiro em contorno, o segundo cheio ("06").
 */
export const Abertura: React.FC<{
  campo: Campo;
  painel: Exclude<Campo, 'nevoa'>;
  sala: string;
  titulo: React.ReactNode;
  lead: string;
  etiqueta: string[];
  numero: string;
  legendaNumero: string;
}> = ({ campo, painel, sala, titulo, lead, etiqueta, numero, legendaNumero }) => (
  <section className="grid overflow-hidden [container-type:inline-size] lg:min-h-[calc(100svh-var(--topo))] lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
    <div className={`flex flex-col justify-center py-16 pl-[var(--borda)] pr-[var(--margem)] lg:py-[clamp(32px,6svh,72px)] lg:pr-14 ${FUNDO[campo]}`}>
      <Link to="/" className="olho self-start opacity-80 hover:opacity-100">
        ← Entrada
      </Link>
      <p className="olho mt-[clamp(28px,6svh,56px)]">{sala}</p>
      <h1 className="titulo mt-[clamp(14px,2.5svh,22px)] text-[clamp(52px,min(7.4vw,14svh),128px)]">{titulo}</h1>
      <p className="mt-[clamp(18px,3.5svh,30px)] max-w-[34ch] text-pretty font-serif text-[clamp(19px,min(1.7vw,3.6svh),26px)] leading-snug opacity-90">
        {lead}
      </p>
      <div className={`mt-[clamp(22px,4.5svh,40px)] max-w-[22rem] border-l pl-4 ${campo === 'marinho' ? 'border-white/30' : 'border-marinho/30'}`}>
        {etiqueta.map((l) => (
          <p key={l} className="font-mono text-[11px] uppercase leading-[1.9] tracking-[0.08em] opacity-80">
            {l}
          </p>
        ))}
      </div>
    </div>
    <div className={`relative aspect-[4/3] overflow-hidden [container-type:inline-size] lg:aspect-auto ${FUNDO[painel]}`}>
      <p className="olho absolute left-[var(--margem)] top-8 opacity-80 lg:left-12 lg:top-12">{legendaNumero}</p>
      <NumeroHeroi
        contorno={numero.slice(0, -1)}
        cheio={numero.slice(-1)}
        cor={FORTE[painel]}
        className="pointer-events-none absolute -bottom-[0.2em] right-[0.04em] block select-none leading-none"
        style={{ fontSize: '74cqw' }}
      />
    </div>
  </section>
);

/** O corpo de uma matéria: coluna de leitura com capitular; a faixa de números sai da coluna e ocupa mais a parede. */
export const Corpo: React.FC<{ blocos: Bloco[] }> = ({ blocos }) => {
  let primeiro = true;
  return (
    <div className="corpo">
      {blocos.map((b, i) => {
        if ('p' in b) {
          const cls = primeiro ? 'capitular' : '';
          primeiro = false;
          return (
            <p key={i} className={cls}>
              {b.p}
            </p>
          );
        }
        if ('h2' in b) return <h2 key={i}>{b.h2}</h2>;
        if ('citacao' in b)
          return (
            <blockquote key={i}>
              <p>“{b.citacao}”</p>
              <footer>{b.autor}</footer>
            </blockquote>
          );
        if ('lista' in b)
          return (
            <ul key={i}>
              {b.lista.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          );
        return (
          <dl key={i} className="numeros">
            {b.numeros.map((n) => (
              <div key={n.valor}>
                <dt className="titulo-largo">{n.valor}</dt>
                <dd>{n.legenda}</dd>
              </div>
            ))}
          </dl>
        );
      })}
    </div>
  );
};

/** A próxima obra da sala: uma faixa inteira clicável, com o número da obra e a seta. */
export const Proxima: React.FC<{ to: string; rotulo: string; titulo: string; detalhe?: string; campo?: Campo }> = ({
  to,
  rotulo,
  titulo,
  detalhe,
  campo = 'nevoa',
}) => (
  <Link to={to} className={`group block ${FUNDO[campo]}`}>
    <div className={`contenedor grid items-end gap-x-10 gap-y-4 border-t py-[clamp(36px,8svh,72px)] md:grid-cols-[1fr_auto] ${FIO[campo]}`}>
      <div>
        <p className="olho opacity-80">{rotulo}</p>
        <p className="titulo mt-3 max-w-[22ch] text-[clamp(30px,min(3.6vw,7svh),54px)] group-hover:underline group-hover:decoration-[3px] group-hover:underline-offset-8">
          {titulo}
        </p>
        {detalhe && <p className="mt-3 font-mono text-[12px] uppercase tracking-[0.08em] opacity-75">{detalhe}</p>}
      </div>
      <span aria-hidden="true" className="titulo text-[clamp(40px,5vw,72px)] transition-transform group-hover:translate-x-2">
        →
      </span>
    </div>
  </Link>
);
