import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Molde das matérias da redação, à maneira de um jornal: editoria, manchete em serifa, linha fina em itálico,
 * assinatura, a foto emoldurada com legenda e o corpo numa coluna de leitura.
 */
const Article: React.FC<{
  section: string;
  title: string;
  dek: string;
  byline: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  caption: string;
  children: React.ReactNode;
}> = ({ section, title, dek, byline, date, readTime, image, imageAlt, caption, children }) => (
  <main className="bg-nevoa">
    <article>
      <header className="contenedor pt-10 md:pt-14">
        <Link to="/#noticias" className="olho text-ardosia hover:text-marinho">
          ← Notícias
        </Link>
        <div className="mx-auto mt-12 max-w-[46rem]">
          <p className="olho flex items-center gap-3">
            <span className="inline-block h-2.5 w-2.5 bg-verde ring-1 ring-marinho/20" aria-hidden="true" />
            {section}
          </p>
          <h1 className="manchete mt-5 text-[clamp(36px,min(4.6vw,9svh),62px)]">{title}</h1>
          <p className="mt-6 font-serif text-[clamp(20px,1.6vw,24px)] italic leading-snug text-ardosia">{dek}</p>
          <p className="olho mt-8 border-t border-marinho/20 pt-4 text-ardosia">
            {byline} · {date} · {readTime}
          </p>
        </div>
      </header>
      <figure className="contenedor mt-12">
        <div className="moldura mx-auto max-w-[64rem]">
          <img src={image} alt={imageAlt} className="aspect-[16/9] w-full object-cover" />
        </div>
        <figcaption className="mx-auto mt-4 max-w-[46rem] font-mono text-[12px] leading-relaxed tracking-[0.03em] text-ardosia">
          {caption}
        </figcaption>
      </figure>
      <div className="contenedor pb-24 pt-14">
        <div className="leitura materia mx-auto max-w-[46rem] text-ardosia">{children}</div>
      </div>
    </article>
  </main>
);

export default Article;
