import React from 'react';
import { Link } from 'react-router-dom';
import type { NewsItem } from '../data/news';
import { NewsArtwork } from './Gallery';

/*
 * Tamanhos da ficha pela largura do cartão (cqw): as quebras de linha não mudam com a tela, e numa fileira as manchetes
 * e os resumos (do mesmo comprimento) ocupam o mesmo número de linhas. No celular, um cartão por linha, tamanho fixo.
 * "grande": a fileira de dois no desktop; "pequena": a de três. No tablet todas ficam dois a dois, na medida "pequena".
 */
const SIZES = {
  // Na fileira de dois, a foto tem teto pela altura da tela: a faixa do número cabe junto, sem corte, no notebook.
  grande: {
    title: 'text-[24px] md:text-[6.3cqw] lg:text-[4.8cqw]',
    summary: 'text-[17.5px] md:text-[4.7cqw] lg:text-[3.1cqw]',
    caption: 1.9,
    image: 'lg:max-h-[calc(100svh_-_var(--topo)_-_25cqw_-_175px)]',
  },
  pequena: { title: 'text-[24px] md:text-[6.3cqw]', summary: 'text-[17.5px] md:text-[4.7cqw]', caption: 2.9, image: '' },
};

/** Uma notícia na parede: a obra (imagem e número), a editoria, a manchete em serifa, o resumo e o convite à matéria. */
const NewsCard: React.FC<{ item: NewsItem; ratio?: string; bandClass?: string; size?: keyof typeof SIZES }> = ({
  item,
  ratio,
  bandClass,
  size = 'pequena',
}) => (
  <article className="ficha flex flex-col">
    <NewsArtwork
      image={item.image}
      alt={item.imageAlt}
      outline={item.figure.outline}
      solid={item.figure.solid}
      caption={item.figure.caption}
      captionSize={SIZES[size].caption}
      imageClass={SIZES[size].image}
      field={item.field}
      ratio={ratio}
      bandClass={bandClass}
    />
    <p className="olho mt-5 text-ardosia">
      {item.section} · <time dateTime={item.date}>{item.dateLabel}</time>
    </p>
    <h3 className={`manchete ficha-manchete mt-3 ${SIZES[size].title}`}>
      <Link to={`/noticias/${item.id}`} className="hover:underline hover:decoration-2 hover:underline-offset-[5px]">
        {item.title}
      </Link>
    </h3>
    <p className={`ficha-serifa mt-3 font-serif leading-[1.55] text-ardosia ${SIZES[size].summary}`}>{item.summary}</p>
    <Link to={`/noticias/${item.id}`} className="olho mt-5 self-start text-marinho underline decoration-1 underline-offset-[5px] hover:decoration-2">
      Ler a matéria <span aria-hidden="true">→</span>
    </Link>
  </article>
);

export default NewsCard;
