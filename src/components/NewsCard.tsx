import React from 'react';
import type { NewsItem } from '../data/news';
import { NewsArtwork, Sources } from './Gallery';

/** Uma notícia na parede: a obra (imagem e número), a editoria, a manchete em serifa, o resumo e a fonte. */
const NewsCard: React.FC<{ item: NewsItem; ratio?: string; bandClass?: string }> = ({ item, ratio, bandClass }) => (
  <article className="flex flex-col">
    <NewsArtwork
      image={item.image}
      alt={item.imageAlt}
      outline={item.figure.outline}
      solid={item.figure.solid}
      caption={item.figure.caption}
      field={item.field}
      ratio={ratio}
      bandClass={bandClass}
    />
    <p className="olho mt-5 text-ardosia">
      {item.section} · <time dateTime={item.date}>{item.dateLabel}</time>
    </p>
    <h3 className="manchete mt-3 text-[clamp(23px,1.9vw,29px)]">{item.title}</h3>
    <p className="mt-3 font-serif text-[17.5px] leading-[1.55] text-ardosia">{item.summary}</p>
    <Sources sources={item.sources} className="mt-5 text-marinho" />
  </article>
);

export default NewsCard;
