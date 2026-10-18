import React, { useEffect, useState } from 'react';

/*
 * Peças da galeria: a etiqueta de parede, o cabeçalho de cada sala, as setas da fileira e a obra em que o número é a
 * imagem.
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

/** "Sala 03 · Notícias": o número da sala em mono, o nome em Archivo larga, um fio por cima (sem fio: quem chama desenha). */
export const RoomHeader: React.FC<{
  number: string;
  title: string;
  tone?: 'claro' | 'escuro';
  rule?: boolean;
  children?: React.ReactNode;
}> = ({ number, title, tone = 'claro', rule = true, children }) => (
  <div
    className={`flex flex-wrap items-end justify-between gap-x-10 gap-y-6 ${rule ? 'border-t pt-5' : ''} ${
      tone === 'escuro' ? 'border-white/25' : 'border-marinho/25'
    }`}
  >
    <div>
      <p className="olho opacity-80">Sala {number}</p>
      <h2 className="titulo mt-3 text-[clamp(36px,min(4.6vw,8.6svh),66px)]">{title}</h2>
    </div>
    {children}
  </div>
);

/** Setas para rolar uma fileira de obras: uma obra por clique (a largura do cartão mais o vão); apagam nas pontas. */
export const ScrollArrows: React.FC<{ target: string; label: string }> = ({ target, label }) => {
  const [ends, setEnds] = useState({ start: true, end: false });
  useEffect(() => {
    const row = document.getElementById(target);
    if (!row) return;
    const update = () =>
      setEnds({ start: row.scrollLeft <= 4, end: row.scrollLeft + row.clientWidth >= row.scrollWidth - 4 });
    update();
    row.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      row.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [target]);
  const go = (dir: number) => {
    const row = document.getElementById(target);
    const card = row?.firstElementChild as HTMLElement | null | undefined;
    if (!row || !card) return;
    row.scrollBy({ left: dir * (card.offsetWidth + (parseFloat(getComputedStyle(row).columnGap) || 0)), behavior: 'smooth' });
  };
  const cls =
    'grid h-11 w-11 place-items-center border border-current text-lg transition-colors hover:bg-white hover:text-marinho disabled:cursor-default disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-current';
  return (
    <div className="flex gap-2">
      <button type="button" className={cls} onClick={() => go(-1)} disabled={ends.start} aria-label={`${label}: anteriores`}>
        ←
      </button>
      <button type="button" className={cls} onClick={() => go(1)} disabled={ends.end} aria-label={`${label}: próximos`}>
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
  /** Classes do quadro da foto (ex.: um teto de altura pela tela; a foto recorta pelo centro). */
  imageClass?: string;
  /** Tamanho da legenda da faixa em cqw: o mesmo numa fileira, para as legendas quebrarem igual em qualquer tela. */
  captionSize?: number;
  /**
   * No desktop a obra acompanha a altura da coluna ao lado (o texto da matéria): a imagem estica e recorta pelo centro,
   * e obra e texto terminam na mesma linha. No celular vale a proporção.
   */
  stretch?: boolean;
  className?: string;
}> = ({ image, alt, outline = '', solid, caption, field = 'marinho', ratio = '4 / 3', credit = 'Ilustração BVM12', bandClass = '', imageClass = '', captionSize = 1.9, stretch = false, className = '' }) => {
  const chars = (outline + solid).length;
  const size = Math.min(15, 62 / (0.7 * chars));
  const strong = field === 'marinho' ? '#4ADE80' : '#142B4D';
  return (
    <figure className={`obra-numero ${stretch ? 'lg:flex lg:h-full lg:flex-col' : ''} ${className}`}>
      <div
        className={`relative w-full overflow-hidden bg-marinho ${stretch ? 'lg:!aspect-auto lg:min-h-[200px] lg:flex-1' : ''} ${imageClass}`}
        style={{ aspectRatio: ratio }}
      >
        {/* Absoluta: a foto não entra na conta da altura, quem manda é o quadro (proporção, ou a coluna ao lado). */}
        <img src={image} alt={alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
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
          style={{ fontSize: `max(9.5px, ${captionSize}cqw)` }}
        >
          {caption}
        </p>
      </div>
      <figcaption className="mt-2 text-right font-mono text-[10.5px] uppercase tracking-[0.08em] text-ardosia/70">{credit}</figcaption>
    </figure>
  );
};
