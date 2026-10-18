import React from 'react';
import { Link } from 'react-router-dom';
import { NewsArtwork } from '../components/Gallery';
import { Abertura, NumeroHeroi } from '../components/Sala';
import { archive, featured, news, todas } from '../data/news';

/*
 * Sala de leitura. Uma exposição de jornal: a entrada com o número de matérias, a obra principal em díptico (a foto
 * com a faixa do número ao lado da manchete) e o catálogo, uma linha por matéria como num índice de museu: o número da
 * obra, a foto, a manchete e o número da notícia em contorno e cheio.
 */

const doisDigitos = (n: number) => String(n).padStart(2, '0');
/** Tamanho do número da notícia na coluna do catálogo, pelos caracteres (cqw da coluna). */
const tamanhoNumero = (texto: string) => Math.min(30, 96 / (0.72 * texto.length));

const Noticias: React.FC = () => (
  <main>
    <Abertura
      campo="nevoa"
      painel="marinho"
      sala="Sala de leitura · Exposição permanente"
      titulo="Notícias"
      lead="O que move a economia verde, apurado e escrito pela redação, a partir de Manaus."
      etiqueta={[`${todas.length} matérias`, `Atualizada em ${featured.dateLabel}`, 'Redação BVM12']}
      numero={doisDigitos(todas.length)}
      legendaNumero="Matérias nesta sala"
    />

    {/* A obra principal: o díptico da home, maior; a obra tem teto pela altura da tela. */}
    <section className="bg-nevoa py-[var(--sala-y)]">
      <div className="contenedor">
        <div className="grid gap-x-14 gap-y-10 border-t border-marinho/25 pt-5 lg:grid-cols-12">
          <div className="lg:col-span-7 lg:max-h-[calc(100svh_-_var(--topo)_-_3rem)]">
            <NewsArtwork
              image={featured.image}
              alt={featured.imageAlt}
              outline={featured.figure.outline}
              solid={featured.figure.solid}
              caption={featured.figure.caption}
              field={featured.field}
              stretch
            />
          </div>
          <article className="flex flex-col lg:col-span-5">
            <p className="olho text-ardosia">Obra 01 · Em destaque</p>
            <p className="olho mt-[var(--sala-vao)] text-ardosia">
              {featured.section} · <time dateTime={featured.date}>{featured.dateLabel}</time>
            </p>
            <h2 className="manchete mt-5 text-[clamp(32px,min(3.4vw,7svh),52px)]">
              <Link to={`/noticias/${featured.id}`} className="hover:underline hover:decoration-2 hover:underline-offset-[6px]">
                {featured.title}
              </Link>
            </h2>
            <p className="leitura mt-6 text-ardosia">{featured.dek ?? featured.summary}</p>
            <Link to={`/noticias/${featured.id}`} className="olho mt-8 inline-flex items-center gap-3 self-start border-b-2 border-marinho pb-1.5">
              Ler a matéria <span aria-hidden="true">→</span>
            </Link>
          </article>
        </div>
      </div>
    </section>

    {/* O catálogo: uma linha por obra. */}
    <section className="bg-nevoa pb-[var(--sala-y)]">
      <div className="contenedor">
        <h2 className="olho text-ardosia">Catálogo da sala</h2>
        <ol className="mt-5">
          {news.map((n, i) => {
            const numero = (n.figure.outline ?? '') + n.figure.solid;
            return (
              <li key={n.id}>
                <Link
                  to={`/noticias/${n.id}`}
                  className="group grid items-start gap-x-10 gap-y-5 border-t border-marinho/25 py-[clamp(28px,5svh,48px)] md:grid-cols-12"
                >
                  <NumeroHeroi
                    contorno="0"
                    cheio={String(i + 2)}
                    cor="#142B4D"
                    className="hidden text-[clamp(40px,4.4vw,64px)] leading-none lg:col-span-1 lg:block"
                  />
                  <div className="moldura md:col-span-4 lg:col-span-3">
                    <img src={n.image} alt={n.imageAlt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  </div>
                  <div className="md:col-span-8 lg:col-span-5">
                    <p className="olho text-ardosia">
                      {n.section} · <time dateTime={n.date}>{n.dateLabel}</time>
                    </p>
                    <h3 className="manchete mt-3 text-[clamp(24px,2.1vw,32px)] group-hover:underline group-hover:decoration-2 group-hover:underline-offset-[5px]">
                      {n.title}
                    </h3>
                    <p className="mt-3 font-serif text-[17.5px] leading-[1.55] text-ardosia">{n.dek ?? n.summary}</p>
                    <p className="olho mt-5 text-marinho">
                      Ler a matéria <span aria-hidden="true">→</span>
                    </p>
                  </div>
                  <div className="[container-type:inline-size] md:col-span-12 lg:col-span-3 lg:text-right">
                    <NumeroHeroi
                      contorno={n.figure.outline}
                      cheio={n.figure.solid}
                      cor="#142B4D"
                      className="block leading-none"
                      style={{ fontSize: `${tamanhoNumero(numero)}cqw` }}
                    />
                    <p className="mt-3 font-mono text-[11px] uppercase leading-relaxed tracking-[0.08em] text-ardosia">{n.figure.caption}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ol>

        <div className="mt-[var(--sala-y)] border-t border-marinho/25 pt-5">
          <h2 className="olho text-ardosia">Do arquivo</h2>
          <ul className="mt-4 divide-y divide-marinho/15">
            {archive.map((a) => (
              <li key={a.to}>
                <Link to={a.to} className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4">
                  <span className="manchete text-[21px] group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4">{a.title}</span>
                  <span className="olho text-ardosia">{a.dateLabel}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  </main>
);

export default Noticias;
