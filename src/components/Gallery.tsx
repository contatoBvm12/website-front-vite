import React from 'react';

/*
 * Peças da galeria: a etiqueta de parede, o cabeçalho de cada sala, a obra em que o número é a imagem e a linha de
 * fontes das notícias.
 */

/** Etiqueta de parede, como a de museu: título e ano, ficha técnica em mono, um texto curto, o acervo. */
export const WallLabel: React.FC<{
  title: React.ReactNode;
  year?: string;
  lines?: string[];
  text?: React.ReactNode;
  collection?: string;
  tone?: 'parede' | 'escuro';
  className?: string;
}> = ({ title, year, lines = [], text, collection, tone = 'parede', className = '' }) => (
  <div
    className={`max-w-[19rem] text-[13px] leading-snug ${
      tone === 'parede' ? 'bg-white p-4 text-marinho' : 'border-l border-white/30 pl-4 text-white'
    } ${className}`}
  >
    <p className="font-semibold">
      {title}
      {year && <span className="font-normal">, {year}</span>}
    </p>
    {lines.map((l) => (
      <p key={l} className="mt-1 font-mono text-[11px] uppercase tracking-[0.08em] opacity-75">
        {l}
      </p>
    ))}
    {text && <p className="mt-2 font-serif text-[14.5px] leading-snug">{text}</p>}
    {collection && <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.08em] opacity-75">{collection}</p>}
  </div>
);

/** "Sala 03 · Notícias": o número da sala em mono, o nome em Archivo larga, um fio por cima. */
export const RoomHeader: React.FC<{
  number: string;
  title: string;
  tone?: 'claro' | 'escuro';
  children?: React.ReactNode;
}> = ({ number, title, tone = 'claro', children }) => (
  <div
    className={`flex flex-wrap items-end justify-between gap-x-10 gap-y-6 border-t pt-5 ${
      tone === 'escuro' ? 'border-white/25' : 'border-marinho/25'
    }`}
  >
    <div>
      <p className="olho opacity-80">Sala {number}</p>
      <h2 className="titulo mt-3 text-[clamp(36px,4.6vw,66px)]">{title}</h2>
    </div>
    {children}
  </div>
);

/** Setas para rolar uma fileira de obras. */
export const ScrollArrows: React.FC<{ target: string; label: string }> = ({ target, label }) => {
  const go = (dx: number) => document.getElementById(target)?.scrollBy({ left: dx, behavior: 'smooth' });
  const cls = 'grid h-11 w-11 place-items-center border border-current text-lg transition-colors hover:bg-white hover:text-marinho';
  return (
    <div className="flex gap-2">
      <button type="button" className={cls} onClick={() => go(-320)} aria-label={`${label}: anteriores`}>
        ←
      </button>
      <button type="button" className={cls} onClick={() => go(320)} aria-label={`${label}: próximos`}>
        →
      </button>
    </div>
  );
};

/**
 * A obra de cada notícia: a imagem (fotoilustração no campo de cor, com luz de estúdio) e, embaixo, uma faixa de cor
 * chapada com o número da matéria em Archivo larga — o contexto em contorno, o destaque cheio — e a legenda dele.
 * A faixa usa a cor oposta ao fundo da foto. Tamanho do número pela largura do quadro (cqw) e pelos caracteres.
 */
export const NewsArtwork: React.FC<{
  image: string;
  alt: string;
  outline?: string;
  solid: string;
  caption: string;
  field?: 'marinho' | 'verde';
  ratio?: string;
  credit?: string;
  /** Altura mínima da faixa (ex.: 'min-h-[31cqw]'): numa fileira, as manchetes começam na mesma linha. */
  bandClass?: string;
  className?: string;
}> = ({ image, alt, outline = '', solid, caption, field = 'marinho', ratio = '4 / 3', credit = 'Ilustração BVM12', bandClass = '', className = '' }) => {
  const chars = (outline + solid).length;
  const size = Math.min(15, 62 / (0.7 * chars));
  const strong = field === 'marinho' ? '#4ADE80' : '#142B4D';
  return (
    <figure className={`obra-numero ${className}`}>
      <div className="overflow-hidden bg-marinho" style={{ aspectRatio: ratio }}>
        <img src={image} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <div className={`flex flex-col justify-between gap-[1.6cqw] px-[4.5cqw] pb-[4cqw] pt-[3.4cqw] ${bandClass} ${field === 'marinho' ? 'bg-marinho' : 'bg-verde'}`}>
        <p className="titulo-largo whitespace-nowrap" style={{ fontSize: `${size}cqw`, color: strong }} aria-hidden="true">
          {outline && (
            <span className="contorno" style={{ WebkitTextStrokeColor: strong }}>
              {outline}
            </span>
          )}
          {solid}
        </p>
        <p
          className={`font-mono uppercase tracking-[0.08em] ${field === 'marinho' ? 'text-white/70' : 'text-marinho/80'}`}
          style={{ fontSize: 'max(10.5px, 1.9cqw)' }}
        >
          {caption}
        </p>
      </div>
      <figcaption className="mt-2 text-right font-mono text-[10.5px] uppercase tracking-[0.08em] text-ardosia/70">{credit}</figcaption>
    </figure>
  );
};

/** "Fonte: Agência Brasil ↗" — links para a matéria original, em mono. */
export const Sources: React.FC<{ sources: Array<{ name: string; url: string }>; className?: string }> = ({ sources, className = '' }) => (
  <p className={`font-mono text-[12px] uppercase tracking-[0.08em] ${className}`}>
    <span className="opacity-70">{sources.length > 1 ? 'Fontes: ' : 'Fonte: '}</span>
    {sources.map((s, i) => (
      <React.Fragment key={s.url}>
        {i > 0 && <span className="opacity-70"> · </span>}
        <a href={s.url} target="_blank" rel="noopener noreferrer" className="sublinhado">
          {s.name}
          <span aria-hidden="true">{'\u00a0'}↗</span>
        </a>
      </React.Fragment>
    ))}
  </p>
);
