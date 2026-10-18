import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Proxima } from '../components/Sala';
import { tituloPorId, titulos } from '../data/assistir';
import NotFound from './NotFound';

/*
 * A página de um filme ou série. A tela abre em díptico (o título no marinho; a arte de divulgação pendurada ao lado),
 * a sinopse corre em serifa e a ficha técnica é a etiqueta de parede, branca, ao lado. "Por que ver" é a parede verde:
 * o que a obra diz sobre floresta, clima e economia verde.
 */

const Titulo: React.FC = () => {
  const { id } = useParams();
  const t = tituloPorId(id);
  if (!t) return <NotFound />;
  const i = titulos.indexOf(t);
  const proximo = titulos[(i + 1) % titulos.length];

  return (
    <main className="campo-marinho bg-marinho text-white">
      <article>
        <header className="contenedor grid items-center gap-x-14 gap-y-10 py-[clamp(40px,8svh,88px)] lg:min-h-[calc(100svh-var(--topo))] lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link to="/series-e-filmes" className="olho text-white/70 hover:text-white">
              ← Séries e filmes
            </Link>
            <p className="olho mt-[clamp(28px,6svh,56px)] text-verde">
              Obra {String(i + 1).padStart(2, '0')} · {t.platform} · {t.type}
              {t.year ? ` · ${t.year}` : ''}
            </p>
            <h1 className="titulo mt-4 text-[clamp(40px,min(4.6vw,9.4svh),78px)]">{t.title}</h1>
            {t.originalTitle && t.originalTitle !== t.title && <p className="mt-4 font-serif text-[19px] italic text-white/70">{t.originalTitle}</p>}
            <p className="mt-6 max-w-[40ch] text-pretty font-serif text-[clamp(19px,min(1.6vw,3.5svh),24px)] leading-snug text-white/85">{t.dek}</p>
          </div>
          <figure className="lg:col-span-7">
            <div className="pendurada aspect-video overflow-hidden bg-white/5">
              <img src={t.image} alt={`Arte de divulgação de ${t.title}`} className="h-full w-full object-cover" />
            </div>
            <figcaption className="mt-2 text-right font-mono text-[10.5px] uppercase tracking-[0.08em] text-white/50">Divulgação {t.platform}</figcaption>
          </figure>
        </header>

        <section className="contenedor grid gap-x-14 gap-y-12 border-t border-white/20 py-[var(--sala-y)] lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="olho text-white/70">Sinopse</h2>
            <div className="mt-6 space-y-[1.1em] font-serif text-[clamp(18px,1.3vw,20.5px)] leading-[1.65] text-white/85">
              {t.sinopse.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
          {/* A ficha técnica é a etiqueta de parede: branca, ao lado da obra. */}
          <aside className="self-start bg-white p-6 text-marinho lg:col-span-4 lg:col-start-9">
            <p className="font-semibold">
              {t.title}
              {t.year && <span className="font-normal">, {t.year}</span>}
            </p>
            <dl className="mt-4 divide-y divide-marinho/15 border-y border-marinho/15">
              {t.ficha.map((f) => (
                <div key={f.rotulo} className="grid grid-cols-[7.5rem_1fr] gap-3 py-2.5">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.08em] text-ardosia">{f.rotulo}</dt>
                  <dd className="text-[14.5px] leading-snug">{f.valor}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.08em] text-ardosia">Acervo BVM12 · Sala de projeção</p>
          </aside>
        </section>

        {t.porQueVer && (
          <section className="bg-verde text-marinho">
            <div className="contenedor grid gap-x-14 gap-y-6 py-[var(--sala-y)] lg:grid-cols-12">
              <h2 className="titulo text-[clamp(36px,min(4.6vw,9svh),72px)] lg:col-span-5">
                <span className="block">Por que</span>{' '}
                <span className="block">ver</span>
              </h2>
              <p className="text-pretty font-serif text-[clamp(21px,min(2vw,4.2svh),30px)] leading-[1.35] lg:col-span-7">{t.porQueVer}</p>
            </div>
          </section>
        )}
      </article>

      <Proxima
        to={`/series-e-filmes/${proximo.id}`}
        rotulo="Na mesma sala"
        titulo={proximo.title}
        detalhe={`${proximo.platform} · ${proximo.type}`}
        campo="marinho"
      />
    </main>
  );
};

export default Titulo;
